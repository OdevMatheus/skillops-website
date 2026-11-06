import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroFolderStack } from "@/components/HeroFolderStack";
import { WorkflowStages } from "@/components/WorkflowStages";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ScrollRevealObserver } from "@/components/ScrollRevealObserver";

export default function HomePage() {
  return (
    <>
      <ScrollRevealObserver />
      <SiteHeader />

      <main id="top">
        <HeroFolderStack />
        <WorkflowStages />
        <OpenSourceSection />
      </main>

      <SiteFooter />
    </>
  );
}
