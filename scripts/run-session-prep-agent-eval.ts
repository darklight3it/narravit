import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { cp, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { snapshotDirectory } from "../evals/lib/fs-snapshot.ts";
import { readSkillEvalCase } from "../evals/lib/skill-eval-case.ts";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const evalPath = join(root, "evals/cases/session-prep.json");
const fixtureRoot = join(root, "evals/fixtures/session-prep");
const skillPath = join(root, "skills/session-prep/SKILL.md");

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("Usage: npm run test:agent:session-prep");
  process.exit(0);
}

function runCodex(campaignPath: string, prompt: string, outputPath: string): Promise<void> {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(
      "codex",
      [
        "exec",
        "--ephemeral",
        "--sandbox",
        "workspace-write",
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
const selected = cases.behavioral[0];
assert.ok(selected, "session-prep must define an agent evaluation case");

const source = join(fixtureRoot, selected.fixture);
const temporaryRoot = await mkdtemp(join(tmpdir(), "narravit-session-eval-"));
const campaignPath = join(temporaryRoot, "campaign");
const outputPath = join(temporaryRoot, "agent-response.txt");

try {
  await cp(source, campaignPath, { recursive: true });
  const referenceBefore = await snapshotDirectory(join(campaignPath, "reference"));

  await runCodex(
    campaignPath,
    `${selected.prompt}\nYou have explicit authorization to create the requested draft. Do not modify anything under reference/.`,
    outputPath,
  );

  const draftPath = join(campaignPath, "drafts/session-prep.md");
  const draft = await readFile(draftPath, "utf8");
  const referenceAfter = await snapshotDirectory(join(campaignPath, "reference"));

  assert.notEqual(draft.trim(), "", "session-prep draft is empty");
  assert.match(draft, /^# Session:/m);
  for (let step = 1; step <= 8; step += 1) {
    assert.match(draft, new RegExp(`^### ${step}\\.`, "m"));
  }
  assert.match(draft, /## Grounding/i);
  assert.match(draft, /proposal|proposals/i);
  assert.match(draft, /GM review checklist/i);
  assert.deepEqual(referenceAfter, referenceBefore, "session-prep modified reference material");

  const response = await readFile(outputPath, "utf8");
  assert.ok(response.trim(), "Codex returned an empty response");
  console.log("Agent eval passed: creates-grounded-session-draft");
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}
