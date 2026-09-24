```text
     __                           _ _
  /\ \ \__ _ _ __ _ __ __ ___   _(_) |_
 /  \/ / _` | '__| '__/ _` \ \ / / | __|
/ /\  / (_| | |  | | | (_| |\ V /| | |_
\_\ \/ \__,_|_|  |_|  \__,_| \_/ |_|\__|
```

--- Human-first tools for AI-assisted TTRPG storytelling ---

Narravit is a collection of AI tools that helps tabletop role-playing game (TTRPG) Game Masters create **better experiences for their players with less effort**. It is designed to be accessible to people with limited technical knowledge and to work through compatible AI assistants that can use files.

Narravit helps GMs bring together campaign material, prepare sessions, and produce useful documents while keeping human judgment, taste, and authorship at the center of play.

## Install the session-preparation skill

Install the skill from GitHub with the open Agent Skills CLI:

```bash
npx skills add darklight3it/narravit --skill session-preparation
```

For local development from a clone of this repository:

```bash
npx skills add . --skill session-preparation
```

The skill follows the open Agent Skills format and can be used by Codex, Claude Code, Cursor,
OpenCode, and other compatible agents. It reads the GM's campaign notes and chosen Markdown
template, then maintains an editable session-preparation draft under the GM's direction.

## 🧭 Main Tenets

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

   Narravit should also support GMs with different cognitive styles and needs, including neurodivergent GMs. It should make structure visible, break work into manageable steps, allow GMs to skip and revisit sections, and offer concise or detailed assistance without assuming that every GM works the same way.

## 📚 Design

- [Design, experience, and capabilities](docs/DESIGN.md)
- [First iteration: v0.1 session preparation](docs/V0.1.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
