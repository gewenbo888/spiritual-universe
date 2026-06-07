import type { Section } from "@/lib/types";

const sec: Section = {
  id: "agnosticism",
  num: 8,
  kicker: { en: "Section 08 · The Honest Unknown", zh: "第八章 · 诚实的未知" },
  title: { en: "Agnosticism", zh: "不可知论" },
  lead: {
    en: "Agnosticism is less an answer than a discipline of honesty: it holds that the ultimate questions — whether a God exists, what lies beyond death — may lie permanently beyond the reach of human knowledge.",
    zh: "不可知论与其说是一种答案，不如说是一种诚实的修养：它主张，那些终极问题——神是否存在、死后有何——或许永远超出人类知识所能企及的范围。",
  },
  body: [
    {
      en: "The word was coined in 1869 by the biologist Thomas Henry Huxley, who wanted a term for his own position: not the denial of God, but the refusal to claim knowledge he did not have. To assert or to deny, he argued, both overreach the evidence.",
      zh: "这个词由生物学家托马斯·亨利·赫胥黎于1869年创造，他想为自己的立场找一个名称：并非否认神，而是拒绝宣称自己并不拥有的知识。他主张，断言与否认，都越过了证据所能支撑的边界。",
    },
    {
      en: "Philosophers distinguish strong agnosticism — the claim that such truths are in principle unknowable — from weak agnosticism, the more modest stance that they are simply not known at present. The first is a thesis about reality; the second, about our current limits.",
      zh: "哲学家区分强不可知论——主张此类真理原则上不可知——与弱不可知论——一种较为谦逊的立场，即它们只是目前尚未被知晓。前者是关于实在的论断，后者则关乎我们当下的局限。",
    },
    {
      en: "Agnosticism is not the same as indifference. Many agnostics care intensely about the questions; they simply find the available answers under-warranted, and treat suspended judgment as more truthful than forced certainty in either direction.",
      zh: "不可知论并不等同于冷漠。许多不可知论者对这些问题极为在意；他们只是认为现有的答案缺乏充分依据，并将悬置判断视为比在任一方向上强求确定更为真实。",
    },
    {
      en: "Strikingly, a kindred humility runs through the mystical traditions themselves — the apophatic or 'negative' theology of figures like Pseudo-Dionysius and the Daoist warning that 'the Dao that can be spoken is not the eternal Dao.' Some unknowing is itself a spiritual posture.",
      zh: "耐人寻味的是，类似的谦逊也贯穿于神秘主义传统本身——如伪狄奥尼修斯的「否定神学」，以及道家的告诫「道可道，非常道」。某种「不知」，本身就是一种属灵的姿态。",
    },
  ],
  cards: [
    { icon: "❓", title: { en: "Strong Agnosticism", zh: "强不可知论" }, body: { en: "Ultimate reality is, in principle, unknowable to any human mind.", zh: "终极实在原则上对任何人类心智都是不可知的。" } },
    { icon: "🤔", title: { en: "Weak Agnosticism", zh: "弱不可知论" }, body: { en: "We simply do not know yet; the verdict stays open.", zh: "我们只是尚未知晓；判断保持开放。" } },
    { icon: "🔬", title: { en: "Huxley's Principle", zh: "赫胥黎原则" }, body: { en: "Follow reason as far as it leads, and claim no certainty beyond it.", zh: "让理性走到它所能及之处，绝不宣称超出它的确定。" } },
    { icon: "🌫", title: { en: "Apophatic Theology", zh: "否定神学" }, body: { en: "The divine is approached by saying what it is not — a reverent unknowing.", zh: "以「它不是什么」来趋近神圣——一种敬虔的不知。" } },
    { icon: "⚖", title: { en: "Suspended Judgment", zh: "悬置判断" }, body: { en: "Holding the question open can be more honest than a forced answer.", zh: "让问题保持开放，可能比强求一个答案更为诚实。" } },
    { icon: "🌑", title: { en: "Agnostic Atheism", zh: "不可知的无神论" }, body: { en: "Many combine the two: living without gods while claiming no certainty.", zh: "许多人将二者结合：在没有神的状态中生活，同时不宣称确定。" } },
  ],
  questions: [
    { q: { en: "Can ultimate reality truly be known?", zh: "终极实在，真的能被知晓吗？" }, a: { en: "The agnostic withholds the verdict, treating intellectual honesty as worth more than premature closure.", zh: "不可知论者搁置定论，认为思想上的诚实胜过过早的盖棺。" } },
  ],
  viz: "cards",
  accent: "#5fd6c4",
  quote: {
    text: { en: "\"Do not pretend that conclusions are certain which are not demonstrated or demonstrable.\"", zh: "「凡未被证明、也无法证明的结论，切莫佯装确定。」" },
    attr: { en: "— Thomas Henry Huxley", zh: "— 托马斯·亨利·赫胥黎" },
  },
};
export default sec;
