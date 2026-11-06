"use client";

import { useState } from "react";

type ModuleKind = "skill" | "subagent";

interface LibraryModule {
  slug: string;
  kind: ModuleKind;
  version: string;
  track: string;
  summary: string;
  tags: string[];
  githubUrl: string;
}

const LIBRARY_MODULES: LibraryModule[] = [
  {
    slug: "mcp-architect",
    kind: "skill",
    version: "v1.0.0",
    track: "ai-engineering",
    summary:
      "Design, implement, and audit Model Context Protocol (MCP) servers and FastMCP tools with strict JSON-RPC stdio hygiene and typed schemas.",
    tags: ["mcp", "fastmcp", "json-rpc"],
    githubUrl:
      "https://github.com/OdevMatheus/SkillOps/blob/master/catalog/ai-engineering/mcp-architect/SKILL.md"
  },
  {
    slug: "context-scout",
    kind: "subagent",
    version: "v1.0.0",
    track: "exploration",
    summary:
      "Read-only codebase cartographer running in an isolated context window to map entrypoints, call graphs, and exact file line ranges.",
    tags: ["read-only", "token-economy", "cartography"],
    githubUrl:
      "https://github.com/OdevMatheus/SkillOps/blob/master/catalog/subagents/context-scout/SUBAGENT.md"
  }
];

export function LibraryExplorer() {
  const [activeKind, setActiveKind] = useState<ModuleKind>("skill");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const visibleModules = LIBRARY_MODULES.filter((m) => m.kind === activeKind);

  const handleCopy = async (cmd: string, slug: string) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedSlug(slug);
      window.setTimeout(() => {
        setCopiedSlug((prev) => (prev === slug ? null : prev));
      }, 1800);
    } catch {
      // Fallback no-op if clipboard is unavailable
    }
  };

  return (
    <section className="library-clean" aria-labelledby="library-heading">
      <div className="frame library-clean__container">
        <header className="library-clean__header">
          <div className="library-clean__contribute">
            <span>Want to contribute a new Skill or Agent to the library?</span>
            <a
              href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="library-clean__contribute-link"
            >
              Open a Pull Request ↗
            </a>
          </div>

          <h1 id="library-heading" className="library-clean__title">
            Library.
          </h1>
          <p className="library-clean__sub">
            Official open-source modules ready to install into any of the 28
            supported AI coding agents.
          </p>

          <div
            className="library-switch"
            role="tablist"
            aria-label="Choose Skills or Agents"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeKind === "skill"}
              className="library-switch__btn"
              onClick={() => setActiveKind("skill")}
            >
              <span>Skills</span>
              <span className="library-switch__count">1</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeKind === "subagent"}
              className="library-switch__btn"
              onClick={() => setActiveKind("subagent")}
            >
              <span>Agents</span>
              <span className="library-switch__count">1</span>
            </button>
          </div>
        </header>

        <div className="library-clean__list">
          {visibleModules.map((mod) => {
            const cmd = `npx skillops-cli@latest add ${mod.slug}`;
            const isCopied = copiedSlug === mod.slug;

            return (
              <article
                key={mod.slug}
                className="library-clean-card"
                data-ui
                aria-label={mod.slug}
              >
                <div className="library-clean-card__top">
                  <div className="library-clean-card__identity">
                    <span className="library-clean-card__badge">
                      {mod.kind === "skill" ? "SKILL" : "AGENT"}
                    </span>
                    <h2 className="library-clean-card__name">{mod.slug}</h2>
                  </div>

                  <span className="library-clean-card__meta">
                    {mod.track} · {mod.version}
                  </span>
                </div>

                <p className="library-clean-card__desc">{mod.summary}</p>

                <div className="library-clean-card__cmd">
                  <code>{cmd}</code>
                  <button
                    type="button"
                    className="library-clean-card__copy"
                    onClick={() => handleCopy(cmd, mod.slug)}
                  >
                    {isCopied ? "Copied ✔" : "Copy"}
                  </button>
                </div>

                <div className="library-clean-card__bottom">
                  <div className="library-clean-card__tags">
                    {mod.tags.map((tag) => (
                      <span key={tag} className="library-clean-card__tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={mod.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="library-clean-card__link"
                  >
                    View manifest on GitHub ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
