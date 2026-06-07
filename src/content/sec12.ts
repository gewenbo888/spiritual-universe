import type { Section } from "@/lib/types";

const sec: Section = {
  id: "buddhism",
  num: 12,
  kicker: { en: "Section 12 · The Middle Way", zh: "第十二章 · 中道" },
  title: { en: "Buddhism", zh: "佛教宇宙" },
  lead: {
    en: "Buddhism begins not with a god but with a diagnosis: life as ordinarily lived is shot through with dissatisfaction — and there is a path, walkable by anyone, that leads beyond it.",
    zh: "佛教并非始于一位神，而是始于一项诊断：寻常所过的生活，被「不满足」所贯穿——而有一条任何人皆可行走的道路，能引领人超越它。",
  },
  body: [
    {
      en: "Around the fifth century BCE, Siddhartha Gautama awakened beneath the Bodhi tree and became 'the Buddha,' the Awakened One. His first teaching set out the Four Noble Truths: that there is dukkha (suffering, unease); that it arises from craving; that it can cease; and that the Eightfold Path leads to its cessation.",
      zh: "约公元前五世纪，悉达多·乔达摩在菩提树下觉醒，成为「佛陀」，即觉者。他的初次教导阐明了四圣谛：有苦（不安、不满）；苦源于贪爱；苦可止息；而八正道通向苦的止息。",
    },
    {
      en: "Two ideas it shares with its Hindu matrix — karma and rebirth — it radically reinterprets. There is no permanent soul transmigrating; rather, a stream of conditioned moments continues, shaped by intention, until insight unbinds it. This teaching of anatta, not-self, is Buddhism's most distinctive claim.",
      zh: "它与其印度母体共享的两个观念——业与轮回——却被它彻底重释。并无一个恒常的灵魂在轮转；相反，是一道由意图所塑造、受条件制约的刹那之流在延续，直到智慧将其解开。这「无我」之教，是佛教最具特色的主张。",
    },
    {
      en: "The goal is nirvana — literally a 'blowing out,' the extinction of the fires of greed, hatred, and delusion. It is not annihilation but release: the end of compulsive becoming. Meditation, ethical conduct, and wisdom are the disciplines that make such release possible.",
      zh: "其目标是涅槃——字面意为「吹灭」，即贪、嗔、痴诸火的熄灭。它并非断灭，而是解脱：强迫性「成为」的终结。禅修、戒行与智慧，正是使这种解脱成为可能的修持。",
    },
    {
      en: "From its Indian roots Buddhism spread across Asia and split into great vehicles: Theravada, preserving the early path; Mahayana, with its compassionate bodhisattva who delays liberation for all beings; and Vajrayana, the tantric path of Tibet. Each is a different doorway into the same insight.",
      zh: "佛教自印度源头传遍亚洲，分化为几大乘:上座部（南传），守护着早期之道；大乘，以慈悲的菩萨为怀，为度一切众生而暂缓自身的解脱；以及金刚乘，西藏的密续之道。每一者，都是通向同一洞见的不同门户。",
    },
  ],
  cards: [
    { icon: "☸", title: { en: "Four Noble Truths", zh: "四圣谛" }, body: { en: "Suffering, its cause, its cessation, and the path — the heart of the teaching.", zh: "苦、集、灭、道——教法的核心。" } },
    { icon: "🛤", title: { en: "The Eightfold Path", zh: "八正道" }, body: { en: "Right view, intention, speech, action, livelihood, effort, mindfulness, concentration.", zh: "正见、正思维、正语、正业、正命、正精进、正念、正定。" } },
    { icon: "🔥", title: { en: "Nirvana", zh: "涅槃" }, body: { en: "The 'blowing out' of craving — liberation from the cycle of suffering.", zh: "贪爱的「吹灭」——从苦的循环中解脱。" } },
    { icon: "🔄", title: { en: "Karma & Rebirth", zh: "业与轮回" }, body: { en: "Intentional action conditions a continuing stream — with no fixed self carried over.", zh: "有意的行为牵动相续之流——其中并无固定自我被带过。" } },
    { icon: "🧘", title: { en: "Meditation", zh: "禅修" }, body: { en: "Samatha (calm) and vipassana (insight) cultivate clear, unclinging awareness.", zh: "止（寂静）与观（洞见），培养清明而不执取的觉知。" } },
    { icon: "🪷", title: { en: "Anatta · Not-Self", zh: "无我" }, body: { en: "No permanent essence underlies experience — only changing, conditioned process.", zh: "经验之下并无恒常的本质——唯有变动、受缘的过程。" } },
  ],
  questions: [
    { q: { en: "If there is no permanent self, what is reborn?", zh: "若无恒常的自我，是什么在轮回？" }, a: { en: "Not a soul but a continuity of conditioned moments — like one flame lighting the next.", zh: "并非灵魂，而是受缘刹那的相续——如同一焰点燃下一焰。" } },
  ],
  viz: "cards",
  accent: "#f0a85a",
  quote: {
    text: { en: "\"All conditioned things are impermanent — work out your liberation with diligence.\"", zh: "「诸行无常——当以精进，成就自己的解脱。」" },
    attr: { en: "— attributed to the Buddha", zh: "— 相传为佛陀临终之言" },
  },
};
export default sec;
