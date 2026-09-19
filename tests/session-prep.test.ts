import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { readSkillEvalCase } from "../evals/lib/skill-eval-case.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillPath = resolve(root, "skills/session-prep/SKILL.md");
const evalPath = resolve(root, "evals/cases/session-prep.json");

async function readSkill(): Promise<string> {
  return readFile(skillPath, "utf8");
}

test("session-prep has valid skill frontmatter", async () => {
  const skill = await readSkill();
  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/u)?.[1] ?? "";

  assert.match(frontmatter, /^name:\s+session-prep$/m);
  assert.match(frontmatter, /^description:\s+\S.+$/m);
});

test("session-prep follows the shared skill anatomy", async () => {
  const skill = await readSkill();

  for (const heading of [
    "## Overview",
    "## When to Use",
    "## Required inputs",
    "## Core Process",
    "## Common Rationalizations",
    "## Red Flags",
    "## Safety and authorship",
    "## Verification",
  ]) {
    assert.match(skill, new RegExp(`^${heading}$`, "m"));
  }
});

test("session-prep documents its eight-step output contract", async () => {
  const skill = await readSkill();

  for (let step = 1; step <= 8; step += 1) {
    assert.match(skill, new RegExp(`^${step}\\. \\*\\*`, "m"));
  }

  assert.match(skill, /facts from suggestions/i);
  assert.match(skill, /proposals? for GM review/i);
  assert.match(skill, /GM review checklist/i);
  assert.match(skill, /Never overwrite an existing file silently/i);
});

test("session-prep is an opinionated, skippable preparation wizard", async () => {
  const skill = await readSkill();

  assert.match(skill, /opinionated/i);
  assert.match(skill, /wizard/i);
  assert.match(skill, /skip|skipped/i);
  assert.match(skill, /priority|essential|optional/i);
  assert.match(skill, /improvis/i);
  assert.match(skill, /at the table/i);
  assert.match(skill, /not a fixed plot|not a required plot/i);
  for (const minimum of [
    "Review the characters",
    "Create a strong start",
    "Define secrets and clues",
  ]) {
    assert.match(skill, new RegExp(minimum, "i"));
  }
  assert.match(skill, /minimum|good preparation|quality gate/i);
  assert.match(skill, /Grounding[\s\S]*Eight-step preparation[\s\S]*GM review checklist/i);
});

test("session-prep grounds its preparation in campaign references", async () => {
  const skill = await readSkill();

  assert.match(skill, /campaign-layout/);
  assert.match(skill, /grounding|consistency/i);
  assert.match(skill, /conflicts|contradictions/i);
  assert.match(skill, /established facts/i);
  assert.match(skill, /source files|sources used/i);
  assert.match(skill, /ready\//);
  assert.match(skill, /approved/i);
  assert.match(skill, /overrides/i);
  assert.match(skill, /opt out|skip.*consistency|consistency.*skip/i);
});

test("session-prep has formal trigger and behavior scenarios", async () => {
  const cases = await readSkillEvalCase(evalPath);

  assert.equal(cases.skill_name, "session-prep");
  assert.ok(cases.trigger.positive.length >= 3);
  assert.ok(cases.trigger.negative.length >= 2);
  assert.ok(cases.behavioral.length >= 1);
});
