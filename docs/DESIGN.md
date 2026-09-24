---
layout: default
title: Narravit Design and Experience
permalink: /design/
---

# Narravit Design and Experience

Narravit is a collection of AI tools that helps tabletop role-playing game (TTRPG) Game Masters create **better experiences for their players with less effort**. The tools should be accessible to people **with limited technical knowledge**, requiring only access to an AI assistant that can work with files.

One of the challenges of Game Mastering is managing information spread across many documents and putting it to use during play. Effective preparation helps Game Masters bring that information together and draw on it as the session unfolds.

Narravit uses AI to read campaign material and produce documents and code that support the Game Master's workflow. Human storytelling, judgment, and relationships remain at the center of that workflow.

## 🧭 Related Documents

- [First iteration]({{ '/v0-1/' | relative_url }}) defines the scope of session preparation in v0.1.

## Main Tenets

1. **Human storytelling comes first**

   TTRPGs are human-centered storytelling activities. AI should help people imagine, prepare, and share stories; it must not replace human judgment, creativity, relationships, or authorship at the table.

2. **Respect consent and authorship**

   Consent is sacred. We share with remotely hosted AI assistants only material we have the right to submit. Public availability alone does not establish permission.

   We welcome contributing our own work to AI improvement in a spirit of cooperation. That contribution should be informed and voluntary, with respect for the choices of everyone whose work or information is involved.

3. **No vendor lock-in**

   We believe in fair competition among AI providers and support open-source alternatives. Users should be free to change providers and take their data with them. We welcome integrations with specific technologies while keeping Narravit's tools independent of any single vendor.

4. **Respect GM agency and choice**

   GM work is hard, and GMs have the right to make the game they want with the tools they prefer. We may offer opinionated approaches, but GMs should remain free to adapt those approaches to their own workflows and decide which suggestions to use.

5. **Respect each GM's creative process**

   Preparation includes both routine work and creative exploration, but the boundary between them is different for every GM. An activity that sparks ideas for one GM may feel tedious to another, leaving them with less energy for the creative work they enjoy. Even for the same GM, that balance can change from one session to the next. The parts of Game Mastering that feel fun are just as personal.

   Narravit should let GMs choose how deeply they want to engage with each activity: it may organize existing ideas, ask questions, suggest possible directions, or produce a complete draft. The GM decides where to explore and where to save time.

   Narravit should also support GMs with different cognitive styles and needs, including neurodivergent GMs. Session preparation can be difficult when it involves scattered information, open-ended decisions, or keeping many details in working memory. Narravit should make structure visible, break work into manageable steps, allow GMs to skip and revisit sections, and offer concise or detailed assistance. These should remain options rather than assumptions about how any GM works.

## The Narravit Experience

### General Experience and Installation

Users can interact with Narravit through an AI assistant on their device, whether in a dedicated app, a command-line interface, or a text or document editor with AI support. The assistant must be able to **work with files**; the AI model itself may run **locally or remotely**.

Users should be able to install Narravit's skills in a compatible AI assistant through a single terminal command or, where supported, the assistant's graphical installation interface.

The choice of assistant supports Tenet 3, **No vendor lock-in**, and Tenet 4, **Respect GM agency and choice**.

### Capabilities

Each capability supports **one activity** a Game Master performs during session preparation. Capabilities should be **small and reusable**, so GMs can combine them into workflows that suit their needs.

By default, each capability is delivered as one user-facing skill. A capability describes an activity the GM wants to accomplish; a skill describes the focused workflow that supports it. Skills should have clear inputs, outputs, assumptions, constraints, and exit conditions.

Skills may compose into larger workflows. A primary skill may invoke supporting skills when their activities are related, but the primary purpose of each user-facing skill should remain clear. This makes it easy for developers to add, modify, or remove capabilities, and for GMs to **install only those they need**.

Every capability reflects assumptions about how a GM prepares a game. Keeping capabilities optional and letting GMs choose how to combine them supports Tenet 4, **Respect GM agency and choice**. Where an activity involves creative exploration, the capability should offer **different levels of assistance** rather than assume that every GM wants a finished result (Tenet 5, **Respect each GM's creative process**).

Examples of possible capabilities include:

- Preparing a session document using a template chosen by the GM. The template's sections and comments define the preparation method and how each section should be filled; the skill guides the conversation and maintains the draft. Narravit includes regular-session and Session Zero examples adapted from Mike Shea's methods, and GMs can supply their own templates. A Session Zero document acts as a flexible agenda before and during the meeting. It records confirmed shared agreements without preserving private disclosures or attributing personal boundaries to individual participants.
- Organizing a campaign folder on the GM's device into a knowledge base the AI assistant can use to answer questions and suggest ideas. The knowledge base defines which sources take precedence when information conflicts.
- Generating random tables for the GM to roll on during preparation or play.
- Generating backgrounds for player characters, NPCs, and adversaries.
- Formatting text provided by the GM into a prop document for players, following a reference layout or visual style supplied by the GM.
- Preparing a coherent set of images to show players during a session, with a consistent visual style or format, by generating new images or editing existing ones. This capability requires access to image-generation or image-editing tools, depending on the task.
- Creating battle maps for use in a virtual tabletop (VTT).
- Creating a simple plugin for a specific VTT from the GM's description of the desired behavior, without requiring the GM to know how to program.

## ✨ Aspirational Workflow

A GM is working in their campaign's draft folder, using their preferred AI assistant (Tenet 3, **No vendor lock-in**). Their existing knowledge base is available to the assistant; if they use a remotely hosted model, they share only material they have the right to submit (Tenet 2, **Respect consent and authorship**). They invoke the session-preparation skill and describe their plan:

> Next session, Fenrir the bounty hunter will finally catch up to the player characters.

The GM chooses the direction of the story, and the assistant helps prepare it (Tenet 1, **Human storytelling comes first**).

The assistant reads the campaign knowledge base. Fenrir is a dangerous cyborg hitman armed with a smart-ammo rifle and accompanied by three other cyborgs. Previously the GM established that Fenrir is secretly a clone of one of the player characters. The GM does not need to repeat these details: the assistant uses them to prepare a draft session document around the confrontation, including the secret the GM will need to keep in mind.

The GM then invokes the PDF-production skill. They have found a reference layout they like and have permission to use it for this purpose (Tenet 2, **Respect consent and authorship**). They ask the assistant to use it for the session document. The assistant recreates the layout in CSS and produces a PDF from the draft. The GM chooses how the preparation is presented (Tenet 4, **Respect GM agency and choice**).

The GM also wants a random weather table for the ambush, which will take place on Ghanki IV. They cannot remember what they decided about the planet's climate, so they ask the assistant to check. The assistant finds no climate established in the knowledge base and reports that gap, leaving the creative decision to the GM (Tenet 1, **Human storytelling comes first**, and Tenet 5, **Respect each GM's creative process**).

The GM decides that Ghanki IV is a volcanic planet. The assistant suggests a weather table with a 10% chance of acid rain: a roll of 91–100 on a d100. The GM likes the complication this could bring to the ambush and accepts the suggestion (Tenet 4, **Respect GM agency and choice**).

At the GM's request, the assistant saves the accepted climate details to the campaign knowledge base, adds the weather table to the session draft, and regenerates the PDF. The GM's decisions are now available for future preparation (Tenet 1, **Human storytelling comes first**), and the updated knowledge base and editable document remain in their campaign folder for use with other tools (Tenet 3, **No vendor lock-in**).

## ⚠️ What Narravit Must Not Become

A GM fills their campaign folder with PDFs they do not have permission to submit to an AI service, then shares them with a remotely hosted assistant. They add everything indiscriminately, without choosing or organizing the material around the world they want to create. This disregards Tenet 2, **Respect consent and authorship**, and the human direction central to Tenet 1, **Human storytelling comes first**.

Saturday's session approaches. Without the GM's direction, the assistant falls back on familiar tropes. The GM uses the output unchanged, and the session feels like **AI slop**: nothing reflects their taste or what makes this world unique to their friends and family. This is the experience Tenet 1, **Human storytelling comes first**, Tenet 4, **Respect GM agency and choice**, and Tenet 5, **Respect each GM's creative process**, are intended to help avoid.

When their AI provider raises its prices, the GM wants to switch to a local model and keep their campaign material on their own device. They discover that Narravit depends on features available only through that provider's paid plan. Their campaign files may be theirs, but their preparation workflow is tied to a service they can no longer afford. This would violate Tenet 3, **No vendor lock-in**.
