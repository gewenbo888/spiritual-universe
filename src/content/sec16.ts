import type { Section } from "@/lib/types";

const sec: Section = {
  id: "astrology",
  num: 16,
  kicker: { en: "Section 16 · As Above, So Below", zh: "第十六章 · 上行下效" },
  title: { en: "Astrology", zh: "占星学" },
  lead: {
    en: "Long before astronomy and astrology parted ways, humanity read the night sky as a text — a belief that the movements of the heavens mirror, or even shape, the affairs of earth.",
    zh: "早在天文学与占星术分道扬镳之前，人类便将夜空当作一部文本来阅读——相信天体的运行映照、甚至塑造着地上的人事。",
  },
  body: [
    {
      en: "The systematic practice began in Mesopotamia, where Babylonian priests recorded celestial omens for kings: an eclipse or a planet's station was read as a message about war, harvest, and the throne. The sky was the empire's earliest intelligence service.",
      zh: "系统化的实践始于美索不达米亚，巴比伦的祭司为君王记录天象征兆：一次日食、一颗行星的「留」，都被解读为关于战争、收成与王位的讯息。天空，是帝国最早的情报机构。",
    },
    {
      en: "In the Hellenistic world these omens were fused with Greek geometry and the zodiac to produce the horoscope — a chart of the heavens at the moment of birth, claiming to map an individual fate. This is the form most familiar to the West today.",
      zh: "在希腊化世界，这些征兆与希腊几何及黄道带相融合，催生了「天宫图」——一张出生时刻的天象图，声称能勾画个人的命运。这正是当今西方最为熟悉的形式。",
    },
    {
      en: "Other civilizations grew their own sky-sciences: Chinese astrology, woven into the calendar and the cycle of twelve animals; and Indian Jyotisha, still consulted for marriages and auspicious timing. Each treated the cosmos as a vast, legible clock.",
      zh: "其他文明也培育出各自的「天之学」：中国占星，编织进历法与十二生肖的循环；以及印度的「时间之学」（Jyotisha），至今仍被用于婚配与择吉。每一者，都将宇宙视为一座浩大而可读的时钟。",
    },
    {
      en: "The Scientific Revolution severed astrology's claim to predict events, and modern studies find no causal mechanism. Yet it survives — reinvented in the twentieth century as a psychological language of personality and meaning, more mirror than prophecy.",
      zh: "科学革命斩断了占星预测事件的主张，现代研究也未发现其因果机制。然而它依旧存续——在二十世纪被重塑为一种关于人格与意义的心理语言，与其说是预言，不如说是一面镜子。",
    },
  ],
  cards: [
    { icon: "🌙", title: { en: "Celestial Omens", zh: "天象征兆" }, body: { en: "Babylonian priests read eclipses and planets as messages for the king.", zh: "巴比伦祭司将日食与行星读作给君王的讯息。" } },
    { icon: "♈", title: { en: "The Horoscope", zh: "天宫图" }, body: { en: "A Hellenistic chart of the sky at birth, mapping an individual destiny.", zh: "希腊化时代出生时的天象图，描摹个人命运。" } },
    { icon: "🐉", title: { en: "Chinese Astrology", zh: "中国占星" }, body: { en: "Woven into the calendar, the twelve animals, and the five phases.", zh: "编织于历法、十二生肖与五行之中。" } },
    { icon: "🕉", title: { en: "Jyotisha", zh: "印度占星" }, body: { en: "India's 'science of light,' still consulted for timing and marriage.", zh: "印度的「光之学」，至今用于择时与婚配。" } },
    { icon: "🔭", title: { en: "The Great Divorce", zh: "科学的分手" }, body: { en: "The Scientific Revolution split astronomy from astrology's predictions.", zh: "科学革命使天文学与占星预测分道扬镳。" } },
    { icon: "🪞", title: { en: "Psychological Turn", zh: "心理学转向" }, body: { en: "Modern astrology reframes the chart as a language of self, not prophecy.", zh: "现代占星将星盘重构为一种关于自我的语言，而非预言。" } },
  ],
  viz: "timeline",
  vizTitle: { en: "Astrology Across Civilizations", zh: "跨文明的占星史" },
  vizData: [
    { label: { en: "Babylonian Omens", zh: "巴比伦征兆" }, year: -1800, note: { en: "Celestial omens recorded for the throne in Mesopotamia.", zh: "美索不达米亚为王权记录天象征兆。" } },
    { label: { en: "Chinese Sky-Reading", zh: "中国天文占" }, year: -1000, note: { en: "Astral observation fused with calendar and statecraft.", zh: "天象观测与历法、治国相融。" } },
    { label: { en: "Hellenistic Horoscopy", zh: "希腊化天宫图" }, year: -100, note: { en: "Greek geometry + the zodiac produce the birth chart.", zh: "希腊几何与黄道带催生出生星盘。" } },
    { label: { en: "Indian Jyotisha", zh: "印度时间之学" }, year: 300, note: { en: "A codified Vedic astrology for timing and fate.", zh: "成文的吠陀占星，用于择时与命运。" } },
    { label: { en: "Islamic & Medieval", zh: "伊斯兰与中世纪" }, year: 900, note: { en: "Arab astronomers preserve and extend astrological learning.", zh: "阿拉伯天文学家保存并拓展占星之学。" } },
    { label: { en: "Renaissance Courts", zh: "文艺复兴宫廷" }, year: 1500, note: { en: "Astrologers advise kings even as astronomy advances.", zh: "占星师辅佐君王，而天文学亦在进步。" } },
    { label: { en: "The Enlightenment Decline", zh: "启蒙时代的衰落" }, year: 1700, note: { en: "Mechanistic science strips astrology of predictive authority.", zh: "机械论科学剥夺了占星的预测权威。" } },
    { label: { en: "Psychological Astrology", zh: "心理占星" }, year: 1970, note: { en: "Reborn as a language of personality and meaning.", zh: "重生为一种人格与意义的语言。" } },
  ],
  accent: "#74b6e6",
  quote: {
    text: { en: "\"The stars incline; they do not compel.\"", zh: "「星辰只是倾向，而非强迫。」" },
    attr: { en: "— medieval astrological maxim", zh: "— 中世纪占星格言" },
  },
};
export default sec;
