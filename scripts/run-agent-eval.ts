import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { cp, mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { snapshotDirectory } from "../evals/lib/fs-snapshot.ts";
import { readSkillEvalCase } from "../evals/lib/skill-eval-case.ts";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const evalPath = join(root, "evals/cases/campaign-layout.json");
const fixtureRoot = join(root, "evals/fixtures/campaign-layout");
const skillPath = join(root, "skills/campaign-layout/SKILL.md");

if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  console.log("Usage: npm run test:agent -- [behavioral-case-name]");
  process.exit(0);
}

function runCodex(
  campaignPath: string,
  prompt: string,
  outputPath: string,
  mutate: boolean,
): Promise<void> {
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
const selectedName = process.argv.slice(2).find((argument) => !argument.startsWith("--")) ?? "all";
const forceMutate = process.argv.includes("--mutate");
const selectedCases =
  selectedName === "all"
    ? cases.behavioral
    : cases.behavioral.filter((item) => item.name === selectedName);
assert.ok(selectedCases.length > 0, `Unknown agent eval case: ${selectedName}`);

for (const selected of selectedCases) {
  await runCase(selected, forceMutate || selected.mode === "mutate");
}

async function runCase(
  selected: (typeof cases.behavioral)[number],
  mutate: boolean,
): Promise<void> {
  const source = join(fixtureRoot, selected.fixture);
  const temporaryRoot = await mkdtemp(join(tmpdir(), "narravit-campaign-eval-"));
  const campaignPath = join(temporaryRoot, "campaign");
  const outputPath = join(temporaryRoot, "agent-response.txt");

  try {
    await cp(source, campaignPath, { recursive: true });
    const before = await snapshotDirectory(campaignPath);

    const prompt = mutate
      ? `${selected.prompt}\nYou have explicit authorization to create or change files required by this scenario in this isolated fixture now. Do not create optional directories or AGENTS.md.`
      : `${selected.prompt}\nDo not modify anything; inspect and report only.`;
    await runCodex(campaignPath, prompt, outputPath, mutate);

    const after = await snapshotDirectory(campaignPath);
    if (!mutate) {
      assert.deepEqual(after, before, "read-only agent evaluation changed the fixture");
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
}

async function pathExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}
