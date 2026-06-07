"use client";
import { useLang } from "@/components/LangContext";

export default function FinalMessage() {
  const { lang } = useLang();
  return (
    <footer className="final">
      <p className="msg">
        {lang === "zh"
          ? "面对存在的奥秘，人类创造了无数种答案。本网站并非选择其中一种答案，而是展示整个人类精神探索的宇宙全景。"
          : "Humanity has created thousands of different answers to the mystery of existence. This atlas is not about choosing one answer — it is about understanding the entire landscape of human spiritual exploration."}
        <span className="zh">
          {lang === "zh"
            ? "Humanity has created thousands of answers to the mystery of existence — this is the whole landscape, not one verdict."
            : "面对存在的奥秘，人类创造了无数种答案。这里展示的是整个精神探索的全景，而非某一种结论。"}
        </span>
      </p>
      <div className="links">
        <a href="https://psyverse.fun/">← Psyverse</a>
        <a href="https://psyverse.fun/atlas.html">Atlas</a>
        <a href="#top">{lang === "zh" ? "回到顶部 ↑" : "Back to top ↑"}</a>
      </div>
      <div className="sig">Human Spiritual Universe · 人类精神宇宙 — part of the Psyverse · by Gewenbo · 2026</div>
    </footer>
  );
}
