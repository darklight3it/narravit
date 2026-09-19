---
name: session-prep
description: Guides game masters and agents through preparing one tabletop RPG session from a short idea and campaign references. Use with supplied reference material to produce a provider-independent Markdown plan; do not invent canon silently or reproduce copyrighted game text.
metadata:
  short-description: Prepare one RPG session from campaign references
---

# Session Prep

## Overview

Turn a GM's short session idea and selected campaign references into a useful,
reviewable session document that the GM can keep beside them while improvising
at the table.

The GM remains the author and decision-maker;
the skill organizes possibilities and exposes assumptions rather than deciding
what must happen at the table.

This is an opinionated preparation method. It deliberately follows eight
headings adapted from Mike (Michael E.) Shea's Lazy GM preparation approach and
favors strong starts, useful characters, discoverable information, flexible
scenes, and actionable table references over a complete scripted plot. The GM
may reject, edit, defer, or skip any part of the method.

## When to Use

- Turning a short session idea into a reviewable preparation document.
- Organizing supplied campaign references into session possibilities.
- Preparing a draft for `drafts/` or an approved document for `ready/`.

Do not use this skill to initialize campaign folders, edit canonical references,
write a complete adventure, or reproduce third-party rules or setting text.

## Required inputs

- A short session idea, question, or situation.
- The campaign path or a description of the available reference material.
- Any relevant Markdown or plain-text material from `reference/`.

## Optional inputs

- Desired session length and player count.
- The GM's preferred rules system, if relevant.
- A writing-style override.
- Constraints such as tone, safety boundaries, or content to avoid.
- A destination choice: `drafts/` for review or `ready/` for direct use.

## Sources and outputs

Read only the material the GM provides from the campaign's `reference/` and
`ready/` directories, or excerpts the GM explicitly supplies. `reference/`
contains original GM source material; `ready/` contains GM-designated material
approved for use. Do not silently use unprovided game manuals, settings, rules,
or web content.

Produce a readable Markdown preparation document with visible notes about
assumptions, contradictions, missing information, and the selected style and
destination.

The generated document belongs in `drafts/` or `ready/` only when the GM has
selected that destination. Never overwrite an existing file silently.

## Campaign grounding and consistency

When the GM provides a campaign folder, use the `campaign-layout` skill for
source discovery, campaign-relative paths, and read-only boundaries. The two
skills have distinct responsibilities:

- `campaign-layout` inspects the folder and identifies the available source and
  approved material.
- `session-prep` reads the GM-selected files from `reference/` and `ready/` and
  checks whether the preparation agrees with them.

Record the provenance of every important fact as either original reference
material or GM-approved ready material. Do not assume that `ready/` overrides
`reference/`; if they conflict, surface both paths and ask the GM which should
govern this session.

Before proposing new session details, create a grounding pass containing:

- the exact source files or excerpts used;
- established facts supported by those sources;
- contradictions between sources;
- missing information that affects the session;
- proposals that are not established canon.

If sources conflict, show the conflict and ask the GM whether to choose one,
keep both as an open question, or defer it. Do not silently resolve a canon
conflict. If no reference material is available, say so and label all setting,
character, and plot additions as proposals.

The GM may opt out of the consistency check by saying to skip or defer
grounding. Respect that choice, continue with the wizard, and state in the
final document that consistency checking was skipped. Treat material that was
not directly supplied by the GM as unverified proposals. The opt-out never
disables `campaign-layout`'s read-only and path-safety rules.

## Core Process

Run this as a conversational wizard, not as a one-shot request for a finished
adventure:

1. Explain the opinionated method and its purpose: produce a table-ready
   improvisation aid, not a mandatory plot.
2. Restate the session idea, identify the supplied reference files, and ask for
   only missing high-impact context such as the characters, tone, time, or
   system.
3. Run the campaign grounding and consistency pass before making additions.
   Separate established facts from suggestions, surface contradictions and
   missing information, and ask the GM to resolve or defer consequential issues.
4. Move
   through the eight preparation steps in order, one focused prompt at a
   time. After each step, summarize what was supplied, identify proposals, and
   offer these choices: answer or edit, accept a suggested starting point,
   skip this step, or defer it for GM review.
5. Use these priorities to keep the wizard practical:

   - **Minimum for a good preparation:** review the characters, create a strong
     start, and define secrets and clues.
   - **Useful next:** potential scenes, fantastic locations, important NPCs,
     and relevant opposition.
   - **Optional:** meaningful rewards when the session does not need them yet.

   Do not force completion of a lower-priority step when the GM wants to move
   on. Record skipped or deferred steps visibly in the final document rather
   than silently filling them in.

   The wizard may end early, but it may call the result a good preparation only
   when the three minimum areas contain GM-accepted content. If any of those
   areas is skipped, empty, or left unresolved, mark the document `Incomplete`
   and keep it in `drafts/`; do not present it as ready for play.
6. Mark every invented detail as a proposal for GM review and keep possible
   scenes, clues, locations, NPCs, opposition, and rewards flexible enough to
   support improvisation.
7. Produce the final session document only after the wizard is complete or the
   GM chooses to finish early. Follow the session template in this order:
   document status and selected style, `Grounding`, `Eight-step preparation`,
   and `GM review checklist`. Keep table-useful material concise and actionable
   inside those sections; do not replace the template with a custom summary or
   reorder the eight preparation headings.
8. End with a short GM review checklist covering unresolved choices, skipped
   sections, sensitive content, and what the GM wants to keep or remove.

The wizard may use sensible defaults for skipped low-priority sections, but it
must label those defaults as proposals. Never present a default as established
canon.

The preparation sequence is adapted from the high-level organization of
Michael E. Shea's *Lazy GM's Resource Document* from Sly Flourish. The source
is available under CC BY 4.0 at
https://slyflourish.com/lazy_gm_resource_document.html. Narravit uses original
wording, system-neutral concepts, and no reproduced source passages or
proprietary game text. This adaptation changes and extends the structure for
provider-independent, system-neutral session preparation. See the
[CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). Narravit is
not affiliated with or endorsed by Sly Flourish.

The adapted sequence follows the source's eight preparation headings:

1. **Review the characters:** note names, goals, backgrounds, relationships,
   and player interests that can connect the session to this group.
2. **Create a strong start:** define where play begins, what is already
   happening, and what puts the players close to the action.
3. **Outline potential scenes:** list a few possible situations in a handful of
   words. Treat them as disposable options, not a required plot.
4. **Define secrets and clues:** write short pieces of discoverable information
   without assigning each one to a single location or scene.
5. **Develop fantastic locations:** give each useful place an evocative title
   and three concrete aspects, pressures, or discoveries.
6. **Outline important NPCs:** give each person a name, connection to the
   session, motivation, and a memorable behavior or role. Do not overbuild
   people who may never appear.
7. **Choose relevant opposition:** identify likely threats, hazards, or opposing
   goals. Keep the description system-neutral; add mechanics only when the GM
   supplies a rules system.
8. **Select meaningful rewards:** choose discoveries, resources, relationships,
   or other consequences that matter to the characters. Add system-specific
   rewards only when requested.

## Default writing style

Use clear, simple, human-like prose. Prefer concrete details and useful
choices over ornamental narration, jargon, or excessive exposition.

This is only the fallback style. The GM may provide their own writing style per
use, campaign, or document. A GM-selected style takes precedence over this
default and must not be silently overridden, normalized, or replaced. State the
selected style visibly in the output. Do not create hidden global
style configuration.

If a requested style conflicts with safety, authorship, or source-boundary
rules, explain the specific limitation and preserve the requested style as far
as possible. Do not silently choose a different style.

## Safety and authorship

- Preserve the GM's authorship and final judgment.
- Do not modify `reference/`.
- Do not claim that generated suggestions are established campaign facts.
- Do not reproduce third-party RPG rules, settings, manuals, blog posts, or
  substantial copyrighted examples.
- If references conflict, show the conflict and ask the GM to choose; do not
  silently rewrite canon.
- If references are missing or empty, say so and label all additions as
  optional inventions.
- Do not send campaign material to an external model or service without the
  GM's explicit choice.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| “I know this setting, so I can fill in the missing canon.” | Label additions as proposals and expose missing information. |
| “The reference conflict is minor.” | Show the conflict and ask the GM to choose; do not rewrite canon silently. |
| “A polished plot is more useful than options.” | Keep scenes flexible and avoid deciding what must happen at the table. |
| “The output can replace the existing draft.” | Never overwrite an existing file without explicit authorization. |
| “The source text can be copied for convenience.” | Use original wording and system-neutral concepts; do not reproduce copyrighted text. |

## Red Flags

- Generated details are presented as established campaign facts.
- Reference files are modified or silently used beyond what the GM provided.
- Conflicts, assumptions, style, or destination are hidden from the GM.
- The preparation becomes a fixed plot instead of flexible possibilities.
- System-specific mechanics appear without a supplied rules system or request.
- A draft or ready document is overwritten without explicit authorization.

## Verification

The skill is complete when the output:

- reflects the stated session idea;
- contains GM-accepted content for character review, a strong start, and
  secrets and clues, or is clearly marked `Incomplete`;
- identifies the references used;
- distinguishes facts, assumptions, and proposals;
- gives the GM several flexible ways the session could develop;
- includes a short actionable GM review checklist;
- exposes style, destination, and conflicts that need GM decisions;
- remains readable as ordinary Markdown;
- can be used with any text-capable LLM without provider-specific syntax;
- credits the source of the adapted preparation sequence.
