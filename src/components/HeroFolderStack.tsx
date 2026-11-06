"use client";

import { useEffect, useRef, useState } from "react";

type AboutTabId = "overview" | "modules" | "sync";

interface AboutTab {
  id: AboutTabId;
  label: string;
  surface: "white" | "lime";
  panelTitle: string;
  panelDesc: string;
  diagram: string;
}

const ABOUT_TABS: AboutTab[] = [
  {
    id: "overview",
    label: "1 Manifest -> 28 Tools",
    surface: "white",
    panelTitle: "One canonical source of truth for every coding agent.",
    panelDesc:
      "Every AI assistant demands its own folder layout and YAML frontmatter. SkillOps compiles a single Markdown manifest into the native file structure each tool expects.",
    diagram: `catalog/skills/mcp-architect/SKILL.md
  |-- .cursor/rules/skillops-mcp-architect.mdc
  |-- .claude/skills/mcp-architect/SKILL.md
  |-- .github/instructions/skillops-mcp-architect.instructions.md
  |-- .agent/skills/mcp-architect/SKILL.md
  +-- +24 native IDE & CLI targets`
  },
  {
    id: "modules",
    label: "Skills & Subagents",
    surface: "lime",
    panelTitle: "Reusable playbooks and isolated specialist personas.",
    panelDesc:
      "Skills load procedural workflows progressively (<= 60 tokens at idle). Subagents run in isolated context windows with dedicated system prompts and read-only tool allowlists.",
    diagram: `SKILL.md     -> Procedural workflow + L3 scripts (0 idle tokens)
SUBAGENT.md  -> Isolated specialist + restricted tool allowlist`
  },
  {
    id: "sync",
    label: "100% Local & Safe",
    surface: "white",
    panelTitle: "Zero API keys. Deterministic SHA-256 drift protection.",
    panelDesc:
      "SkillOps runs locally via npx with zero cloud dependencies. Every installed file is hash-tracked in .skillops-lock.json so manual local edits are never overwritten.",
    diagram: `$ npx skillops-cli@latest add
  + CREATED   New native rule or agent file written
  = KEPT      Unchanged file already up to date
  ! CONFLICT  Local edit detected and safely preserved`
  }
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function HeroFolderStack() {
  const [activeTabId, setActiveTabId] = useState<AboutTabId>("overview");
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  const activeTab =
    ABOUT_TABS.find((t) => t.id === activeTabId) || ABOUT_TABS[0];

  const [scrollCueHidden, setScrollCueHidden] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateScrollMotion = () => {
      rafId = 0;
      const vh = window.innerHeight || 1;
      const scrollY = window.scrollY;

      const heroProgress = Math.min(Math.max(scrollY / (vh * 0.85), 0), 1);
      if (heroRef.current) {
        heroRef.current.style.setProperty("--hero-scroll", heroProgress.toFixed(3));
      }
      setScrollCueHidden(heroProgress > 0.32);

      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const rawProgress = (vh - rect.top) / (vh * 0.85);
        const clamped = Math.min(Math.max(rawProgress, 0), 1);
        const eased = 1 - Math.pow(1 - clamped, 3);
        aboutRef.current.style.setProperty("--about-progress", eased.toFixed(3));

        const workflowEl = document.getElementById("workflow");
        if (workflowEl) {
          const wfRect = workflowEl.getBoundingClientRect();
          const exitProgress = Math.min(
            Math.max((vh - wfRect.top) / (vh * 0.85), 0),
            1
          );
          aboutRef.current.style.setProperty(
            "--about-exit",
            exitProgress.toFixed(3)
          );
        }
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScrollMotion);
      }
    };

    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = aboutRef.current;
    if (!target) return;
    e.preventDefault();

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY;
    const duration = 720;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = easeOutExpo(elapsed);
      window.scrollTo(0, startY + (targetY - startY) * eased);
      if (elapsed < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <section ref={heroRef} className="hero" aria-labelledby="hero-heading">
        <div className="frame">
          <div className="hero__splash">
            <div className="hero__center">
              <h1 id="hero-heading" className="hero__title hero-load-1">
                One skills library.
                <br />
                Every coding agent.
              </h1>
              <p className="hero__sub hero-load-2">
                Curated open-source Skills and Subagents, imported directly into your coding agent with a single command.
              </p>
            </div>

            <a
              href="#about"
              onClick={handleScrollToAbout}
              className={`hero__scroll-cue${scrollCueHidden ? " is-hidden" : ""}`}
              aria-label="Scroll down to learn what SkillOps is"
            >
              <span className="hero__scroll-inner hero-load-3">
                <span className="hero__scroll-label">What is SkillOps</span>
                <span className="hero__scroll-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2.5V13.5M8 13.5L3.5 9M8 13.5L12.5 9"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="about-section"
        data-surface={activeTab.surface}
        aria-labelledby="about-heading"
      >
        <div className="frame about-section__grid">
          <div className="about-section__copy">
            <h2 id="about-heading" className="about-section__title">
              What is SkillOps?
            </h2>
            <p className="about-section__lead">
              SkillOps is an open-source package manager for AI coding assistants. Instead of copying and rewriting prompt files across Cursor, Claude Code, GitHub Copilot, and Antigravity, you maintain one library of <strong>Skills</strong> and <strong>Subagents</strong> and install them natively across <strong>28 AI tools</strong> with a single command.
            </p>

            <div
              className="about-tabs"
              role="tablist"
              aria-label="What is SkillOps dimensions"
            >
              {ABOUT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={tab.id === activeTab.id}
                  className="about-tab-btn"
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div
            key={activeTab.id}
            className="about-panel"
            role="tabpanel"
            data-ui
            aria-label={activeTab.panelTitle}
          >
            <h3 className="about-panel__title">{activeTab.panelTitle}</h3>
            <p className="about-panel__desc">{activeTab.panelDesc}</p>
            <div className="about-panel__code">
              <pre>
                <code>{activeTab.diagram}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
