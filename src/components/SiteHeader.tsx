"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LOCALE_LIST, type Locale } from "@/i18n/translations";

function FlagIcon({ locale }: { locale: Locale }) {
  if (locale === "pt-BR") {
    return (
      <svg
        className="lang-flag"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        aria-hidden="true"
      >
        <rect width="20" height="14" rx="2" fill="#009b3a" />
        <polygon points="10,1.6 18.2,7 10,12.4 1.8,7" fill="#fedf00" />
        <circle cx="10" cy="7" r="3.1" fill="#002776" />
        <path
          d="M7.1 6.3C8.8 5.6 11.2 5.9 12.9 7.3"
          stroke="#ffffff"
          strokeWidth="0.85"
          fill="none"
        />
      </svg>
    );
  }

  if (locale === "es") {
    return (
      <svg
        className="lang-flag"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        aria-hidden="true"
      >
        <rect width="20" height="14" rx="2" fill="#aa151b" />
        <rect y="3.5" width="20" height="7" fill="#f1bf00" />
        <rect x="4.5" y="5" width="2.2" height="4" rx="0.6" fill="#aa151b" />
      </svg>
    );
  }

  // Default: "en" (USA flag)
  return (
    <svg
      className="lang-flag"
      width="20"
      height="14"
      viewBox="0 0 20 14"
      aria-hidden="true"
    >
      <rect width="20" height="14" rx="2" fill="#ffffff" />
      <rect y="0" width="20" height="2" fill="#bd3d44" />
      <rect y="4" width="20" height="2" fill="#bd3d44" />
      <rect y="8" width="20" height="2" fill="#bd3d44" />
      <rect y="12" width="20" height="2" fill="#bd3d44" />
      <rect width="9" height="8" rx="1" fill="#192f5d" />
      <circle cx="2.3" cy="2.2" r="0.65" fill="#ffffff" />
      <circle cx="4.5" cy="2.2" r="0.65" fill="#ffffff" />
      <circle cx="6.7" cy="2.2" r="0.65" fill="#ffffff" />
      <circle cx="3.4" cy="4.0" r="0.65" fill="#ffffff" />
      <circle cx="5.6" cy="4.0" r="0.65" fill="#ffffff" />
      <circle cx="2.3" cy="5.8" r="0.65" fill="#ffffff" />
      <circle cx="4.5" cy="5.8" r="0.65" fill="#ffffff" />
      <circle cx="6.7" cy="5.8" r="0.65" fill="#ffffff" />
    </svg>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langSelectRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isLibraryActive = pathname?.startsWith("/library");
  const { locale, setLocale, t } = useLanguage();

  const currentLocaleObj =
    LOCALE_LIST.find((item) => item.id === locale) || LOCALE_LIST[0];

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

  useEffect(() => {
    if (!isLangOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        langSelectRef.current &&
        !langSelectRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLangOpen]);

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
          <div className="lang-select" ref={langSelectRef}>
            <button
              type="button"
              className={`lang-select__trigger${isLangOpen ? " is-open" : ""}`}
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              aria-label={t.header.langSwitcherAria}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <FlagIcon locale={currentLocaleObj.id} />
              <span className="lang-select__code">
                {currentLocaleObj.label}
              </span>
              <svg
                className="lang-select__chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.25L6 7.75L9.5 4.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div
                className="lang-select__menu"
                role="listbox"
                aria-label={t.header.langSwitcherAria}
              >
                {LOCALE_LIST.map((item) => {
                  const isActive = locale === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      className={`lang-select__option${isActive ? " is-active" : ""}`}
                      onClick={() => {
                        setLocale(item.id);
                        setIsLangOpen(false);
                      }}
                    >
                      <FlagIcon locale={item.id} />
                      <span className="lang-select__name">{item.fullName}</span>
                      <span className="lang-select__badge">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
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
