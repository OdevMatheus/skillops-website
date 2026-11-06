import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LibraryExplorer } from "@/components/LibraryExplorer";
import { ScrollRevealObserver } from "@/components/ScrollRevealObserver";

export const metadata: Metadata = {
  title: "Library — SkillOps | Open-Source AI Skills & Subagents",
  description:
    "Browse curated Skills and autonomous Subagents for Cursor, Claude Code, GitHub Copilot, Antigravity, Windsurf, OpenAI Codex, and 28 AI coding tools."
};

export default function LibraryPage() {
  return (
    <>
      <ScrollRevealObserver />
      <SiteHeader />
      <main id="top">
        <LibraryExplorer />
      </main>
      <SiteFooter />
    </>
  );
}
