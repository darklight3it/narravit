---
layout: default
title: The Narravit Experience
permalink: /experience/
---

# The Narravit Experience

This document expands on the intended experience described in the [Narravit design]({{ '/design/' | relative_url }}). The first implementation is scoped separately in [Narravit v0.1]({{ '/v0-1/' | relative_url }}).

## General Experience and Installation

Users can interact with Narravit through an AI assistant on their device, whether in a dedicated app, a command-line interface, or a text or document editor with AI support. The assistant must be able to **work with files**; the AI model itself may run **locally or remotely**.

Users should be able to install Narravit's skills in a compatible AI assistant through a single terminal command or, where supported, the assistant's graphical installation interface.

The choice of assistant supports Tenet 3, **No vendor lock-in**, and Tenet 4, **Respect GM agency and choice**.

## Capabilities

Each capability supports **one activity** a Game Master performs during session preparation. Capabilities should be **small and reusable**, so GMs can combine them into workflows that suit their needs.

Narravit should make it easy for developers to add, modify, or remove capabilities, and for GMs to **install only those they need**. The initial set will be small and may grow as new use cases emerge. How capabilities map to skills will be defined later.

Every capability reflects assumptions about how a GM prepares a game. Keeping capabilities optional and letting GMs choose how to combine them supports Tenet 4, **Respect GM agency and choice**: Narravit can offer specific methods while leaving GMs free to decide which ones fit their practice. Where an activity involves creative exploration, the capability should offer **different levels of assistance** rather than assume that every GM wants a finished result (Tenet 5, **Respect each GM's creative process**).

Examples of possible capabilities include:

- Preparing a session document using a specific preparation method or tailored to a particular TTRPG rules system.
- Organizing a campaign folder on the GM's device into a knowledge base the AI assistant can use to answer questions and suggest ideas. The knowledge base defines which sources take precedence when information conflicts.
- Generating random tables for the GM to roll on during preparation or play.
- Generating backgrounds for player characters, NPCs, and adversaries.
- Formatting text provided by the GM into a prop document for players, following a reference layout or visual style supplied by the GM.
- Preparing a coherent set of images to show players during a session, with a consistent visual style or format, by generating new images or editing existing ones. This capability requires access to image-generation or image-editing tools, depending on the task.
- Creating battle maps for use in a virtual tabletop (VTT).
- Creating a simple plugin for a specific VTT from the GM's description of the desired behavior, without requiring the GM to know how to program.

## ✨ Aspirational Workflow

A GM is working in their campaign's draft folder, using their preferred AI assistant (Tenet 3, **No vendor lock-in**). Their existing knowledge base is available to the assistant; if they use a remotely hosted model, they share only material they have the right to submit (Tenet 2, **Respect consent and authorship**). They invoke the session-preparation skill and describe their plan:

> Next session, Fenrir the bounty hunter will finally catch up with the player characters.

The GM chooses the direction of the story, and the assistant helps prepare it (Tenet 1, **Human storytelling comes first**).

The assistant reads the campaign knowledge base. Fenrir is a dangerous cyborg hitman armed with a smart-ammo rifle and accompanied by three other cyborgs. Previously the GM established that Fenrir is secretly a clone of one of the player characters. The GM does not need to repeat these details: the assistant uses them to prepare a draft session document around the confrontation, including the secret the GM will need to keep in mind.

The GM then invokes the PDF-production skill. They have found a reference layout they like and have permission to use for this purpose (Tenet 2, **Respect consent and authorship**). They ask the assistant to use it for the session document. The assistant recreates the layout in CSS and produces a PDF from the draft. The GM chooses how the preparation is presented (Tenet 4, **Respect GM agency and choice**).

The GM also wants a random weather table for the ambush, which will take place on Ghanki IV. They cannot remember what they decided about the planet's climate, so they ask the assistant to check. The assistant finds no climate established in the knowledge base and reports that gap, leaving the creative decision to the GM (Tenet 1, **Human storytelling comes first**, and Tenet 5, **Respect each GM's creative process**).

The GM decides that Ghanki IV is a volcanic planet. The assistant suggests a weather table with a 10% chance of acid rain: a roll of 91–100 on a d100. The GM likes the complication this could bring to the ambush and accepts the suggestion (Tenet 4, **Respect GM agency and choice**).

At the GM's request, the assistant saves the accepted climate details to the campaign knowledge base, adds the weather table to the session draft, and regenerates the PDF. The GM's decisions are now available for future preparation (Tenet 1, **Human storytelling comes first**), and the updated knowledge base and editable document remain in their campaign folder for use with other tools (Tenet 3, **No vendor lock-in**).
