# Narravit — Project Intent

> Human-first tools for AI-assisted TTRPG storytelling.

## Status

Confirmed

## Date

2026-09-18

## Outcome

Create an open-source toolkit and GitHub-based blog series that helps TTRPG game masters use large language models to prepare campaigns and individual sessions.

The project should be useful to people with limited LLM experience or limited technical skills and should let them work independently of their operating system, preferred document tool, and model provider. Direct model integrations are optional; provider-neutral skills provide the baseline.

## Core tenets

### 1. Human storytelling comes first

TTRPGs are human-centered storytelling activities. Storytelling is one of the core activities of humans. AI should help people imagine, prepare, and share stories; it must not replace the human judgment, creativity, relationships, or authorship at the table.

### 2. Share responsibly; respect authorship

We share public, open-source, and our own material with LLMs in a spirit of cooperation, understanding that submitted answers may contribute to future model capability. We do not provide copyrighted material that we do not have the right to share.

Users remain responsible for checking a model provider's data-use settings. Public accessibility does not automatically mean that material is licensed for redistribution or submission to an LLM.

### 3. Respect GM agency and choice

GM work is hard, and GMs have the right to make the game they want with the tools they prefer. We build tools to help them improve or ease their work. We may offer opinionated approaches, but we should always provide a way for the GM to choose their own path.

## Users

The primary users are game masters working on Windows, macOS, or Linux. They may prefer Obsidian, VS Code, Google Docs, DOCX, PDF, Markdown, or plain text.

## Core workflow

Each campaign is organized as a local folder with clear provenance boundaries:

```text
campaign/
├── reference/   # Original user material; read-only to the toolkit
├── drafts/      # Optional generated or undecided work for human review
├── ready/       # GM-designated material ready for play or further use
├── assets/
│   ├── reference/ # GM-provided media; read-only
│   ├── drafts/    # AI-generated or undecided media
│   └── ready/     # GM-designated media used by the campaign
└── outputs/      # Rendered artifacts for use or sharing
```

The recommended workflow is:

1. The GM adds their own source material to `reference/`.
2. The toolkit reads the reference material without modifying it.
3. Generated material is written to `drafts/` when the GM wants a review stage.
4. The GM reviews, edits, and promotes useful material into `ready/`.

The `drafts/` folder is optional. A GM may generate content directly into `ready/`, or rename `drafts/` to `ready/` when they want all of its contents to become ready material. Tools must support this without relying on hidden database state or mandatory metadata. The `reference/` folder remains available to every workflow and is never modified by automation.

The top-level folders define workflow meaning, but their contents are entirely GM-controlled. GMs may add any subfolders they want under `reference/`, `drafts/`, `ready/`, and the corresponding asset stages. The toolkit should discover supported files recursively, preserve unknown files and folders, and never require a fixed nested taxonomy.

`outputs/` is a separate delivery layer for rendered artifacts such as styled letters, props, handouts, player materials, PDFs, and images. These artifacts may be generated from campaign documents and assets, and the folder may optionally be synchronized with Google Drive when the GM wants to share selected material with players. The exact policy for rendering from `drafts/` or `ready/` remains an open design decision.

The separation is a core safety and trust feature, but the GM controls how much review they want. Automation should make the safer draft workflow clear without preventing a GM from choosing a direct-to-ready workflow.

Documents and assets use the same provenance states, but assets live in their own parallel tree rather than being repeated inside each document folder. Asset directories are created only when needed.

## Document portability

Markdown is the canonical format because it is readable without special software, works directly with Obsidian and VS Code, and is suitable for version control.

The project should also support DOCX, PDF, plain text, and Google Docs through compatible import and export workflows. Initial Google Docs support means working with files exported from or imported into Google Docs; direct synchronization is not required for the first release. The templates must remain understandable and workable as ordinary documents, even when the GM does not use a specialized editor.

## Interfaces

The project will provide these ways to use each workflow:

- LLM- or agent-mediated skills that operate on the local campaign folder;
- a future local, cross-platform wizard for guided preparation.

The interfaces should share the same concepts and output formats, but the
wizard may provide additional conveniences such as file parsing, validation,
and folder management.

The wizard should operate on the local campaign folder and let the user provide their own model or API credentials. The project is not intended to require hosted campaign storage.

## Model support

Model integrations should use a provider-neutral adapter layer. Initial direct support should target:

- OpenAI;
- Anthropic;
- Google models;
- Ollama-compatible local models.

The provider-neutral skills remain the compatibility fallback for providers not directly integrated by the wizard.

## GM skills

The repository should be structured as a collection of focused, reusable GM skills. Each skill should define its inputs, process, outputs, safety rules, examples, and completion criteria.

## Writing style

Generated documents should default to a clear, simple, human-like writing style. Clarity and simplicity take priority over ornamental prose, excessive detail, jargon, or an obviously machine-generated voice.

The writing style is a default, not a constraint. The GM must be able to change it globally or override it for an individual workflow, campaign, or document.

Initial skills include:

- ingesting and classifying source material;
- creating campaign structure;
- generating and maintaining NPC records;
- generating and maintaining location records;
- producing NPC and location tables with links to image assets;
- creating a Session 0 document with a campaign pitch and related preparation notes;
- preparing a session from an idea using an opinionated Mike Shea / Lazy DM-inspired structure;
- reviewing drafts and promoting approved work into `ready/`.
- rendering documents and assets into shareable artifacts in `outputs/`.

The same structured records should support future export to Foundry VTT or other virtual tabletops, but VTT integration is not part of the first release.

## Demonstration content

Public examples will use a small, intended-to-be-original, system-agnostic science-fiction setting, approximately 2–3 pages in PDF form. It will be clearly labeled as AI-generated, include an appropriate disclaimer, and be unaffiliated with existing games or settings. The label and disclaimer communicate the project’s intent; they do not by themselves guarantee a particular jurisdiction’s copyright status.

The project will not include or reproduce third-party RPG manuals, settings, copied rules, or other copyrighted source material. The first release focuses on narrative preparation rather than defining a complete RPG rules system.

## First success milestone

A beginner should be able to:

1. create a campaign folder from the template;
2. add a DOCX, PDF, Markdown, or text setting document to `reference/`;
3. use an LLM or agent that can apply the repository's skills to the campaign;
4. generate a first-session draft in `drafts/`, or directly in `ready/` if the GM chooses to skip staging;
5. inspect structured NPC or location output with image-asset links;
6. review and promote material into `ready/` when the GM used the optional drafts stage.

The target is a useful first result within approximately 30 minutes, without requiring advanced prompting knowledge or technical expertise.

## Scope boundaries

### In scope for the first release

- portable campaign folder and Markdown template;
- beginner-oriented blog tutorials and worked examples;
- LLM- and agent-mediated skill workflows;
- a local cross-platform wizard;
- narrative campaign and session-preparation skills;
- import and export paths for common document formats;
- provider-neutral model adapters for the initial providers;
- human review and optional promotion of generated content.

### Out of scope for the first release

- redistributing any third-party RPG manual, setting, or rules text;
- building a complete RPG system or character-mechanics engine;
- hosted campaign storage or a mandatory online service;
- fully autonomous approval or publishing;
- direct support for every editor, model, and document platform;
- implementing a full Foundry VTT or other VTT integration.

## Design principles

- Preserve the GM's control and stewardship of source material.
- Make generated work visible, reviewable, and reversible.
- Prefer portable files and provider-neutral workflows over vendor lock-in.
- Keep the core narrative-focused and system-agnostic.
- Make every workflow useful through both a wizard and plain copy/paste.
- Keep the first implementation small enough to validate with a real campaign.

## Related decisions

The project structure is inspired by Addy Osmani's `agent-skills` repository: focused workflows, clear inputs and outputs, portability across agents, practical examples, and explicit verification. The project adapts that organization to GM activities rather than software-engineering phases.
