export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="frame">
        <div
          className="footer-construct"
          aria-label="SKILLOPS architectural block wordmark"
        >
          <div
            className="footer-block footer-block--accent reveal-item"
            style={{ minHeight: "185px" }}
          >
            <span className="footer-block__letter">S</span>
          </div>
          <div
            className="footer-block reveal-item"
            style={{ minHeight: "150px" }}
          >
            <span className="footer-block__letter">K</span>
          </div>
          <div
            className="footer-block footer-block--light reveal-item"
            style={{ minHeight: "172px" }}
          >
            <span className="footer-block__letter">I</span>
          </div>
          <div
            className="footer-block reveal-item"
            style={{ minHeight: "140px" }}
          >
            <span className="footer-block__letter">L</span>
          </div>
          <div
            className="footer-block reveal-item"
            style={{ minHeight: "164px" }}
          >
            <span className="footer-block__letter">L</span>
          </div>
          <div
            className="footer-block footer-block--accent reveal-item"
            style={{ minHeight: "190px" }}
          >
            <span className="footer-block__letter">O</span>
          </div>
          <div
            className="footer-block reveal-item"
            style={{ minHeight: "156px" }}
          >
            <span className="footer-block__letter">P</span>
          </div>
          <div
            className="footer-block footer-block--light reveal-item"
            style={{ minHeight: "178px" }}
          >
            <span className="footer-block__letter">S</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credits">
            © {new Date().getFullYear()} SkillOps · MIT Licensed · Built by{" "}
            <a
              href="https://github.com/OdevMatheus"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-author-link"
            >
              @OdevMatheus
            </a>
          </p>

          <nav className="footer-socials" aria-label="Social media links">
            <a
              href="https://github.com/OdevMatheus"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-henrique-araujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
