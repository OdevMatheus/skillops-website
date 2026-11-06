"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LOCALE_LIST } from "@/i18n/translations";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLibraryActive = pathname?.startsWith("/library");
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    let rafId = 0;

    const updateHeader = () => {
      rafId = 0;
      setIsScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateHeader);
      }
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="frame site-header__inner">
        <Link href="/" className="site-wordmark hero-load-1">
          <span className="site-wordmark__tab" aria-hidden="true"></span>
          <span>SkillOps</span>
        </Link>

        <nav className="site-nav hero-load-1" aria-label={t.header.navAria}>
          <Link
            href="/library"
            className={`site-nav__link${isLibraryActive ? " is-active" : ""}`}
            aria-current={isLibraryActive ? "page" : undefined}
          >
            {t.header.library}
          </Link>
        </nav>

        <div className="site-header__cta hero-load-1">
          <div
            className="lang-switcher"
            role="group"
            aria-label={t.header.langSwitcherAria}
          >
            {LOCALE_LIST.map((item) => {
              const isActive = locale === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  title={item.fullName}
                  aria-label={item.fullName}
                  className={`lang-switcher__btn${isActive ? " is-active" : ""}`}
                  onClick={() => setLocale(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <a
            href="https://github.com/OdevMatheus/SkillOps"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="btn-motif site-header__github"
          >
            {t.header.starOnGithub}
          </a>
        </div>
      </div>
    </header>
  );
}
