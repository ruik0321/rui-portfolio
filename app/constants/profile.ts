export const STATS = [
  {
    ja: "5年",
    en: "5yr",
    labelJa: "Illustrator / Photoshop",
    labelEn: "Illustrator / Photoshop",
  },
  {
    ja: "5年",
    en: "5yr",
    labelJa: "HTML / CSS",
    labelEn: "HTML / CSS",
  },
  {
    ja: "3年",
    en: "3yr",
    labelJa: "JavaScript",
    labelEn: "JavaScript",
  },
];

export const HISTORY = [
  { year: "2019", ja: "イラストレーター・フォトショップの独学を開始", en: "Started learning Illustrator & Photoshop" },
  { year: "2020", ja: "HTML/CSSの独学を開始、Web制作の基礎を習得", en: "Started learning HTML/CSS" },
  { year: "2022", ja: "JavaScript・フロントエンド開発の学習を開始", en: "Started learning JavaScript" },
  { year: "2024", ja: "Next.js・TypeScriptの学習を開始", en: "Started learning Next.js & TypeScript" },
  { year: "2025", ja: "洗濯天気アプリをNext.js + TypeScriptで開発・公開", en: "Launched laundry weather app with Next.js + TypeScript" },
];

export const SKILLS = [
  {
    category: "Design",
    items: [
      { name: "Illustrator", years: 5 },
      { name: "Photoshop", years: 5 },
      { name: "Figma", years: 1 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", years: 5 },
      { name: "JavaScript", years: 3 },
      { name: "TypeScript", years: 1 },
      { name: "React / Next.js", years: 1 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Google Spreadsheet", years: 1 },
      { name: "Git / GitHub", years: 1 },
    ],
  },
];

export const WORKS = [
  {
    title: "洗濯日和 / Laundry weather",
    ja: "天気データをもとに洗濯指数を算出するWebアプリ。湿度・風速・花粉・PM2.5を組み合わせた独自スコアリングを実装。",
    en: "A web app that calculates laundry index based on weather data. Implements original scoring combining humidity, wind speed, pollen, and PM2.5.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    url: "https://laundry-weather.vercel.app/",
    github: "https://github.com/ruik0321/laundry-weather",
    image: "/works-laundry.png",
  },
];

export const GITHUB_URL = "https://github.com/ruik0321";