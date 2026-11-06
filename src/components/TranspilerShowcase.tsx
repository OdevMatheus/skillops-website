"use client";

import { useEffect, useState } from "react";
import { IDE_LIST, TRANSPILER_DATA, type IdeId, type ManifestMode } from "@/data/skillops-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function TranspilerShowcase() {
  const [mode, setMode] = useState<ManifestMode>("skill");
  const [ide, setIde] = useState<IdeId>("cursor");
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onSelectIde = (event: Event) => {
      const custom = event as CustomEvent<{ ide?: IdeId }>;
      const nextIde = custom.detail?.ide;
      if (nextIde && TRANSPILER_DATA.skill.targets[nextIde]) {
        setIde(nextIde);
      }
    };
    window.addEventListener("skillops:select-ide", onSelectIde);
    return () => window.removeEventListener("skillops:select-ide", onSelectIde);
  }, []);

  const modeObj = TRANSPILER_DATA[mode];
  const targetObj = modeObj.targets[ide] || modeObj.targets.cursor;
  const commandText = `npx skillops-cli@latest add ${modeObj.slug} --agents ${ide}`;

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(commandText);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section
      id="transpiler"
      className="showcase"
      data-mode={mode}
      aria-labelledby="showcase-heading"
    >
      <div className="frame showcase__grid">
        <div className="showcase__copy">
          <h2 id="showcase-heading" className="reveal-item">
            {t.transpiler.headingPrefix}
            <span>{t.transpiler.modeWords[mode]}</span>
            {t.transpiler.headingSuffix}
          </h2>
          <p className="reveal-item">{t.transpiler.desc}</p>
          <p className="reveal-item">
            <span className="motif-bullet" aria-hidden="true"></span>
            {t.transpiler.shaNote}
          </p>
          <div className="showcase__Canon reveal-item" data-ui>
            <div className="showcase__Canon-head">
              <span>{t.transpiler.canonicalHead}</span>
              <code>{modeObj.canonicalPath}</code>
            </div>
            <pre>
              <code>{modeObj.canonicalPreview}</code>
            </pre>
          </div>
        </div>

        <div
          className="transpiler-control reveal-item"
          data-ui
          aria-label={t.transpiler.controlAria}
        >
          <div className="transpiler-control__header">
            <div
              className="transpiler-switch"
              role="group"
              aria-label={t.transpiler.switchAria}
            >
              <button
                type="button"
                aria-pressed={mode === "skill"}
                onClick={() => setMode("skill")}
              >
                {t.transpiler.skillBtn}
              </button>
              <button
                type="button"
                aria-pressed={mode === "subagent"}
                onClick={() => setMode("subagent")}
              >
                {t.transpiler.subagentBtn}
              </button>
            </div>
            <button type="button" className="btn-motif" onClick={handleCopyCommand}>
              {copied ? t.transpiler.copiedCmd : t.transpiler.copyCmd}
            </button>
          </div>

          <div
            className="ide-pills"
            role="tablist"
            aria-label={t.transpiler.ideTabsAria}
          >
            {IDE_LIST.map((item) => (
              <button
                key={item.id}
                type="button"
                className="ide-pill"
                role="tab"
                aria-selected={ide === item.id}
                onClick={() => setIde(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="transpiler-output">
            <div className="transpiler-output__path">
              <code>{targetObj.path}</code>
              <span>+ CREATED</span>
            </div>
            <pre>
              <code>{targetObj.code}</code>
            </pre>
          </div>

          <div className="transpiler-cmd-bar">
            <code>{commandText}</code>
            <span>
              {copied ? t.transpiler.copiedStatus : t.transpiler.readyStatus}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
