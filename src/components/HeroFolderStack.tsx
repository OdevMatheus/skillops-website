"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { AboutTabTranslation } from "@/i18n/translations";

type AboutTabId = AboutTabTranslation["id"];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function HeroFolderStack() {
  const [activeTabId, setActiveTabId] = useState<AboutTabId>("overview");
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  const activeTab =
    t.about.tabs.find((tab) => tab.id === activeTabId) || t.about.tabs[0];

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
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}
              </h1>
              <p className="hero__sub hero-load-2">{t.hero.sub}</p>
            </div>

            <a
              href="#about"
              onClick={handleScrollToAbout}
              className={`hero__scroll-cue${scrollCueHidden ? " is-hidden" : ""}`}
              aria-label={t.hero.scrollCueAria}
            >
              <span className="hero__scroll-inner hero-load-3">
                <span className="hero__scroll-label">
                  {t.hero.scrollCueLabel}
                </span>
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
              {t.about.title}
            </h2>
            <p className="about-section__lead">
              {t.about.leadPart1}
              <strong>{t.about.leadSkills}</strong>
              {t.about.leadAnd}
              <strong>{t.about.leadSubagents}</strong>
              {t.about.leadPart2}
              <strong>{t.about.leadTools}</strong>
              {t.about.leadPart3}
            </p>

            <div
              className="about-tabs"
              role="tablist"
              aria-label={t.about.tabsAria}
            >
              {t.about.tabs.map((tab) => (
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
