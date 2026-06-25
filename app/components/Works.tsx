"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useLang } from "../context/LangContext";
import { WORKS } from "../constants/works";
import SectionWrapper from "./ui/SectionWrapper";
import { ArrowRight } from "./ui/Icons";

export default function Works() {
  const { lang } = useLang();

  // Emblaの初期設定
  // emblaRef → ドラッグを検知させたいDOM要素に渡すref
  // emblaApi → スクロール位置の取得や操作（次へ/前へ等）をするための操作パネル
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",              // カードの左端が揃うようにスナップする
    containScroll: "trimSnaps",  // 右端で不要な余白ができないように調整する
    dragFree: false,             // カード単位でぴったりスナップする（ドットと連動させるため）
  });

  // 現在選択中のスライドのインデックス（ドットの強調表示用）
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList()); // ドットの数を決める（スナップ位置の数）
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <SectionWrapper id="works" label="WORKS" title="Works">
      <div className="relative">

        {/* 一覧ページへのリンク */}
        <Link
          href="/works"
          className="absolute -top-14 right-0 flex items-center gap-1 label hover:text-accent transition-colors"
        >
          VIEW ALL
          <ArrowRight />
        </Link>

        {/* Emblaビューポート */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 pb-6">
            {WORKS.map((work) => (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="flex-shrink-0 w-[45%] rounded-2xl overflow-hidden border border-primary/10 group block hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden bg-primary/5">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="label mb-2">{work.category[lang]}</p>
                  <h3 className="mb-3">{work.title}</h3>
                  <p className="text-primary/50 text-sm leading-relaxed mb-4">
                    {work.description[lang]}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1">
                      {work.tags.map((tag) => (
                        <span key={tag} className="label bg-primary/10 rounded-full px-3 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-primary/30 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 flex-shrink-0">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ドットインジケーター（スナップ位置の数だけ自動生成） */}
        <div className="flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 h-2 bg-primary"      // 現在位置：長い形で強調
                  : "w-2 h-2 bg-primary/20 hover:bg-primary/40" // それ以外：小さい丸
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
