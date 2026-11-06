"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function OpenSourceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

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
          <span className="oss-eyebrow">{t.openSource.eyebrow}</span>
          <h2 id="oss-heading" className="oss-section__title">
            {t.openSource.titleLine1}
            <br />
            {t.openSource.titleLine2}
          </h2>
          <p className="oss-section__lead">
            {t.openSource.leadPart1}
            <strong>{t.openSource.leadSkill}</strong>,{" "}
            <strong>{t.openSource.leadSubagent}</strong>
            {t.openSource.leadAnd}
            <strong>{t.openSource.leadAdapter}</strong>
            {t.openSource.leadPart2}
          </p>

          <div className="oss-actions">
            <a
              href="https://github.com/OdevMatheus/SkillOps"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="btn-motif btn-motif--dark"
            >
              {t.openSource.exploreRepoBtn}
            </a>
            <a
              href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="btn-motif"
            >
              {t.openSource.contributeSkillBtn}
            </a>
          </div>
        </div>

        <div
          className="oss-panel"
          data-ui
          aria-label={t.openSource.panelAria}
        >
          <div className="oss-panel__head">
            <span className="oss-panel__repo">OdevMatheus / SkillOps</span>
            <span className="oss-panel__badge">{t.openSource.panelBadge}</span>
          </div>

          <div className="oss-tracks">
            {t.openSource.tracks.map((track) => (
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
