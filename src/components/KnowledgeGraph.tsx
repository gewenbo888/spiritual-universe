"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangContext";

type N = { id: string; en: string; zh: string; g: string; note_en: string; note_zh: string };
const GROUPS: Record<string, string> = {
  tradition: "#e8c074", concept: "#a489ff", figure: "#5fd6c4", text: "#74b6e6", symbol: "#ff8fb0",
};
const NODES: N[] = [
  { id: "monotheism", en: "Monotheism", zh: "一神论", g: "concept", note_en: "One supreme God.", note_zh: "唯一至高的神。" },
  { id: "polytheism", en: "Polytheism", zh: "多神论", g: "concept", note_en: "Many gods, many powers.", note_zh: "众神与众多力量。" },
  { id: "pantheism", en: "Pantheism", zh: "泛神论", g: "concept", note_en: "God is the universe itself.", note_zh: "神即宇宙本身。" },
  { id: "animism", en: "Animism", zh: "泛灵论", g: "concept", note_en: "All things bear spirit.", note_zh: "万物皆有灵。" },
  { id: "judaism", en: "Judaism", zh: "犹太教", g: "tradition", note_en: "Covenant monotheism.", note_zh: "立约的一神信仰。" },
  { id: "christianity", en: "Christianity", zh: "基督教", g: "tradition", note_en: "Grew from Judaism.", note_zh: "由犹太教发展而来。" },
  { id: "islam", en: "Islam", zh: "伊斯兰教", g: "tradition", note_en: "Abrahamic monotheism.", note_zh: "亚伯拉罕一神传统。" },
  { id: "hinduism", en: "Hinduism", zh: "印度教", g: "tradition", note_en: "Brahman, Atman, Dharma.", note_zh: "梵、我、法。" },
  { id: "buddhism", en: "Buddhism", zh: "佛教", g: "tradition", note_en: "From Hindu soil; the Middle Way.", note_zh: "源于印度土壤的中道。" },
  { id: "taoism", en: "Taoism", zh: "道教", g: "tradition", note_en: "The Tao, Wu Wei.", note_zh: "道与无为。" },
  { id: "greek", en: "Greek Myth", zh: "希腊神话", g: "tradition", note_en: "Olympian polytheism.", note_zh: "奥林匹斯多神。" },
  { id: "shamanism", en: "Shamanism", zh: "萨满", g: "tradition", note_en: "Spirit journeys.", note_zh: "灵魂之旅。" },
  { id: "mysticism", en: "Mysticism", zh: "神秘主义", g: "concept", note_en: "Direct union with the divine.", note_zh: "与神圣的直接合一。" },
  { id: "soul", en: "The Soul", zh: "灵魂", g: "concept", note_en: "An enduring inner self.", note_zh: "持存的内在自我。" },
  { id: "karma", en: "Karma", zh: "业", g: "concept", note_en: "Action and consequence.", note_zh: "行为与果报。" },
  { id: "rebirth", en: "Rebirth", zh: "轮回", g: "concept", note_en: "Cycles of becoming.", note_zh: "生灭的循环。" },
  { id: "nirvana", en: "Nirvana", zh: "涅槃", g: "concept", note_en: "Liberation from suffering.", note_zh: "苦的解脱。" },
  { id: "enlightenment", en: "Enlightenment", zh: "觉悟", g: "concept", note_en: "Awakening to reality.", note_zh: "对实相的觉醒。" },
  { id: "afterlife", en: "Afterlife", zh: "死后世界", g: "concept", note_en: "What follows death.", note_zh: "死亡之后。" },
  { id: "consciousness", en: "Consciousness", zh: "意识", g: "concept", note_en: "The fact of experience.", note_zh: "经验的事实。" },
  { id: "atheism", en: "Atheism", zh: "无神论", g: "concept", note_en: "Without gods.", note_zh: "没有神。" },
  { id: "spinoza", en: "Spinoza", zh: "斯宾诺莎", g: "figure", note_en: "Deus sive Natura.", note_zh: "神即自然。" },
  { id: "laozi", en: "Laozi", zh: "老子", g: "figure", note_en: "Author-figure of the Tao.", note_zh: "道的托名作者。" },
  { id: "buddha", en: "The Buddha", zh: "佛陀", g: "figure", note_en: "The Awakened One.", note_zh: "觉者。" },
  { id: "tao-te-ching", en: "Tao Te Ching", zh: "道德经", g: "text", note_en: "The classic of the Way.", note_zh: "道之经典。" },
  { id: "vedas", en: "Vedas", zh: "吠陀", g: "text", note_en: "Hindu scripture.", note_zh: "印度教圣典。" },
  { id: "yinyang", en: "Yin–Yang", zh: "阴阳", g: "symbol", note_en: "Complementary opposites.", note_zh: "相生相成。" },
  { id: "mandala", en: "Mandala", zh: "曼陀罗", g: "symbol", note_en: "Cosmic wholeness.", note_zh: "宇宙的圆满。" },
  { id: "soul-graph", en: "Alchemy", zh: "炼金术", g: "tradition", note_en: "Transformation, inner & outer.", note_zh: "内外的转化。" },
  { id: "astrology", en: "Astrology", zh: "占星", g: "tradition", note_en: "Sky as mirror.", note_zh: "以天为镜。" },
];
const EDGES: [string, string][] = [
  ["monotheism", "judaism"], ["monotheism", "christianity"], ["monotheism", "islam"],
  ["judaism", "christianity"], ["christianity", "islam"], ["judaism", "islam"],
  ["polytheism", "greek"], ["polytheism", "hinduism"], ["animism", "shamanism"],
  ["hinduism", "buddhism"], ["hinduism", "karma"], ["hinduism", "rebirth"], ["hinduism", "soul"], ["hinduism", "vedas"],
  ["buddhism", "karma"], ["buddhism", "rebirth"], ["buddhism", "nirvana"], ["buddhism", "enlightenment"], ["buddhism", "buddha"],
  ["taoism", "laozi"], ["taoism", "tao-te-ching"], ["taoism", "yinyang"], ["taoism", "soul-graph"],
  ["pantheism", "spinoza"], ["pantheism", "taoism"], ["pantheism", "animism"],
  ["mysticism", "enlightenment"], ["mysticism", "soul"], ["mysticism", "consciousness"],
  ["soul", "afterlife"], ["rebirth", "afterlife"], ["nirvana", "enlightenment"],
  ["consciousness", "enlightenment"], ["consciousness", "atheism"], ["atheism", "consciousness"],
  ["mandala", "buddhism"], ["mandala", "hinduism"], ["astrology", "polytheism"], ["soul-graph", "astrology"],
  ["karma", "rebirth"], ["greek", "soul"],
];

export default function KnowledgeGraph({ accent = "#e8c074" }: { accent?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { lang } = useLang();
  const [sel, setSel] = useState<string | null>(null);
  const posRef = useRef<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const groups = Array.from(new Set(NODES.map((n) => n.g)));
    function hash(s: string) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return (h % 1000) / 1000; }
    function layout() {
      W = cv!.width = cv!.clientWidth; H = cv!.height = cv!.clientHeight;
      const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.40;
      const pos: Record<string, { x: number; y: number }> = {};
      NODES.forEach((n) => {
        const gi = groups.indexOf(n.g);
        const ga = (gi / groups.length) * Math.PI * 2;
        const gcx = cx + Math.cos(ga) * R * 0.55, gcy = cy + Math.sin(ga) * R * 0.55;
        const ang = hash(n.id) * Math.PI * 2, rad = R * (0.12 + 0.30 * hash(n.id + "r"));
        let x = gcx + Math.cos(ang) * rad, y = gcy + Math.sin(ang) * rad;
        x = Math.max(20, Math.min(W - 20, x)); y = Math.max(20, Math.min(H - 20, y));
        pos[n.id] = { x, y };
      });
      posRef.current = pos;
    }
    const neigh = new Set<string>();
    if (sel) { neigh.add(sel); EDGES.forEach(([a, b]) => { if (a === sel) neigh.add(b); if (b === sel) neigh.add(a); }); }
    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H); frame++;
      const pos = posRef.current;
      EDGES.forEach(([a, b]) => {
        const pa = pos[a], pb = pos[b]; if (!pa || !pb) return;
        const hot = sel && (a === sel || b === sel);
        ctx.strokeStyle = hot ? "rgba(232,192,116,0.55)" : "rgba(180,160,240,0.09)";
        ctx.lineWidth = hot ? 1.4 : 0.6;
        ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
      });
      NODES.forEach((n) => {
        const p = pos[n.id]; if (!p) return;
        const col = GROUPS[n.g] || accent;
        const dim = sel && !neigh.has(n.id);
        const tw = reduce ? 1 : 0.7 + 0.3 * (0.5 + 0.5 * Math.sin(frame * 0.03 + hash(n.id) * 6));
        const r = (n.id === sel ? 7 : 4) * (0.85 + 0.3 * tw);
        ctx.globalAlpha = dim ? 0.25 : 1;
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        gr.addColorStop(0, col + "cc"); gr.addColorStop(1, col + "00");
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2); ctx.fillStyle = gr; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fillStyle = n.id === sel ? "#fff" : col; ctx.fill();
        if (n.id === sel || !sel) {
          ctx.font = (n.id === sel ? "600 " : "400 ") + "11px 'Manrope',sans-serif";
          ctx.fillStyle = "rgba(236,231,247,0.75)"; ctx.textAlign = "center";
          ctx.fillText(lang === "zh" ? n.zh : n.en, p.x, p.y - r - 5);
        }
        ctx.globalAlpha = 1;
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    function onClick(e: MouseEvent) {
      const rect = cv!.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const pos = posRef.current; let best: string | null = null, bd = 1e9;
      NODES.forEach((n) => { const p = pos[n.id]; if (!p) return; const d = Math.hypot(p.x - mx, p.y - my); if (d < bd) { bd = d; best = n.id; } });
      setSel(bd < 26 ? best : null);
    }
    layout(); draw();
    cv.addEventListener("click", onClick);
    const onR = () => { layout(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    return () => { cv.removeEventListener("click", onClick); window.removeEventListener("resize", onR); cancelAnimationFrame(raf); };
  }, [sel, lang, accent]);

  const node = sel ? NODES.find((n) => n.id === sel) : null;
  const links = sel ? EDGES.filter(([a, b]) => a === sel || b === sel).length : 0;
  return (
    <>
      <div className="viz-stage" style={{ height: 540 }}>
        <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="viz-readout">
        {node ? (
          <>
            <b>{lang === "zh" ? node.zh : node.en}</b> — {lang === "zh" ? node.note_zh : node.note_en}{" "}
            <span style={{ color: "var(--ink-faint)" }}>
              ({links} {lang === "zh" ? "条联结" : "connections"})
            </span>
          </>
        ) : (
          <span style={{ color: "var(--ink-faint)" }}>
            {lang === "zh" ? "点击任意节点，照亮它与整个精神宇宙的联结。" : "Click any node to light up its connections across the whole spiritual universe."}
          </span>
        )}
      </div>
    </>
  );
}
