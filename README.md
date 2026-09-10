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
- [Foundry](https://github.com/ai-supervisor-foundry/foundry) - Persistent control plane that resumes agent work across multi-day projects without losing context.
- [Gas Town](https://github.com/gastownhall/gastown) - Steve Yegge's multi-agent orchestrator. A Mayor dispatches work to colonies of 20-30 parallel agents, with Witness and Deacon roles supervising, and Beads as memory. `Backends: Claude Code, Codex, Copilot, Gemini, Cursor, Kiro, Amp, OpenCode, and more`
- [Genie](https://github.com/automagik-dev/genie) - "Wishes in, PRs out." Interviews you, plans, dispatches parallel agents into isolated worktrees, and reviews before showing you the result.
- [HAR](https://github.com/os-factory/har) - Open agent harness (CLI plus MCP) with isolated worktrees and deterministic verification. `Backends: Claude Code, Cursor, Codex, any MCP agent`
- [Human](https://github.com/gethuman-sh/human) - Pipes tickets, docs, designs, and analytics into one pipeline with Claude driving and a human reviewing before ship. `Backends: Claude Code`
- [Inkwell](https://github.com/disler/inkwell-agent-sandboxes-and-software-factory) - The Super Simple Software Factory running on throwaway sandboxed VMs.
- [Kapso](https://github.com/Leeroo-AI/kapso) - Self-improving factory built for measurable objectives, with published results on MLE-Bench and ALE-Bench.
- [Machinist](https://github.com/owainlewis/machinist) - Worker-fleet infrastructure that pulls tasks from ticket queues into isolated workspaces. Accepts any executable that reads a prompt from stdin. `Backends: Codex, Claude Code, any CLI`
- [Miniforge](https://github.com/miniforge-ai/miniforge) - "Designed to behave like a factory, not a chatbot." Policy-as-code governance over autonomous development, written in Clojure.
- [Minimum Viable Factory](https://github.com/ashtilawat/minimum-viable-factory) - Ticket in, deployed web app out. A deliberately small reference implementation.
- [oh-my-symphony](https://github.com/cskwork/oh-my-symphony) - Community fork of Symphony that drives eight coding CLIs from one orchestrator with a terminal kanban and web dashboard. `Backends: Codex, Claude Code, Gemini, Antigravity, Kiro, OpenCode, Pi`
- [OpenFactory](https://github.com/Open-Factory-Digital/openfactory-core) - Tickets in, reviewed pull requests out. Self-hosted, no vendor lock-in.
- [Orbi](https://github.com/orbi-build/orbi) - "The factory that builds and operates AI software factories." GitHub issues in, runnable systems out.
- [Paddock](https://github.com/racecraft-lab/Paddock) - GitHub-issue-driven control plane with isolated sandboxes, governance, artifacts, and human review.
- [Patchmill](https://github.com/rochecompaan/patchmill) - Agent-driven software factory with daily development.
- [software-factory (nicolasmelo1)](https://github.com/nicolasmelo1/software-factory) - Single Rust binary where every rule is written twice: once as prose, once as an enforced check with a mutation test proving it fires.
- [Sgai](https://github.com/sandgardenhq/sgai) - Sandgarden's local factory. Define the outcome in a single `GOAL.md` and a coordinated set of agents builds it, with a web dashboard showing what each agent is doing.
- [Squid](https://github.com/iusztinpaul/squid) - "An opinionated software factory." A Claude Code plugin that turns a feature spec into a reviewed PR through a five-agent pipeline with two human gates. `Backends: Claude Code`
- [Super Simple Software Factory](https://github.com/disler/super-simple-software-factory) - Deterministic Python owns the workflow graph and coding agents are bounded nodes inside it, packaged as one portable skill. By IndyDevDan. `Backends: Pi, Claude Code`
- [SWE-AF](https://github.com/Agent-Field/SWE-AF) - "Autonomous software engineering fleet." One API call plans, codes, tests, and ships a PR. `Backends: Claude Code, OpenCode, Codex`
- [Symphony](https://github.com/openai/symphony) - OpenAI's open spec plus Elixir reference implementation for turning issue-tracker items into isolated, autonomous agent runs. The tracker is the control plane. `Backends: any, demo uses Codex`
- [Taskplane](https://github.com/HenryLach/taskplane) - Multi-agent coding orchestration that describes itself as "more light-factory than dark-factory." Transparency first.

## Ticket-to-PR pipelines

Tools that watch an issue tracker or event stream and dispatch agents to open pull requests.

- [aeon](https://github.com/aeonfun/aeon) - Runs unattended on GitHub Actions, dispatching markdown-defined skills to agent CLIs and healing skills that fail.
- [Alfred](https://github.com/luminik-io/alfred) - Local, scheduler-run fleet of agents driven by GitHub issue labels. `Backends: Claude Code, Codex`
- [another-orchestrator](https://github.com/linuxlewis/another-orchestrator) - An LLM planner reads Linear or GitHub Issues, then a deterministic state machine dispatches headless agents through YAML workflows in isolated worktrees. `Backends: Claude Code, Codex`
- [background-agents](https://github.com/ColeMurray/background-agents) - Runs background coding agents triggered by GitHub, Linear, webhooks, or cron, with attributed PRs.
- [Baton](https://github.com/mraza007/baton) - Daemon that polls GitHub Issues by label, gives each a worktree, and runs Claude Code to open a PR. `Backends: Claude Code`
- [Contrabass](https://github.com/junhoyeo/contrabass) - Go reimplementation of the Symphony pattern. Pulls from Linear, GitHub Issues, or a local board into isolated worktrees.
- [Cyrus](https://github.com/cyrusagents/cyrus) - Background agent that watches issues assigned to it in Linear, GitHub, GitLab, or Slack and works each in its own worktree.
- [factory-agent](https://github.com/BayramAnnakov/factory-agent) - Linear issue to Claude Managed Agents to GitHub PR. About one dollar and three minutes per feature. `Backends: Claude Managed Agents`
- [GitHub Agentic Workflows (gh-aw)](https://github.com/github/gh-aw) - GitHub's own tool. Markdown plus YAML agentic workflows compile to locked-down GitHub Actions with sandboxed agents and validated "safe outputs."
- [Agentics](https://github.com/githubnext/agentics) - Ready-made gh-aw workflows from GitHub Next: CI coach, log watcher, grumpy reviewer, nitpick reviewer.
- [groundcrew](https://github.com/ClipboardHealth/groundcrew) - Dispatches a task backlog to local agents, one sandboxed worktree per task.
- [harness-kanban](https://github.com/Orenoid/harness-kanban) - Cloud kanban for fully containerized agents running around the clock on assigned issues.
- [issue-to-pr-agent](https://github.com/alvarocanoo/issue-to-pr-agent) - Planner, executor, verifier loop on the Claude Agent SDK in a Docker sandbox, with SWE-bench Lite traces. `Backends: Claude Agent SDK`
- [NEEDLE](https://github.com/jedarden/NEEDLE) - Headless orchestrator with an explicit state machine that processes a task queue and dispatches to agent CLIs.
- [no_human](https://github.com/no-human-ai/no_human) - Takes a ticket from Jira, Linear, monday.com, GitHub, or GitLab and drives an agent to a reviewed PR, locally.
- [Open SWE](https://github.com/langchain-ai/open-swe) - Async coding agent you invoke from Slack, a Linear issue, or a GitHub comment. Posts results back.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Self-hosted control center for coding agents with a GitHub resolver: label an issue and it opens a PR. `Backends: own agent, Claude Code, Codex, Gemini, any ACP agent`
- [Sortie](https://github.com/sortie-ai/sortie) - Single Go binary that turns tracker tickets into isolated agent sessions with retries, stall detection, and cleanup. Supports GitHub, GitLab, Gitea, Linear, Jira.
- [Taskuary](https://github.com/ldbumble/taskuary) - Work inbox that triages issues into approval-gated agent runs.
- [Sweep](https://github.com/sweepai/sweep) - The original open-source GitHub issue-to-PR bot. Has since pivoted to a JetBrains plugin. `⚠️ unmaintained`

## Autonomous loops

The "Ralph Wiggum" pattern: feed an agent the same prompt in a loop, with tests as back pressure, until the spec is done. Named by Geoffrey Huntley in July 2025.

- [ralph-wiggum plugin](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum) - Anthropic's official Claude Code plugin. A Stop hook blocks exit and re-feeds the prompt until a completion string or iteration cap. `Backends: Claude Code`
- [afk](https://github.com/alexanderop/afk) - Spec, vertical slices, TDD loops, refactor, agentic QA, multi-agent review. Human judgment only at the edges. `Backends: Claude Code`
- [agent-afk](https://github.com/griffinwork40/agent-afk) - "The coding agent you don't have to watch." Builds, self-verifies, texts you when done, and keeps a decision log.
- [claude-overnight](https://github.com/igdutra/claude-overnight) - Spec-driven overnight runner that implements, QAs, reviews, and opens PRs while you sleep. `Backends: Claude Code`
- [continuous-claude](https://github.com/AnandChowdhary/continuous-claude) - Ralph loop with PRs: runs Claude Code continuously, opens PRs, waits for checks, and merges. `Backends: Claude Code`
- [gralph](https://github.com/frizynn/gralph) - Ralph loop with git-worktree isolation and multi-agent scaling. `Backends: Claude Code, Cursor` `⚠️ unmaintained`
- [lalph](https://github.com/tim-smart/lalph) - Source-agnostic Ralph-style loop.
- [loop-engineering](https://github.com/selmakcby/loop-engineering) - Claude Code skill for a self-running loop gated by a verification check the agent cannot fool, plus a max-turns budget. `Backends: Claude Code`
- [Open Ralph Wiggum](https://github.com/Th0rgal/open-ralph-wiggum) - `ralph "prompt"` starts a loop on any of several backends. `Backends: OpenCode, Claude Code, Codex, Copilot CLI, Cursor Agent, Qwen Code`
- [overnight](https://github.com/yail259/overnight) - Queue Claude Code tasks, run them overnight, wake up to results. `Backends: Claude Code`
- [ralph (snarktank)](https://github.com/snarktank/ralph) - The minimal PRD-driven loop most others copy: read PRD and progress file, do one item, test, commit, repeat. `Backends: Amp, Claude Code` `⚠️ unmaintained`
- [ralph-claude-code](https://github.com/frankbria/ralph-claude-code) - Autonomous Claude Code loop with smarter exit detection than string matching. The most-starred standalone Ralph. `Backends: Claude Code`
- [ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) - Vercel Labs' Ralph loop built on the AI SDK. `⚠️ unmaintained`
- [ralph-orchestrator](https://github.com/mikeyobrien/ralph-orchestrator) - Ralph with a "hat system" of personas, back-pressure gates for tests, lint, and typecheck, and Telegram check-ins. `Backends: Claude Code, Codex, Gemini CLI, Kiro, OpenCode, Copilot CLI, Amp`
- [ralphctl](https://github.com/lukas-grigis/ralphctl) - Generator-evaluator Ralph harness across repos. `Backends: Claude Code, Codex, Copilot`
- [ralphy](https://github.com/michaelshimeles/ralphy) - Bash script that loops an agent until the PRD is complete. `Backends: Claude Code, Codex, OpenCode, Cursor, Qwen, Droid` `⚠️ unmaintained`
- [ralph-loop (syuya2036)](https://github.com/syuya2036/ralph-loop) - Agent-agnostic Ralph that also works with local Ollama models. `⚠️ unmaintained`
- [awesome-ralph](https://github.com/snwfdhmp/awesome-ralph) - Curated list just for the Ralph pattern.

## Parallel session managers and agent kanbans

Run many agent sessions at once, each in its own worktree, and review their output from one place.

- [Agent Deck](https://github.com/asheshgoplani/agent-deck) - One TUI for tracking and switching between many agent sessions. `Backends: Claude Code, Gemini CLI, OpenCode, Codex, Copilot, Crush, Cursor`
- [Agent Orchestrator](https://github.com/Untrivial-ai/agent-orchestrator) - Plan, run, and supervise coding agents from one place. Spawns agents, fixes CI, resolves merge conflicts, and reviews. `Backends: 27 agents including Claude Code, Codex, Cursor, Aider, Copilot, Devin`
- [ai-agent-board](https://github.com/DanWahlin/ai-agent-board) - Drag-and-drop kanban that assigns tasks to agents with streaming output and worktree isolation.
- [ai-fleet](https://github.com/nachoal/ai-fleet) - Simple fleet manager for parallel agents over tmux. `Backends: Claude Code, Codex` `⚠️ unmaintained`
- [amux (andyrewlee)](https://github.com/andyrewlee/amux) - Wrapper-free TUI for parallel agents with worktree support.
- [amux (mixpeek)](https://github.com/mixpeek/amux) - Control plane for an "AI engineering team": shared board, atomic tasks, schedules, self-healing recovery, single Rust binary.
- [Camelot](https://github.com/T0ha/camelot) - Kanban-based coding agent orchestrator in Elixir, built on KISS.
- [ccmanager](https://github.com/kbwo/ccmanager) - CLI and TUI session manager across worktrees with auto-approval of safe prompts and devcontainer support. `Backends: Claude Code, Gemini CLI, Codex, Cursor Agent, Copilot CLI, Cline, OpenCode`
- [ccswarm](https://github.com/nwiizo/ccswarm) - Rust workflow engine that runs plan, consensus, implement, review, fix, with worktree isolation and audit trails. `Backends: Claude Code, Codex`
- [Claude Code Agent Farm](https://github.com/Dicklesworthstone/claude_code_agent_farm) - Runs 20+ Claude Code agents in parallel for bug-fixing sweeps with lock-based coordination. `Backends: Claude Code`
- [Claude Code UI](https://github.com/siteboon/claudecodeui) - Desktop, mobile, and web UI to view and manage active sessions remotely. `Backends: Claude Code, Cursor CLI, Codex`
- [Claude Squad](https://github.com/smtg-ai/claude-squad) - Terminal app that runs several agents at once, each in its own tmux session and worktree, with a shared diff view. `Backends: Claude Code, Codex, OpenCode, Amp, Aider, Gemini`
- [CLI Agent Orchestrator](https://github.com/awslabs/cli-agent-orchestrator) - AWS Labs supervisor that coordinates multiple coding CLIs in isolated tmux sessions. `Backends: Kiro, Claude Code, Codex, Antigravity, Copilot, OpenCode, Cursor, and more`
- [cmux (craigsc)](https://github.com/craigsc/cmux) - Bash tool that runs a fleet of Claude Code agents on the same repo, one worktree each. `Backends: Claude Code`
- [cmux (manaflow)](https://github.com/manaflow-ai/cmux) - Ghostty-based macOS terminal with vertical tabs built for multitasking across many agents.
- [Code Conductor](https://github.com/ryanmac/code-conductor) - GitHub-native orchestration for parallel Claude Code sub-agents without merge conflicts. `Backends: Claude Code`
- [Conductor (Microsoft)](https://github.com/microsoft/conductor) - CLI for defining and running multi-agent workflows on the Copilot SDK and Anthropic Agent SDK. `Backends: Copilot, OpenAI, Claude`
- [Crystal](https://github.com/stravu/crystal) - Desktop app for parallel Codex and Claude Code sessions in worktrees. Replaced by the closed-source Nimbalyst. `⚠️ unmaintained`
- [dev-3.0](https://github.com/h0x91b/dev-3.0) - "Mission control for the one-person studio." Kanban, worktrees, and a tmux fleet runner. `Backends: Claude Code, Codex, Gemini CLI, OpenCode`
- [dmux](https://github.com/standardagents/dmux) - Dev-agent multiplexer that runs agents in isolated worktrees over tmux.
- [Emdash](https://github.com/generalaction/emdash) - Agentic dev environment running multiple agents in parallel worktrees, locally or over SSH. `Backends: Claude Code, Codex, Cursor, OpenCode, Amp, Devin, Droid, Copilot`
- [Happy](https://github.com/slopus/happy) - Start a session locally and control it from your phone, end-to-end encrypted, with voice. `Backends: Claude Code, Codex`
- [Hive](https://github.com/morapelker/hive) - Project and worktree manager built for multitasking with agents.
- [KanDev](https://github.com/kdlbs/kandev) - Self-hostable kanban dev environment that orchestrates agents, reviews changes, and opens PRs. `Backends: any ACP agent`
- [Kangentic](https://github.com/Kangentic/kangentic) - Desktop kanban where dragging a card starts and tracks an agent. `Backends: Claude Code, Codex, Gemini CLI, Antigravity, OpenCode, Droid, Cursor, Copilot, Aider, Ollama`
- [KanVibe](https://github.com/rookedsysc/kanvibe) - Keyboard-first desktop kanban with embedded terminals, worktrees, and hook-driven task tracking.
- [Kaban](https://github.com/kaban-board/kaban) - Minimal terminal kanban for coding agents. `⚠️ unmaintained`
- [Operator](https://github.com/iishyfishyy/operator-oss) - Run many sessions in parallel across every project from one screen, local-first and worktree-isolated. `Backends: Claude Code, Codex`
- [OpenKanban](https://github.com/TechDufus/openkanban) - Terminal kanban board for orchestrating agents.
- [Sculptor](https://github.com/imbue-ai/sculptor) - Desktop app that runs agents in parallel Docker containers with a pairing mode to sync work into your IDE. By Imbue. `Backends: Claude Code, Pi, any terminal agent`
- [stagewise](https://github.com/stagewise-io/stagewise) - Open-source agentic IDE that creates and orchestrates agents with live previews and git workflows. Bring your own key.
- [Superset](https://github.com/superset-sh/superset) - Agentic IDE that runs 100+ agents in parallel worktrees using your own subscriptions. Elastic License. `Backends: Claude Code, Codex, Copilot, Cursor Agent, Gemini CLI, Mistral Vibe, OpenCode, and more`
- [Terragon OSS](https://github.com/terragon-labs/terragon-oss) - Source of the remote background-agent orchestrator, released when the company shut down in February 2026. `⚠️ unmaintained`
- [uzi](https://github.com/devflowinc/uzi) - CLI for running large numbers of agents in parallel worktrees. `⚠️ unmaintained`
- [Vibe Kanban](https://github.com/BloopAI/vibe-kanban) - Kanban board to plan, run, and review many agent tasks, each in its own worktree, with built-in code review and PR creation. Bloop has shut down and the project is now community-maintained. `Backends: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, Qwen Code`
- [Xum](https://github.com/coder/xum) - Coder's desktop app for isolated parallel agentic work across local, worktree, and SSH workspaces. Formerly Mux. `Backends: Claude, GPT, Grok, Ollama, OpenRouter`
- [YYLO](https://github.com/yylo-dev/yylo) - Command-line orchestrator for coding agents: each task runs in a dedicated branch and worktree, board and task state live in a git-native kanban ledger, and a merge queue owns risk-based review. `Backends: Pi, Codex`

## Isolation: worktrees and sandboxes

Give each agent its own branch, container, or VM so many can work at once safely.

- [agent-sandbox](https://github.com/mattolson/agent-sandbox) - Local environment with minimal filesystem access, a network firewall, and secret injection for agents. `Backends: Claude Code, Codex, Gemini, OpenCode, Copilot`
- [agent-worktree](https://github.com/nekocode/agent-worktree) - Git worktree workflow tool for isolated, parallel agent environments.
- [agentree](https://github.com/AryaLabsHQ/agentree) - Create and manage isolated git worktrees for coding agents. Single purpose.
- [Cloudflare Sandbox SDK](https://github.com/cloudflare/sandbox-sdk) - Sandboxed containers on Cloudflare's edge for isolating agent execution.
- [Container Use](https://github.com/dagger/container-use) - Each agent gets its own container and git branch. By Dagger. `Backends: any MCP agent`
- [E2B](https://github.com/e2b-dev/e2b) - Open-source Firecracker microVM sandboxes that start in under 200ms. Framework-agnostic.
- [Git Worktree Runner (gtr)](https://github.com/coderabbitai/git-worktree-runner) - Portable worktree CLI that automates per-branch setup with AI tool integration.
- [LLM Sandbox](https://github.com/vndee/llm-sandbox) - Python library for running LLM-generated code in isolation, with an MCP server.
- [Microsandbox](https://github.com/superradcompany/microsandbox) - Local-first microVM runtime with hardware isolation and fast pause and resume. `Backends: Claude Code, Cursor, Codex, Gemini CLI, Copilot`
- [Parallel Code](https://github.com/johannesjo/parallel-code) - Dispatches agents in parallel, one worktree and branch each. `Backends: Claude Code, Codex, Gemini CLI, Copilot CLI, Antigravity CLI`
- [parallel-worktrees](https://github.com/SpillwaveSolutions/parallel-worktrees) - Claude Code skill for parallel worktree workflows. `Backends: Claude Code` `⚠️ unmaintained`
- [Sandbox Runtime (srt)](https://github.com/anthropics/sandbox-runtime) - Anthropic's container-free OS-level sandboxing (Seatbelt on macOS, bubblewrap on Linux) for Claude Code and MCP servers.
- [Sandcastle](https://github.com/mattpocock/sandcastle) - TypeScript library for orchestrating agents inside Docker, Podman, or Vercel sandboxes.
- [workmux](https://github.com/raine/workmux) - Pairs git worktrees with tmux, kitty, WezTerm, or Zellij windows for parallel agent work.
- [Worktrunk](https://github.com/max-sixty/worktrunk) - Makes worktrees as easy as branches, built for running agents in parallel. `Backends: anything you can launch from a shell`

## Backlog and spec layer

What feeds the factory: issue trackers built for agents, PRD-to-task tools, and spec-driven methods.

- [Agent OS](https://github.com/buildermethods/agent-os) - Injects your codebase standards into spec writing so different agents produce consistent code. By Builder Methods.
- [Backlog.md](https://github.com/MrLesk/Backlog.md) - Stores the backlog as markdown task files in the repo with a CLI and terminal kanban shared by humans and agents. `Backends: Claude Code, Codex, Gemini CLI, Kiro, Cursor`
- [Beads](https://github.com/gastownhall/beads) - Git-backed, dependency-aware issue tracker built as agent memory. The work queue behind Gas Town. By Steve Yegge. `Backends: any CLI agent`
- [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) - Planning agents (analyst, PM, architect) write PRDs and architecture docs, then a scrum master agent turns them into detailed stories for implementation agents.
- [Buildomator](https://github.com/buildomator/buildomator) - Claude Code-native successor to GSD with MCP-backed project state, cross-session memory, and drift detection. `Backends: Claude Code`
- [cc-sdd](https://github.com/gotalab/cc-sdd) - Kiro-style spec-driven harness (requirements, design, tasks, steering) for eight agent platforms. `Backends: Claude Code, Codex, Cursor, Copilot, Windsurf, OpenCode, Gemini CLI, Antigravity`
- [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) - Parses a PRD into a dependency-aware task graph and exposes next-task tools for agents to work through.
- [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin) - Every's plugin. The `/lfg` command runs plan, execute, simplify, review, browser-test, commit, PR, and watch CI with a bounded repair loop. `Backends: Claude Code, Codex, Cursor`
- [Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done) - Discuss, plan, execute, verify per phase, each in a fresh context window with atomic commits. Archived. `⚠️ unmaintained`
- [OpenSpec](https://github.com/Fission-AI/OpenSpec) - Splits `specs/` (current truth) from `changes/` (proposals), each change with its own proposal, design, and tasks.
- [spec-kit](https://github.com/github/spec-kit) - GitHub's toolkit for spec-driven development: spec, plan, tasks, code, with a project constitution. Works across 30+ agents.
- [Superpowers](https://github.com/obra/superpowers) - Skills framework and methodology for Claude Code: brainstorm, write plan, execute plan, TDD, systematic debugging. `Backends: Claude Code`
- [Tessl SDD tile](https://github.com/tesslio/spec-driven-development-tile) - Open methodology tile that makes an agent interview you, write specs, wait for approval, then implement against them.
- [autonomous-coding quickstart](https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding) - Anthropic's demo of the initializer-plus-coding-agent harness: session one writes a feature list, later sessions make incremental progress via files and git. `Backends: Claude Agent SDK`

## Review and merge gates

What checks agent output before it ships.

- [Kodus](https://github.com/kodustech/kodus-ai) - Self-hosted, model-agnostic code review agent with plain-English review guidelines. Bring your own key.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - The original open-source PR reviewer, now community-run after Qodo's commercial pivot. Review, suggestions, and Q&A.
- [reviewdog](https://github.com/reviewdog/reviewdog) - Posts any linter's output as inline PR comments. Not AI itself, but a common gate layer in factories.
- [software-factory-reliability](https://github.com/sjarmak/software-factory-reliability) - Executable reliability patterns and fault-injection drills for factories. Companion to "Software Factories Are Distributed Systems."

## Multi-agent coding frameworks

Frameworks that model a software team as a set of agents. Older than the factory term, but the same idea.

- [Agency Swarm](https://github.com/VRSEN/agency-swarm) - Role-based agent teams with defined communication flows on the OpenAI Agents SDK.
- [ChatDev](https://github.com/OpenBMB/ChatDev) - Simulates a software company where CEO, CTO, programmer, and tester agents design, code, test, and document.
- [Claude Flow (Ruflo)](https://github.com/ruvnet/ruflo) - Runs Claude Code and other CLIs as coordinated swarms with shared memory and task routing.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Role-playing agent crews plus event-driven flows for deterministic steps.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Gives agents PM, architect, engineer, and QA roles following SOPs to turn a one-line requirement into a project. `⚠️ unmaintained`
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Takes a GitHub issue and tries to fix it with the model of your choice. From Princeton and Stanford.
- [Swarms](https://github.com/kyegomez/swarms) - Sequential, concurrent, and hierarchical multi-agent orchestration.
- [AutoGen](https://github.com/microsoft/autogen) - Microsoft's multi-agent framework. In maintenance mode, new work goes to Agent Framework. `⚠️ unmaintained`
- [Devika](https://github.com/stitionai/devika) - Open Devin alternative that breaks instructions into steps, researches, and writes code. `⚠️ unmaintained`
- [GPT-Engineer](https://github.com/AntonOsika/gpt-engineer) - Spec to code from the CLI. The precursor to Lovable. Archived. `⚠️ unmaintained`
- [GPT-Pilot](https://github.com/Pythagora-io/gpt-pilot) - Builds an app through spec writer, architect, developer, reviewer, and debugger agents. The README reports malicious code was found in the repo between August 2025 and June 2026; rotate credentials if you ran it then. `⚠️ unmaintained`
- [OpenAI Swarm](https://github.com/openai/swarm) - Educational agents-and-handoffs framework, superseded by the Agents SDK. `⚠️ unmaintained`

## Hosted and commercial factories

Products you pay for or cannot self-host. `💰` throughout.

### Factory products

- [8090 Software Factory](https://8090.inc) - Governed workspace where people and agents run the full SDLC, sold as an "SDLC control plane" for regulated enterprises. EY adopted it in March 2026. `💰`
- [Amika](https://amika.dev) - A sandboxed cloud computer for every agent, plus automated or human-in-the-loop workflows. Open core at [gofixpoint/amika](https://github.com/gofixpoint/amika). `💰`
- [Augment Cosmos](https://www.augmentcode.com/blog/cosmos-now-in-public-preview) - Coordinates agents across a whole engineering team from spec to verification. Public preview June 2026. Auggie CLI is open source. `💰`
- [Blitzy](https://blitzy.com) - Enterprise factory that orchestrates thousands of agents over multi-hour runs to generate most of an implementation from a repo and spec. `💰`
- [Charlie Labs](https://charlielabs.ai) - Charlie delivers end-to-end PRs. "Daemons" are always-on processes watching PRs, issues, CI, and Sentry. `💰`
- [Conductor](https://conductor.build) - Mac app from Melty Labs that runs parallel Claude Code and Codex agents in isolated worktrees. Closed source. `💰`
- [Factory.ai](https://factory.ai) - Specialized "droids" (code, review, docs, test, knowledge) coordinated by a dispatcher across the SDLC. The company that put "software factory" on the map. `💰`
- [Fleet](https://fleetctl.ai) - Self-hosted control plane for a fleet of Claude Code agents against GitHub, with approval gates and audit trails. `💰`
- [Hoplite](https://hoplite.sh) - Moves your local agent setup (sessions, MCP servers, CLIs) to the cloud for parallel runs. `💰`
- [LightSprint](https://lightsprint.ai) - "Software factory for product teams." Non-engineers run parallel cloud agents with PR preview environments. `💰`
- [Nimbalyst](https://nimbalyst.com) - Successor to Crystal for parallel agent sessions. `💰`
- [Tembo](https://tembo.io) - Connects repos, issues, and observability tools, then runs agents in isolated cloud environments to turn issues and alerts into PRs. Pivoted from Postgres hosting. `💰`
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
- [We built a software factory in 10 days](https://ona.com/stories/software-factory-what-we-learned) - Zacharias Malguitou and Lou Bichard, Ona, April 2026. Built a note-taking app entirely through background agents.
- [The self-driving codebase: Building Horizon at WorkOS](https://workos.com/blog/project-horizon) - Matt Dzwonczyk and Jason Barry, WorkOS, May 2026. Webhook-driven agents in cloud sandboxes with humans keeping review.
- [Building a software factory on our scariest code](https://launchdarkly.com/blog/building-a-software-factory-on-our-scariest-code/) - Alexis Georges, LaunchDarkly, August 2026. Rewrote 66,000 lines of legacy React in six weeks with agents behind feature flags.
- [How we built a software factory to drive Astro's GitHub issue count to zero](https://blog.cloudflare.com/astro-issue-triage/) - Cloudflare, August 2026. Isolated subagents in GitHub Actions reproduced, diagnosed, and patched bugs, cutting open issues from 200 to about 30.
- [Building a software factory for AI SDK](https://vercel.com/blog/building-a-software-factory-for-ai-sdk) - Lars Grammel and Eric Dodds, Vercel, August 2026. After four weeks the factory authored 25-35% of merged PRs.
- [Running a Software Factory Efficiently at Uber Scale](https://www.uber.com/us/en/blog/efficient-software-factory/) - Uday Kiran Medisetty, Uber, August 2026. AI tools on 70% of PRs, with a 34% cost cut from model routing and context work.
- [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) - Anthropic. Parallel agents build a compiler end to end.
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
- [Factory.ai: The A-SWE Droid Army](https://www.latent.space/p/factory) - Latent Space.
- [Notion's Token Town: 5 Rebuilds, 100+ Tools, MCP vs CLIs and the Software Factory Future](https://www.latent.space/p/notion) - Latent Space, with Simon Last and Sarah Sachs.
- [An AI state of the union: dark factories are coming](https://www.lennysnewsletter.com/p/an-ai-state-of-the-union) - Lenny's Newsletter, with Simon Willison.
- [Head of Claude Code: What happens after coding is solved](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) - Lenny's Podcast, with Boris Cherny.
- [Building Claude Code with Boris Cherny](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) - The Pragmatic Engineer, March 2026.
- [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8) - The Pragmatic Summit.
- [The Era of Compound Engineering](https://www.youtube.com/watch?v=_ehJyfHg1Vk) - Kieran Klaassen, AI Engineer.
- [Code with Claude 2026 opening keynote](https://www.youtube.com/watch?v=GMIWm5y90xA) - Anthropic, May 2026.
- [AI Engineer World's Fair 2026](https://www.ai.engineer/worldsfair/2026) - Ran a dedicated "Software Factories" track alongside "Coding Agents."

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
