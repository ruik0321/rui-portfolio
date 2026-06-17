"use client";

import { useLang } from "../context/LangContext";
import { STATS, HISTORY } from "../constants/profile";
import SectionWrapper from "./ui/SectionWrapper";

const desc = {
  ja: [
    "群馬県在住のフロントエンドエンジニア／デザイナーです。イラストレーターとフォトショップを5年以上使用しており、デザインの視点からコーディングまで一貫して対応できます。",
    "現在はNext.js・TypeScriptを中心に学習を進めており、実用的なWebアプリケーションの開発に取り組んでいます。在宅でのお仕事を中心に、丁寧な制作を心がけています。",
  ],
  en: [
    "Frontend engineer and designer based in Gunma, Japan. With over 5 years of Illustrator and Photoshop experience, I handle everything from design to implementation.",
    "Currently focused on Next.js and TypeScript, building practical web applications. I work remotely and take pride in delivering careful, quality work.",
  ],
};

export default function About() {
  const { lang } = useLang();

  return (
    <SectionWrapper id="about" label="ABOUT" title="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* 左：写真 */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-sm mx-auto">
            <img
              src="/profile.jpg"
              alt="Rui"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-full max-w-sm mx-auto border border-primary/10 rounded-2xl -z-10 aspect-[3/4]" />
        </div>

        {/* 右：テキスト */}
        <div>
          {desc[lang].map((text, i) => (
            <p key={i} className="text-primary/60 leading-relaxed mb-4">{text}</p>
          ))}

          <div className="flex gap-8 mb-12 mt-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-light">{s.value[lang]}</p>
                <p className="label mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="label mb-6">HISTORY</p>
          <div className="space-y-4">
            {HISTORY.map((item) => (
              <div key={item.year} className="flex gap-6">
                <p className="text-primary/40 w-12 flex-shrink-0">{item.year}</p>
                <p className="text-primary/60">{item[lang]}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
