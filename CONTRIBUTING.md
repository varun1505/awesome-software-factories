# Contributing

Thanks for helping keep this list useful.

## What belongs here

A project belongs on this list if it helps you run AI coding agents **autonomously, in parallel, or in a loop** to produce software. That includes:

- Orchestrators that run many coding agents at once (session managers, agent kanban boards, fleet runners).
- Autonomous loops that keep an agent working until a spec, PRD, or test suite is done.
- Isolation layers built for agents (worktree managers, sandboxes, containers, VMs).
- Backlog and spec tooling that feeds agents work (issue trackers for agents, PRD-to-tasks tools).
- Review and merge gates that check agent output before it ships.
- Hosted and commercial factories, as long as they are clearly labelled as such.
- Essays, talks, books, and benchmarks about the software factory / agent factory / dark factory idea.

A project does **not** belong here if it is:

- A single coding agent or IDE plugin with no orchestration (those live in [awesome-ai-coding-agents](https://github.com/ai-for-developers/awesome-ai-coding-agents) or [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)).
- A general LLM agent framework with no software-development focus.
- A prompt, rules, or skills collection.
- Abandoned (no commits for 12 months) unless it is historically important. Mark those with `⚠️ unmaintained`.

## How to add an entry

1. Fork and create a branch.
2. Add your entry in the right section, in alphabetical order, using this format:

   ```markdown
   - [Name](https://github.com/owner/repo) - One plain-English sentence saying what it does. `Backends: Claude Code, Codex`
   ```

   - Keep the description to one sentence. Say what it does, not how great it is.
   - List the agent backends it supports if that is meaningful.
   - Use `⚠️ unmaintained` at the end for stale projects, and `💰` for paid or commercial products.
3. Make sure the link works and points to the canonical repo or homepage.
4. Open a pull request. One entry per PR makes review faster.

## Removing or fixing entries

Open an issue or PR if an entry is dead, renamed, or wrongly described. Say what changed and link to evidence.

## Style

- Plain English. Short sentences.
- No marketing language ("blazing fast", "revolutionary").
- No trailing full stop after the backends tag.
