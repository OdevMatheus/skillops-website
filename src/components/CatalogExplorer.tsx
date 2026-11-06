"use client";

import { useState } from "react";
import { CATALOG_ITEMS, type CatalogCategory } from "@/data/skillops-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CatalogExplorer() {
  const [category, setCategory] = useState<CatalogCategory>("all");
  const [activeId, setActiveId] = useState<string>(CATALOG_ITEMS[0].id);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useLanguage();

  const visibleItems = CATALOG_ITEMS.filter(
    (item) => category === "all" || item.category === category
  );
  const activeItem =
    visibleItems.find((item) => item.id === activeId) ||
    visibleItems[0] ||
    CATALOG_ITEMS[0];

  const handleSelectCategory = (nextCat: CatalogCategory) => {
    setCategory(nextCat);
    const firstMatch = CATALOG_ITEMS.find(
      (item) => nextCat === "all" || item.category === nextCat
    );
    if (firstMatch) setActiveId(firstMatch.id);
  };

  return (
    <section id="catalog" className="catalog-agenda" aria-labelledby="catalog-heading">
      <div className="frame">
        <div className="catalog-agenda__top">
          <div>
            <h2 id="catalog-heading" className="catalog-agenda__title reveal-item">
              {t.catalog.title}
            </h2>
            <p className="catalog-agenda__sub reveal-item">
              {t.catalog.sub}
            </p>
          </div>
          <a
            href="https://github.com/OdevMatheus/SkillOps/tree/master/catalog"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="btn-motif btn-motif--dark reveal-item"
          >
            {t.catalog.browseBtn}
          </a>
        </div>

        <div className="catalog-agenda__body">
          <div
            className="agenda-tabs"
            role="tablist"
            aria-label={t.catalog.categoriesAria}
          >
            <button
              type="button"
              className="agenda-tab reveal-item"
              role="tab"
              aria-selected={category === "all"}
              onClick={() => handleSelectCategory("all")}
            >
              <strong>{t.catalog.tabs.allTitle}</strong>
              <span>{t.catalog.tabs.allSub}</span>
            </button>
            <button
              type="button"
              className="agenda-tab reveal-item"
              role="tab"
              aria-selected={category === "skill"}
              onClick={() => handleSelectCategory("skill")}
            >
              <strong>{t.catalog.tabs.skillsTitle}</strong>
              <span>{t.catalog.tabs.skillsSub}</span>
            </button>
            <button
              type="button"
              className="agenda-tab reveal-item"
              role="tab"
              aria-selected={category === "subagent"}
              onClick={() => handleSelectCategory("subagent")}
            >
              <strong>{t.catalog.tabs.subagentsTitle}</strong>
              <span>{t.catalog.tabs.subagentsSub}</span>
            </button>
            <button
              type="button"
              className="agenda-tab reveal-item"
              role="tab"
              aria-selected={category === "runtime"}
              onClick={() => handleSelectCategory("runtime")}
            >
              <strong>{t.catalog.tabs.adaptersTitle}</strong>
              <span>{t.catalog.tabs.adaptersSub}</span>
            </button>
          </div>

          <div
            className={`agenda-bands${isHovering ? " is-hovering" : ""}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className={`agenda-band reveal-item${activeItem.id === item.id ? " is-active" : ""}`}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
              >
                <div className="agenda-band__slot">{item.slot}</div>
                <div className="agenda-band__main">
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
                <div className="agenda-band__target">
                  <code>{item.targetPath}</code>
                </div>
              </article>
            ))}
          </div>

          <aside className="agenda-preview reveal-item" aria-live="polite" data-ui>
            <div className="agenda-preview__code-box">
              <code>{activeItem.previewCmd}</code>
            </div>
            <div className="agenda-preview__body">
              <h3>{activeItem.previewTitle}</h3>
              <p>{activeItem.previewDesc}</p>
              <a
                href="https://github.com/OdevMatheus/SkillOps/blob/master/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn-motif"
              >
                {t.catalog.submitSkillBtn}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
