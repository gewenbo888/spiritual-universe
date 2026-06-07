"use client";
import { useEffect, useState } from "react";
import type { Section } from "@/lib/types";
import { useLang } from "@/components/LangContext";

export default function Nav({ sections }: { sections: Section[] }) {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onS = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onS, { passive: true });
    onS();
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <>
      <div className="progress" style={{ width: prog + "%" }} />
      <header className="bar">
        <a className="brand" href="#top">
          <svg className="glyph" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="11" fill="none" stroke="#e8c074" strokeWidth="1.2" />
            <circle cx="16" cy="16" r="6" fill="none" stroke="#a489ff" strokeWidth="1" />
            <circle cx="16" cy="16" r="2" fill="#5fd6c4" />
          </svg>
          <span>
            <b>Human Spiritual</b> Universe
          </span>
        </a>
        <div className="spacer" />
        <nav className="navlinks">
          <a href="#map-of-belief">{lang === "zh" ? "信仰地图" : "Map"}</a>
          <a href="#evolution-of-belief">{lang === "zh" ? "进化史" : "Evolution"}</a>
          <a href="#consciousness">{lang === "zh" ? "意识" : "Mind"}</a>
          <a href="#knowledge-graph">{lang === "zh" ? "知识图谱" : "Graph"}</a>
        </nav>
        <button className="toc-btn" onClick={() => setOpen(true)}>
          {lang === "zh" ? "目录 ☰" : "Contents ☰"}
        </button>
        <button className="langbtn" onClick={toggle} aria-label="toggle language">
          {lang === "zh" ? "EN / 中文" : "中文 / EN"}
        </button>
      </header>

      <div className={"toc" + (open ? " open" : "")}>
        <button className="toc-close" onClick={() => setOpen(false)} aria-label="close">
          ✕
        </button>
        <div className="toc-grid">
          {sections.map((s) => (
            <a key={s.id} href={"#" + s.id} onClick={() => setOpen(false)} style={{ ["--ac" as any]: s.accent }}>
              <div className="n">{String(s.num).padStart(2, "0")}</div>
              <div className="tt">
                {lang === "zh" ? s.title.zh : s.title.en}
                <span className="zh">{lang === "zh" ? s.title.en : s.title.zh}</span>
              </div>
            </a>
          ))}
          <a href="#knowledge-graph" onClick={() => setOpen(false)}>
            <div className="n">★</div>
            <div className="tt">{lang === "zh" ? "宇宙知识图谱" : "Cosmic Knowledge Graph"}</div>
          </a>
          <a href="#cosmic-guide" onClick={() => setOpen(false)}>
            <div className="n">✦</div>
            <div className="tt">{lang === "zh" ? "AI 宇宙向导" : "AI Cosmic Guide"}</div>
          </a>
        </div>
      </div>
    </>
  );
}
