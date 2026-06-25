"use client";

import { useLang } from "../context/LangContext";
import { STATS, formatYears } from "../constants/profile";
import SectionWrapper from "./ui/SectionWrapper";
import SkillMarquee from "./SkillMarquee";

const desc = {
  ja: [
    "群馬を拠点に、デザインとコードの両方を扱うフロントエンドエンジニアとして活動しています。7年間のIllustrator・Photoshop経験を土台に、見た目だけでなく構造や保守性まで考え抜いたWebサイトを構築します。",
    "コンポーネント設計・レスポンシブ対応・パフォーマンスを重視し、Next.js・TypeScriptで実用的なWebアプリケーションを開発・公開しています。一つひとつの仕事に丁寧に向き合うことを大切にしています。",
  ],
  en: [
    "Based in Gunma, Japan, I work as a frontend engineer who handles both design and code. Built on 7 years of Illustrator and Photoshop experience, I create websites with not just good looks, but solid structure and long-term maintainability in mind.",
    "I focus on component architecture, responsive design, and performance, building and shipping practical web applications with Next.js and TypeScript. I take every project seriously and care about getting the details right.",
  ],
};

export default function About() {
  const { lang } = useLang();

  return (
    <SectionWrapper id="about" label="ABOUT" title="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* 左：写真 */}
        <div className="relative">
          <div className="overflow-hidden aspect-[3/4] w-full max-w-sm mx-auto">
            <img
              src="/profile.jpg"
              alt="Rui"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
        </div>

        {/* 右：テキスト */}
        <div>
          {desc[lang].map((text, i) => (
            <p key={i} className="text-primary/60 leading-relaxed mb-4">{text}</p>
          ))}

          <div className="flex gap-8 mb-12 mt-4">
            {STATS.map((s) => (
              <div key={s.name}>
                <p className="text-2xl font-light">{formatYears(s.years, lang)}</p>
                <p className="label mt-1">{s.name}</p>
              </div>
            ))}
          </div>

          <p className="label mb-6">CAN DO</p>
          <SkillMarquee />
        </div>

      </div>
    </SectionWrapper>
  );
}
