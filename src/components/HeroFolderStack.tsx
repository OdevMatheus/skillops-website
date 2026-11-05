"use client";

import { useState } from "react";
import type { IdeId } from "@/data/skillops-data";

export function HeroFolderStack() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText("npx skillops-cli@latest add");
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleSelectIdeFolder = (ide: IdeId) => {
    window.dispatchEvent(new CustomEvent("skillops:select-ide", { detail: { ide } }));
    const section = document.getElementById("transpiler");
    if (section) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="frame">
        <div className="hero__top">
          <div className="hero__title-col">
            <h1 id="hero-heading" className="hero__title hero-load-1">
              One skills library.
              <br />
              Every coding agent.
            </h1>
            <p className="hero__sub hero-load-2">
              Browse a curated open-source library of AI Skills and Subagents, and import them directly into your coding agent with a single command.
            </p>
          </div>
          <div className="hero__action-col">
            <div className="hero__cmd-box hero-load-2" data-ui>
              <code id="hero-command">npx skillops-cli@latest add</code>
              <button type="button" className="btn-motif" onClick={handleCopyCommand}>
                {copied ? "Copied!" : "Copy command"}
              </button>
            </div>
            <div className="hero__actions-row hero-load-2">
              <a href="#transpiler" role="button" className="btn-motif">
                Try live transpiler
              </a>
              <a
                href="https://www.npmjs.com/package/skillops-cli"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn-motif btn-motif--surface"
              >
                View on npm
              </a>
            </div>
          </div>
        </div>

        <div className="folder-stack" role="region" aria-label="Target IDE folder stack">
          <div className="folder-band folder-band--1 hero-load-2">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("cursor")}
            >
              Cursor Rules
            </button>
            <div className="folder-band__body">
              <span>Transpiles canonical Markdown into frontmatter-scoped rules for Cursor workspaces.</span>
              <code>.cursor/rules/skillops-*.mdc</code>
            </div>
          </div>

          <div className="folder-band folder-band--2 hero-load-2">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("claude")}
            >
              Claude Code
            </button>
            <div className="folder-band__body">
              <span>Splits reusable domain Skills and autonomous Subagents into native Claude folders.</span>
              <code>.claude/skills/ &amp; .claude/agents/</code>
            </div>
          </div>

          <div className="folder-band folder-band--3 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("copilot")}
            >
              GitHub Copilot
            </button>
            <div className="folder-band__body">
              <span>Generates path-scoped instructions and custom agent profiles for GitHub Copilot.</span>
              <code>.github/instructions/*.instructions.md</code>
            </div>
          </div>

          <div className="folder-band folder-band--4 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("antigravity")}
            >
              Antigravity IDE
            </button>
            <div className="folder-band__body">
              <span>Writes structured SKILL.md modules and workflow definitions directly into your workspace.</span>
              <code>.agent/skills/*/SKILL.md</code>
            </div>
          </div>

          <div className="folder-band folder-band--5 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("windsurf")}
            >
              Interactive CLI
            </button>
            <div className="folder-band__body">
              <div className="folder-front__copy">
                <h2 id="folder-front-title">Curated library. Instant import.</h2>
                <p id="folder-front-desc">
                  Pick the Skills and Subagents your project needs from our open-source catalog. SkillOps detects the coding agents in your workspace and imports every module into the native format each agent expects.
                </p>
                <a
                  href="https://github.com/OdevMatheus/SkillOps"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  className="btn-motif btn-motif--dark"
                >
                  Explore skills library
                </a>
              </div>
              <div className="folder-front__terminal" data-ui aria-label="SkillOps CLI terminal preview">
                <pre>
                  <code>{`$ npx skillops-cli@latest add

  [OK] AI IDEs & Agents: 3 selected (cursor, claude, copilot)
  [OK] Skills & Subagents: 2 selected (mcp-architect, context-scout)

  Skills & Subagents Installed
  6 file(s) (6 created)

  * mcp-architect (SKILL)
    |-- + CREATED  .cursor/rules/skillops-mcp-architect.mdc
    |-- + CREATED  .claude/skills/mcp-architect/SKILL.md
    +-- + CREATED  .github/instructions/skillops-mcp-architect.instructions.md`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
