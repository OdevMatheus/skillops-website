"use client";

import { useEffect, useRef } from "react";

const OSS_TRACKS = [
  {
    tag: "TRACK A · FAST-TRACK CATALOG",
    path: "catalog/skills/ & catalog/subagents/",
    desc: "Open a Pull Request directly with any new SKILL.md or SUBAGENT.md. GitHub Actions validates schema and frontmatter automatically — no prior Issue required."
  },
  {
    tag: "TRACK B · CORE CLI & 28 ADAPTERS",
    path: "src/adapters/ & src/commands/",
    desc: "Pure TypeScript transpiler engine and zero-dependency terminal UI. Propose new IDE targets or CLI capabilities via architectural Issues."
  },
  {
    tag: "MIT LICENSE · ZERO LOCK-IN",
    path: ".skillops-lock.json (SHA-256)",
    desc: "Runs 100% locally via npx with zero telemetry and zero API keys. Every generated file is standard Markdown you own inside your repository."
  }
];

export function OpenSourceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

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
      el.style.setProperty("--oss-progress", eased.toFixed(3));
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

  return (
    <section
      ref={sectionRef}
      id="open-source"
      className="oss-section"
      aria-labelledby="oss-heading"
    >
      <div className="frame oss-section__grid">
        <div className="oss-section__copy">
          <span className="oss-eyebrow">MIT LICENSED · COMMUNITY DRIVEN</span>
          <h2 id="oss-heading" className="oss-section__title">
            100% Open Source.
            <br />
            Built in the open.
          </h2>
          <p className="oss-section__lead">
            No proprietary cloud, no API keys, and no walled gardens. Every{" "}
            <strong>Skill</strong>, <strong>Subagent</strong>, and{" "}
            <strong>IDE adapter</strong> in SkillOps is public Markdown and
            TypeScript — free to audit, fork, and improve with the community.
          </p>

          <div className="oss-actions">
            <a
              href="https://github.com/OdevMatheus/SkillOps"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="btn-motif btn-motif--dark"
            >
              Explore GitHub Repository
            </a>
            <a
              href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="btn-motif"
            >
              Contribute a Skill (PR)
            </a>
          </div>
        </div>

        <div
          className="oss-panel"
          data-ui
          aria-label="Open-source architecture and contribution tracks"
        >
          <div className="oss-panel__head">
            <span className="oss-panel__repo">OdevMatheus / SkillOps</span>
            <span className="oss-panel__badge">MIT LICENSE</span>
          </div>

          <div className="oss-tracks">
            {OSS_TRACKS.map((track) => (
              <div key={track.tag} className="oss-track-card">
                <div className="oss-track-card__meta">
                  <span className="oss-track-card__tag">{track.tag}</span>
                  <code className="oss-track-card__path">{track.path}</code>
                </div>
                <p className="oss-track-card__desc">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
