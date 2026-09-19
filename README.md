# Narravit

```text
     __                           _ _
  /\ \ \__ _ _ __ _ __ __ ___   _(_) |_
 /  \/ / _` | '__| '__/ _` \ \ / / | __|
/ /\  / (_| | |  | | | (_| |\ V /| | |_
\_\ \/ \__,_|_|  |_|  \__,_| \_/ |_|\__|

--- Human-first tools for AI-assisted TTRPG storytelling ---
```

Narravit organizes campaign material into a clear local folder structure and
provides reusable skills for preparing campaigns and sessions with the LLM or
agent tools the GM already uses.

## Core tenets

- Human storytelling comes first. AI supports imagination, preparation, and
  sharing without replacing the GM's judgment, creativity, relationships, or
  authorship.
- Respect authorship. Use only material that the GM has the right to share,
  and check each model provider's data-use policy before submitting campaign
  content.
- Preserve GM agency. Workflows may offer useful defaults, but the GM can
  choose their own style, process, tools, and level of review.

## Reference model

Narravit uses [Addy Osmani's `agent-skills` repository](https://github.com/addyosmani/agent-skills)
as its reference model for defining, organizing, and evaluating agent skills.
In particular, we follow its guidance on [skill anatomy](https://github.com/addyosmani/agent-skills/blob/main/docs/skill-anatomy.md),
[contribution quality](https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md),
and [eval design](https://github.com/addyosmani/agent-skills/blob/main/evals/README.md).

Narravit adapts that model for local TypeScript, Node 26, and pnpm workflows.
Its evals use local fixtures and filesystem/output assertions so they can be
run without a paid evaluation service.

## Try the example

Open [examples/science-fiction/README.md](examples/science-fiction/README.md)
for the beginner workflow and read the original setting material in
`examples/science-fiction/reference/`.

When using an LLM or agent that can read the repository:

1. Ask it to load `skills/campaign-layout/SKILL.md`.
2. Ask it to load `skills/session-prep/SKILL.md`.
3. Point it to the example campaign and give it a short session idea.
4. Review the generated Markdown before placing it in `drafts/` or `ready/`.

The GM remains the author and final decision-maker. Generated material is a
proposal for review, not established campaign canon.

## Project structure

```text
skills/
├── campaign-layout/   # Campaign folders, boundaries, and safe handling
└── session-prep/      # Session preparation workflow and template

examples/
└── science-fiction/   # Original demonstration campaign

docs/                  # Project intent
```

Markdown is the canonical document format. See
[docs/project-intent.md](docs/project-intent.md) for the project's current
scope and boundaries.

## Authorship and licensing

Do not add third-party RPG manuals, settings, rules text, or copyrighted
examples. The `session-prep` preparation structure is adapted from Michael E.
Shea's *Lazy GM's Resource Document* under CC BY 4.0, with attribution recorded
in the skill file. Narravit is not affiliated with or endorsed by Sly Flourish.
