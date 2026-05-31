"use client";

import { useLang } from "../context/LangContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SKILLS } from "../constants/profile";

const content = {
  ja: { label: "SKILLS", title: "Skills" },
  en: { label: "SKILLS", title: "Skills" },
};

export default function Skills() {
  const { ref, visible } = useScrollAnimation();
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 bg-gray-50"
    >
      <div
        className="max-w-5xl mx-auto transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <p className="text-xs tracking-widest text-gray-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="text-xs tracking-widest text-gray-400 mb-6">
                {group.category}
              </p>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm text-gray-700">{skill.name}</p>
                      <p className="text-xs text-gray-400">{lang === "ja" ? `${skill.years}年` : `${skill.years}yr`}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-0.5">
                      <div
                        className="bg-gray-700 h-0.5 rounded-full"
                        style={{ width: `${Math.min(skill.years * 20, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}