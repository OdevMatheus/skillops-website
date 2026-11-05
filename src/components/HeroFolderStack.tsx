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
              Curated open-source Skills and Subagents, imported directly into your coding agent with a single command.
            </p>
          </div>
          <div className="hero__action-col">
            <div className="hero__cmd-box hero-load-2" data-ui>
              <code id="hero-command">npx skillops-cli@latest add</code>
              <button type="button" className="btn-motif" onClick={handleCopyCommand}>
                {copied ? "Copied!" : "Copy"}
              </button>
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
              Cursor
            </button>
            <div className="folder-band__body" aria-hidden="true" />
          </div>

          <div className="folder-band folder-band--2 hero-load-2">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("claude")}
            >
              Claude Code
            </button>
            <div className="folder-band__body" aria-hidden="true" />
          </div>

          <div className="folder-band folder-band--3 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("copilot")}
            >
              GitHub Copilot
            </button>
            <div className="folder-band__body" aria-hidden="true" />
          </div>

          <div className="folder-band folder-band--4 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("antigravity")}
            >
              Antigravity
            </button>
            <div className="folder-band__body" aria-hidden="true" />
          </div>

          <div className="folder-band folder-band--5 hero-load-3">
            <button
              type="button"
              className="folder-band__tab"
              onClick={() => handleSelectIdeFolder("windsurf")}
            >
              SkillOps CLI
            </button>
            <div className="folder-band__body">
              <div className="folder-front__copy">
                <h2 id="folder-front-title">28 agents. Zero manual setup.</h2>
                <p id="folder-front-desc">
                  Select the modules your project needs and SkillOps writes the native file structure each coding agent expects.
                </p>
                <a
                  href="#catalog"
                  role="button"
                  className="btn-motif btn-motif--dark"
                >
                  Browse catalog
                </a>
              </div>
              <div className="folder-front__terminal" data-ui aria-label="SkillOps CLI terminal preview">
                <pre>
                  <code>{`$ npx skillops-cli@latest add

  [OK] Agents: cursor, claude, copilot
  [OK] Modules: mcp-architect, context-scout

  + CREATED  .cursor/rules/skillops-mcp-architect.mdc
  + CREATED  .claude/skills/mcp-architect/SKILL.md
  + CREATED  .github/instructions/skillops-mcp-architect.instructions.md`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
