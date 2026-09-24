# Session Preparation v0.1 Manual Acceptance

**Date:** 24 September 2026

**Result:** Passed

This record covers a manual end-to-end run of the bundled session-preparation workflow. The GM
requested a complete draft and then reviewed it, rather than approving one section at a time. This
is one of the assistance levels supported by the skill.

## Inputs

- Campaign folder: [`examples/science-fiction-campaign`](../../examples/science-fiction-campaign/)
- Default template:
  [`lazy-gm-template.md`](../../skills/session-preparation/references/lazy-gm-template.md)
- Rules reference:
  [`rules-reference.md`](../../examples/science-fiction-campaign/rules-reference.md)
- Output:
  [`session-preparation-draft.md`](../../examples/science-fiction-campaign/session-preparation-draft.md)

## Review evidence

The GM made two corrections during review:

1. Salazar 1 and Ghanki IV are different planets. The final draft takes place on Salazar 1 while
   preserving the outstanding Ghanki IV contract as a separate campaign fact.
2. Method attribution belongs in the template, not in generated session documents. The final draft
   omits it, and the template retains it.

The confidence review produced the following results. Confidence describes support from the
campaign sources, not the quality of creative material accepted for the draft.

| Section | Confidence | Evidence |
| --- | --- | --- |
| Review the Player Characters | High | All three characters and their concerns come from `characters.md`. |
| Create a Strong Start | Medium | The planets and outstanding contract are established; Athena and the message belong to the reviewed session draft. |
| Outline Potential Scenes | Medium | The scenes follow the accepted session idea, but they are preparation rather than campaign facts. |
| Define Secrets and Clues | Medium | The Amnesia premise was supplied for the session; the detailed conspiracy remains accepted draft material. |
| Develop Fantastic Locations | Medium | Salazar 1 is established for this session; its descriptive details remain draft material. |
| Outline Important NPCs | Medium | The NPCs support the accepted session idea, while unresolved motives remain explicit. |
| Choose Relevant Challenges | High for rules; Medium for fiction | DC 15 and DC 20 come from `rules-reference.md`; situations and consequences remain draft material. |
| Select Relevant Rewards | Medium | Rewards are conditional consequences of the accepted challenges, not established campaign facts. |

## Acceptance checks

| Check | Result | Evidence |
| --- | --- | --- |
| The full template and its comments guide the output. | Pass | The output contains all eight sections in template order. |
| Established facts and draft material remain distinct. | Pass | New session material stays in the session draft; the campaign file records only the GM's explicit planet correction and its effect on the current situation. |
| Contradictions are resolved by the GM. | Pass | The GM corrected the relationship between Salazar 1 and Ghanki IV before completion. |
| The GM can revise a complete draft. | Pass | Both GM corrections were applied without discarding previously accepted material. |
| Rules mechanics use the supplied reference. | Pass | The challenges use only the documented DC 15 and DC 20 difficulties. |
| Unresolved decisions remain visible. | Pass | The WhiteLily agent and Igritte's motivation remain under **Open Questions**. |
| The final document contains no template instructions or placeholders. | Pass | Only playable preparation material and explicit open questions remain. |
| Method attribution remains in the template. | Pass | The template contains the attribution; the generated session document does not. |

## Limits of this run

This run covers the bundled template in complete-draft mode. It does not test a custom template,
section-by-section approval, PDF export, images, maps, VTT integration, or campaign storage beyond
an explicitly requested factual correction.
