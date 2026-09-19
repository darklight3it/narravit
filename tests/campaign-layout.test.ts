import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { readSkillEvalCase } from "../evals/lib/skill-eval-case.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillPath = resolve(root, "skills/campaign-layout/SKILL.md");
const evalPath = resolve(root, "evals/cases/campaign-layout.json");

async function readSkill(): Promise<string> {
  return readFile(skillPath, "utf8");
}

test("campaign-layout has valid skill frontmatter", async () => {
  const skill = await readSkill();
  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/u)?.[1] ?? "";

  assert.match(frontmatter, /^name:\s+campaign-layout$/m);
  assert.match(frontmatter, /^description:\s+\S.+$/m);
});

test("campaign-layout follows the shared skill anatomy", async () => {
  const skill = await readSkill();

  for (const heading of [
    "## Overview",
    "## When to Use",
    "## Core Process",
    "## Common Rationalizations",
    "## Red Flags",
    "## Verification",
  ]) {
    assert.match(skill, new RegExp(`^${heading}$`, "m"));
  }
});

test("campaign-layout documents the required campaign contract", async () => {
  const skill = await readSkill();

  for (const directory of [
    "reference/",
    "ready/",
    "assets/reference/",
    "assets/ready/",
    "outputs/",
  ]) {
    assert.match(skill, new RegExp(directory.replaceAll("/", "\\/")));
  }

  assert.match(skill, /explicit confirmation/i);
  assert.match(skill, /read-only/i);
  assert.match(skill, /stable paths relative/i);
});

test("campaign-layout has formal trigger and behavior scenarios", async () => {
  const cases = await readSkillEvalCase(evalPath);

  assert.equal(cases.skill_name, "campaign-layout");
  assert.ok(cases.trigger.positive.length >= 3);
  assert.ok(cases.trigger.negative.length >= 2);
  assert.ok(cases.behavioral.length >= 1);
});

test("campaign-layout behavioral scenarios have real fixtures", async () => {
  const cases = await readSkillEvalCase(evalPath);

  for (const scenario of cases.behavioral) {
    await assert.doesNotReject(
      access(resolve(root, "evals/fixtures/campaign-layout", scenario.fixture)),
      `missing fixture for scenario: ${scenario.name}`,
    );
  }
});
