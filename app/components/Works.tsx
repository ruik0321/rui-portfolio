"use client";

import { useLang } from "../context/LangContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const content = {
  ja: {
    label: "WORKS",
    title: "Works",
    demo: "Demo",
    github: "GitHub",
  },
  en: {
    label: "WORKS",
    title: "Works",
    demo: "Demo",
    github: "GitHub",
  },
};

const WORKS = [
  {
    title: "Laundry weather",
    ja: "天気データをもとに洗濯指数を算出するWebアプリ。湿度・風速・花粉・PM2.5を組み合わせた独自スコアリングを実装。",
    en: "A web app that calculates laundry index based on weather data. Implements original scoring combining humidity, wind speed, pollen, and PM2.5.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    url: "https://laundry-weather.vercel.app/",
    github: "https://github.com/ruik0321/laundry-weather",
    image: "/works-laundry.png",
  },
];

export default function Works() {
  const { ref, visible } = useScrollAnimation();
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section
  id="works"
  ref={ref}
  className="py-24 px-6 bg-gray-50"
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

        <div className="grid md:grid-cols-2 gap-8">
          {WORKS.map((work) => (
            <div
              key={work.title}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-xl h-48 mb-6 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {work.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {work[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                
                <a href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {t.demo}
                </a>
                
                 <a href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-gray-300 text-gray-600 px-4 py-2 rounded-full hover:border-gray-500 transition-colors"
                >
                  {t.github}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}