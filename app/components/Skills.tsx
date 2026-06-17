"use client";

import { useLang } from "../context/LangContext";
import { SKILLS } from "../constants/profile";
import SectionWrapper from "./ui/SectionWrapper";

export default function Skills() {
  const { lang } = useLang();
  const unit = lang === "ja" ? "年" : "yr";

  return (
    <SectionWrapper id="skills" label="SKILLS" title="Skills">
      <div className="grid md:grid-cols-3 gap-12">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="label mb-6">{group.category}</p>
            <div className="space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <p className="text-primary/70">{skill.name}</p>
                    <p className="text-primary/40">{skill.years}{unit}</p>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-px">
                    <div
                      className="bg-primary/70 h-px rounded-full"
                      style={{ width: `${Math.min(skill.years * 20, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
