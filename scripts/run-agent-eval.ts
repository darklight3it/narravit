import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { cp, mkdtemp, readdir, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readSkillEvalCase } from "../evals/lib/skill-eval-case.ts";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const evalPath = join(root, "evals/cases/campaign-layout.json");
const fixtureRoot = join(root, "evals/fixtures/campaign-layout");
const skillPath = join(root, "skills/campaign-layout/SKILL.md");

if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  console.log("Usage: npm run test:agent -- [behavioral-case-name]");
  process.exit(0);
}

const mutate = process.argv.includes("--mutate");

function runCodex(campaignPath: string, prompt: string, outputPath: string): Promise<void> {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(
      "codex",
      [
        "exec",
        "--ephemeral",
        "--sandbox",
        mutate ? "workspace-write" : "read-only",
        "--skip-git-repo-check",
        "-C",
        campaignPath,
        "--add-dir",
        root,
        "--output-last-message",
        outputPath,
        `${prompt}\n\nRead and follow this skill: ${skillPath}`,
      ],
      { stdio: "inherit" },
    );

    child.once("error", rejectRun);
    child.once("exit", (code) => {
      if (code === 0) resolveRun();
      else rejectRun(new Error(`codex exec exited with code ${code}`));
    });
  });
}

const cases = await readSkillEvalCase(evalPath);
const selectedName =
  process.argv.slice(2).find((argument) => !argument.startsWith("--")) ??
  "preserves-existing-content";
const selected = cases.behavioral.find((item) => item.name === selectedName);
assert.ok(selected, `Unknown agent eval case: ${selectedName}`);

const source = join(fixtureRoot, selected.fixture);
const temporaryRoot = await mkdtemp(join(tmpdir(), "narravit-campaign-eval-"));
const campaignPath = join(temporaryRoot, "campaign");
const outputPath = join(temporaryRoot, "agent-response.txt");

try {
  await cp(source, campaignPath, { recursive: true });
  const before = JSON.stringify(await snapshot(campaignPath));

  const prompt = mutate
    ? `${selected.prompt}\nYou have explicit authorization to create the required directories in this isolated fixture now. Do not create optional directories or AGENTS.md.`
    : `${selected.prompt}\nDo not modify anything; inspect and report only.`;
  await runCodex(campaignPath, prompt, outputPath);

  const after = JSON.stringify(await snapshot(campaignPath));
  if (mutate) {
    for (const requiredDirectory of [
      "reference",
      "ready",
      "assets/reference",
      "assets/ready",
      "outputs",
    ]) {
      assert.equal(
        await isDirectory(join(campaignPath, requiredDirectory)),
        true,
        `agent did not create required directory: ${requiredDirectory}`,
      );
    }
    assert.equal(await isDirectory(join(campaignPath, "drafts")), false);
    assert.equal(await isDirectory(join(campaignPath, "assets/drafts")), false);
  } else {
    assert.equal(after, before, "read-only agent evaluation changed the fixture");
  }

  for (const relativePath of selected.must_exist ?? []) {
    assert.equal(
      await pathExists(join(campaignPath, relativePath)),
      true,
      `agent did not create or preserve required path: ${relativePath}`,
    );
  }
  for (const relativePath of selected.must_not_exist ?? []) {
    assert.equal(
      await pathExists(join(campaignPath, relativePath)),
      false,
      `agent created forbidden path: ${relativePath}`,
    );
  }

  const response = await readFile(outputPath, "utf8");
  assert.ok(response.trim(), "Codex returned an empty response");
  console.log(`Agent eval passed: ${selected.name}`);
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

async function snapshot(directory: string): Promise<string[]> {
  return (await collect(directory)).sort();
}

async function isDirectory(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

async function pathExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function collect(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const result: string[] = [];
  for (const entry of entries) {
    const relative = join(directory, entry.name);
    result.push(relative.slice(directory.length + 1));
    if (entry.isDirectory())
      result.push(...(await collect(relative)).map((item) => join(entry.name, item)));
  }
  return result;
}
