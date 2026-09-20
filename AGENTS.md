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
- [`docs/DESIGN.md`](docs/DESIGN.md) describes the principles, intended GM experience, and capabilities.
- [`docs/V0.1.md`](docs/V0.1.md) defines the first implementation scope.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) describes the shared contribution and skill conventions.

Keep implementation aligned with the capabilities documented in `docs/DESIGN.md`. If a
capability changes, update that document in the same change.

## Skill definition

Follow the capability and composition model in [`docs/DESIGN.md`](docs/DESIGN.md), the v0.1 skill
definition in [`docs/V0.1.md`](docs/V0.1.md), and the contributor guidance in
[`CONTRIBUTING.md`](CONTRIBUTING.md).

## Making changes

Read the relevant design document before changing project behavior or terminology. Keep design
decisions and implementation details separate, and update related documentation when behavior or
scope changes. Ask for clarification when a change could affect authorship, consent, or GM agency.
