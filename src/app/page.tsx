import { HeroFolderStack } from "@/components/HeroFolderStack";
import { TranspilerShowcase } from "@/components/TranspilerShowcase";
import { WorkflowStages } from "@/components/WorkflowStages";
import { CatalogExplorer } from "@/components/CatalogExplorer";
import { ScrollRevealObserver } from "@/components/ScrollRevealObserver";

export default function HomePage() {
  return (
    <>
      <ScrollRevealObserver />

      <header className="site-header">
        <div className="frame site-header__inner">
          <a href="#top" className="site-wordmark hero-load-1">
            <span className="site-wordmark__tab" aria-hidden="true"></span>
            <span>SkillOps</span>
          </a>
          <nav className="site-nav hero-load-1" aria-label="Primary navigation">
            <a href="#transpiler">Transpiler</a>
            <a href="#workflow">Workflow</a>
            <a href="#catalog">Catalog</a>
            <a href="#governance">Contribute</a>
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

      <main id="top">
        <HeroFolderStack />
        <TranspilerShowcase />
        <WorkflowStages />
        <CatalogExplorer />

        {/* SECTION 4: FAQ & TWO-TRACK OPEN SOURCE — Accordion of filled tiles */}
        <section id="governance" className="faq-section" aria-labelledby="faq-heading">
          <div className="frame faq-section__grid">
            <div className="faq-section__intro">
              <h2 id="faq-heading" className="reveal-item">
                Two-track open source.
              </h2>
              <p className="reveal-item">
                SkillOps separates community catalog growth from core CLI engineering so you can ship new Skills immediately without red tape.
              </p>
              <a
                href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn-motif reveal-item"
              >
                Read CONTRIBUTING.md
              </a>
            </div>

            <div className="faq-accordion">
              <details className="faq-tile reveal-item" name="skillops-faq" open>
                <summary>
                  <span>Do I need to open an Issue before contributing a new Skill or Subagent?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    No. Track A (Catalog Contributions) is fast-tracked: if you are adding or improving a Markdown manifest inside <code>catalog/skills/</code> or <code>catalog/subagents/</code>, open a Pull Request directly. Our GitHub Action validates the schema and frontmatter automatically.
                  </p>
                </div>
              </details>

              <details className="faq-tile reveal-item" name="skillops-faq">
                <summary>
                  <span>When is an Issue required before opening a Pull Request?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    Track B (Core CLI &amp; Adapters) requires an approved Issue first. Any change to TypeScript code under <code>src/</code>, terminal prompts, transpiler adapters, or dependencies must link a discussion Issue so architectural trade-offs are aligned upfront.
                  </p>
                </div>
              </details>

              <details className="faq-tile reveal-item" name="skillops-faq">
                <summary>
                  <span>How does SkillOps avoid clobbering my hand-written IDE rules?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    Every transpiled artifact is namespaced with a <code>skillops-</code> prefix or dedicated subfolder and tracked by content hash. If you modify an installed file locally, SkillOps flags a <code>! CONFLICT</code> pill and skips overwriting unless you pass <code>--force</code>.
                  </p>
                </div>
              </details>

              <details className="faq-tile reveal-item" name="skillops-faq">
                <summary>
                  <span>What is the difference between a Skill and a Subagent in SkillOps?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    A Skill is a reusable procedural playbook loaded into your main coding agent when relevant. A Subagent is an isolated specialist persona with its own system prompt, model tier, and restricted tool allowlist (such as read-only exploration).
                  </p>
                </div>
              </details>

              <details className="faq-tile reveal-item" name="skillops-faq">
                <summary>
                  <span>Can I run SkillOps in CI or non-interactive scripts?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    Yes. Pass explicit item names and target IDEs on the command line (such as <code>npx skillops-cli@latest add mcp-architect --agents cursor,claude</code>) or add <code>--dry-run</code> to preview every planned file operation without touching disk.
                  </p>
                </div>
              </details>

              <details className="faq-tile reveal-item" name="skillops-faq">
                <summary>
                  <span>How do I uninstall a Skill across all configured IDEs at once?</span>
                  <span className="faq-plus" aria-hidden="true"></span>
                </summary>
                <div className="faq-tile__answer">
                  <p>
                    Run <code>npx skillops-cli@latest remove</code> for the interactive uninstaller, or pass the module slug directly via <code>npx skillops-cli@latest rm mcp-architect</code>. Unmodified files are removed cleanly across every target directory.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA — The action tile */}
        <section className="cta-board" aria-labelledby="cta-heading">
          <div className="frame cta-board__row">
            <div className="cta-flank reveal-item" aria-hidden="true"></div>

            <div className="cta-center reveal-item">
              <h2 id="cta-heading">Import from the library now.</h2>
              <p>
                Browse our open-source library of Skills and Subagents and import them directly into your coding agent in seconds, or contribute your own module to the catalog.
              </p>
              <div className="cta-center__controls">
                <div className="cta-command-pill">
                  <code>npx skillops-cli@latest add</code>
                </div>
                <a
                  href="https://github.com/OdevMatheus/SkillOps"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  className="btn-motif btn-motif--dark"
                >
                  Open GitHub repository
                </a>
                <a
                  href="https://github.com/OdevMatheus/SkillOps/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  className="btn-motif btn-motif--surface"
                >
                  Submit a Catalog PR
                </a>
              </div>
            </div>

            <div className="cta-flank cta-flank--pattern reveal-item" aria-hidden="true"></div>
          </div>
        </section>
      </main>

      {/* SECTION 6: FOOTER — The mark, built large */}
      <footer className="site-footer">
        <div className="frame">
          <div className="footer-construct" aria-label="SKILLOPS architectural block wordmark">
            <div className="footer-block footer-block--accent reveal-item" style={{ minHeight: "185px" }}>
              <span className="footer-block__tag">.cursor</span>
              <span className="footer-block__letter">S</span>
            </div>
            <div className="footer-block reveal-item" style={{ minHeight: "150px" }}>
              <span className="footer-block__tag">.claude</span>
              <span className="footer-block__letter">K</span>
            </div>
            <div className="footer-block footer-block--light reveal-item" style={{ minHeight: "172px" }}>
              <span className="footer-block__tag">.github</span>
              <span className="footer-block__letter">I</span>
            </div>
            <div className="footer-block reveal-item" style={{ minHeight: "140px" }}>
              <span className="footer-block__tag">.agent</span>
              <span className="footer-block__letter">L</span>
            </div>
            <div className="footer-block reveal-item" style={{ minHeight: "164px" }}>
              <span className="footer-block__tag">.windsurf</span>
              <span className="footer-block__letter">L</span>
            </div>
            <div className="footer-block footer-block--accent reveal-item" style={{ minHeight: "190px" }}>
              <span className="footer-block__tag">.codex</span>
              <span className="footer-block__letter">O</span>
            </div>
            <div className="footer-block reveal-item" style={{ minHeight: "156px" }}>
              <span className="footer-block__tag">.gemini</span>
              <span className="footer-block__letter">P</span>
            </div>
            <div className="footer-block footer-block--light reveal-item" style={{ minHeight: "178px" }}>
              <span className="footer-block__tag">.kiro</span>
              <span className="footer-block__letter">S</span>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col reveal-item">
              <h3>Package</h3>
              <a href="https://www.npmjs.com/package/skillops-cli" target="_blank" rel="noopener noreferrer">
                npm Registry
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/releases" target="_blank" rel="noopener noreferrer">
                Releases
              </a>
              <a href="#transpiler">Live Transpiler</a>
            </div>
            <div className="footer-col reveal-item">
              <h3>Catalog</h3>
              <a href="https://github.com/OdevMatheus/SkillOps/tree/master/catalog/skills" target="_blank" rel="noopener noreferrer">
                Skills Library
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/tree/master/catalog/subagents" target="_blank" rel="noopener noreferrer">
                Subagents Library
              </a>
              <a href="#catalog">28 IDE Adapters</a>
            </div>
            <div className="footer-col reveal-item">
              <h3>Community</h3>
              <a href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                Contributing Guide
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/issues" target="_blank" rel="noopener noreferrer">
                Issue Tracker
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/discussions" target="_blank" rel="noopener noreferrer">
                Discussions
              </a>
            </div>
            <div className="footer-col reveal-item">
              <h3>Governance</h3>
              <a href="https://github.com/OdevMatheus/SkillOps/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
                MIT License
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/blob/master/.github/SECURITY.md" target="_blank" rel="noopener noreferrer">
                Security Policy
              </a>
              <a href="https://github.com/OdevMatheus/SkillOps/blob/master/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">
                Code of Conduct
              </a>
            </div>
            <div className="footer-col--wide reveal-item">
              <h3>Open-source by OdevMatheus</h3>
              <p>
                Built for engineers who work across multiple AI coding assistants and want one canonical, version-controlled source of truth for their Skills and Subagents.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-credits">
              MIT Licensed · SkillOps CLI (<code>skillops-cli</code>) · Open-source AI Skills &amp; Subagents Package Manager.
            </p>
            <a href="#top" role="button" className="btn-motif">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
