"use client";

import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";

const content = {
  ja: {
    role: "FRONTEND ENGINEER / DESIGNER",
    name: "Rui",
    desc: "デザインとコードの両方を扱えるフロントエンドエンジニア。\nイラレ・フォトショの経験を活かし、\nデザインから実装まで一貫して対応します。",
    works: "Works",
    contact: "Contact",
  },
  en: {
    role: "FRONTEND ENGINEER / DESIGNER",
    name: "Rui",
    desc: "Frontend engineer with a strong design background.\nLeveraging years of Illustrator & Photoshop experience\nto deliver from design to implementation.",
    works: "Works",
    contact: "Contact",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  const [show, setShow] = useState({
    role: false,
    name: false,
    desc: false,
    buttons: false,
  });

  useEffect(() => {
    const t1 = setTimeout(() => setShow((s) => ({ ...s, role: true })), 200);
    const t2 = setTimeout(() => setShow((s) => ({ ...s, name: true })), 500);
    const t3 = setTimeout(() => setShow((s) => ({ ...s, desc: true })), 800);
    const t4 = setTimeout(() => setShow((s) => ({ ...s, buttons: true })), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-start justify-center px-6 overflow-hidden bg-gray-50 pt-24"
>
      {/* 背景グリッド */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-5xl w-full mx-auto pt-20">

        <p
          className="text-xs tracking-widest text-gray-400 mb-6 transition-all duration-700"
          style={{ opacity: show.role ? 1 : 0, transform: show.role ? "translateY(0)" : "translateY(16px)" }}
        >
          {t.role}
        </p>

        <h1
          className="text-7xl md:text-8xl font-light text-gray-900 tracking-wide mb-8 transition-all duration-700"
          style={{
            fontFamily: "var(--font-playfair)",
            opacity: show.name ? 1 : 0,
            transform: show.name ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-gray-500 text-sm leading-loose mb-10 whitespace-pre-line max-w-md transition-all duration-700"
          style={{ opacity: show.desc ? 1 : 0, transform: show.desc ? "translateY(0)" : "translateY(16px)" }}
        >
          {t.desc}
        </p>

        <div
          className="flex gap-4 transition-all duration-700"
          style={{ opacity: show.buttons ? 1 : 0, transform: show.buttons ? "translateY(0)" : "translateY(16px)" }}
        >
          
          <a  href="#works"
            className="bg-gray-900 text-white text-xs tracking-widest px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            {t.works}
          </a>
          
           <a href="#contact"
            className="border border-gray-300 text-gray-700 text-xs tracking-widest px-8 py-3 rounded-full hover:border-gray-700 transition-colors"
          >
            {t.contact}
          </a>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs tracking-widest text-gray-400">SCROLL</p>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}