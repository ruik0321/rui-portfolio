"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "../context/LangContext";
import { SKILLS, formatYears } from "../constants/profile";
import SectionWrapper from "./ui/SectionWrapper";

// ScrollTriggerプラグインを使えるように登録（最初に1回だけ必要）
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { lang } = useLang();

  // このセクション全体を参照するref（ScrollTriggerの発火タイミングを判定するため）
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // このセクション内の全てのバー（.skill-bar クラスがついた要素）を取得
    const bars = sectionRef.current.querySelectorAll<HTMLDivElement>(".skill-bar");

    // 各バーに対して、左から右に伸びるアニメーションを設定
    bars.forEach((bar, index) => {
      const targetWidth = bar.dataset.width; // data-width属性から目標の幅(%)を取得

      gsap.fromTo(
        bar,
        { width: "0%" },           // 開始：幅0%（見えない状態）
        {
          width: `${targetWidth}%`, // 終了：実際のスキルレベルに応じた幅
          duration: 1,               // 1秒かけて伸びる
          ease: "power2.out",        // 終わりに向けて緩やかになる動き
          delay: index * 0.08,       // 1本ごとに少しずつ時間差をつけて順番に伸びる
          scrollTrigger: {
            trigger: sectionRef.current, // このセクションが画面に入ったら発火
            start: "top 80%",            // セクションの上端が画面の80%地点に来たら開始
            toggleActions: "play none none none", // 1回再生したら終わり（戻っても再生しない）
          },
        }
      );
    });

    // クリーンアップ：コンポーネントが消える時にScrollTriggerの登録も解除する
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper id="skills" label="SKILLS" title="Skills">
      <div ref={sectionRef} className="grid md:grid-cols-3 gap-12">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="label mb-6">{group.category}</p>
            <div className="space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <p className="text-primary/70">{skill.name}</p>
                    <p className="text-primary/40">{formatYears(skill.years, lang)}</p>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-px">
                    {/* skill-barクラスとdata-width属性をつけて、GSAP側から見つけられるようにする */}
                    <div
                      className="skill-bar bg-primary/70 h-px rounded-full"
                      data-width={Math.min(skill.years * 15, 100)}
                      style={{ width: "0%" }} // 初期表示は0%（アニメーションで伸びる前の状態）
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
