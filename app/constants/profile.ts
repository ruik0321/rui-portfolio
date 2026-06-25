export const HISTORY = [
  { year: "2019", ja: "Illustrator・Photoshopを独学し、デザイン制作のスキルを習得", en: "Learned Illustrator & Photoshop, gaining design production skills" },
  { year: "2020", ja: "HTML/CSSを習得し、Web制作の基礎を確立", en: "Mastered HTML/CSS, building a foundation in web production" },
  { year: "2022", ja: "JavaScriptを習得し、フロントエンド開発に対応できるように", en: "Learned JavaScript, becoming capable of frontend development" },
  { year: "2024", ja: "Next.js・TypeScriptを習得し、モダンな開発環境に対応", en: "Acquired Next.js & TypeScript, adapting to modern development workflows" },
  { year: "2025", ja: "洗濯天気アプリをNext.js + TypeScriptで開発・公開", en: "Developed and launched a laundry weather app with Next.js + TypeScript" },
];

export const SKILLS = [
  {
    category: "Design",
    items: [
      { name: "Illustrator", years: 7 },
      { name: "Photoshop", years: 7 },
      { name: "Figma", years: 2 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", years: 6 },
      { name: "JavaScript", years: 4 },
      { name: "TypeScript", years: 2 },
      { name: "React / Next.js", years: 2 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Google Spreadsheet", years: 2 },
      { name: "Git / GitHub", years: 1 },
    ],
  },
];

// 年数の表記をここで一元管理（"7年" / "7yr"）
export function formatYears(years: number, lang: "ja" | "en") {
  return lang === "ja" ? `${years}年` : `${years}yr`;
}

// Aboutのハイライト表示用：各カテゴリの代表スキルを1つピックアップ
export const STATS = [
  { name: "Illustrator", category: "Design" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
].map(({ name }) => {
  const item = SKILLS.flatMap((g) => g.items).find((i) => i.name === name)!;
  return { name: item.name, years: item.years };
});

export const GITHUB_URL = "https://github.com/ruik0321";