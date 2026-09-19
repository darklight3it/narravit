---
name: campaign-layout
description: Guides agents through setting up and safely managing Narravit campaign folders. Use when initializing, inspecting, reading, writing, or rendering campaign files; do not use for generating campaign or session content.
metadata:
  short-description: Preserve Narravit campaign structure and source boundaries
---

# Campaign Layout

## Overview

Define and preserve the local folder structure used by Narravit campaigns. This
skill gives agents and future interfaces a shared understanding of where source
material, generated work, approved material, assets, and rendered outputs live.

The campaign folder is the source of truth. A database or full-text search
index may be added later as a derived, rebuildable convenience, but it must not
be required to understand the campaign or make the folder usable.

Use this skill for filesystem organization and safety decisions. Pass content
generation, session preparation, and document writing to the relevant skill.

## When to Use

- Setting up a new campaign folder.
- Inspecting or discovering campaign source files.
- Reading, writing, or rendering files within a campaign.
- Deciding whether a campaign path or destination is safe.

Do not use this skill to generate adventures, encounters, session plans, or
other campaign content. Pass those tasks to the relevant content skill.

## Core Process

### 1. Select and inspect the campaign folder

- A campaign directory selected by the GM.
- An operation, such as initialize, inspect, read, or write.

If the GM has not selected a campaign directory, ask them to provide or select
one before inspecting or changing the filesystem. Do not silently use the
current working directory as the campaign directory.

If the selected path does not exist, ask whether the GM wants the campaign
directory created. If it is an existing file, reject it and ask for a directory.

### 2. Present the state clearly

Use a short wizard-style prompt showing the selected folder, present and
missing directories, preserved existing files, directory purposes, and a clear
confirmation question. List paths relative to the campaign folder. Include
unsupported files, and identify `.md`, `.markdown`, and `.txt` files under
`reference/` as supported source documents. For large folders, group entries by
directory and state when the listing is abbreviated.

### 3. Confirm before changing anything

Ask for explicit confirmation before creating the campaign directory or missing
subdirectories. Showing the wizard is not permission to mutate the filesystem.

### 4. Initialize only what was approved

After confirmation, create only missing required directories. Keep initialization
idempotent and preserve existing files, folders, links, names, timestamps, and
permissions. Create optional `drafts/` directories only when requested.

### 5. Offer campaign-local agent instructions

After inspecting the campaign folder, check whether its root contains an
`AGENTS.md` file. Ask the GM whether they want campaign-local instructions that
route agents to this skill:

```markdown
# Campaign Instructions

Use the `campaign-layout` skill for filesystem operations in this folder.

Treat `reference/` and `assets/reference/` as read-only GM source material.
Keep generated work in the appropriate drafts or ready directories.
```

- If no `AGENTS.md` exists and the GM agrees, create it with the instruction
  above.
- If `AGENTS.md` exists and does not already contain an equivalent instruction,
  show the proposed addition and ask before appending it.
- If the instruction is already present, report that no change is needed.
- Never replace, reorder, or rewrite an existing `AGENTS.md` automatically.
- Treat this integration file as optional project metadata, not campaign source
  material.

### 6. Apply source and destination boundaries

Use the read and write rules below for every later operation.

## Optional inputs

- A relative path under the selected campaign directory.
- A destination stage: `drafts` or `ready`.
- A supported file extension filter.

## Campaign structure

```text
campaign/
├── reference/       # Original GM material; read-only
├── drafts/          # Optional generated or undecided documents
├── ready/           # GM-designated documents ready for use
├── assets/
│   ├── reference/   # GM-provided media; read-only
│   ├── drafts/      # Optional generated or undecided media
│   └── ready/       # GM-designated media ready for use
└── outputs/         # Rendered artifacts for use or sharing
```

The following directories are created when initializing a campaign:

- `reference/`
- `ready/`
- `assets/reference/`
- `assets/ready/`
- `outputs/`

`drafts/` and `assets/drafts/` are optional. A GM may create them when a review
stage is useful, or generate directly into `ready/`.

## Initialization workflow

When the GM asks to set up a campaign folder:

1. Ask for the campaign directory if it was not provided.
2. Inspect the selected directory without modifying it. Check whether it
   exists, whether it is a directory, and which required and optional campaign
   directories are already present.
3. Report the current state, including any missing required directories and
   any existing files or folders that will be preserved.
4. Ask the GM whether to create the missing required directories. Do not create
   them merely because the directory is empty or because initialization was
   mentioned ambiguously.
5. After explicit approval, create only the missing required directories. Keep
   the operation idempotent and preserve all existing content. Create optional
   `drafts/` directories only when the GM requests them.

If the selected path does not exist, ask whether the GM wants that campaign
directory created before creating its required subdirectories. If the path is
an existing file, refuse it and ask for a directory path instead.

## Wizard-style interaction

Present initialization as a short, readable wizard in the conversation. Use
plain labels and show the folder state before asking for a mutation:

```text
Campaign folder setup

1. Campaign folder
   /path/chosen/by/the/GM

2. Current structure
   Present: reference/, assets/reference/
   Missing: ready/, assets/ready/, outputs/

3. Existing content
   reference/setting/overview.md
   reference/maps/original-map.png

4. What should I do?
   Create the 3 missing required directories? (yes/no)
```

Explain the purpose of each required directory when first presenting it:

- `reference/`: original GM material; automation must not edit it.
- `ready/`: GM-approved generated documents.
- `assets/reference/`: original GM-provided media; read-only.
- `assets/ready/`: GM-approved generated media.
- `outputs/`: rendered or exported delivery artifacts.

List existing files with stable paths relative to the campaign folder. Group
large listings by directory and state when entries are omitted. Include files
with unsupported extensions in the inventory, but identify Markdown and plain
text files under `reference/` as supported source documents. Never create a
folder while merely displaying this wizard; wait for an explicit confirmation.

## Source discovery

- Discover supported files recursively under `reference/`.
- The first supported document formats are Markdown (`.md`, `.markdown`) and
  plain text (`.txt`).
- Return stable paths relative to the campaign directory.
- Preserve unknown files, symbolic links, folders, and nested organization.
- Do not require a fixed taxonomy below any top-level stage.
- Discovery must not modify file contents, names, timestamps, or permissions.
- Any database or full-text index is derived from files and may be discarded
  and rebuilt without losing campaign meaning or user-authored content.

## Read and write rules

- `reference/` is always readable and must never be modified automatically.
- `assets/reference/` is also read-only to automation.
- Generated documents may be written to `drafts/` or `ready/` when the GM has
  selected the destination.
- Generated assets may be written to `assets/drafts/` or `assets/ready/` when
  the GM has selected the destination.
- `outputs/` contains delivery artifacts and is separate from canonical source
  documents.
- Rendering must not modify its source document.
- Never overwrite an existing file without an explicit user action.
- Every resolved write path must remain inside the selected campaign directory.
- Reject traversal paths and writes into read-only stages.
- A renamed `drafts/` directory remains valid based on its current filesystem
  location and name; no hidden state may be required.

When a path is ambiguous, stop and ask the GM to select the source or
destination. Do not infer a destination from a filename or silently promote a
draft to `ready/`.

## Interface guidance

This is an interface-neutral capability. An agent may apply these rules
directly, a future CLI may expose them as commands, and a future wizard may
provide guided controls. None of those interfaces is required by this skill.

## Safety and authorship

- Treat all files in `reference/` as GM-owned source material.
- Do not copy, redistribute, or invent third-party copyrighted RPG content.
- Do not silently send campaign material to an external service.
- Keep generated work visibly separate from original material.
- Preserve user-created files and folders, including unsupported content.

## Scenario checks

Use these scenarios to verify that an agent applies the contract consistently:

### New campaign

Given an empty campaign directory, create `reference/`, `ready/`,
`assets/reference/`, `assets/ready/`, and `outputs/`. Do not require or create
`drafts/` unless the GM asks for a review stage.

### Mixed nested references

Given nested Markdown, text, image, and unknown files under `reference/`,
identify the Markdown and text files recursively. Leave every file and folder
in place, including unsupported content.

### Protected source

If asked to edit, move, delete, or overwrite anything under `reference/` or
`assets/reference/`, refuse the mutation and explain the source boundary.

### Explicit destination

If the GM chooses `ready/`, write there. If the GM chooses `drafts/`, use it if
present or create it. If `drafts/` has been renamed to `ready/`, treat the
current `ready/` directory as the valid destination without hidden metadata.

### Unsafe path

Reject absolute paths, traversal such as `../outside-file`, and symlink-based
writes that could escape the selected campaign directory. Ask for a safe,
campaign-relative path when needed.

### No index present

If no SQL or full-text index exists, continue using the campaign files directly.
If an index exists, treat it as disposable derived data and never as the sole
source of campaign meaning.

## Example

Given:

```text
campaign/reference/setting/overview.md
campaign/reference/setting/locations.txt
campaign/reference/maps/original-map.png
campaign/reference/notes/private-note.xyz
```

Inspection returns the two supported document files, recursively, while
preserving the image, unknown file, and nested folders. The image and unknown
file are not deleted or moved.

## Completion criteria

The capability is correctly implemented when:

- the required campaign directories can be initialized idempotently;
- optional `drafts/` directories are not required;
- supported reference files are discovered recursively and deterministically;
- unknown files and arbitrary nested folders remain intact;
- read-only boundaries are enforced;
- writes cannot escape the campaign directory;
- existing files are not silently overwritten;
- rendering preserves canonical source files;
- the same folder rules can be used by an agent, CLI, or wizard.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| “The current directory is obviously the campaign.” | Ask the GM to select the campaign folder explicitly. |
| “The folder is empty, so I can initialize it automatically.” | Show the plan and obtain confirmation before creating directories. |
| “This reference file only needs a small edit.” | Reference material is GM-owned source and read-only to automation. |
| “The output has the same name, so overwriting is convenient.” | Preserve existing files unless the GM explicitly authorizes replacement. |

## Red Flags

- The current working directory is used without asking.
- A folder or file is created before confirmation.
- Files under `reference/` or `assets/reference/` are edited, moved, or deleted.
- Unsupported files disappear from the inventory or are moved.
- A write path escapes the selected campaign directory.
- A draft is silently promoted to `ready/`.

## Verification

After setup or a filesystem operation, confirm:

- [ ] The selected campaign path is a directory inside the intended scope.
- [ ] Required directories exist, and optional directories were created only if requested.
- [ ] Existing files and folders were preserved.
- [ ] The optional campaign-local `AGENTS.md` was created or updated only with
      explicit approval, and existing instructions were preserved.
- [ ] Supported reference documents were discovered recursively with stable relative paths.
- [ ] Read-only source boundaries were not modified.
- [ ] No existing file was overwritten without explicit authorization.
- [ ] Rendered outputs remain separate from canonical source documents.
