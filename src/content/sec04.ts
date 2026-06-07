import type { Section } from "@/lib/types";

const sec: Section = {
  id: "pantheism",
  num: 4,
  kicker: { en: "Section 04 · The Divine Universe", zh: "第四章 · 神圣的宇宙" },
  title: { en: "Pantheism", zh: "泛神论" },
  lead: {
    en: "Pantheism erases the line between Creator and creation: there is no God standing outside the universe, because the universe in its totality is what the word 'God' names.",
    zh: "泛神论抹去了造物主与受造物之间的界线：并不存在一位立于宇宙之外的神，因为宇宙的整体，正是「神」这个词所指称的对象。",
  },
  body: [
    {
      en: "Where monotheism imagines a personal deity who makes the world, pantheism identifies divinity with the world itself — its laws, its substance, its unfathomable order. To contemplate nature deeply, on this view, is already a form of reverence.",
      zh: "一神论设想一位创造世界的有位格之神；而泛神论则将神圣等同于世界本身——它的规律、它的实体、它那不可测度的秩序。在这种观点看来，深深地凝视自然，本身就是一种敬畏。",
    },
    {
      en: "The clearest Western statement came from Baruch Spinoza, whose phrase Deus sive Natura — 'God, or Nature' — treats the two words as names for a single infinite reality, expressed through endless attributes of which thought and extension are the two we know.",
      zh: "西方最清晰的表述来自巴鲁赫·斯宾诺莎，他的名句「Deus sive Natura」——「神，即自然」——将这两个词视为同一无限实在的名称，这一实在通过无尽的属性显现，而思维与广延只是我们所知的其中两种。",
    },
    {
      en: "Strands of pantheism appear far beyond Europe: in the Stoic logos that pervades the cosmos, in the Hindu intuition that Brahman is the ground of all being, and in Daoist and animist sensibilities where the sacred is immanent rather than enthroned above.",
      zh: "泛神论的脉络远不止于欧洲：它见于贯穿宇宙的斯多噶「逻各斯」，见于印度教「梵」即一切存在之根基的直觉，也见于道家与泛灵论的感受方式——在那里，神圣是内在的，而非高踞于上的。",
    },
    {
      en: "Critics ask whether a God identical with everything explains anything, or merely renames the cosmos. Defenders answer that the gain is not explanatory but orientational: it makes wonder, not obedience, the proper response to existence.",
      zh: "批评者质问：一位与万物等同的神是否解释了任何东西，抑或只是为宇宙换了个名字。辩护者回应说，其收获不在解释，而在指向——它使惊奇、而非顺从，成为面对存在的恰当回应。",
    },
  ],
  cards: [
    { icon: "∞", title: { en: "Deus sive Natura", zh: "神即自然" }, body: { en: "Spinoza's identity of God and Nature as one infinite, self-caused substance.", zh: "斯宾诺莎将神与自然视为同一无限、自因的实体。" } },
    { icon: "🜂", title: { en: "The Stoic Logos", zh: "斯多噶的逻各斯" }, body: { en: "A rational fire pervading and ordering the whole cosmos from within.", zh: "一种理性之火，自内贯穿并安排着整个宇宙。" } },
    { icon: "🕉", title: { en: "Brahman", zh: "梵" }, body: { en: "In Advaita Vedanta, the single reality of which all things are appearances.", zh: "在不二吠檀多中，万物皆为其显现的唯一实在。" } },
    { icon: "☯", title: { en: "The Immanent Dao", zh: "内在的道" }, body: { en: "The Way is not a ruler above nature but the pattern flowing through it.", zh: "道并非高居自然之上的主宰，而是流贯其中的纹理。" } },
    { icon: "🌌", title: { en: "Scientific Pantheism", zh: "科学泛神论" }, body: { en: "A modern reverence for the cosmos itself, as voiced by Einstein and Sagan.", zh: "一种对宇宙本身的现代敬畏，正如爱因斯坦与萨根所表达的。" } },
    { icon: "🍃", title: { en: "Sacred Immanence", zh: "神圣的内在性" }, body: { en: "Divinity found within the world, not beyond it — wonder as worship.", zh: "在世界之内、而非之外寻见神圣——以惊奇为敬拜。" } },
  ],
  questions: [
    { q: { en: "If God is the universe, is nature itself divine?", zh: "若神即宇宙，自然本身是否神圣？" }, a: { en: "Pantheists say yes: there is no sacred elsewhere to seek, because the elsewhere and the here are one.", zh: "泛神论者回答「是」：并无别处的神圣可寻，因为别处与此处本是一体。" } },
    { q: { en: "Does identifying God with everything explain anything?", zh: "将神等同于万物，是否解释了任何事？" }, a: { en: "Perhaps not causally — but it reframes existence as something to marvel at rather than merely to obey.", zh: "或许在因果上并未解释——但它将存在重构为值得惊叹之物，而非仅供服从。" } },
  ],
  viz: "cards",
  accent: "#7fe0a8",
  quote: {
    text: { en: "\"I believe in Spinoza's God, who reveals himself in the orderly harmony of what exists.\"", zh: "「我信仰斯宾诺莎的神——他显现于存在万物那井然的和谐之中。」" },
    attr: { en: "— Albert Einstein", zh: "— 阿尔伯特·爱因斯坦" },
  },
};
export default sec;
