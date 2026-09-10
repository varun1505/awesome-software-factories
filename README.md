# Awesome Software Factories [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of software factories: systems that run AI coding agents autonomously, in parallel, and in loops to turn a backlog into working software.

People also call these **agent factories**, and when no human reads the code at all, **dark software factories** (from the manufacturing term "lights-out factory").

A single coding agent is not a factory. A factory is the machinery around the agents: the backlog that feeds them, the sandboxes that isolate them, the loops that keep them going, and the gates that check their output before it ships.

## Contents

- [What is a software factory?](#what-is-a-software-factory)
- [Open-source factories](#open-source-factories)
- [Ticket-to-PR pipelines](#ticket-to-pr-pipelines)
- [Autonomous loops](#autonomous-loops)
- [Parallel session managers and agent kanbans](#parallel-session-managers-and-agent-kanbans)
- [Isolation: worktrees and sandboxes](#isolation-worktrees-and-sandboxes)
- [Backlog and spec layer](#backlog-and-spec-layer)
- [Review and merge gates](#review-and-merge-gates)
- [Multi-agent coding frameworks](#multi-agent-coding-frameworks)
- [Hosted and commercial factories](#hosted-and-commercial-factories)
- [Field reports](#field-reports)
- [Essays](#essays)
- [Talks and podcasts](#talks-and-podcasts)
- [Books](#books)
- [Benchmarks](#benchmarks)
- [Related lists](#related-lists)
- [Contributing](#contributing)

## What is a software factory?

The idea has a few names, each with a slightly different emphasis:

- **Software factory.** Bob Bemer used the term in 1968. In the AI-agent sense it means a system where agents read and write artifacts (specs, issues, pull requests) in a defined workflow, and people step in only for key decisions. Factory.ai, Steve Yegge's Gas Town, and OpenAI's Symphony popularised this usage in 2025-2026.
- **Agent factory.** Same idea, stressing that the unit of work is an agent run rather than a developer session. Yegge describes Gas Town as "more like a coding agent factory than a coding agent."
- **Dark factory / light factory.** Dan Shapiro coined "dark factory" in January 2026 as level 5 of his five-level scale: humans set goals, agents plan, build, test, and ship, and nobody reads the diff. Addy Osmani and Dex Horthy contrast it with a **light factory**, where humans still make judgment calls upstream in specs and architecture. Horthy ran a real lights-off factory for three months in 2025 and abandoned it because the codebase degraded, which is why most teams below run light factories.

Legend: `⚠️ unmaintained` means no commits for 6+ months or the project is archived. `💰` means paid or closed-source.

## Open-source factories

End-to-end systems: work comes in from a backlog, agents plan, build, test, and review, pull requests come out.

- [addyosmani/factory](https://github.com/addyosmani/factory) - Installs a factory operating model into a GitHub repo: issues become a work queue, scheduled agents triage, implement, test, review, and open draft PRs. `Backends: Claude Code, Codex`
- [AI Software Factory](https://github.com/coleam00/ai-software-factory) - GitHub issues in, merged PRs out, with verification gates so nobody has to read the diff. By Cole Medin. `Backends: Claude Code`
- [Atelier](https://github.com/duanecilliers/atelier) - A Python engine runs agents in bounded phases while a Next.js cockpit observes and controls them, with a SQLite trace as the source of truth.
- [Attractor](https://github.com/strongdm/attractor) - StrongDM's spec for a non-interactive coding agent "sufficient for use in a software factory." The open part of their "nobody reads the code" system.
- [Beadhive](https://github.com/beadhive/beadhive) - An agentic software factory that closes the loop, MCP-native and wired to your issue tracker.
- [claude-software-factory](https://github.com/alimeramiovens/claude-software-factory) - GitHub Actions template for issue-driven coding, review, merging, and bug scanning with Claude. No local install. `Backends: Claude`
- [CodeMachine CLI](https://github.com/moazbuilds/CodeMachine-CLI) - Orchestrates coding agents into repeatable, long-running workflows. `⚠️ unmaintained`
- [dark-factory](https://github.com/DUBSOpenHub/dark-factory) - Agentic dark factory with "sealed-envelope" testing so agents cannot see the tests they must pass.
- [dark-factory-experiment](https://github.com/coleam00/dark-factory-experiment) - AI workflows triage, implement, review, and auto-merge issues with no human reading the diff. Runs a live app at chat.dynamous.ai.
- [Donmai](https://github.com/RenseiAI/donmai-libraries) - Multi-agent fleet management for coding agents, billed as "the open-source software factory."
- [eve Software Factory Template](https://github.com/vercel-labs/eve-software-factory-template) - Vercel Labs template where agents own each SDLC stage (classifier, analyst, implementer, reviewer) and humans make judgment calls. `Backends: Claude Agent SDK`
- [Fabrika](https://github.com/berkaycubuk/fabrika) - Minimalist software factory that runs on your own computer.
- [Fabro](https://github.com/fabro-sh/fabro) - "The open source dark software factory for expert engineers." Rust.
- [Factory (watt-mind)](https://github.com/watt-mind/factory) - Self-improving agentic loop runtime where git is the source of truth and CI is the gate.
- [Finn-loop](https://github.com/finna/Finn-loop) - Three Claude Code skills, spec, build, review, and humans merge. `Backends: Claude Code`
- [Fluent](https://github.com/mrinalwadhwa/fluent) - Turns vision docs, bug reports, and production logs into working software and improves its own process as it goes.
- [Foreman](https://github.com/VisionForge-OU/foreman) - TUI that supervises headless Claude Code agents through a gated delivery pipeline. `Backends: Claude Code`
- [Forge](https://github.com/LucasDuys/forge) - Brainstorm-to-commit pipeline for Claude Code: a one-line idea becomes a tested, reviewed, committed branch. `Backends: Claude Code`
- [Forgeo](https://github.com/lucaGazzola/forgeo) - Scheduled factory that keeps the backlog as a plain JSON file, runs an agent on each task, and commits straight to main. No branches, no PRs. `Backends: Claude Code, Codex, OpenCode`
- [Foundry](https://github.com/ai-supervisor-foundry/foundry) - Persistent control plane that resumes agent work across multi-day projects without losing context.
- [Fusion](https://github.com/Runfusion/Fusion) - "Your software factory." Multi-node orchestrator with a kanban board, plan-review-execute gates, per-task worktrees, and hierarchical missions.
- [Gas Town](https://github.com/gastownhall/gastown) - Steve Yegge's multi-agent orchestrator. A Mayor dispatches work to colonies of 20-30 parallel agents, with Witness and Deacon roles supervising, and Beads as memory. `Backends: Claude Code, Codex, Copilot, Gemini, Cursor, Kiro, Amp, OpenCode, and more`
- [Genie](https://github.com/automagik-dev/genie) - "Wishes in, PRs out." Interviews you, plans, dispatches parallel agents into isolated worktrees, and reviews before showing you the result.
- [great_cto](https://github.com/avelikiy/great_cto) - Runs Claude Code as a pipeline of 70 specialist agents. An independent model checks each stage and spending caps refuse rather than warn. `Backends: Claude Code, Cursor, Codex, Aider, Continue`
- [gstack](https://github.com/garrytan/gstack) - Garry Tan's own Claude Code setup, branded an "open source software factory": 23 tools playing CEO, designer, engineering manager, release manager, docs engineer, and QA. `Backends: Claude Code`
- [HAR](https://github.com/os-factory/har) - Open agent harness (CLI plus MCP) with isolated worktrees and deterministic verification. `Backends: Claude Code, Cursor, Codex, any MCP agent`
- [Helmor](https://github.com/dohooo/helmor) - Local-first workbench that runs agents through plan, run, review, test, merge, and ship, each agent in its own worktree. `Backends: Claude Code, Codex, and others`
- [Human](https://github.com/gethuman-sh/human) - Pipes tickets, docs, designs, and analytics into one pipeline with Claude driving and a human reviewing before ship. `Backends: Claude Code`
- [Inkwell](https://github.com/disler/inkwell-agent-sandboxes-and-software-factory) - The Super Simple Software Factory running on throwaway sandboxed VMs.
- [Kapso](https://github.com/Leeroo-AI/kapso) - Self-improving factory built for measurable objectives, with published results on MLE-Bench and ALE-Bench.
- [loki-mode](https://github.com/asklokesh/loki-mode) - PRD to deployed product: 41 agents in 8 swarms, nine quality gates, and blind three-reviewer review. Source-available under BUSL.
- [Machinist](https://github.com/owainlewis/machinist) - Worker-fleet infrastructure that pulls tasks from ticket queues into isolated workspaces. Accepts any executable that reads a prompt from stdin. `Backends: Codex, Claude Code, any CLI`
- [Mastra Factory](https://github.com/mastra-ai/softwarefactory-template) - Open-source factory server from Mastra. Connects GitHub, Linear, and Slack to a configurable board (intake, triage, planning, build, review, done) where each stage runs on manual or auto mode. Install with `npm create factory`. Beta since September 2026. [Docs](https://factory.mastra.ai/).
- [Miniforge](https://github.com/miniforge-ai/miniforge) - "Designed to behave like a factory, not a chatbot." Policy-as-code governance over autonomous development, written in Clojure.
- [Minimum Viable Factory](https://github.com/ashtilawat/minimum-viable-factory) - Ticket in, deployed web app out. A deliberately small reference implementation.
- [OctopusGarden](https://github.com/foundatron/octopusgarden) - "Dark software factory": specs in, code out, through a convergence loop. Go.
- [oh-my-symphony](https://github.com/cskwork/oh-my-symphony) - Community fork of Symphony that drives eight coding CLIs from one orchestrator with a terminal kanban and web dashboard. `Backends: Codex, Claude Code, Gemini, Antigravity, Kiro, OpenCode, Pi`
- [opencastle](https://github.com/monkilabs/opencastle) - Multi-agent orchestration setup that spans seven agent tools. `Backends: Copilot, Cursor, Claude Code, OpenCode, Windsurf, Codex, Antigravity`
- [OpenFactory](https://github.com/Open-Factory-Digital/openfactory-core) - Tickets in, reviewed pull requests out. Self-hosted, no vendor lock-in.
- [Optio](https://github.com/jonwiggins/optio) - Self-hosted engineering platform. Tickets from GitHub, Linear, Jira, or Notion become merged PRs through a Kubernetes-style reconciliation control plane, plus one-shot jobs and long-lived agents. `Backends: Claude Code, Codex, Copilot, Gemini, OpenCode, Cursor`
- [Orbi](https://github.com/orbi-build/orbi) - "The factory that builds and operates AI software factories." GitHub issues in, runnable systems out.
- [Paddock](https://github.com/racecraft-lab/Paddock) - GitHub-issue-driven control plane with isolated sandboxes, governance, artifacts, and human review.
- [Patchmill](https://github.com/rochecompaan/patchmill) - Agent-driven software factory with daily development.
- [Ramure](https://github.com/fulcrumresearch/ramure) - Library for structuring and running multi-agent coding workflows, pitched as "build your own software factory." Formerly Druids.
- [Sgai](https://github.com/sandgardenhq/sgai) - Sandgarden's local factory. Define the outcome in a single `GOAL.md` and a coordinated set of agents builds it, with a web dashboard showing what each agent is doing.
- [software-factory (nicolasmelo1)](https://github.com/nicolasmelo1/software-factory) - Single Rust binary where every rule is written twice: once as prose, once as an enforced check with a mutation test proving it fires.
- [Squid](https://github.com/iusztinpaul/squid) - "An opinionated software factory." A Claude Code plugin that turns a feature spec into a reviewed PR through a five-agent pipeline with two human gates. `Backends: Claude Code`
- [Super Simple Software Factory](https://github.com/disler/super-simple-software-factory) - Deterministic Python owns the workflow graph and coding agents are bounded nodes inside it, packaged as one portable skill. By IndyDevDan. `Backends: Pi, Claude Code`
- [SWE-AF](https://github.com/Agent-Field/SWE-AF) - "Autonomous software engineering fleet." One API call plans, codes, tests, and ships a PR. `Backends: Claude Code, OpenCode, Codex`
- [Symphony](https://github.com/openai/symphony) - OpenAI's open spec plus Elixir reference implementation for turning issue-tracker items into isolated, autonomous agent runs. The tracker is the control plane. `Backends: any, demo uses Codex`
- [Taskplane](https://github.com/HenryLach/taskplane) - Multi-agent coding orchestration that describes itself as "more light-factory than dark-factory." Transparency first.
- [zeroshot](https://github.com/the-open-engine/zeroshot) - Planner and implementer loop with independent validators in isolated worktrees or Docker, running until a change verifies or fails with a reproducible report. Pulls from GitHub, GitLab, Jira, Azure DevOps. `Backends: Claude, Codex, Gemini, OpenCode`

## Ticket-to-PR pipelines

Tools that watch an issue tracker or event stream and dispatch agents to open pull requests.

- [aeon](https://github.com/aeonfun/aeon) - Runs unattended on GitHub Actions, dispatching markdown-defined skills to agent CLIs and healing skills that fail.
- [Agentics](https://github.com/githubnext/agentics) - Ready-made gh-aw workflows from GitHub Next: CI coach, log watcher, grumpy reviewer, nitpick reviewer.
- [Alfred](https://github.com/luminik-io/alfred) - Local, scheduler-run fleet of agents driven by GitHub issue labels. `Backends: Claude Code, Codex`
- [another-orchestrator](https://github.com/linuxlewis/another-orchestrator) - An LLM planner reads Linear or GitHub Issues, then a deterministic state machine dispatches headless agents through YAML workflows in isolated worktrees. `Backends: Claude Code, Codex`
- [Autonomous cloud coding agents (AWS sample)](https://github.com/aws-samples/sample-autonomous-cloud-coding-agents) - AWS's own sample of background agents that turn tasks into PRs in isolated runtimes, with orchestration, observability, and governance built in.
- [background-agents](https://github.com/ColeMurray/background-agents) - Runs background coding agents triggered by GitHub, Linear, webhooks, or cron, with attributed PRs.
- [Baton](https://github.com/mraza007/baton) - Daemon that polls GitHub Issues by label, gives each a worktree, and runs Claude Code to open a PR. `Backends: Claude Code`
- [centaur](https://github.com/paradigmxyz/centaur) - Paradigm's multiplayer self-hosted agents with Slack-native conversations, Kubernetes sandboxes, and durable workflows.
- [Claude Code PM (ccpm)](https://github.com/automazeio/ccpm) - Turns GitHub Issues into a task queue and runs one agent per issue, each in its own worktree. `Backends: Claude Code`
- [Contrabass](https://github.com/junhoyeo/contrabass) - Go reimplementation of the Symphony pattern. Pulls from Linear, GitHub Issues, or a local board into isolated worktrees.
- [Cyrus](https://github.com/cyrusagents/cyrus) - Background agent that watches issues assigned to it in Linear, GitHub, GitLab, or Slack and works each in its own worktree.
- [factory-agent](https://github.com/BayramAnnakov/factory-agent) - Linear issue to Claude Managed Agents to GitHub PR. About one dollar and three minutes per feature. `Backends: Claude Managed Agents`
- [GitHub Agentic Workflows (gh-aw)](https://github.com/github/gh-aw) - GitHub's own tool. Markdown plus YAML agentic workflows compile to locked-down GitHub Actions with sandboxed agents and validated "safe outputs."
- [groundcrew](https://github.com/ClipboardHealth/groundcrew) - Dispatches a task backlog to local agents, one sandboxed worktree per task.
- [harness-kanban](https://github.com/Orenoid/harness-kanban) - Cloud kanban for fully containerized agents running around the clock on assigned issues.
- [issue-to-pr-agent](https://github.com/alvarocanoo/issue-to-pr-agent) - Planner, executor, verifier loop on the Claude Agent SDK in a Docker sandbox, with SWE-bench Lite traces. `Backends: Claude Agent SDK`
- [Kiro Crew](https://github.com/kirodotdev/KiroCrew) - AWS's persistent workspace that drives the Kiro CLI across concurrent sessions with checkpoint resume, spawned subagents, and cron or webhook jobs behind approval gates. `Backends: Kiro`
- [MindFlock](https://github.com/MindFlock/MindFlock) - A ticket assigned in Jira, Linear, GitHub Issues, Shortcut, or Asana becomes an already-running agent session in its own worktree. You review the diff and merge.
- [Mission Control](https://github.com/builderz-labs/mission-control) - Self-hosted control plane that dispatches tasks to agent runtimes, with run review and spend tracking. `Backends: OpenClaw, Claude Code, Codex, and others`
- [Multica](https://github.com/multica-ai/multica) - Self-hostable workspace where agents take issues like teammates, report progress, and hand back for review. `Backends: Claude Code, Codex, Cursor, Copilot, Kimi, OpenCode`
- [NEEDLE](https://github.com/jedarden/NEEDLE) - Headless orchestrator with an explicit state machine that processes a task queue and dispatches to agent CLIs.
- [no_human](https://github.com/no-human-ai/no_human) - Takes a ticket from Jira, Linear, monday.com, GitHub, or GitLab and drives an agent to a reviewed PR, locally.
- [Open Session](https://github.com/tellahq/opensession) - Self-hosted server with worktrees or sandboxes, intake from Slack, Linear, Plain, and GitHub, and diff and PR review.
- [Open SWE](https://github.com/langchain-ai/open-swe) - Async coding agent you invoke from Slack, a Linear issue, or a GitHub comment. Posts results back.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Self-hosted control center for coding agents with a GitHub resolver: label an issue and it opens a PR. `Backends: own agent, Claude Code, Codex, Gemini, any ACP agent`
- [remote-swe-agents](https://github.com/aws-samples/remote-swe-agents) - AWS serverless control plane with a dedicated EC2 worker per session, triggered by issue comments, assignments, and PR reviews.
- [Sortie](https://github.com/sortie-ai/sortie) - Single Go binary that turns tracker tickets into isolated agent sessions with retries, stall detection, and cleanup. Supports GitHub, GitLab, Gitea, Linear, Jira.
- [Sweep](https://github.com/sweepai/sweep) - The original open-source GitHub issue-to-PR bot. Has since pivoted to a JetBrains plugin. `⚠️ unmaintained`
- [Taskuary](https://github.com/ldbumble/taskuary) - Work inbox that triages issues into approval-gated agent runs.
- [Yak](https://github.com/Geocodio/yak) - Picks up small "papercut" tasks from Slack, Linear, Sentry, and GitHub and delivers reviewable PRs. Built by Geocodio for their own backlog.

## Autonomous loops

The "Ralph Wiggum" pattern: feed an agent the same prompt in a loop, with tests as back pressure, until the spec is done. Named by Geoffrey Huntley in July 2025.

- [afk](https://github.com/alexanderop/afk) - Spec, vertical slices, TDD loops, refactor, agentic QA, multi-agent review. Human judgment only at the edges. `Backends: Claude Code`
- [agent-afk](https://github.com/griffinwork40/agent-afk) - "The coding agent you don't have to watch." Builds, self-verifies, texts you when done, and keeps a decision log.
- [agent-yes](https://github.com/snomiao/agent-yes) - Runs agents unattended: auto-answers prompts, retries on rate limits, and lets you tail and steer every running agent from a web dashboard. `Backends: Claude Code, Codex, Gemini CLI`
- [Babysitter](https://github.com/a5c-ai/babysitter) - Deterministic self-orchestration for agent workforces on complex multi-step workflows.
- [Bernstein](https://github.com/sipyourdrink-ltd/bernstein) - Deterministic, zero-LLM-cost scheduler for 40+ CLI agents in parallel worktrees, with a signed, tamper-evident audit chain.
- [claude-overnight](https://github.com/igdutra/claude-overnight) - Spec-driven overnight runner that implements, QAs, reviews, and opens PRs while you sleep. `Backends: Claude Code`
- [continuous-claude](https://github.com/AnandChowdhary/continuous-claude) - Ralph loop with PRs: runs Claude Code continuously, opens PRs, waits for checks, and merges. `Backends: Claude Code`
- [fractal](https://github.com/plasma-ai/fractal) - Recursively delegates separable subtasks to child agents in their own worktrees, bounded by depth, cost, and time.
- [gralph](https://github.com/frizynn/gralph) - Ralph loop with git-worktree isolation and multi-agent scaling. `Backends: Claude Code, Cursor` `⚠️ unmaintained`
- [lalph](https://github.com/tim-smart/lalph) - Source-agnostic Ralph-style loop.
- [LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness) - Long-running harness that splits work into manager, executor, and auditor roles so only independently verified results persist.
- [loom](https://github.com/ghuntley/loom) - Geoffrey Huntley's own infrastructure for autonomous multi-agent loops. The README says it is for his use only, so treat it as a reference, not a tool.
- [Loop Engineering (cobusgreyling)](https://github.com/cobusgreyling/loop-engineering) - Seven production loop patterns plus CLI tools that score readiness, scaffold state, estimate cost, detect drift, and isolate worktrees.
- [loop-engineering](https://github.com/selmakcby/loop-engineering) - Claude Code skill for a self-running loop gated by a verification check the agent cannot fool, plus a max-turns budget. `Backends: Claude Code`
- [loopgate_harness](https://github.com/rxdt/loopgate_harness) - Repo-native loop where each iteration must update specs and pass gates before it commits.
- [LoopTroop](https://github.com/looptroop-ai/LoopTroop) - An LLM council plans the work, then Ralph-style loops retry failed units with fresh context on OpenCode worktrees. `Backends: OpenCode`
- [LoopX](https://github.com/huangruiteng/loopx) - Provider-neutral control plane above Codex, Claude Code, and Cursor that keeps objectives, gates, todos, and quota stable across bounded turns.
- [OMK](https://github.com/dmae97/omk) - Evidence-gated runner that routes tasks into scoped DAG lanes with replayable artifacts. `Backends: Codex, Claude Code, OpenCode`
- [Open Ralph Wiggum](https://github.com/Th0rgal/open-ralph-wiggum) - `ralph "prompt"` starts a loop on any of several backends. `Backends: OpenCode, Claude Code, Codex, Copilot CLI, Cursor Agent, Qwen Code`
- [overnight](https://github.com/yail259/overnight) - Queue Claude Code tasks, run them overnight, wake up to results. `Backends: Claude Code`
- [ProofLoop](https://github.com/exiw-ai/proofloop) - Write a definition of done once. The orchestrator plans, executes, and verifies in a loop until the contract is satisfied. `Backends: OpenCode, Codex, Claude Code`
- [ralph (aymenfurter)](https://github.com/aymenfurter/ralph) - Ralph loop for GitHub Copilot as a VS Code extension with a visual control panel. `Backends: Copilot` `⚠️ unmaintained`
- [ralph (iannuttall)](https://github.com/iannuttall/ralph) - Minimal file-based loop: each iteration starts fresh, reads on-disk state, commits one story. Archived. `Backends: Codex, Claude, Droid, OpenCode` `⚠️ unmaintained`
- [ralph (snarktank)](https://github.com/snarktank/ralph) - The minimal PRD-driven loop most others copy: read PRD and progress file, do one item, test, commit, repeat. `Backends: Amp, Claude Code` `⚠️ unmaintained`
- [ralph-claude-code](https://github.com/frankbria/ralph-claude-code) - Autonomous Claude Code loop with smarter exit detection than string matching. The most-starred standalone Ralph. `Backends: Claude Code`
- [ralph-loop (syuya2036)](https://github.com/syuya2036/ralph-loop) - Agent-agnostic Ralph that also works with local Ollama models. `⚠️ unmaintained`
- [ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) - Vercel Labs' Ralph loop built on the AI SDK. `⚠️ unmaintained`
- [ralph-orchestrator](https://github.com/mikeyobrien/ralph-orchestrator) - Ralph with a "hat system" of personas, back-pressure gates for tests, lint, and typecheck, and Telegram check-ins. `Backends: Claude Code, Codex, Gemini CLI, Kiro, OpenCode, Copilot CLI, Amp`
- [ralph-starter](https://github.com/rubenmarcus/ralph-starter) - Bootstraps a Ralph loop from Figma, Linear, Notion, or GitHub specs, with cost tracking.
- [ralph-tui](https://github.com/subsy/ralph-tui) - TUI that drives an agent through a task list with exit detection, connected to task trackers, with interactive PRD creation.
- [ralph-wiggum plugin](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum) - Anthropic's official Claude Code plugin. A Stop hook blocks exit and re-feeds the prompt until a completion string or iteration cap. `Backends: Claude Code`
- [ralph-wiggum-cursor](https://github.com/agrimsingh/ralph-wiggum-cursor) - Ralph loop for Cursor CLI with token tracking and context rotation. `Backends: Cursor` `⚠️ unmaintained`
- [ralphctl](https://github.com/lukas-grigis/ralphctl) - Generator-evaluator Ralph harness across repos. `Backends: Claude Code, Codex, Copilot`
- [ralphex](https://github.com/umputun/ralphex) - Fresh session per task, with validation, retries, multi-phase review, and automatic commits. `Backends: Claude Code, Codex`
- [ralphy](https://github.com/michaelshimeles/ralphy) - Bash script that loops an agent until the PRD is complete. `Backends: Claude Code, Codex, OpenCode, Cursor, Qwen, Droid` `⚠️ unmaintained`
- [smart-ralph](https://github.com/tzachbon/smart-ralph) - Claude Code plugin combining the Ralph loop with a structured spec workflow and context compaction. `Backends: Claude Code`

## Parallel session managers and agent kanbans

Run many agent sessions at once, each in its own worktree, and review their output from one place.

- [ADE](https://github.com/arul28/ADE) - Real-time session sync across macOS, Windows, iOS, web, and terminal. `Backends: Claude Code, Codex, Cursor, Droid, OpenCode`
- [ADHDev](https://github.com/vilmire/adhdev) - Self-hosted daemon and dashboard. "Repo Mesh" claims tasks into isolated worktrees and a "Refinery" gates finished branches before fast-forwarding to main.
- [Agent Deck](https://github.com/asheshgoplani/agent-deck) - One TUI for tracking and switching between many agent sessions. `Backends: Claude Code, Gemini CLI, OpenCode, Codex, Copilot, Crush, Cursor`
- [Agent of Empires](https://github.com/agent-of-empires/agent-of-empires) - Session manager that runs many agents in parallel across branches, watched from a TUI or browser, with optional worktree or container isolation. Backed by Mozilla.ai. `Backends: Claude Code, OpenCode, Mistral Vibe, Codex, Gemini CLI, Copilot CLI, Pi, Droid`
- [Agent Orchestrator](https://github.com/Untrivial-ai/agent-orchestrator) - Plan, run, and supervise coding agents from one place. Spawns agents, fixes CI, resolves merge conflicts, and reviews. `Backends: 27 agents including Claude Code, Codex, Cursor, Aider, Copilot, Devin`
- [agent-kanban](https://github.com/saltbo/agent-kanban) - Agent-first task board and mission control.
- [AgentBridge](https://github.com/raysonmeng/agent-bridge) - Keeps Claude Code and Codex as live peers in one session for mid-turn review and task splitting. `Backends: Claude Code, Codex`
- [agi-cli](https://github.com/phnx-labs/agi-cli) - "A meta-harness for building agent factories." Installs, pins, and runs several agent harnesses with shared skills and SSH fleet dispatch.
- [Agor](https://github.com/preset-io/agor) - Team command centre for coding agents. By Preset.
- [ai-agent-board](https://github.com/DanWahlin/ai-agent-board) - Drag-and-drop kanban that assigns tasks to agents with streaming output and worktree isolation.
- [ai-devkit](https://github.com/codeaholicguy/ai-devkit) - CLI control plane over managed tmux with shared local memory, verification skills, and lifecycle workflows. `Backends: Claude Code, Pi, and more`
- [ai-fleet](https://github.com/nachoal/ai-fleet) - Simple fleet manager for parallel agents over tmux. `Backends: Claude Code, Codex` `⚠️ unmaintained`
- [AionUi](https://github.com/iOfficeAI/AionUi) - Free desktop app that runs 20+ CLI agents around the clock. `Backends: OpenClaw, Hermes, Claude Code, Codex, OpenCode, and more`
- [amux (andyrewlee)](https://github.com/andyrewlee/amux) - Wrapper-free TUI for parallel agents with worktree support.
- [amux (mixpeek)](https://github.com/mixpeek/amux) - Control plane for an "AI engineering team": shared board, atomic tasks, schedules, self-healing recovery, single Rust binary.
- [Aperant](https://github.com/AndyMik90/Aperant) - Up to 12 agent terminals in parallel worktrees, a self-validating QA loop, and AI-assisted merge-conflict resolution.
- [Arbor](https://github.com/penso/arbor) - Minimalist native desktop app built around worktrees, terminals, and diffs.
- [async-code](https://github.com/ObservedObserver/async-code) - Codex-style web UI for running Claude Code and Codex on multiple tasks in parallel. `⚠️ unmaintained`
- [automaker](https://github.com/AutoMaker-Org/automaker) - Kanban board that turns tickets into working code, each card in its own worktree with tests run and committed automatically.
- [bb](https://github.com/get-bb/bb) - Self-controlling agentic IDE that orchestrates agents in live threads from desktop, web, CLI, or HTTP API.
- [Camelot](https://github.com/T0ha/camelot) - Kanban-based coding agent orchestrator in Elixir, built on KISS.
- [Cate](https://github.com/0-AI-UG/cate) - Desktop app that runs terminals, agent panels, editors, and browsers on an infinite zoomable canvas.
- [cc-haha](https://github.com/NanmiCoder/cc-haha) - Desktop Claude Code workbench with multi-session search, worktree launching, diff review, subagent visualisation, and chat-app integrations. `Backends: Claude Code`
- [CCB (claude_codex_bridge)](https://github.com/SeemSeam/claude_codex_bridge) - Multi-agent TUI that coordinates 16 CLI agent families in visible, take-over-able workflows, with a mobile companion. `Backends: Codex, Claude Code, Gemini, Kimi, Qwen, Cursor, and more`
- [ccmanager](https://github.com/kbwo/ccmanager) - CLI and TUI session manager across worktrees with auto-approval of safe prompts and devcontainer support. `Backends: Claude Code, Gemini CLI, Codex, Cursor Agent, Copilot CLI, Cline, OpenCode`
- [ccswarm](https://github.com/nwiizo/ccswarm) - Rust workflow engine that runs plan, consensus, implement, review, fix, with worktree isolation and audit trails. `Backends: Claude Code, Codex`
- [Claude Code Agent Farm](https://github.com/Dicklesworthstone/claude_code_agent_farm) - Runs 20+ Claude Code agents in parallel for bug-fixing sweeps with lock-based coordination. `Backends: Claude Code`
- [Claude Code UI](https://github.com/siteboon/claudecodeui) - Desktop, mobile, and web UI to view and manage active sessions remotely. `Backends: Claude Code, Cursor CLI, Codex`
- [Claude Squad](https://github.com/smtg-ai/claude-squad) - Terminal app that runs several agents at once, each in its own tmux session and worktree, with a shared diff view. `Backends: Claude Code, Codex, OpenCode, Amp, Aider, Gemini`
- [claude-code-by-agents](https://github.com/baryhuang/claude-code-by-agents) - Desktop app and API for multi-agent Claude Code orchestration. Coordinate local and remote agents through @mentions. `Backends: Claude Code`
- [claudectl](https://github.com/mercurialsolo/claudectl) - Swarm orchestration for Claude Code with a local "brain" that steers agents from your stated preferences. `Backends: Claude Code`
- [claw-orchestrator](https://github.com/Enderfga/claw-orchestrator) - Runs five agent CLIs as one runtime with persistent sessions, multi-agent "councils," an OpenAI-compatible endpoint, and an MCP server. `Backends: Claude Code, Codex, Antigravity, Cursor Agent, OpenCode`
- [CLI Agent Orchestrator](https://github.com/awslabs/cli-agent-orchestrator) - AWS Labs supervisor that coordinates multiple coding CLIs in isolated tmux sessions. `Backends: Kiro, Claude Code, Codex, Antigravity, Copilot, OpenCode, Cursor, and more`
- [cmux (craigsc)](https://github.com/craigsc/cmux) - Bash tool that runs a fleet of Claude Code agents on the same repo, one worktree each. `Backends: Claude Code`
- [cmux (manaflow)](https://github.com/manaflow-ai/cmux) - Ghostty-based macOS terminal with vertical tabs built for multitasking across many agents.
- [Code Conductor](https://github.com/ryanmac/code-conductor) - GitHub-native orchestration for parallel Claude Code sub-agents without merge conflicts. `Backends: Claude Code`
- [codex-orchestrator](https://github.com/kingbootoshi/codex-orchestrator) - Delegates tasks to Codex agents over tmux, driven by a Claude Code orchestrator. `Backends: Codex, Claude Code`
- [CodexMonitor](https://github.com/Dimillian/CodexMonitor) - Native macOS app for monitoring and driving many Codex sessions. `Backends: Codex`
- [comet](https://github.com/zeronsh/comet) - Cross-device control plane that syncs sessions through an always-on daemon. `Backends: Claude Code, Codex, Cursor, Grok, Hermes, Pi`
- [Concord MCP](https://github.com/Get-Concord-AI/concord-mcp) - Live messaging so agents on the same repo see which files each other has claimed before editing. `Backends: Claude Code, Codex, Cursor, Gemini CLI, Grok Build`
- [Conductor (Microsoft)](https://github.com/microsoft/conductor) - CLI for defining and running multi-agent workflows on the Copilot SDK and Anthropic Agent SDK. `Backends: Copilot, OpenAI, Claude`
- [Crystal](https://github.com/stravu/crystal) - Desktop app for parallel Codex and Claude Code sessions in worktrees. Replaced by the closed-source Nimbalyst. `⚠️ unmaintained`
- [dev-3.0](https://github.com/h0x91b/dev-3.0) - "Mission control for the one-person studio." Kanban, worktrees, and a tmux fleet runner. `Backends: Claude Code, Codex, Gemini CLI, OpenCode`
- [dmux](https://github.com/standardagents/dmux) - Dev-agent multiplexer that runs agents in isolated worktrees over tmux.
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Desktop app combining orchestration with automations, kanban, and MCP servers.
- [Emdash](https://github.com/generalaction/emdash) - Agentic dev environment running multiple agents in parallel worktrees, locally or over SSH. `Backends: Claude Code, Codex, Cursor, OpenCode, Amp, Devin, Droid, Copilot`
- [Executive](https://github.com/ncr5012/executive) - Real-time dashboard for orchestrating many Claude Code sessions. `Backends: Claude Code` `⚠️ unmaintained`
- [factory-factory](https://github.com/purplefish-ai/factory-factory) - Workspace-based environment for running multiple Claude Code and Codex sessions in parallel. `Backends: Claude Code, Codex`
- [FleetCode](https://github.com/built-by-as/FleetCode) - Lightweight control pane for running CLI coding agents in parallel. `Backends: Claude Code, Codex`
- [frankenterm](https://github.com/Dicklesworthstone/frankenterm) - Terminal hypervisor for agent swarms: real-time WezTerm pane capture, state-machine pattern detection, and a JSON API to coordinate fleets.
- [Ghostex](https://github.com/maddada/Ghostex) - Native macOS workspace with low-RAM Ghostty terminals, embedded browser and editor, kanban, and mobile access.
- [golutra](https://github.com/golutra/golutra) - Desktop app to run and monitor a fleet of agents in parallel with long-running workflows. Source-available under BSL. `Backends: Codex, Claude Code, OpenClaw`
- [Happy](https://github.com/slopus/happy) - Start a session locally and control it from your phone, end-to-end encrypted, with voice. `Backends: Claude Code, Codex`
- [harness (majiayu000)](https://github.com/majiayu000/harness) - Rust control plane for fleets of parallel agents with policy, cross-agent review, and observability. `Backends: Claude Code, Codex`
- [hcom](https://github.com/aannoo/hcom) - Lets Claude Code, Codex, and other CLI agents message, watch, and spawn each other across terminals, with a live dashboard.
- [herdr](https://github.com/herdrdev/herdr) - Background runtime that owns agent terminals. Sessions survive reboot and agents spawn panes and message each other over a socket API.
- [Hive](https://github.com/morapelker/hive) - Project and worktree manager built for multitasking with agents.
- [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril) - Plan-based agent lifecycle with verification gates and self-improving memory.
- [Kaban](https://github.com/kaban-board/kaban) - Minimal terminal kanban for coding agents. `⚠️ unmaintained`
- [KanDev](https://github.com/kdlbs/kandev) - Self-hostable kanban dev environment that orchestrates agents, reviews changes, and opens PRs. `Backends: any ACP agent`
- [Kangentic](https://github.com/Kangentic/kangentic) - Desktop kanban where dragging a card starts and tracks an agent. `Backends: Claude Code, Codex, Gemini CLI, Antigravity, OpenCode, Droid, Cursor, Copilot, Aider, Ollama`
- [KanVibe](https://github.com/rookedsysc/kanvibe) - Keyboard-first desktop kanban with embedded terminals, worktrees, and hook-driven task tracking.
- [Maestro](https://github.com/RunMaestro/Maestro) - Desktop conductor for running and monitoring many agent sessions.
- [ness](https://github.com/ness-dev/ness) - IDE for coding with agents where each git worktree is a tab, with status icons for working, waiting, and blocked.
- [Nimbalyst](https://github.com/nimbalyst/nimbalyst) - Visual workspace for running agents in parallel with visual diff editing. The successor to Crystal, now open source under MIT. `Backends: Claude Code, Codex, OpenCode`
- [NTM](https://github.com/Dicklesworthstone/ntm) - Named Tmux Manager: spawns and tiles Claude, Codex, and Gemini agents across tmux panes with a command palette.
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) - Teams-first multi-agent orchestration layer for Claude Code with staged pipelines. `Backends: Claude Code`
- [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) - The same author's workflow layer for Codex CLI: hooks, agent teams, and status dashboards. `Backends: Codex`
- [omg.dev](https://github.com/BennyKok/omg.dev) - Parallel-agent harness with a mobile client.
- [Omnara](https://github.com/omnara-ai/omnara) - Open-source alternative to Claude Managed Agents: a command centre across web, mobile, and terminal with permission prompts routed to you.
- [Omnigent](https://github.com/omnigent-ai/omnigent) - Meta-harness: one orchestration layer over six agent harnesses, so you can swap harnesses without rewriting, enforce policy and sandboxing, and collaborate from any device. `Backends: Claude Code, Codex, Cursor, OpenCode, Hermes, Pi`
- [openchamber](https://github.com/openchamber/openchamber) - Workspace for running, supervising, and reviewing agent work across desktop, browser, editor, and mobile, with per-run worktrees.
- [OpenKanban](https://github.com/TechDufus/openkanban) - Terminal kanban board for orchestrating agents.
- [OpenSwarm](https://github.com/Intrect-io/OpenSwarm) - Autonomous "AI dev team" orchestrator with Discord control and Linear integration. `Backends: Claude Code`
- [Operator](https://github.com/iishyfishyy/operator-oss) - Run many sessions in parallel across every project from one screen, local-first and worktree-isolated. `Backends: Claude Code, Codex`
- [Orca](https://github.com/stablyai/orca) - Fans one prompt across several agents, each in its own worktree, then compares and merges the winner. Desktop, mobile, and remote runtime. `Backends: Codex, Claude Code, OpenCode, Pi`
- [Ouijit](https://github.com/ouijit/ouijit) - Kanban board and terminals wired by lifecycle hooks, per-task worktrees, and optional VM sandboxing.
- [Paseo](https://github.com/getpaseo/paseo) - Self-hosted daemon with desktop, mobile, web, and CLI clients, voice mode, and no telemetry. `Backends: Claude Code, Codex, Copilot, OpenCode, Pi`
- [Proliferate](https://github.com/proliferate-ai/proliferate) - Agent IDE that runs sessions locally or in the cloud, with reusable workflows.
- [qm](https://github.com/yc-software/qm) - Y Combinator's multiplayer harness: an isolated workspace per teammate, shared Slack channels, driven from the web.
- [Sculptor](https://github.com/imbue-ai/sculptor) - Desktop app that runs agents in parallel Docker containers with a pairing mode to sync work into your IDE. By Imbue. `Backends: Claude Code, Pi, any terminal agent`
- [Squad (bradygaster)](https://github.com/bradygaster/squad) - Copilot-based lead, frontend, backend, and tester agents that live in the repo as files, with knowledge compounding through committed decisions. `Backends: Copilot`
- [stagewise](https://github.com/stagewise-io/stagewise) - Open-source agentic IDE that creates and orchestrates agents with live previews and git workflows. Bring your own key.
- [Superset](https://github.com/superset-sh/superset) - Agentic IDE that runs 100+ agents in parallel worktrees using your own subscriptions. Elastic License. `Backends: Claude Code, Codex, Copilot, Cursor Agent, Gemini CLI, Mistral Vibe, OpenCode, and more`
- [t3code](https://github.com/pingdotgg/t3code) - Harness control surface as web, mobile, or desktop app. `Backends: Claude Code, Codex, Cursor, Grok Build, OpenCode`
- [Termic](https://github.com/simion/termic) - Open-source Conductor alternative that spawns real CLI binaries, one worktree per agent.
- [Terragon OSS](https://github.com/terragon-labs/terragon-oss) - Source of the remote background-agent orchestrator, released when the company shut down in February 2026. `⚠️ unmaintained`
- [Toad](https://github.com/batrachianai/toad) - Unified terminal interface for running several CLI agents.
- [Traycer](https://github.com/traycerai/traycer) - Bring-your-own-agent workspace with shared context across models, agent-to-agent messaging, and shareable boards.
- [ultraswarm](https://github.com/fubak/ultraswarm) - Multi-CLI swarm orchestrated by Claude Code: external CLIs code in isolated worktrees, Claude verifies and merges. `Backends: Claude Code and others`
- [uzi](https://github.com/devflowinc/uzi) - CLI for running large numbers of agents in parallel worktrees. `⚠️ unmaintained`
- [Vibe Kanban](https://github.com/BloopAI/vibe-kanban) - Kanban board to plan, run, and review many agent tasks, each in its own worktree, with built-in code review and PR creation. Bloop has shut down and the project is now community-maintained. `Backends: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, Qwen Code`
- [Wit](https://github.com/amaar-mc/wit) - Coordination protocol that declares intent, locks the functions being touched via Tree-sitter, and detects conflicts before code is written. `⚠️ unmaintained`
- [Xum](https://github.com/coder/xum) - Coder's desktop app for isolated parallel agentic work across local, worktree, and SSH workspaces. Formerly Mux. `Backends: Claude, GPT, Grok, Ollama, OpenRouter`

## Isolation: worktrees and sandboxes

Give each agent its own branch, container, or VM so many can work at once safely.

- [Agent Executor (ax)](https://github.com/google/ax) - Google's open-source distributed agent runtime.
- [agent-sandbox](https://github.com/mattolson/agent-sandbox) - Local environment with minimal filesystem access, a network firewall, and secret injection for agents. `Backends: Claude Code, Codex, Gemini, OpenCode, Copilot`
- [agent-worktree](https://github.com/nekocode/agent-worktree) - Git worktree workflow tool for isolated, parallel agent environments.
- [agentree](https://github.com/AryaLabsHQ/agentree) - Create and manage isolated git worktrees for coding agents. Single purpose.
- [AIO Sandbox](https://github.com/agent-infra/sandbox) - All-in-one Docker sandbox with browser, shell, filesystem, MCP, and VS Code Server.
- [Background Agents (Daytona)](https://github.com/jamesmurdza/background-agents) - Building-block packages for running coding agents in isolated Daytona sandboxes: terminal, git, jobs, credentials, skills.
- [BoxLite](https://github.com/boxlite-ai/boxlite) - MicroVM light enough to embed on a laptop and elastic enough for a cloud of agents.
- [claudebox](https://github.com/numtide/claudebox) - "Responsible Claude Code YOLO": a sandboxed environment for running Claude Code with permissions off. `⚠️ unmaintained`
- [Cleanroom](https://github.com/buildkite/cleanroom) - Buildkite's policy-controlled Firecracker microVM with deny-default egress and brokered secrets.
- [Cloudflare Sandbox SDK](https://github.com/cloudflare/sandbox-sdk) - Sandboxed containers on Cloudflare's edge for isolating agent execution.
- [code-airlock](https://github.com/Trivo25/code-airlock) - Runs an agent unattended inside a disposable microVM, with its work committed to git so you review from the host.
- [code-on-incus](https://github.com/mensfeld/code-on-incus) - Gives each agent its own Incus system container with root, systemd, and Docker.
- [Container Use](https://github.com/dagger/container-use) - Each agent gets its own container and git branch. By Dagger. `Backends: any MCP agent`
- [coop](https://github.com/AndrewDryga/coop) - Runs agents in isolated workspaces with controlled access to repos and credentials, for interactive and unattended work.
- [E2B](https://github.com/e2b-dev/e2b) - Open-source Firecracker microVM sandboxes that start in under 200ms. Framework-agnostic.
- [Fence](https://github.com/fencesandbox/fence) - Container-free sandbox that restricts network and filesystem for commands.
- [Git Worktree Runner (gtr)](https://github.com/coderabbitai/git-worktree-runner) - Portable worktree CLI that automates per-branch setup with AI tool integration.
- [Katakate (k7)](https://github.com/Katakate/k7) - Self-hosted VM sandbox infrastructure with CLI, API, and Python SDK.
- [Kubernetes Agent Sandbox](https://github.com/kubernetes-sigs/agent-sandbox) - Official Kubernetes SIG custom resource for declarative isolated agent runtimes, backed by gVisor or Kata.
- [Landrun](https://github.com/Zouuup/landrun) - Runs any Linux process in an unprivileged Landlock sandbox, kernel-native.
- [Leash](https://github.com/strongdm/leash) - StrongDM's container wrapper that enforces Cedar policies on agent activity.
- [LLM Sandbox](https://github.com/vndee/llm-sandbox) - Python library for running LLM-generated code in isolation, with an MCP server.
- [Microsandbox](https://github.com/superradcompany/microsandbox) - Local-first microVM runtime with hardware isolation and fast pause and resume. `Backends: Claude Code, Cursor, Codex, Gemini CLI, Copilot`
- [Moru](https://github.com/moru-ai/moru) - Runs each agent session in its own Firecracker microVM in the cloud. `⚠️ unmaintained`
- [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) - Policy-driven sandbox enforcing filesystem, syscall, and network constraints at the kernel level. `Backends: Claude Code, Codex, Cursor, OpenCode`
- [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) - Alibaba's sandbox platform with multi-language SDKs, unified Docker and Kubernetes APIs, and pluggable gVisor, Kata, or Firecracker isolation.
- [packnplay](https://github.com/obra/packnplay) - Launches Claude Code, Codex, or Gemini in per-worktree Docker containers with dev-container management. By Jesse Vincent. `Backends: Claude Code, Codex, Gemini CLI`
- [Parallel Code](https://github.com/johannesjo/parallel-code) - Dispatches agents in parallel, one worktree and branch each. `Backends: Claude Code, Codex, Gemini CLI, Copilot CLI, Antigravity CLI`
- [parallel-worktrees](https://github.com/SpillwaveSolutions/parallel-worktrees) - Claude Code skill for parallel worktree workflows. `Backends: Claude Code` `⚠️ unmaintained`
- [Sandbox Runtime (srt)](https://github.com/anthropics/sandbox-runtime) - Anthropic's container-free OS-level sandboxing (Seatbelt on macOS, bubblewrap on Linux) for Claude Code and MCP servers.
- [Sandcastle](https://github.com/mattpocock/sandcastle) - TypeScript library for orchestrating agents inside Docker, Podman, or Vercel sandboxes.
- [smolvm](https://github.com/smol-machines/smolvm) - Portable libkrun microVM with deny-by-default egress and brokered secrets.
- [SmolVM (Celesto)](https://github.com/CelestoAI/SmolVM) - Persistent secure computer for long-running agents on Firecracker and QEMU. Unrelated to smolvm above.
- [Vercel Sandbox](https://github.com/vercel/sandbox) - Vercel's ephemeral compute primitive for untrusted or agent-generated code.
- [workmux](https://github.com/raine/workmux) - Pairs git worktrees with tmux, kitty, WezTerm, or Zellij windows for parallel agent work.
- [Worktrunk](https://github.com/max-sixty/worktrunk) - Makes worktrees as easy as branches, built for running agents in parallel. `Backends: anything you can launch from a shell`
- [yolobox](https://github.com/finbarr/yolobox) - Container wrapper that grants full sudo inside while keeping the host home directory out of reach.

## Backlog and spec layer

What feeds the factory: issue trackers built for agents, PRD-to-task tools, and spec-driven methods.

- [Agent Kernel](https://github.com/oguzbilgic/agent-kernel) - A minimal kernel of markdown files that makes any coding agent stateful across sessions.
- [Agent OS](https://github.com/buildermethods/agent-os) - Injects your codebase standards into spec writing so different agents produce consistent code. By Builder Methods.
- [AgentSPEX](https://github.com/ScaleML/AgentSPEX) - UIUC's declarative YAML spec language for agent workflows with typed steps, branching, loops, and a Docker sandbox with checkpointing.
- [AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows) - AWS Labs' workflow-steering rules for an AI-driven development life cycle. `Backends: Kiro, Cursor, Cline, Claude Code`
- [Archon](https://github.com/coleam00/Archon) - "The first open-source harness builder for AI coding." Combines agent steps with scripts, validation gates, approvals, and isolated worktrees. By Cole Medin.
- [autonomous-coding quickstart](https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding) - Anthropic's demo of the initializer-plus-coding-agent harness: session one writes a feature list, later sessions make incremental progress via files and git. `Backends: Claude Agent SDK`
- [Backlog.md](https://github.com/MrLesk/Backlog.md) - Stores the backlog as markdown task files in the repo with a CLI and terminal kanban shared by humans and agents. `Backends: Claude Code, Codex, Gemini CLI, Kiro, Cursor`
- [beadboard](https://github.com/jordanhindo/beadboard) - Multi-agent orchestration and communication built on Beads.
- [Beads](https://github.com/gastownhall/beads) - Git-backed, dependency-aware issue tracker built as agent memory. The work queue behind Gas Town. By Steve Yegge. `Backends: any CLI agent`
- [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) - Planning agents (analyst, PM, architect) write PRDs and architecture docs, then a scrum master agent turns them into detailed stories for implementation agents.
- [Buildomator](https://github.com/buildomator/buildomator) - Claude Code-native successor to GSD with MCP-backed project state, cross-session memory, and drift detection. `Backends: Claude Code`
- [cc-sdd](https://github.com/gotalab/cc-sdd) - Kiro-style spec-driven harness (requirements, design, tasks, steering) for eight agent platforms. `Backends: Claude Code, Codex, Cursor, Copilot, Windsurf, OpenCode, Gemini CLI, Antigravity`
- [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) - Parses a PRD into a dependency-aware task graph and exposes next-task tools for agents to work through.
- [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin) - Every's plugin. The `/lfg` command runs plan, execute, simplify, review, browser-test, commit, PR, and watch CI with a bounded repair loop. `Backends: Claude Code, Codex, Cursor`
- [fab-kit](https://github.com/sahil87/fab-kit) - Structured, spec-driven workflow for coding agents. Go.
- [fspec](https://github.com/sengac/fspec) - Spec-driven multi-agent harness built explicitly as infrastructure for the dark factory model.
- [Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done) - Discuss, plan, execute, verify per phase, each in a fresh context window with atomic commits. Archived. `⚠️ unmaintained`
- [linear-beads](https://github.com/nikvdp/linear-beads) - A simpler alternative to Beads that uses Linear itself as the storage backend.
- [OpenSpec](https://github.com/Fission-AI/OpenSpec) - Splits `specs/` (current truth) from `changes/` (proposals), each change with its own proposal, design, and tasks.
- [perles](https://github.com/zjrosen/perles) - Query language, dependency views, and multi-view kanban TUI for Beads, doubling as a multi-agent control plane.
- [Roast](https://github.com/Shopify/roast) - Shopify's Ruby DSL for structured AI workflows that interleave deterministic steps with agentic ones. `Backends: Claude Code, Pi`
- [spec-kit](https://github.com/github/spec-kit) - GitHub's toolkit for spec-driven development: spec, plan, tasks, code, with a project constitution. Works across 30+ agents.
- [statewright](https://github.com/statewright/statewright) - State machine guardrails that constrain which tools an agent can call in each workflow phase.
- [Superpowers](https://github.com/obra/superpowers) - Skills framework and methodology for Claude Code: brainstorm, write plan, execute plan, TDD, systematic debugging. `Backends: Claude Code`
- [Tessl SDD tile](https://github.com/tesslio/spec-driven-development-tile) - Open methodology tile that makes an agent interview you, write specs, wait for approval, then implement against them.
- [Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) - Governed Codex skill harness that routes skills through requirement freeze, plan approval, execution, and verification evidence. `Backends: Codex`

## Review and merge gates

What checks agent output before it ships.

- [adamsreview](https://github.com/adamjgmiller/adamsreview) - Multi-lens review pipeline for Claude Code: deep review by Claude or Codex, auto-fix loop, interactive walkthrough. `Backends: Claude Code, Codex`
- [AgentCheck](https://github.com/devlyai/AgentCheck) - Five-reviewer (logic, security, style, guidelines, product) review subagent for Claude Code. `⚠️ unmaintained`
- [claude-code-security-review](https://github.com/anthropics/claude-code-security-review) - Anthropic's semantic security-review GitHub Action for diffs, with false-positive filtering. `⚠️ unmaintained`
- [Codex Security](https://github.com/openai/codex-security) - OpenAI's CLI and SDK that runs Codex to find, validate, and fix security vulnerabilities.
- [deepsec](https://github.com/vercel-labs/deepsec) - Vercel Labs' security harness where agents find and validate vulnerabilities before code ships.
- [Harmonist](https://github.com/GammaLabTechnologies/harmonist) - Protocol enforcement as a mechanical gate: hooks check every code-changing turn for required reviewers, memory updates, and supply-chain integrity before it completes.
- [Kodus](https://github.com/kodustech/kodus-ai) - Self-hosted, model-agnostic code review agent with plain-English review guidelines. Bring your own key.
- [open-code-review](https://github.com/alibaba/open-code-review) - Alibaba's review CLI: deterministic rule pipelines plus an LLM agent, with line-level comments.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - The original open-source PR reviewer, now community-run after Qodo's commercial pivot. Review, suggestions, and Q&A.
- [reviewdog](https://github.com/reviewdog/reviewdog) - Posts any linter's output as inline PR comments. Not AI itself, but a common gate layer in factories.
- [sentrux](https://github.com/sentrux/sentrux) - Architectural sensor that scores structural health and exposes a CI-friendly gate to catch regression.
- [software-factory-reliability](https://github.com/sjarmak/software-factory-reliability) - Executable reliability patterns and fault-injection drills for factories. Companion to "Software Factories Are Distributed Systems."

## Multi-agent coding frameworks

Frameworks that model a software team as a set of agents. Older than the factory term, but the same idea.

- [Agency Swarm](https://github.com/VRSEN/agency-swarm) - Role-based agent teams with defined communication flows on the OpenAI Agents SDK.
- [Agent Teams](https://github.com/777genius/agent-teams-ai) - Desktop app that gives high-level commands to coding-agent teams across 75+ providers, with inter-agent messaging and built-in review.
- [AgentsMesh](https://github.com/AgentsMesh/AgentsMesh) - Remote workstations with PTY sandboxes and worktree isolation, coordinating through channels, with a kanban tied to MRs and PRs.
- [AutoGen](https://github.com/microsoft/autogen) - Microsoft's multi-agent framework. In maintenance mode, new work goes to Agent Framework. `⚠️ unmaintained`
- [buzz](https://github.com/block/buzz) - Block's agents as first-class members of shared channels with their own keys and audit trails, over a Nostr relay you own. `Backends: Claude Code, Codex, Goose`
- [ChatDev](https://github.com/OpenBMB/ChatDev) - Simulates a software company where CEO, CTO, programmer, and tester agents design, code, test, and document.
- [Claude Flow (Ruflo)](https://github.com/ruvnet/ruflo) - Runs Claude Code and other CLIs as coordinated swarms with shared memory and task routing.
- [ClawTeam](https://github.com/HKUDS/ClawTeam) - Agents spawn and manage their own teammates, coordinating over file-based or P2P inboxes across tmux worktrees.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Role-playing agent crews plus event-driven flows for deterministic steps.
- [DeerFlow](https://github.com/bytedance/deer-flow) - ByteDance's long-horizon agent harness on LangGraph with isolated sub-agent contexts, persistent memory, and sandboxed execution.
- [Devika](https://github.com/stitionai/devika) - Open Devin alternative that breaks instructions into steps, researches, and writes code. `⚠️ unmaintained`
- [GPT-Engineer](https://github.com/AntonOsika/gpt-engineer) - Spec to code from the CLI. The precursor to Lovable. Archived. `⚠️ unmaintained`
- [GPT-Pilot](https://github.com/Pythagora-io/gpt-pilot) - Builds an app through spec writer, architect, developer, reviewer, and debugger agents. The README reports malicious code was found in the repo between August 2025 and June 2026; rotate credentials if you ran it then. `⚠️ unmaintained`
- [HarnessRouter](https://github.com/HarnessRouter/harnessrouter) - Self-hosted unified API for running several harnesses through one control plane. `Backends: Codex, Claude Code, Hermes, Pi, DeepSeek Harness`
- [Hive (Aden)](https://github.com/aden-hive/hive) - Compiles multi-agent objectives into deterministic execution DAGs with crash recovery, cost enforcement, and human-in-the-loop.
- [kodo](https://github.com/ikamensh/kodo) - Directs agents through work cycles where a separate agent independently verifies each result.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Gives agents PM, architect, engineer, and QA roles following SOPs to turn a one-line requirement into a project. `⚠️ unmaintained`
- [multi-agent-shogun](https://github.com/yohey-w/multi-agent-shogun) - A shogun, karo, and ashigaru hierarchy running up to 10 agents over tmux.
- [NXTG-Forge Orchestrator](https://github.com/nxtg-ai/forge-orchestrator) - Research, plan, delegate, adversarially verify, deploy across Claude Code, Codex, and Gemini CLI on one repo, with file locking and drift detection.
- [Open Multi-Agent](https://github.com/open-multi-agent/open-multi-agent) - Decomposes a goal into a task DAG, parallelises independent nodes, and gates consequential actions on approval.
- [OpenAI Swarm](https://github.com/openai/swarm) - Educational agents-and-handoffs framework, superseded by the Agents SDK. `⚠️ unmaintained`
- [ORCH](https://github.com/oxgeneral/ORCH) - CLI runtime that manages agents as typed teams with an explicit state machine.
- [Orkas](https://github.com/Orkas-AI/Orkas) - A commander agent decomposes goals and dispatches specialists with isolated skills and memory.
- [OtoDock](https://github.com/OtoDock/oto-dock) - Self-hosted "company OS" where agents work in departments and delegate to each other unwatched. Source-available.
- [paperclip](https://github.com/paperclipai/paperclip) - Orchestration for "zero-human companies": agents wake on heartbeats, claim tickets, and are governed by org charts, budgets, and approval gates.
- [scion](https://github.com/GoogleCloudPlatform/scion) - Google Cloud's orchestration testbed that runs agents in parallel isolated containers with dynamic coordination.
- [Swarms](https://github.com/kyegomez/swarms) - Sequential, concurrent, and hierarchical multi-agent orchestration.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Takes a GitHub issue and tries to fix it with the model of your choice. From Princeton and Stanford.
- [tutti](https://github.com/nutthouse/tutti) - Config-driven workflows that pass typed artifacts between agents, each in its own worktree.

## Hosted and commercial factories

Products you pay for or cannot self-host. `💰` throughout.

### Factory products

- [8090 Software Factory](https://8090.inc) - Governed workspace where people and agents run the full SDLC, sold as an "SDLC control plane" for regulated enterprises. EY adopted it in March 2026. `💰`
- [Amika](https://amika.dev) - A sandboxed cloud computer for every agent, plus automated or human-in-the-loop workflows. Open core at [gofixpoint/amika](https://github.com/gofixpoint/amika). `💰`
- [Atlassian Rovo Dev](https://www.atlassian.com/software/rovo) - Agent that plans, writes, and reviews code from a CLI and inside Bitbucket and GitHub, bundled with Jira context. `💰`
- [Augment Cosmos](https://www.augmentcode.com/blog/cosmos-now-in-public-preview) - Coordinates agents across a whole engineering team from spec to verification. Public preview June 2026. Auggie CLI is open source. `💰`
- [Blitzy](https://blitzy.com) - Enterprise factory that orchestrates thousands of agents over multi-hour runs to generate most of an implementation from a repo and spec. `💰`
- [Charlie Labs](https://charlielabs.ai) - Charlie delivers end-to-end PRs. "Daemons" are always-on processes watching PRs, issues, CI, and Sentry. `💰`
- [CodeAgentSwarm](https://codeagentswarm.com) - macOS and Windows workspace running six agent CLIs side by side with an MCP-updated kanban board. Closed source. `💰`
- [Conductor](https://conductor.build) - Mac app from Melty Labs that runs parallel Claude Code and Codex agents in isolated worktrees. Closed source. `💰`
- [defract](https://defract.dev) - macOS harness for Claude Code that drives story, design, architecture, implementation, and review with visual review gates. Free, closed source.
- [Factory.ai](https://factory.ai) - Specialized "droids" (code, review, docs, test, knowledge) coordinated by a dispatcher across the SDLC. The company that put "software factory" on the map. `💰`
- [Fleet](https://fleetctl.ai) - Self-hosted control plane for a fleet of Claude Code agents against GitHub, with approval gates and audit trails. `💰`
- [GitLab Duo Agent Platform](https://about.gitlab.com/blog/introduction-to-gitlab-duo-agent-platform/) - Agents with access to an org's full GitLab context (issues, MRs, pipelines, security findings) that can open MRs under guardrails. GA January 2026. `💰`
- [Hoplite](https://hoplite.sh) - Moves your local agent setup (sessions, MCP servers, CLIs) to the cloud for parallel runs. `💰`
- [JetBrains Air](https://www.infoworld.com/article/4142675/jetbrains-launches-air-and-junie-cli-for-ai-assisted-development.html) - Workspace for running Junie, Claude Agent, Codex, and Gemini CLI in parallel, each in its own container or worktree. Announced March 2026. `💰`
- [LightSprint](https://lightsprint.ai) - "Software factory for product teams." Non-engineers run parallel cloud agents with PR preview environments. `💰`
- [Linear coding sessions](https://linear.app/changelog/2026-06-11-coding-sessions) - Delegate an issue to Linear Agent and it runs Claude Code or Codex in a managed sandbox, drafting a PR on the issue. June 2026. `💰`
- [Meta Muse Code](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/) - Terminal agent for large repos that spins up sub-agents in isolated worktrees, with persistent background agents that report back. Beta August 2026. `💰`
- [Tembo](https://tembo.io) - Connects repos, issues, and observability tools, then runs agents in isolated cloud environments to turn issues and alerts into PRs. Pivoted from Postgres hosting. `💰`
- [Unpeel](https://unpeel.com) - Native macOS app for remote-controlling multiple CLI agent sessions with worktree isolation and iPhone control. `💰`
- [Warp Factories](https://warp.dev/factories) - Prebuilt factory covering triage, spec, implementation, review, and verification. Early access August 2026. `💰`
- [Warp Oz](https://warp.dev) - Orchestration platform running hundreds of sandboxed agents in parallel with audit trails and scheduled workflows. `💰`

### Cloud coding agents

- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) - Anthropic's hosted harness (sandbox, tools, session state, MCP) for long-running agent tasks. `💰`
- [Codex cloud](https://chatgpt.com/codex) - OpenAI's cloud agent clones your repo into a sandbox, writes code, runs tests, and returns a PR. `💰`
- [Cursor Cloud Agents](https://cursor.com/cloud) - Agents on dedicated cloud VMs, reachable from web, Slack, Teams, Linear, and Jira. Formerly Background Agents. `💰`
- [Devin](https://devin.ai) - Cognition's autonomous engineer. A manager Devin can delegate to up to ten worker Devins in parallel. Windsurf was folded into it in 2026. `💰`
- [GitHub Copilot coding agent](https://github.com/features/copilot) - Assign it an issue and it works async in the cloud and opens a PR with a self-review. `💰`
- [Google Antigravity](https://antigravity.google) - Agent-first IDE with a "manager surface" where autonomous agents plan, execute, and verify. `💰`
- [Google Jules](https://jules.google) - Clones a repo to a cloud VM, plans and writes code with Gemini, and opens a PR. `💰`
- [Kiro](https://kiro.dev) - AWS's spec-driven agentic IDE. Successor to Amazon Q Developer. `💰`
- [Mistral Vibe](https://mistral.ai/products/vibe/code/) - Mistral's coding agent that plans, asks for sign-off, then executes across terminal, IDE, and web. `💰`
- [Ona](https://ona.com) - Formerly Gitpod. Sandboxed environments for background agents, acquired by OpenAI in June 2026. `💰`
- [Replit Agent](https://replit.com/agent) - Builds full apps with parallel task execution and kanban tracking. `💰`
- [Sourcegraph Amp](https://ampcode.com) - Agentic coding tool with shareable threads. `💰`
- [Zencoder](https://zencoder.ai) - Routes work across Claude, Gemini, and Codex with parallel agent development. `💰`

### Infrastructure

- [Coder](https://coder.com/solutions/agents) - Self-hosted platform that runs agents inside enterprise-controlled dev environments with spend controls and audit logs. Core is open source. `💰`
- [Daytona](https://daytona.io) - Fast-starting sandboxes for agent code. Went closed source in June 2026. `💰`
- [Kilo](https://kilo.ai) - Open-source, model-agnostic coding agent with a cloud service. Acquired by Anaconda in July 2026.
- [Modal](https://modal.com/solutions/coding-agents) - Serverless gVisor sandboxes for agent workloads at 50,000+ concurrency. `💰`

### Discontinued

Listed so you do not chase dead links elsewhere.

- **Amazon Q Developer** - No new signups since May 2026, end of support April 2027. Use Kiro.
- **Codegen** - Acquired by ClickUp in late 2025.
- **Continue Mission Control** - Acquired by Cursor and shut down June 2026.
- **OpenAI AgentKit / Agent Builder** - Shutting down November 2026.
- **Terragon** - Shut down February 2026. Code released as Terragon OSS above.
- **Windsurf** - Acquired by Cognition and merged into Devin.

## Field reports

First-hand accounts from teams that built and ran a factory.

- [Software Factories And The Agentic Moment](https://factory.strongdm.ai/) - Justin McCarthy, StrongDM, February 2026. Agents write and validate code from specs and scenarios, with a "Digital Twin Universe" of cloned third-party services for testing. No human coding or review.
- [Minions: Stripe's one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) - Alistair Gray, Stripe, February 2026. A blueprint of deterministic and agentic nodes ships over 1,300 PRs a week with no human-written code. Engineers still review.
- [We built a software factory in 10 days](https://ona.com/stories/software-factory-what-we-learned) - Zacharias Malguitou and Lou Bichard, Ona, April 2026. Built a note-taking app entirely through background agents.
- [The self-driving codebase: Building Horizon at WorkOS](https://workos.com/blog/project-horizon) - Matt Dzwonczyk and Jason Barry, WorkOS, May 2026. Webhook-driven agents in cloud sandboxes with humans keeping review.
- [Under the River](https://shopify.engineering/under-the-river) - Javier Moreno and River, Shopify, May 2026. River is a Slack-native agent that writes code, runs tests, and co-authors one in eight merged Shopify PRs.
- [Building a software factory on our scariest code](https://launchdarkly.com/blog/building-a-software-factory-on-our-scariest-code/) - Alexis Georges, LaunchDarkly, August 2026. Rewrote 66,000 lines of legacy React in six weeks with agents behind feature flags.
- [How we built a software factory to drive Astro's GitHub issue count to zero](https://blog.cloudflare.com/astro-issue-triage/) - Cloudflare, August 2026. Isolated subagents in GitHub Actions reproduced, diagnosed, and patched bugs, cutting open issues from 200 to about 30.
- [Building a software factory for AI SDK](https://vercel.com/blog/building-a-software-factory-for-ai-sdk) - Lars Grammel and Eric Dodds, Vercel, August 2026. After four weeks the factory authored 25-35% of merged PRs.
- [Running a Software Factory Efficiently at Uber Scale](https://www.uber.com/us/en/blog/efficient-software-factory/) - Uday Kiran Medisetty, Uber, August 2026. AI tools on 70% of PRs, with a 34% cost cut from model routing and context work.
- [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) - Anthropic. Parallel agents build a compiler end to end.
- [How to Build an AI Software Factory with AI Agents in TypeScript](https://mastra.ai/blog/software-factory) - Sam Bhagwat, Mastra, July 2026. Six agents handle triage, code, validation, release, docs, and monitoring.
- [Announcing Mastra Factory Beta](https://mastra.ai/blog/announcing-mastra-factory-beta) - Sam Bhagwat, Mastra, September 2026. The factory writes 25-35% of Mastra's PRs and closes 50-60% of its issues.
- [Why We Built Our Own Background Agent](https://engineering.ramp.com/post/why-we-built-our-background-agent) - Ramp Engineering, 2026. Inspect verifies its own work with tests, telemetry, and screenshots on Modal sandboxes and grew to over half of merged PRs.
- [I'm Building a Software Factory That Turns My Issues into Merged Code](https://fatihkoc.net/posts/software-factory-side-projects/) - Fatih Koc, 2026. A personal factory for side projects.
- [Building an (almost) fully self-hosted, sandboxed, agentic software factory](https://blog.jakesaunders.dev/building-an-almost-fully-self-hosted-sandboxed-agentic-software-factory/) - Jake Saunders, 2026. Production-verification loop for a self-hosted factory.
- [The Dark Factory Harness: From Autonomous Hill-Climbing to Autonomous Research](https://sotaverified.org/blog/improving-autoresearch-dark-factory-harness) - SOTA Verified, 2026. Combines Karpathy's autoresearch idea with harness engineering.
- [Software Factories in September 2026](https://igoro.com/archive/software-factories/) - Igor Ostrovsky, September 2026. Survey of the public factory write-ups above and what they have in common.
- [Context engineering with Dex Horthy](https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy) - Gergely Orosz, July 2026. Horthy's lights-off factory ran for three months in 2025 before the codebase degraded so badly he shut it down.

## Essays

### Defining the terms

- [The Five Levels: from Spicy Autocomplete to the Dark Factory](https://danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/) - Dan Shapiro, January 2026. Coined "dark factory" for AI coding as level 5 of a five-level scale.
- [The Five Levels](https://simonwillison.net/2026/Jan/28/the-five-levels/) - Simon Willison, January 2026. Notes on Shapiro's scale.
- [How StrongDM's AI team build serious software without even looking at the code](https://simonwillison.net/2026/feb/7/software-factory/) - Simon Willison, February 2026.
- [Software Factories, Light and Dark](https://addyosmani.com/blog/software-factories/) - Addy Osmani, July 2026. Light factories keep judgment upstream; dark factories ship code nobody read and accumulate "comprehension debt."
- [Highlights from my conversation about agentic engineering on Lenny's Podcast](https://simonwillison.net/2026/Apr/2/lennys-podcast/) - Simon Willison, April 2026. Includes StrongDM's "nobody reads the code" policy.
- [Built by Agents, Tested by Agents, Trusted by Whom?](https://law.stanford.edu/2026/02/08/built-by-agents-tested-by-agents-trusted-by-whom/) - Stanford Law CodeX, February 2026.
- [The Dark Factory pattern](https://aipatternbook.com/dark-factory) - Encyclopedia of Agentic Coding Patterns.
- [Inside a Software Factory](https://www.oreilly.com/radar/inside-a-software-factory/) - Paul Iusztin, O'Reilly Radar, September 2026. Factories still need humans for brainstorming, planning, and final review.
- [Nobody Has Actually Built a Software Factory](https://medium.com/@NMitchem/nobody-has-actually-built-a-software-factory-77ffdc0c3efc) - Noah Mitchem, August 2026. Reviewed 21 company write-ups and argues all of them are parallel agents on the process the company already had.
- [When I see people build a software factory](https://levels.io/when-i-see-software-factory) - Pieter Levels, September 2026. Argues factories are over-engineering.
- [Can software factories actually work?](https://newsletter.posthog.com/p/software-factories) - Jina Yoon, PostHog, 2026.
- [How to build a software factory](https://executivesummary.gather.dev/p/how-to-build-a-software-factory) - Peter Bell, March 2026.
- [Software Factory: The End Goal of Agentic Engineering](https://www.mager.co/blog/2026-03-19-software-factory/) - Mager, March 2026.
- [The Software Factory: Why Your Team Will Never Work the Same Again](https://alexop.dev/posts/the-software-factory/) - Alexander Opalic, March 2026.
- [The Agentic Software Factory](https://www.bcgplatinion.com/insights/the-agentic-software-factory) - BCG Platinion, March 2026. The consulting view: operating model and governance matter more than tooling.
- [Agentic Software Factories: The Future Of Programming?](https://marmelab.com/blog/2026/05/22/software-factories-the-future-of-programming.html) - Marmelab, May 2026.
- [Rise of the Software Factory](https://www.terezatizkova.com/blog/rise-of-the-software-factory) - Tereza Tizkova, June 2026. Companion to her AI Engineer World's Fair talk.
- [How to see in the dark factory](https://devinterrupted.substack.com/p/how-to-see-in-the-dark-factory-launchdarklys) - Andrew Zigler with LaunchDarkly CTO Cameron Etezadi, Dev Interrupted, July 2026.
- [The Agentic Software Factory, Explained](https://www.truefoundry.com/blog/software-factory-agentic-enterprise-guide) - Boyu Wang, TrueFoundry, August 2026. Infrastructure, credentials, observability, and cost controls matter as much as agent capability.
- [The dark factory is real, most developers are getting slower, and your org chart is the bottleneck](https://natesnewsletter.substack.com/p/the-5-level-framework-that-explains) - Nate's Newsletter, February 2026.

### Gas Town and Beads

- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) - Steve Yegge, January 2026.
- [Gas Town: from Clown Show to v1.0](https://steve-yegge.medium.com/gas-town-from-clown-show-to-v1-0-c239d9a407ec) - Steve Yegge, 2026.
- [Welcome to the Wasteland: A Thousand Gas Towns](https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f) - Steve Yegge, 2026.
- [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) - Steve Yegge, January 2026.
- [Introducing Beads: A coding agent memory system](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a) - Steve Yegge, 2025.
- [The Death of the Stubborn Developer](https://steve-yegge.medium.com/the-death-of-the-stubborn-developer-b5e8f78d326b) - Steve Yegge, December 2024.
- [A Day in Gas Town](https://www.dolthub.com/blog/2026-01-15-a-day-in-gas-town/) - DoltHub, January 2026.
- [Gas Town's Agent Patterns, Design Bottlenecks, and Vibecoding at Scale](https://maggieappleton.com/gastown) - Maggie Appleton, 2026.

### Loops and harnesses

- [Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/) - Geoffrey Huntley, July 2025. The post that named the loop.
- [everything is a ralph loop](https://ghuntley.com/loop/) - Geoffrey Huntley, January 2026.
- [don't waste your back pressure](https://ghuntley.com/pressure/) - Geoffrey Huntley.
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) - Anthropic, November 2025.
- [Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) - Anthropic, March 2026.
- [Scaling Managed Agents: decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) - Anthropic, 2026.
- [How Anthropic teams use Claude Code](https://claude.com/blog/how-anthropic-teams-use-claude-code) - Anthropic, July 2025.
- [An open-source spec for Codex orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) - OpenAI, 2026.
- [Agent Harness Engineering](https://addyosmani.com/blog/agent-harness-engineering/) - Addy Osmani, April 2026.
- [Long-running Agents](https://addyosmani.com/blog/long-running-agents/) - Addy Osmani.
- [Practical Loop Engineering](https://addyo.substack.com/p/practical-loop-engineering) - Addy Osmani, August 2026.
- [Factory 2.0: From coding agents to software factories](https://factory.ai/news/software-factory) - Factory.ai, 2026.

### Working with parallel agents

- [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) - Simon Willison, October 2025.
- [New trend: programming by kicking off parallel AI agents](https://blog.pragmaticengineer.com/new-trend-programming-by-kicking-off-parallel-ai-agents/) - Gergely Orosz, October 2025.
- [Mitchell Hashimoto's new way of writing code](https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto) - Gergely Orosz, February 2026.
- [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey) - Mitchell Hashimoto, February 2026.
- [Just Talk To It: the no-bs way of agentic engineering](https://steipete.me/posts/just-talk-to-it) - Peter Steinberger, October 2025.
- [Compound Engineering: How Every Codes With Agents](https://every.to/source-code/compound-engineering-how-every-codes-with-agents) - Dan Shipper and Kieran Klaassen, December 2025.
- [Compound Engineering Gets an Upgrade](https://every.to/guides/compound-engineering-gets-an-upgrade) - Kieran Klaassen, 2026.
- [Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) - Armin Ronacher, June 2025.
- [Agentic Coding Things That Didn't Work](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/) - Armin Ronacher, July 2025.
- [Agent Design Is Still Hard](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/) - Armin Ronacher, November 2025.
- [A Year Of Vibes](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/) - Armin Ronacher, December 2025.
- [How to Build an Agent](https://ampcode.com/notes/how-to-build-an-agent) - Thorsten Ball, April 2025.

## Talks and podcasts

- [Gas Town, Beads, and the Rise of Agentic Development with Steve Yegge](https://softwareengineeringdaily.com/podcasts/gas-town-beads-and-the-rise-of-agentic-development-with-steve-yegge/) - Software Engineering Daily.
- [The Limits of Lights-Out Coding with Dexter Horthy](https://www.heavybit.com/library/podcasts/high-leverage/ep-12-the-limits-of-lights-out-coding-with-dexter-horthy) - Heavybit High Leverage, episode 12.
- [The Software Factory: Dex Horthy on Shipping Fast Without AI Slop](https://mastra.ai/podcasts/the-software-factory-dex-horthy-on-shipping-fast-without-ai-slop) - Mastra.
- [Mastra Factory overview](https://youtu.be/iMA-Xkhj7fU) - Mastra, 2026.
- [How Mastra turned its issue backlog into a software factory](https://workos.com/blog/agent-night-mastra-software-factory-demo-recap) - Abhi Aiyer at WorkOS Agent Night, recap by Zack Proser, August 2026.
- [Factory.ai: The A-SWE Droid Army](https://www.latent.space/p/factory) - Latent Space.
- [Notion's Token Town: 5 Rebuilds, 100+ Tools, MCP vs CLIs and the Software Factory Future](https://www.latent.space/p/notion) - Latent Space, with Simon Last and Sarah Sachs.
- [An AI state of the union: dark factories are coming](https://www.lennysnewsletter.com/p/an-ai-state-of-the-union) - Lenny's Newsletter, with Simon Willison.
- [Head of Claude Code: What happens after coding is solved](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) - Lenny's Podcast, with Boris Cherny.
- [Building Claude Code with Boris Cherny](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) - The Pragmatic Engineer, March 2026.
- [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8) - The Pragmatic Summit.
- [The Era of Compound Engineering](https://www.youtube.com/watch?v=_ehJyfHg1Vk) - Kieran Klaassen, AI Engineer.
- [Code with Claude 2026 opening keynote](https://www.youtube.com/watch?v=GMIWm5y90xA) - Anthropic, May 2026.
- [WF2026: Software Factories and Keynotes](https://www.youtube.com/watch?v=htM02KMNZnk) - AI Engineer World's Fair 2026 recording of the Software Factories track, including Jason Liu of OpenAI on getting the most out of Codex and Tereza Tizkova's "Rise of the Software Factory."
- [Shopify's AI Phase Transition](https://www.latent.space/p/shopify) - Latent Space with Shopify CTO Mikhail Parakhin, April 2026.
- [How Stripe built minions, AI coding agents that ship 1,300 PRs weekly from Slack reactions](https://podcasts.apple.com/us/podcast/how-stripe-built-minions-ai-coding-agents-that-ship/id1809663079?i=1000757255000) - How I AI podcast with Steve Kaliski, March 2026.

## Books

- [Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond](https://itrevolution.com/product/vibe-coding-book/) - Gene Kim and Steve Yegge, IT Revolution, October 2025.

## Benchmarks

How to measure whether a factory works.

- [SWE-bench](https://www.swebench.com) - Real GitHub issue resolution. The Verified subset is human-checked.
- [SWE-bench Pro](https://arxiv.org/abs/2509.16941) - Long-horizon software engineering tasks.
- [SWE-Marathon](https://arxiv.org/abs/2606.07682) - Can agents complete ultra-long-horizon software work?
- [Terminal-Bench](https://www.tbench.ai) - Agent tasks in a real terminal.
- [Long-Horizon Terminal-Bench](https://arxiv.org/abs/2607.08964) - The strongest model scores 15.2% at the strict threshold.
- [METR time horizons](https://metr.org/time-horizons/) - The length of task an agent can complete at 50% success, doubling roughly every seven months. See [the original paper](https://arxiv.org/abs/2503.14499).
- [Aider polyglot benchmark](https://github.com/Aider-AI/polyglot-benchmark) - 225 Exercism problems across six languages.

## Related lists

- [awesome-agent-orchestrators](https://github.com/andyrewlee/awesome-agent-orchestrators) - Orchestrators and session managers for coding agents.
- [awesome-cli-coding-agents](https://github.com/bradAGI/awesome-cli-coding-agents) - Terminal-native coding agents and harnesses.
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - Skills, agents, plugins, and tooling for Claude Code.
- [awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) - Harness patterns, evals, memory, permissions, and orchestration.
- [awesome-ralph](https://github.com/snwfdhmp/awesome-ralph) - Everything about the Ralph loop.
- [awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) - Autonomous agents in general.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - MCP servers.
- [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) - Vibe coding references.

## Contributing

Contributions welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. The short version: a project belongs here if it runs, orchestrates, loops, or feeds AI coding agents. A single agent or a prompt collection does not.

## License

[CC0 1.0](LICENSE). Public domain.
