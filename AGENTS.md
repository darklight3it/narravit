# Narravit Agent Instructions

## Project Scope

This repository contains Narravit skills and campaign workflows. Keep skill
instructions clear, reusable, and focused on agent behavior.

## Reference Model

Narravit follows the structure and quality model established by Addy Osmani's
`agent-skills` repository:

- [Skill anatomy](https://github.com/addyosmani/agent-skills/blob/main/docs/skill-anatomy.md)
  defines skill directories, frontmatter, recommended sections, supporting
  files, shared references, progressive disclosure, and verification.
- [Contribution rules](https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md)
  defines the quality bar and the required relationship between a skill and
  its eval case.
- [Eval documentation](https://github.com/addyosmani/agent-skills/blob/main/evals/README.md)
  is the reference for trigger-routing and behavioral evaluation design.

Use these documents as the upstream reference when making structural changes.
Narravit may adapt commands and assertions to its TypeScript, Node 26, pnpm,
and local-only execution environment, but should preserve the same intent:
skills are workflows, evals provide evidence, and supporting material is
loaded progressively.

## Skill Model

Every skill lives at `skills/<skill-name>/SKILL.md` and follows the
Markdown-first agent-skills model:

- YAML frontmatter with `name` and a specific `description`.
- `Overview` explaining the capability.
- `When to Use` describing triggers and exclusions.
- A numbered core workflow.
- `Common Rationalizations` for steps agents may be tempted to skip.
- `Red Flags` describing violations.
- `Verification` with concise, observable completion checks.

Keep skills model-neutral and interface-neutral. Add `scripts/` or
`references/` only when they provide clear reusable value; do not add helpers
solely to make a simple workflow appear more sophisticated.

## Skill and Eval Contract

When adding or changing a skill, keep these artifacts aligned:

1. `skills/<skill-name>/SKILL.md` — the agent-facing workflow.
2. `evals/cases/<skill-name>.json` — positive and negative trigger examples,
   plus at least one behavioral case with observable expectations.
3. `evals/fixtures/<skill-name>/` — real files for execution-based behavioral
   cases; use a reviewer-gated dialogue case when filesystem execution is not
   the right test shape.
4. `scripts/` — only the runner or reusable helper needed to execute the eval.
5. `tests/` — deterministic local checks for the skill contract and eval-case
   shape.

Behavioral evals should verify observable results in the fixture (files created,
files preserved, boundaries respected, or output structure produced). Do not
make them depend on one exact sentence from an agent response when the result
can be checked directly. Keep response checks limited to necessary protocol
signals such as a non-empty result or an explicit failure state.

For every new skill, verify the complete loop locally:

```text
SKILL.md → eval case → fixture → agent runner → filesystem/output assertions
```

The local runner is the source of truth for Narravit's offline-friendly tests;
no paid model-evaluation service is required.

## Working Rules

- Preserve user-authored files and unrelated changes.
- Prefer inspection before mutation.
- Ask for explicit confirmation before destructive or irreversible actions.
- Keep generated work separate from canonical source material.
- Do not silently infer ambiguous paths, destinations, or approvals.
- Keep verification proportional to the risk and complexity of the operation.

## Campaign Files

Use `campaign-layout` for campaign filesystem organization and safety decisions.
Treat `reference/` and `assets/reference/` as GM-owned, read-only source
material. Do not use `campaign-layout` to generate campaign or session content.

## Skill Changes

When creating or updating a skill, verify its frontmatter, trigger description,
workflow, safety boundaries, and completion criteria. Prefer a focused change
to an existing skill over creating a duplicate capability.
