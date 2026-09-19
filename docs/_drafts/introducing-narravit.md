---
title: "Narravit: Human-first tools for AI-assisted TTRPG storytelling"
description: "A design for helping Game Masters prepare with AI while preserving consent, choice, and creative discovery."
---

Saturday's session is approaching. The Game Master has decided that Fenrir, a dangerous cyborg bounty hunter, will finally catch up with the player characters.

The GM opens their campaign folder and asks an AI assistant to help prepare the session. The assistant finds Fenrir in the campaign notes: his smart-ammo rifle, the three cyborgs who travel with him, and the secret that he is a clone of one of the player characters. The GM does not need to explain those details again.

The ambush will happen on Ghanki IV, but neither the GM nor the assistant can find anything about the planet's climate. The assistant reports the gap instead of inventing an answer. The GM decides that Ghanki IV is volcanic. The assistant suggests adding a 10% chance of acid rain to the weather table, and the GM accepts it. That decision becomes part of the campaign knowledge base and the session document.

This is the experience I want Narravit to make possible.

## What is Narravit?

Narravit is a collection of AI tools for tabletop role-playing game Game Masters. Its purpose is to help GMs create better experiences for their players with less effort, including GMs with limited technical knowledge.

Game Mastering involves, among other things, handling a large amount of information. Campaign notes, characters, locations, rules, unresolved events, and ideas may be spread across many documents. Preparing a session means bringing the relevant parts together while deciding what happens next.

AI assistants are well suited to reading and working with written material. They can search campaign notes, organize information, ask questions, suggest possibilities, and produce useful documents. But using AI in a creative activity also creates a design problem: assistance can save time, yet it can also flatten the GM's contribution.

Narravit begins with that tension rather than treating it as an afterthought.

## The principles behind the project

Narravit follows five tenets.

### 1. Human storytelling comes first

TTRPGs are human-centered storytelling activities. AI should help people imagine, prepare, and share stories. It should not replace human judgment, creativity, relationships, or authorship at the table.

The GM decides that Fenrir catches up with the party. The assistant helps carry that decision through the preparation.

### 2. Respect consent and authorship

Consent is sacred. Material should be submitted to a remotely hosted AI assistant only when the person using it has the right to do so. Something being publicly accessible does not automatically grant that permission.

Contributing our own work to the improvement of AI can be an act of cooperation, but that contribution should be informed and voluntary.

### 3. No vendor lock-in

GMs should be able to choose their AI provider, change providers, or use a local model. Their campaign material and preparation workflow should not become trapped behind a paid plan or depend on one company's proprietary features.

Narravit may integrate with specific technologies, but its tools and outputs should remain portable.

### 4. Respect GM agency and choice

Narravit can offer opinionated preparation methods without insisting that there is one correct way to run a game. GMs should be free to choose the capabilities they need, adapt a method to their practice, and reject any suggestion.

Approval alone is not enough to create meaningful agency. The GM should be able to direct the work throughout the process.

### 5. Respect each GM's creative process

Preparation contains both routine work and creative exploration, but the boundary between them differs for every GM. An activity that sparks ideas for one person may feel tedious to another. Even for the same GM, that balance can change with the session, their energy, and the time available.

Narravit should therefore offer different levels of assistance. It may organize existing ideas, ask questions, suggest directions, or produce a complete draft. The GM decides where to explore and where to save time.

## Avoiding AI slop

The experience Narravit must avoid is easy to imagine. A GM fills a folder indiscriminately, gives the assistant no creative direction, and uses its output unchanged. The assistant falls back on familiar tropes, and the resulting session feels like AI slop. Nothing reflects the GM's taste or what makes that particular world meaningful to their friends and family.

This does not mean that asking for a complete draft is always wrong. A GM with little time may want exactly that. Human-centered design means allowing that choice while making direction, revision, and deeper participation available when the GM wants them.

The goal is not to preserve effort for its own sake. It is to remove friction without quietly removing the opportunities through which a GM discovers what they care about.

## Small capabilities, combined by the GM

Narravit's capabilities should be small and reusable. A GM might install tools for preparing a session with a particular method, organizing a campaign knowledge base, generating random tables, laying out a player-facing prop, creating consistent images, producing a battle map, or even building a simple plugin for a virtual tabletop.

Some of these ideas are ambitious, and they will not all belong in the first release. The modular approach matters because GMs should be able to install only what they need, while developers can add or improve individual capabilities over time.

## Starting with session preparation

Narravit v0.1 will focus on one complete workflow: a GM gives Narravit access to an existing campaign folder and receives an editable session document grounded in their notes and decisions.

The first version should be able to:

- find established facts relevant to the next session;
- report missing or contradictory information;
- distinguish campaign facts, GM decisions, and AI suggestions;
- let the GM choose between questions, suggestions, and a complete draft;
- produce an editable session-preparation document; and
- save accepted decisions to the campaign knowledge base only when asked.

PDF styling, image generation, battle maps, and VTT plugins can come later. First, Narravit needs to prove that it can help with preparation while keeping the GM's judgment visible in the result.

The next step is to define and build the first session-preparation skill. I plan to document that process and demonstrate how the skill works with an actual campaign folder. That will test whether the implementation lives up to the principles described here.

The measure of success is not how much material the AI produces. It is whether the GM recognizes the resulting session as their game.
