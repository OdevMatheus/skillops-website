"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLibraryActive = pathname?.startsWith("/library");

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
        <nav className="site-nav hero-load-1" aria-label="Primary navigation">
          <Link
            href="/library"
            className={`site-nav__link${isLibraryActive ? " is-active" : ""}`}
            aria-current={isLibraryActive ? "page" : undefined}
          >
            Library
          </Link>
        </nav>
        <div className="site-header__cta hero-load-1">
          <a
            href="https://github.com/OdevMatheus/SkillOps"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="btn-motif"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
