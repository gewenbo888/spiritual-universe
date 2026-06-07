# HUMAN SPIRITUAL UNIVERSE · 人类精神宇宙 — Content Spec for section files

You write ONE or more section data files at `src/content/secNN.ts`. Each exports a typed `Section`
object. The shell renders it — you write DATA, not components. **Educational / anthropological /
comparative tone — NOT religious, NOT devotional, NOT dismissive, NOT a conversion. Balanced and
accurate.** Fully bilingual: every `BiText` needs natural English + native 中文.

## The exact TypeScript shape (from src/lib/types.ts)

```ts
import type { Section } from "@/lib/types";
const sec: Section = {
  id: "monotheism",          // slug used as the anchor — MUST match the assignment below
  num: 2,                     // section number from the assignment
  kicker: { en: "Section 02 · One God", zh: "第二章 · 唯一神" },
  title: { en: "Monotheism", zh: "一神论" },
  lead: { en: "One framing sentence…", zh: "一句引子……" },
  body: [
    { en: "Paragraph one…", zh: "第一段……" },
    { en: "Paragraph two…", zh: "第二段……" },
    // 3–5 substantial, accurate paragraphs
  ],
  cards: [
    { icon: "✡", title: { en: "Judaism", zh: "犹太教" }, body: { en: "…", zh: "……" } },
    // 4–8 cards: traditions / concepts / figures
  ],
  questions: [                // optional, 0–3
    { q: { en: "What is one God?", zh: "何为唯一神？" }, a: { en: "…", zh: "……" } },
  ],
  viz: "constellation",      // "constellation" | "timeline" | "comparison" | "cards" | "none"
  vizTitle: { en: "The Abrahamic Map", zh: "亚伯拉罕谱系图" },
  vizData: [                  // for "constellation" or "timeline" (8–14 nodes)
    { label: { en: "Judaism", zh: "犹太教" }, group: "Abrahamic", note: { en: "…", zh: "…" }, year: -1300 },
    // constellation: group clusters nodes; note shows on click. timeline: needs `year` (negative=BCE).
  ],
  comparison: {               // ONLY when viz === "comparison"
    aspect: { en: "View of the soul", zh: "对灵魂的看法" },
    dimensions: [ { en: "Christianity", zh: "基督教" }, { en: "Buddhism", zh: "佛教" } ],
    cells: [ { en: "An eternal soul…", zh: "永恒的灵魂……" }, { en: "No fixed self…", zh: "无固定自我……" } ],
    // dimensions[i] pairs with cells[i] — SAME length.
  },
  quote: { text: { en: "\"…\"", zh: "「……」" }, attr: { en: "— Source", zh: "— 出处" } }, // optional
  accent: "#e8c074",          // use the hex from your assignment
};
export default sec;
```

## RULES
- File: `src/content/secNN.ts` (zero-padded). `export default sec;` with `const sec: Section = {…}`.
- `id` and `num` and `accent` MUST match the assignment table exactly (ids are anchors used by nav).
- Bilingual everywhere; 中文 must read natively. Accurate, respectful, comparative.
- Pick the `viz` named in the assignment. Provide `vizData` (8–14 nodes) for constellation/timeline, or
  `comparison` for comparison. For "cards"/"none" omit vizData.
- Keep strings on one line (escape any quotes). Valid TypeScript — it is type-checked at build.
- No imports other than the `import type { Section }` line. No JSX. No functions.

## ASSIGNMENTS (id · num · titles · viz · accent)

1. `map-of-belief` · 1 · The Map of Belief / 信仰宇宙地图 · **constellation** (the 10 stances: Monotheism, Polytheism, Pantheism, Panentheism, Animism, Atheism, Agnosticism, Deism, Mysticism, Spiritual Naturalism — group them) · `#e8c074`
2. `monotheism` · 2 · Monotheism / 一神论 · **constellation** (Judaism, Christianity, Islam, Sikhism, Bahá'í + roots) · `#74b6e6`
3. `polytheism` · 3 · Polytheism / 多神论 · **constellation** deity atlas (Egypt, Greece, Rome, Norse, Hindu, Shinto pantheons) · `#f0a85a`
4. `pantheism` · 4 · Pantheism / 泛神论 · **cards** (God-as-universe, Spinoza, Stoics, Eastern parallels) · `#7fe0a8`
5. `panentheism` · 5 · Panentheism / 万有在神论 · **comparison** (vs Monotheism, vs Pantheism) · `#a489ff`
6. `animism` · 6 · Animism / 泛灵论 · **constellation** spirit-world map (nature/animal/ancestor/place spirits) · `#7fe0a8`
7. `atheism` · 7 · Atheism / 无神论 · **cards** (secular humanism, materialism, rationalism, new atheism) · `#74b6e6`
8. `agnosticism` · 8 · Agnosticism / 不可知论 · **cards** (strong/weak, Huxley, the limits of knowledge) · `#5fd6c4`
9. `evolution-of-belief` · 9 · The Evolution of Belief / 信仰进化史 · **timeline** (Animism→Shamanism→Polytheism→Axial/philosophical religions→Monotheism→Secularism→AI era; use years, negative=BCE, ~9 nodes) · `#e8c074`
10. `shamanism` · 10 · Shamanism / 萨满宇宙 · **cards** (spirit journeys, ancestors, totems, ritual, trance) · `#ff8fb0`
11. `taoism` · 11 · Taoism / 道家与道教 · **cards** (Tao, Wu Wei, Yin-Yang, immortality, Tao Te Ching) · `#5fd6c4`
12. `buddhism` · 12 · Buddhism / 佛教宇宙 · **cards** (Four Noble Truths, Nirvana, Karma, Rebirth, Meditation, schools) · `#f0a85a`
13. `hinduism` · 13 · Hinduism / 印度教宇宙 · **cards** (Brahman, Atman, Karma, Dharma, Yoga, deities) · `#ff8fb0`
14. `mysticism` · 14 · Mysticism / 神秘主义 · **comparison** (Christian, Islamic/Sufi, Jewish/Kabbalah, Eastern) · `#a489ff`
15. `alchemy` · 15 · Alchemy / 炼金术 · **cards** (transformation, symbolism, Western, Chinese/neidan, internal) · `#e8c074`
16. `astrology` · 16 · Astrology / 占星学 · **timeline** (Babylon→Hellenistic→Chinese→Indian/Jyotish→medieval→modern; years) · `#74b6e6`
17. `witchcraft` · 17 · Witchcraft & Magical Traditions / 巫术与魔法传统 · **cards** (folk traditions, ritual, historical persecution, modern Wicca) · `#a489ff`
18. `mythology-atlas` · 18 · Mythology Atlas / 全球神话宇宙 · **constellation** (Greek, Egyptian, Norse, Chinese, Japanese, Hindu, Mayan, African — group by region) · `#f0a85a`
19. `dreams` · 19 · Dreams / 梦境宇宙 · **cards** (dream symbolism, lucid dreaming, vision quests, psychology of dreams) · `#a489ff`
20. `ancestors` · 20 · Ancestors / 祖先宇宙 · **cards** (Chinese ancestor veneration, African, Día de Muertos, Shinto, Roman) · `#e8c074`
21. `consciousness` · 21 · Consciousness / 意识宇宙 · **cards** (neuroscience, philosophy of mind, meditation, mystical experience, AI consciousness) · `#5fd6c4`
22. `life-after-death` · 22 · Life After Death / 死后世界 · **comparison** (Christianity, Islam, Hinduism, Buddhism, Egyptian, Naturalism) · `#74b6e6`
23. `the-soul` · 23 · The Soul / 灵魂 · **comparison** (Religious, Philosophical, Scientific views) · `#ff8fb0`
24. `enlightenment` · 24 · Enlightenment / 觉悟 · **comparison** (Buddhism nirvana/bodhi, Hindu moksha, Taoist, mystical union) · `#a489ff`
25. `future-of-spirituality` · 25 · The Future of Spirituality / 未来精神文明 · **constellation** (AI religions, digital spirituality, virtual sacred spaces, synthetic consciousness, future civilizations) · `#5fd6c4`
