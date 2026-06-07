"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/components/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type P = { a: number; r: number; sp: number; sz: number; c: string };
    let ps: P[] = [];
    const cols = ["rgba(232,192,116,", "rgba(164,137,255,", "rgba(95,214,196,", "rgba(236,231,247,"];
    function init() {
      W = cv!.width = cv!.clientWidth; H = cv!.height = cv!.clientHeight;
      const n = Math.min(260, Math.floor((W * H) / 7000));
      ps = [];
      for (let i = 0; i < n; i++) {
        ps.push({
          a: Math.random() * Math.PI * 2,
          r: Math.pow(Math.random(), 0.6) * Math.min(W, H) * 0.5,
          sp: 0.0006 + Math.random() * 0.0016,
          sz: Math.random() * 1.6 + 0.3,
          c: cols[Math.floor(Math.random() * cols.length)],
        });
      }
    }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!reduce) p.a += p.sp * (1 - p.r / (Math.min(W, H) * 0.6));
        const x = cx + Math.cos(p.a) * p.r;
        const y = cy + Math.sin(p.a) * p.r * 0.7;
        const alpha = 0.5 * (1 - p.r / (Math.min(W, H) * 0.55));
        ctx.beginPath(); ctx.arc(x, y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = p.c + Math.max(0.05, alpha).toFixed(3) + ")"; ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    init(); draw();
    const onR = () => { init(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    return () => { window.removeEventListener("resize", onR); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="hero" id="top">
      <canvas className="hero-canvas" ref={ref} aria-hidden="true" />
      <div className="hero-inner">
        <div className="eyebrow">{lang === "zh" ? "信仰 · 意识 · 神话 · 意义的宇宙地图" : "The Atlas of Belief · Consciousness · Myth · Meaning"}</div>
        <h1>
          {lang === "zh" ? "人类精神宇宙" : "Human Spiritual Universe"}
          <span className="zh">{lang === "zh" ? "Human Spiritual Universe" : "人类精神宇宙"}</span>
        </h1>
        <p className="tagline">
          {lang === "zh"
            ? "数千年来，人类一直在寻找超越生存本身的答案。这里是这段探索历程的宇宙地图。"
            : "For thousands of years, humanity has searched for answers beyond survival. This is the map of that journey."}
        </p>
      </div>
      <div className="scrollcue">{lang === "zh" ? "向下滚动 ↓" : "SCROLL ↓"}</div>
    </section>
  );
}
