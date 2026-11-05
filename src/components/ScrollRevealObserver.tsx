"use client";

import { useEffect } from "react";

export function ScrollRevealObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal-item"));

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            observer.unobserve(target);
            requestAnimationFrame(() => {
              target.classList.add("is-visible");
              target.style.opacity = "1";
              target.style.transform = "translateY(0px)";
            });
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -16px 0px" }
    );

    revealItems.forEach((el, idx) => {
      el.style.transitionDelay = `${(idx % 4) * 35}ms`;
      if (!reducedMotion) {
        el.style.transform = "translateY(18px)";
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
