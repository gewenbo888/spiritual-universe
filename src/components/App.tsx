"use client";
import { LangProvider, useLang } from "@/components/LangContext";
import CosmicBackground from "@/components/CosmicBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import AIGuide from "@/components/AIGuide";
import FinalMessage from "@/components/FinalMessage";
import { SECTIONS } from "@/content";

function Body() {
  const { lang } = useLang();
  return (
    <>
      <CosmicBackground />
      <Nav sections={SECTIONS} />
      <div className="app">
        <Hero />
        {SECTIONS.map((s) => (
          <Section key={s.id} s={s} />
        ))}
        <section className="section" id="knowledge-graph" style={{ ["--ac" as any]: "#e8c074" }}>
          <div className="sec-kicker">{lang === "zh" ? "宇宙知识图谱" : "The Cosmic Knowledge Graph"}</div>
          <h2 className="sec-title">
            {lang === "zh" ? "万物相连" : "Everything Is Connected"}
            <span className="zh">{lang === "zh" ? "Everything Is Connected" : "万物相连"}</span>
          </h2>
          <p className="sec-lead">
            {lang === "zh"
              ? "宗教、哲学、神祇、符号、神话、概念与典籍，并非孤岛——它们是一张跨越数千年的相连之网。点击任意节点，照亮它的联结。"
              : "Religions, philosophies, gods, symbols, myths, concepts, and texts are not islands — they form one connected web across millennia. Click any node to light up its links."}
          </p>
          <div className="viz" style={{ marginTop: 36 }}>
            <div className="viz-head">
              <div className="viz-title">{lang === "zh" ? "精神宇宙图谱" : "The Spiritual Universe Graph"}</div>
              <div className="viz-hint">{lang === "zh" ? "点击节点" : "click a node"}</div>
            </div>
            <KnowledgeGraph accent="#e8c074" />
          </div>
        </section>
        <AIGuide />
        <FinalMessage />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
