"use client";
import { useState } from "react";
import { useLang } from "@/components/LangContext";

type Persp = { name: { en: string; zh: string }; body: { en: string; zh: string } };
type Q = { q: { en: string; zh: string }; perspectives: Persp[] };

const QS: Q[] = [
  {
    q: { en: "Is there a God?", zh: "有神吗？" },
    perspectives: [
      { name: { en: "Monotheism", zh: "一神论" }, body: { en: "One supreme, personal creator sustains all things and gives history meaning.", zh: "一位至高、有位格的创造者维系万物，并赋予历史以意义。" } },
      { name: { en: "Pantheism", zh: "泛神论" }, body: { en: "There is no God apart from the universe — divinity is the totality of nature itself.", zh: "并不存在独立于宇宙之外的神——神圣即自然的整体本身。" } },
      { name: { en: "Atheism", zh: "无神论" }, body: { en: "No evidence compels belief in a deity; the cosmos needs no author beyond its own laws.", zh: "没有证据迫使我们相信神祇；宇宙无需自身规律之外的作者。" } },
      { name: { en: "Agnosticism", zh: "不可知论" }, body: { en: "The question may exceed what human minds can settle; honest suspension is reasonable.", zh: "这个问题或许超出人类心智所能裁定；诚实的悬置是合理的。" } },
    ],
  },
  {
    q: { en: "What happens after death?", zh: "死后会怎样？" },
    perspectives: [
      { name: { en: "Abrahamic", zh: "亚伯拉罕传统" }, body: { en: "The soul persists and faces judgment, resurrection, or eternal communion.", zh: "灵魂持存，面对审判、复活或永恒的相通。" } },
      { name: { en: "Dharmic", zh: "印度系传统" }, body: { en: "Consciousness is reborn across lives until liberation (moksha / nirvana) ends the cycle.", zh: "意识在生生世世中轮回，直到解脱（解脱／涅槃）终止循环。" } },
      { name: { en: "Naturalism", zh: "自然主义" }, body: { en: "Mind depends on the brain; at death, experience ends and matter returns to the world.", zh: "心智依赖大脑；死亡时经验终止，物质回归世界。" } },
      { name: { en: "Ancestral", zh: "祖先信仰" }, body: { en: "The dead remain present as ancestors, woven into the living community.", zh: "逝者作为祖先继续临在，与生者的共同体交织。" } },
    ],
  },
  {
    q: { en: "What is consciousness?", zh: "意识是什么？" },
    perspectives: [
      { name: { en: "Neuroscience", zh: "神经科学" }, body: { en: "An emergent process of the brain — though why experience feels like anything remains unsolved.", zh: "大脑的涌现过程——但经验为何有'感受'仍未解。" } },
      { name: { en: "Idealism / Mysticism", zh: "唯心·神秘主义" }, body: { en: "Consciousness is primary; matter appears within awareness, not the reverse.", zh: "意识是第一性的；物质显现于觉知之中，而非相反。" } },
      { name: { en: "Buddhism", zh: "佛教" }, body: { en: "A stream of momentary events with no fixed self at its center.", zh: "刹那相续的事件之流，其中并无固定的自我。" } },
    ],
  },
  {
    q: { en: "What is enlightenment?", zh: "什么是觉悟？" },
    perspectives: [
      { name: { en: "Buddhism", zh: "佛教" }, body: { en: "Awakening from craving and illusion; seeing reality as it is.", zh: "从贪爱与幻象中觉醒，如实见到实相。" } },
      { name: { en: "Taoism", zh: "道家" }, body: { en: "Aligning effortlessly with the Tao — wu wei, the way of natural action.", zh: "与道毫不费力地相合——无为，即顺应自然之道。" } },
      { name: { en: "Mysticism", zh: "神秘主义" }, body: { en: "A union in which the boundary between self and the divine dissolves.", zh: "一种自我与神圣之界限消融的合一。" } },
    ],
  },
  {
    q: { en: "Why do humans create religions?", zh: "人类为何创造宗教？" },
    perspectives: [
      { name: { en: "Anthropology", zh: "人类学" }, body: { en: "Shared rituals and myths bind groups, encode ethics, and stabilize cooperation.", zh: "共享的仪式与神话凝聚群体、编码伦理、稳定合作。" } },
      { name: { en: "Psychology", zh: "心理学" }, body: { en: "They answer mortality, suffering, and meaning — needs older than writing.", zh: "它们回应死亡、苦难与意义——这些需求比文字更古老。" } },
      { name: { en: "Theology", zh: "神学" }, body: { en: "Believers hold that the impulse responds to something genuinely real.", zh: "信仰者认为，这种冲动回应着某种真实的存在。" } },
    ],
  },
  {
    q: { en: "What is the purpose of life?", zh: "生命的意义是什么？" },
    perspectives: [
      { name: { en: "Theistic", zh: "有神论" }, body: { en: "To know, love, and serve the divine, and one another.", zh: "去认识、爱、服侍神圣，以及彼此。" } },
      { name: { en: "Eastern", zh: "东方传统" }, body: { en: "To awaken, harmonize with the Way, and end unnecessary suffering.", zh: "去觉醒、与道相和，止息不必要的苦。" } },
      { name: { en: "Humanism", zh: "人文主义" }, body: { en: "Meaning is made, not found — through love, creation, and contribution.", zh: "意义是创造的，而非被发现的——通过爱、创造与贡献。" } },
    ],
  },
];

export default function AIGuide() {
  const { lang, t } = useLang();
  const [i, setI] = useState(0);
  const cur = QS[i];
  return (
    <section className="guide" id="cosmic-guide">
      <div className="reveal">
        <div className="sec-kicker" style={{ ["--ac" as any]: "#5fd6c4" }}>{lang === "zh" ? "AI 宇宙向导" : "AI Cosmic Guide"}</div>
        <h2 className="sec-title">
          {lang === "zh" ? "向宇宙提问" : "Ask the Cosmos"}
          <span className="zh">{lang === "zh" ? "Ask the Cosmos" : "向宇宙提问"}</span>
        </h2>
        <p className="sec-lead">
          {lang === "zh"
            ? "对最大的问题，人类给出了许多答案。这里不替你选择，而是并置不同传统的视角。"
            : "Humanity has given many answers to the biggest questions. This guide chooses none for you — it sets the traditions side by side."}
        </p>
        <div className="q-chips">
          {QS.map((q, k) => (
            <button key={k} className={"chip" + (k === i ? " on" : "")} onClick={() => setI(k)}>
              {lang === "zh" ? q.q.zh : q.q.en}
            </button>
          ))}
        </div>
        <div className="guide-answer">
          {cur.perspectives.map((p, k) => (
            <div className="perspective" key={k}>
              <div className="pname">{lang === "zh" ? p.name.zh : p.name.en}</div>
              <div className="pbody">{lang === "zh" ? p.body.zh : p.body.en}</div>
            </div>
          ))}
        </div>
        <div className="guide-note">
          {lang === "zh"
            ? "※ 这些是对人类思想传统的教育性概述，而非定论。"
            : "※ Educational summaries of human traditions — offered as perspectives, not verdicts."}
        </div>
      </div>
    </section>
  );
}
