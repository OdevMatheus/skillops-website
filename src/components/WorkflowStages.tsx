"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const COMMAND_TEXT = "npx skillops-cli@latest add";

// Timeline frames (each tick = 130ms, total loop = 120 ticks ≈ 15.6s)
// 0..21:  typing command + pause on full command (~2.8s)
// 22..57: Step 1 — cursor moves 0 -> 1 -> 2, checks cursor, claude, copilot (~4.7s)
// 58..89: Step 2 — cursor moves 0 -> 1, checks mcp-architect, context-scout (~4.2s)
// 90..119: Step 3 — files appear 1..4 and hold for reading (~3.9s)
const TOTAL_TICKS = 120;
const TICK_MS = 130;

const STEP1_ROWS = [
  { id: "cursor", desc: "Cursor AI IDE (.cursor/rules)" },
  { id: "claude", desc: "Anthropic Claude Code (.claude/skills)" },
  { id: "copilot", desc: "GitHub Copilot (.github/instructions)" },
  { id: "antigravity", desc: "Google Antigravity IDE (.agent/skills)" },
  { id: "gemini", desc: "Google Gemini CLI (.gemini/skills)" }
];

const STEP3_FILES = [
  { target: "cursor", path: ".cursor/rules/skillops-mcp-architect.mdc" },
  { target: "claude", path: ".claude/skills/mcp-architect/SKILL.md" },
  { target: "claude", path: ".claude/agents/context-scout.md" },
  { target: "copilot", path: ".github/instructions/skillops-mcp-architect.instructions.md" }
];

export function WorkflowStages() {
  const [tick, setTick] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  const step2Rows = [
    {
      id: "mcp-architect",
      kind: "SKILL",
      desc: t.workflow.step2Descriptions.mcpArchitect
    },
    {
      id: "context-scout",
      kind: "AGENT",
      desc: t.workflow.step2Descriptions.contextScout
    },
    {
      id: "ast-blast-radius",
      kind: "SKILL",
      desc: t.workflow.step2Descriptions.astBlastRadius
    },
    {
      id: "security-sast-gate",
      kind: "SKILL",
      desc: t.workflow.step2Descriptions.securitySastGate
    }
  ];

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((prev) => (prev + 1) % TOTAL_TICKS);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateScrollMotion = () => {
      rafId = 0;
      const el = sectionRef.current;
      if (!el) return;
      const vh = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const rawProgress = (vh - rect.top) / (vh * 0.85);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      const eased = 1 - Math.pow(1 - clamped, 3);
      el.style.setProperty("--cli-progress", eased.toFixed(3));

      const ossEl = document.getElementById("open-source");
      if (ossEl) {
        const ossRect = ossEl.getBoundingClientRect();
        const exitProgress = Math.min(
          Math.max((vh - ossRect.top) / (vh * 0.85), 0),
          1
        );
        el.style.setProperty("--cli-exit", exitProgress.toFixed(3));
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

  // Phase calculation from tick
  const isTypingPhase = tick < 22;
  const isStep1 = tick >= 22 && tick < 58;
  const isStep2 = tick >= 58 && tick < 90;
  const isStep3 = tick >= 90;

  const typedLength = isTypingPhase
    ? Math.min(COMMAND_TEXT.length, Math.floor((tick / 15) * COMMAND_TEXT.length))
    : COMMAND_TEXT.length;

  // Step 1 animation state (ticks 22..57)
  const step1Tick = tick - 22;
  const step1Cursor = step1Tick < 11 ? 0 : step1Tick < 21 ? 1 : 2;
  const step1Checked = [
    step1Tick >= 5,
    step1Tick >= 15,
    step1Tick >= 25,
    false,
    false
  ];
  const step1Count = step1Checked.filter(Boolean).length;
  const step1EnterFlash = step1Tick >= 30;

  // Step 2 animation state (ticks 58..89)
  const step2Tick = tick - 58;
  const step2Cursor = step2Tick < 13 ? 0 : 1;
  const step2Checked = [step2Tick >= 6, step2Tick >= 18, false, false];
  const step2Count = step2Checked.filter(Boolean).length;
  const step2EnterFlash = step2Tick >= 26;

  // Step 3 animation state (ticks 90..119)
  const step3Tick = tick - 90;
  const visibleFilesCount = Math.min(
    STEP3_FILES.length,
    Math.max(1, Math.floor(step3Tick / 3) + 1)
  );

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="cli-stage-section"
      aria-labelledby="cli-stage-heading"
    >
      <div className="frame cli-stage__container">
        <div className="cli-stage__header">
          <h2 id="cli-stage-heading" className="cli-stage__title">
            {t.workflow.title}
          </h2>
          <p className="cli-stage__sub">
            {t.workflow.subBeforeCmd}
            <code>npx skillops-cli@latest add</code>
            {t.workflow.subAfterCmd}
          </p>
        </div>

        <div
          className="tui-window"
          data-ui
          aria-label={t.workflow.tuiAria}
        >
          <div className="tui-window__bar">
            <span className="tui-window__dots" aria-hidden="true">
              <span className="tui-dot tui-dot--accent" />
              <span className="tui-dot" />
              <span className="tui-dot" />
            </span>
            <span className="tui-window__title">skillops-cli — zsh</span>
            <span className="tui-window__status">
              {isTypingPhase
                ? t.workflow.statusLaunching
                : isStep1
                  ? t.workflow.statusStep1
                  : isStep2
                    ? t.workflow.statusStep2
                    : t.workflow.statusInstalled}
            </span>
          </div>

          <div className="tui-body">
            {/* Prompt line always at top */}
            <div className="tui-prompt-line">
              <span className="tui-muted">~/project</span>
              <span className="tui-accent">$</span>
              <span className="tui-cmd-text">
                {COMMAND_TEXT.slice(0, typedLength)}
              </span>
              {isTypingPhase && <span className="tui-caret" aria-hidden="true" />}
            </div>

            {isStep1 && (
              <div className="tui-screen">
                <div className="tui-banner-line">
                  <span className="tui-pill tui-pill--accent">
                    {t.workflow.step1Banner}
                  </span>
                </div>
                <div className="tui-tree-line">
                  <span className="tui-branch">├─</span>
                  <span className="tui-pill tui-pill--surface">
                    {t.workflow.step1Group}
                  </span>
                  <span className="tui-muted">{t.workflow.step1Hint}</span>
                </div>

                <div className="tui-list">
                  {STEP1_ROWS.map((row, idx) => {
                    const checked = step1Checked[idx];
                    const focused = step1Cursor === idx;
                    return (
                      <div
                        key={row.id}
                        className={`tui-row${checked ? " is-checked" : ""}${focused ? " is-focused" : ""}`}
                      >
                        <span className="tui-branch">│</span>
                        <span className="tui-cursor">{focused ? "❯" : " "}</span>
                        <span className="tui-radio">{checked ? "◉" : "○"}</span>
                        <span className="tui-row__name">{row.id}</span>
                        <span className="tui-row__desc">{row.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="tui-tree-footer">
                  <span className="tui-branch">╰─</span>
                  <span className="tui-count">
                    {step1Count} {t.workflow.selectedWord}
                  </span>
                  <span className="tui-muted">—</span>
                  <span
                    className={
                      step1EnterFlash
                        ? "tui-pill tui-pill--accent"
                        : "tui-pill tui-pill--surface"
                    }
                  >
                    {t.workflow.enterToContinue}
                  </span>
                </div>
              </div>
            )}

            {isStep2 && (
              <div className="tui-screen">
                <div className="tui-completed-step">
                  <span className="tui-pill tui-pill--accent">✔</span>
                  <span className="tui-muted">
                    {t.workflow.step1CompletedLabel}
                  </span>
                  <strong className="tui-highlight">
                    cursor, claude, copilot
                  </strong>
                </div>

                <div className="tui-banner-line">
                  <span className="tui-pill tui-pill--accent">
                    {t.workflow.step2Banner}
                  </span>
                </div>

                <div className="tui-list">
                  {step2Rows.map((row, idx) => {
                    const checked = step2Checked[idx];
                    const focused = step2Cursor === idx;
                    return (
                      <div
                        key={row.id}
                        className={`tui-row${checked ? " is-checked" : ""}${focused ? " is-focused" : ""}`}
                      >
                        <span className="tui-branch">│</span>
                        <span className="tui-cursor">{focused ? "❯" : " "}</span>
                        <span className="tui-radio">{checked ? "◉" : "○"}</span>
                        <span className="tui-row__name">{row.id}</span>
                        <span className="tui-row__desc">{row.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="tui-tree-footer">
                  <span className="tui-branch">╰─</span>
                  <span className="tui-count">
                    {step2Count} {t.workflow.step2SelectedSummary}
                  </span>
                  <span className="tui-muted">—</span>
                  <span
                    className={
                      step2EnterFlash
                        ? "tui-pill tui-pill--accent"
                        : "tui-pill tui-pill--surface"
                    }
                  >
                    {t.workflow.enterToImport}
                  </span>
                </div>
              </div>
            )}

            {isStep3 && (
              <div className="tui-screen">
                <div className="tui-completed-step">
                  <span className="tui-pill tui-pill--accent">✔</span>
                  <span className="tui-muted">
                    {t.workflow.step3ConfiguredLabel}
                  </span>
                  <strong className="tui-highlight">
                    {t.workflow.step3ConfiguredSummary}
                  </strong>
                </div>

                <div className="tui-banner-line">
                  <span className="tui-pill tui-pill--accent">
                    {t.workflow.step3Banner}
                  </span>
                  <strong className="tui-pass">✔ PASS</strong>
                </div>

                <div className="tui-artifacts">
                  {STEP3_FILES.slice(0, visibleFilesCount).map((file) => (
                    <div key={file.path} className="tui-artifact-row">
                      <span className="tui-branch">├─</span>
                      <span className="tui-pill tui-pill--created">
                        + CREATED
                      </span>
                      <span className="tui-artifact-target">
                        ({file.target})
                      </span>
                      <span className="tui-artifact-path">{file.path}</span>
                    </div>
                  ))}
                </div>

                <div className="tui-tree-footer">
                  <span className="tui-branch">╰─</span>
                  <span className="tui-count">{t.workflow.step3Done}</span>
                  <span className="tui-muted">
                    {t.workflow.step3LockUpdated}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
