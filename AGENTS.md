# Instructions for AI Contributors

Narravit is a collection of human-first tools for AI-assisted tabletop role-playing game
storytelling. These instructions apply to AI assistants making changes in this repository.

## Project principles

- Preserve the tenets in [`docs/DESIGN.md`](docs/DESIGN.md), especially human authorship, consent,
  GM agency, and freedom from vendor lock-in.
- Keep established campaign facts, GM decisions, and AI suggestions distinct.
- Treat generated material as a draft until the GM accepts it.
- Do not silently save a suggestion as a campaign fact or change an accepted decision.

## Documentation structure

- [`README.md`](README.md) introduces the project and repeats the tenets for visitors.
- [`docs/DESIGN.md`](docs/DESIGN.md) explains the project’s principles and boundaries.
- [`docs/EXPERIENCE.md`](docs/EXPERIENCE.md) describes the intended GM experience and capabilities.
- [`docs/V0.1.md`](docs/V0.1.md) defines the first implementation scope.

Keep implementation aligned with the capabilities documented in `docs/EXPERIENCE.md`. If a
capability changes, update that document in the same change.

## Skills and workflows

- A capability describes something a GM wants to accomplish.
- A skill is a focused, reusable workflow that supports a capability.
- A workflow may compose a primary skill with supporting skills.
- Skills should have clear inputs, outputs, assumptions, constraints, and exit conditions.
- A skill should not silently alter campaign facts, GM decisions, or another skill’s output.

Prefer small, composable skills over one skill that tries to handle every possible workflow.

## Making changes

Read the relevant design document before changing project behavior or terminology. Keep design
decisions and implementation details separate, and update related documentation when behavior or
scope changes. Ask for clarification when a change could affect authorship, consent, or GM agency.
