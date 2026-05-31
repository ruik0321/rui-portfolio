"use client";

import { useLang } from "../context/LangContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { STATS, HISTORY } from "../constants/profile";

const content = {
  ja: {
    label: "ABOUT",
    title: "About Me",
    desc1: "群馬県在住のフロントエンドエンジニア／デザイナーです。イラストレーターとフォトショップを5年以上使用しており、デザインの視点からコーディングまで一貫して対応できます。",
    desc2: "現在はNext.js・TypeScriptを中心に学習を進めており、実用的なWebアプリケーションの開発に取り組んでいます。在宅でのお仕事を中心に、丁寧な制作を心がけています。",
    historyLabel: "HISTORY",
  },
  en: {
    label: "ABOUT",
    title: "About Me",
    desc1: "Frontend engineer and designer based in Gunma, Japan. With over 5 years of Illustrator and Photoshop experience, I handle everything from design to implementation.",
    desc2: "Currently focused on Next.js and TypeScript, building practical web applications. I work remotely and take pride in delivering careful, quality work.",
    historyLabel: "HISTORY",
  },
};

export default function About() {
  const { ref, visible } = useScrollAnimation();
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section
  id="about"
  ref={ref}
  className="py-24 px-6 bg-white"
>
  <div
    className="max-w-5xl mx-auto transition-all duration-700"
    style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
  >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest text-gray-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
          {t.title}
        </h2>

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
            <div className="absolute -bottom-3 -right-3 w-full max-w-sm mx-auto border border-gray-200 rounded-2xl -z-10 aspect-[3/4]" />
          </div>

          {/* 右：テキスト */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">{t.desc1}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t.desc2}</p>

            <div className="flex gap-8 mb-12">
  {STATS.map((s) => (
    <div key={s.labelJa}>
      <p className="text-2xl font-light text-gray-900">{lang === "ja" ? s.ja : s.en}</p>
      <p className="text-xs text-gray-400 mt-1">{lang === "ja" ? s.labelJa : s.labelEn}</p>
    </div>
  ))}
</div>

            <p className="text-xs tracking-widest text-gray-400 mb-6">{t.historyLabel}</p>
            <div className="space-y-4">
              {HISTORY.map((item) => (
                <div key={item.year} className="flex gap-6">
                  <p className="text-sm text-gray-400 w-12 flex-shrink-0">{item.year}</p>
                  <p className="text-sm text-gray-600">{item[lang]}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}