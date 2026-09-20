# Contributing to Narravit

Thank you for helping shape Narravit, a collection of human-first tools for AI-assisted TTRPG
storytelling.

## Before you change something

Read the relevant project documents first:

- [`docs/DESIGN.md`](docs/DESIGN.md) — principles, intended experience, and capabilities.
- [`docs/V0.1.md`](docs/V0.1.md) — the first implementation scope and skill contract.
- [`AGENTS.md`](AGENTS.md) — instructions for AI coding assistants working in this repository.

Keep changes aligned with the project tenets, especially human authorship, consent, GM agency,
and freedom from vendor lock-in.

## Creating and composing skills

Follow the skill contract and attribution in [`docs/V0.1.md`](docs/V0.1.md), and the capability
and composition model in [`docs/DESIGN.md`](docs/DESIGN.md). Keep each user-facing skill focused;
document common workflows without trying to enumerate every possible combination.

## Documentation and verification

When a capability changes, update [`docs/DESIGN.md`](docs/DESIGN.md) in the same change. Keep
implementation details separate from the design and v0.1 scope.

Before submitting a change:

- check links and Markdown structure;
- run `git diff --check`;
- describe any unresolved design question in the change.
