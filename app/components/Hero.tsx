"use client";

import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import Button from "./ui/Button";

const ROLE = "FRONTEND ENGINEER / DESIGNER";

const desc = {
  ja: "デザインとコードの両方を扱えるフロントエンドエンジニア。\nイラレ・フォトショの経験を活かし、\nデザインから実装まで一貫して対応します。",
  en: "Frontend engineer with a strong design background.\nLeveraging years of Illustrator & Photoshop experience\nto deliver from design to implementation.",
};

const ITEMS = ["role", "name", "desc", "buttons"] as const;

export default function Hero() {
  const { lang } = useLang();
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timers = ITEMS.map((key, i) =>
      setTimeout(() => setVisible((prev) => new Set(prev).add(key)), 200 + i * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (key: string) => ({
    opacity: visible.has(key) ? 1 : 0,
    transform: visible.has(key) ? "translateY(0)" : "translateY(16px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  });

return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start justify-center px-6 overflow-hidden pt-24"
    >
      {/* 背景グリッド */}
      <div className="absolute inset-0 bg-grid" />
      <div className="relative max-w-5xl w-full mx-auto pt-20">
        <p className="label mb-6" style={show("role")}>{ROLE}</p>
        <h1 className="mb-8" style={show("name")}>Rui</h1>
        <p
          className="text-primary/50 leading-loose mb-10 whitespace-pre-line max-w-md"
          style={show("desc")}
        >
          {desc[lang]}
        </p>

        <div className="flex gap-4" style={show("buttons")}>
          <Button href="#works">Works</Button>
          <Button href="#contact" variant="secondary">Contact</Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="label">SCROLL</p>
        <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  );
}
