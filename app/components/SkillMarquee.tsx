"use client";

const SKILLS_LIST = [
  "Illustrator",
  "Photoshop",
  "Figma",
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "React / Next.js",
  "Git / GitHub",
];

export default function SkillMarquee() {
  return (
    <div className="relative overflow-hidden py-3 fade-mask">
      {/* 同じ内容を2セット並べて、ループが途切れないようにする */}
      <div className="flex gap-3 w-max animate-marquee">
        {[...SKILLS_LIST, ...SKILLS_LIST].map((skill, i) => (
          <span
            key={i}
            className="flex-shrink-0 label bg-primary/5 rounded-full px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

