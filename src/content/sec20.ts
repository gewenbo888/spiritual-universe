import type { Section } from "@/lib/types";

const sec: Section = {
  id: "ancestors",
  num: 20,
  kicker: { en: "Section 20 · The Living Dead", zh: "第二十章 · 不逝的先人" },
  title: { en: "Ancestors", zh: "祖先宇宙" },
  lead: {
    en: "In much of human history the dead never truly left. Across continents, ancestors remain members of the family — consulted, fed, honored, and felt as a continuing presence woven into the living community.",
    zh: "在人类历史的大部分时间里，逝者从未真正离去。跨越各大洲，祖先依旧是家庭的成员——被问询、被供养、被敬奉，并作为一种持续的临在，交织于生者的共同体之中。",
  },
  body: [
    {
      en: "Ancestor veneration is not the worship of gods but the maintenance of relationship. The dead are thought to retain interest in their descendants' fortunes, offering protection and guidance in exchange for remembrance and ritual care.",
      zh: "祖先崇拜并非对神的敬拜，而是对关系的维系。人们相信逝者仍关切后代的祸福，以护佑与指引为馈赠，换取被铭记与仪式上的照料。",
    },
    {
      en: "In China this became a civilizational backbone: the family altar, the ancestral tablet inscribed with a name, and festivals like Qingming when graves are swept and offerings made. Confucian filial piety extends duty beyond death into an unbroken lineage.",
      zh: "在中国，这成为一种文明的脊梁：家中的祭坛、镌刻姓名的祖先牌位，以及清明这样的节日——人们扫墓、上供。儒家的孝道，将责任延伸至死亡之后，融入一条绵延不绝的血脉。",
    },
    {
      en: "The pattern recurs worldwide, each with its own colour: West African traditions where ancestors mediate between humans and the high god; Japanese Obon, when lanterns guide spirits home; the Roman lares of the household; and Mexico's Día de Muertos, where remembrance becomes festival rather than grief.",
      zh: "这一模式在世界各地反复出现，各具色彩：西非传统中，祖先在人与至高神之间斡旋；日本的盂兰盆节，以灯笼引领亡灵归家；罗马家庭的「拉尔」家神；以及墨西哥的亡灵节——在那里，追忆化作节庆，而非悲恸。",
    },
    {
      en: "Beneath the variety lies a shared intuition: that identity is not bounded by a single lifespan, that we are nodes in a chain of giving and receiving, and that to remember the dead is, in part, to keep being human together.",
      zh: "在这纷繁之下，是一种共通的直觉：身份并不被单一的寿命所限，我们是一条施与受之链上的节点，而追忆逝者，在某种意义上，正是共同地、持续地为人。",
    },
  ],
  cards: [
    { icon: "🏮", title: { en: "Chinese Veneration", zh: "中国祖先崇拜" }, body: { en: "Ancestral tablets, family altars, and tomb-sweeping at Qingming.", zh: "祖先牌位、家庭祭坛，以及清明扫墓。" } },
    { icon: "🌍", title: { en: "West African Lineage", zh: "西非血脉" }, body: { en: "Ancestors mediate between the living and the high god.", zh: "祖先在生者与至高神之间斡旋。" } },
    { icon: "💀", title: { en: "Día de Muertos", zh: "亡灵节" }, body: { en: "Mexico's joyful remembrance — altars, marigolds, and shared food.", zh: "墨西哥欢愉的追忆——祭坛、万寿菊与共享的食物。" } },
    { icon: "🪔", title: { en: "Japanese Obon", zh: "盂兰盆节" }, body: { en: "Lanterns and dances welcome ancestral spirits home each summer.", zh: "每年夏日，灯笼与舞蹈迎接祖灵归家。" } },
    { icon: "🏛", title: { en: "Roman Lares", zh: "罗马家神" }, body: { en: "Household guardian-spirits honoured at the family hearth.", zh: "于家庭炉灶旁受敬奉的家宅守护之灵。" } },
    { icon: "🔗", title: { en: "Filial Continuity", zh: "孝的延续" }, body: { en: "Duty and identity stretching unbroken across generations.", zh: "责任与身份，跨越世代而绵延不断。" } },
  ],
  questions: [
    { q: { en: "Why do so many cultures keep the dead close?", zh: "为何如此多文化让逝者长伴左右？" }, a: { en: "Because memory binds the generations: the ancestors are how a family experiences itself across time.", zh: "因为记忆联结世代：祖先，正是一个家庭跨越时间体验自身的方式。" } },
  ],
  viz: "cards",
  accent: "#e8c074",
  quote: {
    text: { en: "\"To forget one's ancestors is to be a brook without a source, a tree without a root.\"", zh: "「忘记祖先，便是无源之水，无本之木。」" },
    attr: { en: "— Chinese proverb", zh: "— 中国谚语" },
  },
};
export default sec;
