export type ManifestMode = "skill" | "subagent";

export type IdeId =
  | "cursor"
  | "claude"
  | "copilot"
  | "antigravity"
  | "windsurf"
  | "codex"
  | "gemini"
  | "kiro";

export interface IdeTargetOutput {
  id: IdeId;
  label: string;
  path: string;
  code: string;
}

export interface ManifestModeData {
  word: string;
  slug: string;
  canonicalPath: string;
  canonicalPreview: string;
  targets: Record<IdeId, IdeTargetOutput>;
}

export const IDE_LIST: { id: IdeId; label: string }[] = [
  { id: "cursor", label: "Cursor" },
  { id: "claude", label: "Claude Code" },
  { id: "copilot", label: "GitHub Copilot" },
  { id: "antigravity", label: "Antigravity" },
  { id: "windsurf", label: "Windsurf" },
  { id: "codex", label: "OpenAI Codex" },
  { id: "gemini", label: "Gemini CLI" },
  { id: "kiro", label: "Kiro" }
];

export const TRANSPILER_DATA: Record<ManifestMode, ManifestModeData> = {
  skill: {
    word: "Skills",
    slug: "mcp-architect",
    canonicalPath: "catalog/skills/mcp-architect.md",
    canonicalPreview: `id: mcp-architect
kind: skill
category: architecture
targets: [cursor, claude, copilot, antigravity, +24 more]`,
    targets: {
      cursor: {
        id: "cursor",
        label: "Cursor",
        path: ".cursor/rules/skillops-mcp-architect.mdc",
        code: `---
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
globs: ["**/*.ts", "**/*.py", "**/mcp*.json"]
alwaysApply: false
---

# MCP Architect (Transpiled by SkillOps)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.
3. Return structured, actionable error payloads instead of raw stack traces.`
      },
      claude: {
        id: "claude",
        label: "Claude Code",
        path: ".claude/skills/mcp-architect/SKILL.md",
        code: `---
name: mcp-architect
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (Claude Code Skill)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.
3. Return structured, actionable error payloads instead of raw stack traces.`
      },
      copilot: {
        id: "copilot",
        label: "GitHub Copilot",
        path: ".github/instructions/skillops-mcp-architect.instructions.md",
        code: `---
applyTo: "**/*.ts,**/*.py,**/mcp*.json"
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (GitHub Copilot Instructions)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.
3. Return structured, actionable error payloads instead of raw stack traces.`
      },
      antigravity: {
        id: "antigravity",
        label: "Antigravity",
        path: ".agent/skills/mcp-architect/SKILL.md",
        code: `---
name: mcp-architect
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (Antigravity Skill)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.
3. Return structured, actionable error payloads instead of raw stack traces.`
      },
      windsurf: {
        id: "windsurf",
        label: "Windsurf",
        path: ".windsurf/rules/skillops-mcp-architect.md",
        code: `---
trigger: glob
globs: "**/*.ts, **/*.py, **/mcp*.json"
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (Windsurf Rule)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.`
      },
      codex: {
        id: "codex",
        label: "OpenAI Codex",
        path: ".agents/skills/mcp-architect/SKILL.md",
        code: `---
name: mcp-architect
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (OpenAI Codex Skill)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.`
      },
      gemini: {
        id: "gemini",
        label: "Gemini CLI",
        path: ".gemini/skills/mcp-architect/SKILL.md",
        code: `---
name: mcp-architect
description: "Design and validate production Model Context Protocol servers, tools, and transport schemas."
---

# MCP Architect (Gemini CLI Skill)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.`
      },
      kiro: {
        id: "kiro",
        label: "Kiro",
        path: ".kiro/steering/skillops-mcp-architect.md",
        code: `---
inclusion: fileMatch
fileMatchPattern: "**/*.ts"
---

# MCP Architect (Kiro Steering Document)

1. Validate every tool input schema with strict Zod or Pydantic types before execution.
2. Enforce explicit timeout and cancellation boundaries on stdio and SSE transports.`
      }
    }
  },
  subagent: {
    word: "Subagents",
    slug: "context-scout",
    canonicalPath: "catalog/subagents/context-scout.md",
    canonicalPreview: `id: context-scout
kind: subagent
role: Read-only architectural scout
tools: [read_file, grep_search, find_by_name]`,
    targets: {
      cursor: {
        id: "cursor",
        label: "Cursor",
        path: ".cursor/rules/skillops-agent-context-scout.mdc",
        code: `---
description: "Subagent (context-scout): Read-only codebase explorer that maps files and dependencies rapidly."
alwaysApply: false
---

# Context Scout Subagent (Cursor Persona)

Role: Read-only architectural scout.
Tools Allowed: read_file, grep_search, find_by_name.
Never mutate files; return concise path citations with line numbers.`
      },
      claude: {
        id: "claude",
        label: "Claude Code",
        path: ".claude/agents/context-scout.md",
        code: `---
name: context-scout
description: "Read-only codebase explorer that maps files and dependencies rapidly."
tools: Read, Grep, Glob
model: sonnet
---

# Context Scout (Claude Code Subagent)

Explore the repository in read-only mode, trace symbol usages, and return a structured summary with exact line citations.`
      },
      copilot: {
        id: "copilot",
        label: "GitHub Copilot",
        path: ".github/agents/context-scout.agent.md",
        code: `---
name: context-scout
description: "Read-only codebase explorer that maps files and dependencies rapidly."
tools: ["search", "read_file"]
---

# Context Scout (GitHub Copilot Custom Agent)

Operate strictly in read-only mode to map architecture and dependencies before implementation begins.`
      },
      antigravity: {
        id: "antigravity",
        label: "Antigravity",
        path: ".agent/workflows/context-scout.md",
        code: `---
description: "Read-only codebase explorer that maps files and dependencies rapidly."
---

# Context Scout (Antigravity Specialist)

Delegate broad repository searches to this workflow to keep your primary context window clean.`
      },
      windsurf: {
        id: "windsurf",
        label: "Windsurf",
        path: ".windsurf/rules/skillops-agent-context-scout.md",
        code: `---
trigger: manual
description: "Subagent (context-scout): Read-only codebase explorer."
---

# Context Scout (Windsurf Specialist)

Invoke with @context-scout to map module dependencies and return exact file paths.`
      },
      codex: {
        id: "codex",
        label: "OpenAI Codex",
        path: ".codex/agents/context-scout.md",
        code: `---
name: context-scout
sandbox_mode: read-only
description: "Read-only codebase explorer that maps files and dependencies rapidly."
---

# Context Scout (OpenAI Codex Agent)

Scan the workspace under read-only sandbox permissions and report key entrypoints.`
      },
      gemini: {
        id: "gemini",
        label: "Gemini CLI",
        path: ".gemini/agents/context-scout.md",
        code: `---
name: context-scout
description: "Read-only codebase explorer that maps files and dependencies rapidly."
---

# Context Scout (Gemini CLI Agent)

Perform targeted repository reconnaissance and summarize findings with clickable file paths.`
      },
      kiro: {
        id: "kiro",
        label: "Kiro",
        path: ".kiro/steering/skillops-agent-context-scout.md",
        code: `---
inclusion: manual
---

# Context Scout (Kiro Specialist Agent)

Map repository boundaries and return structured architecture summaries without editing source files.`
      }
    }
  }
};

export interface WorkflowStage {
  stopLabel: string;
  heading: string;
  desc: string;
  statNum: string;
  statLabel: string;
  statMode: string;
  statSub: string;
  terminal: string;
  caption: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    stopLabel: "First, pick target agents",
    heading: "First, pick target agents.",
    desc: "Run npx skillops-cli@latest add in your project root. The interactive prompt scans your directory, highlights already configured AI IDEs, and lets you toggle up to 28 coding agents at once.",
    statNum: "28 IDEs",
    statLabel: "Supported out of the box with native adapters",
    statMode: "Zero config",
    statSub: "Works immediately via npx or local clone",
    terminal: `SkillOps · Select Your AI IDE / Agent
Select one or more AI coding assistants to configure

  > [*] cursor       Cursor AI IDE (.cursor/rules)
    [*] claude       Anthropic Claude Code (.claude/skills)
    [*] copilot      GitHub Copilot (.github/instructions)
    [ ] antigravity  Google Antigravity IDE (.agent/skills)
    [ ] windsurf     Windsurf AI IDE (.windsurf/rules)
    [ ] codex        OpenAI Codex CLI (.codex/skills)

  3 selected · Enter to continue`,
    caption: "Interactive terminal multi-select with TrueColor status pills and instant keyboard navigation."
  },
  {
    stopLabel: "Second, select catalog items",
    heading: "Second, select catalog items.",
    desc: "Browse curated Skills and autonomous Subagents grouped by category. Filter with instant search or select multiple modules to install into every chosen IDE in a single pass.",
    statNum: "Skills + Agents",
    statLabel: "Unified Markdown manifests with frontmatter",
    statMode: "Track A PRs",
    statSub: "Community catalog grows via direct Pull Requests",
    terminal: `  [OK] AI IDEs & Agents: 3 selected (cursor, claude, copilot)

SkillOps · Select Skills & Agents to Import
  [ Skills (10) ]  [ Agents (5) ]  (/ search)

  > [*] mcp-architect         Design and validate MCP servers
    [*] context-scout         Read-only codebase explorer agent
    [ ] playwright-e2e        End-to-end browser test architecture
    [ ] security-sast-gate    OWASP static audit gate

  2 selected (1 Skill, 1 Agent) · Enter to import`,
    caption: "Persistent step completion lines keep your terminal scrollback clean and readable."
  },
  {
    stopLabel: "Third, verify installed files",
    heading: "Third, verify installed files.",
    desc: "SkillOps transpiles each manifest into the exact file format required by your selected IDEs and prints a grouped summary with + CREATED, ~ UPDATED, = KEPT, or ! CONFLICT pills.",
    statNum: "SHA-256",
    statLabel: "Content hashing protects local custom edits",
    statMode: "< 78 cols",
    statSub: "Compact terminal output engineered for split panes",
    terminal: `  Skills & Subagents Installed
  6 file(s) (6 created)

  * mcp-architect (SKILL)
    |-- + CREATED  .cursor/rules/skillops-mcp-architect.mdc
    |-- + CREATED  .claude/skills/mcp-architect/SKILL.md
    +-- + CREATED  .github/instructions/skillops-mcp-architect.instructions.md

  * context-scout (SUBAGENT)
    |-- + CREATED  .cursor/rules/skillops-agent-context-scout.mdc
    |-- + CREATED  .claude/agents/context-scout.md
    +-- + CREATED  .github/agents/context-scout.agent.md`,
    caption: "Every written path is grouped by item and verified against local modifications."
  },
  {
    stopLabel: "Fourth, prune cleanly anytime",
    heading: "Fourth, prune cleanly anytime.",
    desc: "Need to switch tools or clean up a workspace? Run npx skillops-cli@latest remove to interactively uninstall managed Skills and Subagents across all 28 agent folders without touching your own rules.",
    statNum: "- REMOVED",
    statLabel: "Safe uninstaller skips locally modified files",
    statMode: "--dry-run",
    statSub: "Preview every planned file action before writing",
    terminal: `$ npx skillops-cli@latest remove mcp-architect

  Skills & Subagents Removed
  3 file(s) (3 removed)

  * mcp-architect (SKILL)
    |-- - REMOVED  .cursor/rules/skillops-mcp-architect.mdc
    |-- - REMOVED  .claude/skills/mcp-architect/SKILL.md
    +-- - REMOVED  .github/instructions/skillops-mcp-architect.instructions.md`,
    caption: "Pass --force when you intentionally want to overwrite or remove modified files."
  }
];

export type CatalogCategory = "all" | "skill" | "subagent" | "runtime";

export interface CatalogItem {
  id: string;
  category: Exclude<CatalogCategory, "all">;
  slot: string;
  title: string;
  subtitle: string;
  targetPath: string;
  previewCmd: string;
  previewTitle: string;
  previewDesc: string;
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "mcp-architect",
    category: "skill",
    slot: "SKILL · v1",
    title: "mcp-architect",
    subtitle: "Model Context Protocol architecture, Zod/Pydantic schemas, and transport boundaries",
    targetPath: "catalog/skills/mcp-architect.md",
    previewCmd: "npx skillops-cli@latest add mcp-architect",
    previewTitle: "mcp-architect (Skill)",
    previewDesc: "Scaffolds and audits Model Context Protocol servers, tool schemas, and transport security across TypeScript and Python."
  },
  {
    id: "context-scout",
    category: "subagent",
    slot: "AGENT · v1",
    title: "context-scout",
    subtitle: "Autonomous read-only codebase researcher with restricted tool permissions",
    targetPath: "catalog/subagents/context-scout.md",
    previewCmd: "npx skillops-cli@latest add context-scout",
    previewTitle: "context-scout (Subagent)",
    previewDesc: "Read-only codebase exploration specialist that maps architecture boundaries and returns concise file citations without polluting main context."
  },
  {
    id: "editor-rules",
    category: "runtime",
    slot: "IDE · 8+",
    title: "Cursor, Windsurf, Cline & Roo",
    subtitle: "Automatic frontmatter transpilation for editor-native rule directories",
    targetPath: ".cursor/rules/ & .windsurf/rules/",
    previewCmd: "npx skillops-cli@latest add --agents cursor,windsurf",
    previewTitle: "Cursor & Windsurf Adapters",
    previewDesc: "Compiles canonical Markdown into .cursor/rules/*.mdc and .windsurf/rules/*.md with glob-scoped activation frontmatter."
  },
  {
    id: "agent-folders",
    category: "runtime",
    slot: "IDE · 20+",
    title: "Claude Code, Copilot, Antigravity & Codex",
    subtitle: "Dedicated skill directories and custom agent profiles with tool allowlists",
    targetPath: ".claude/ · .github/ · .agent/",
    previewCmd: "npx skillops-cli@latest add --agents claude,copilot,antigravity",
    previewTitle: "Claude Code, Copilot & Antigravity",
    previewDesc: "Separates Skills and Subagents into .claude/skills, .claude/agents, .github/instructions, and .agent/skills."
  },
  {
    id: "conflict-safe",
    category: "skill",
    slot: "CORE · SHA",
    title: "Conflict-safe install & remove",
    subtitle: "Detects local drift before overwriting and prunes cleanly with --force support",
    targetPath: "npx skillops-cli@latest remove",
    previewCmd: "npx skillops-cli@latest remove",
    previewTitle: "Deterministic Lock & Prune Engine",
    previewDesc: "Tracks every installed file hash so npx skillops-cli@latest remove cleans up only managed files while protecting hand-edited rules."
  }
];
