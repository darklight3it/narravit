---
name: session-preparation
description: Prepare an editable tabletop RPG session draft from campaign notes and a chosen Markdown template. Use when a Game Master wants guided questions, grounded suggestions, or a complete preparation draft while retaining approval over every decision.
license: MIT
metadata:
  author: Davide Melfi
  version: "0.1.0"
  repository: https://github.com/darklight3it/narravit
---

# Session Preparation

## Purpose and template selection

Prepare a session using the GM's chosen template. The template defines the preparation method:
sections, order, priorities, optional sections, content requirements, and presentation defaults.
Its Markdown comments explain how to interview the GM and fill each section.

Use the template explicitly selected by the GM, otherwise the project's designated template.
If neither is supplied, use [Narravit's default example](references/lazy-gm-template.md), an
adaptation of Mike Shea's preparation method. Read the entire active template, including comments,
before starting. Follow its actual sections; do not impose the default template's method on a
custom template. The GM may override template defaults.

## Prepare the interview

1. Establish the GM's session idea, campaign folder, and output draft path from the conversation;
   ask for anything still missing.
2. Read relevant campaign files within the GM's access and consent boundaries. Use a supplied rules
   reference for system-specific mechanics.
3. Identify the inputs needed by the active template and ask only for missing information.
4. Present its sections and any optional choices. Let the GM skip and revisit sections.
5. Create the partial Markdown document using the template's structure, leaving unfinished
   sections visibly empty. Template placeholders and instruction comments are guidance, not
   session content.

## Work through the template

For each selected section:

1. Explain its purpose using its comments and follow its content and interview instructions.
2. Identify established facts, GM decisions, contradictions, and missing information.
3. Propose content grounded in the available context. Label creative additions requested by the GM
   or invited by the template as suggestions, never established campaign facts.
4. Give a plain-language confidence label (High, Medium, or Low) and explain the evidence in the
   conversation. Confidence concerns factual support, not the quality of a creative suggestion.
5. When there is no basis for a proposal, leave it explicitly empty and ask the GM for information.
   Wait for their answer or decision to skip; do not silently invent an answer.
6. Let the GM accept, revise, replace, or skip before moving on. Update the partial document after
   each accepted change, keeping previous accepted material intact.

Ask manageable questions one section at a time. Follow the GM's preferred level of involvement,
including a complete draft when requested; distinguish unaccepted suggestions from accepted
material during review. Check consistency across completed sections without silently resolving
conflicting decisions.

## Complete the document

Finish when every selected section is accepted or explicitly left open by the GM. Preserve the
active template's structure and accepted content. Leave skipped or unresolved sections visibly
empty for later completion.

The document should contain usable preparation material. Omit instructional comments, example
placeholders, interview history, confidence labels, evidence, and rejected proposals unless the GM
requests a working or audit version. If you use the default template say that to the user and attribute correctly the method in the dialog.

Updating the session draft does not authorize saving new facts to the campaign knowledge base.
Do that only when the GM requests it. PDF production, images, battle maps, and VTT plugins are
separate capabilities.

## Sources

The reusable skill model follows [Addy Osmani's Agent Skills](https://addyosmani.com/blog/agent-skills/).
The bundled default template adapts Mike Shea's *Return of the Lazy Dungeon Master* and the
[Lazy GM's Resource Document](https://slyflourish.com/lazy_gm_resource_document.html#eightsteps);
its method and attribution live in that template. Custom templates may use other preparation
methods.
