"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import { WORKS } from "../constants/works";
import SectionWrapper from "./ui/SectionWrapper";
import { ArrowRight } from "./ui/Icons";

export default function Works() {
  const { lang } = useLang();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const isDragging = useRef(false);

  function updateScrollbar() {
    const el = sliderRef.current;
    if (!el) return;
    const ratio = el.clientWidth / el.scrollWidth;
    const scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth) || 0;
    setThumbWidth(ratio * 100);
    setThumbLeft(scrollRatio * (100 - ratio * 100));
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollbar();
    el.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    const handleMouseUp = () => { isDragging.current = false; };
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      el.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  function scrollTo(dir: "left" | "right") {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / 2 + 16;
    el.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  }

  function handleMouseDown(e: React.MouseEvent) {
    if (!sliderRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !sliderRef.current) return;
    const walk = (e.clientX - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function handleTouchStart(e: React.TouchEvent) {
    if (!sliderRef.current) return;
    hasDragged.current = false;
    startX.current = e.touches[0].clientX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!sliderRef.current) return;
    const walk = (e.touches[0].clientX - startX.current) * 1.2;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function NavButton({ dir }: { dir: "left" | "right" }) {
    const active = dir === "left" ? canScrollLeft : canScrollRight;
    return (
      <button
        onClick={() => active && scrollTo(dir)}
        disabled={!active}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
          active
            ? "border border-primary/30 text-primary/60 hover:bg-primary hover:text-white hover:border-primary"
            : "border border-primary/10 text-primary/20 cursor-default"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          {dir === "left"
            ? <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            : <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          }
        </svg>
      </button>
    );
  }

  return (
    <SectionWrapper id="works" label="WORKS" title="Works">
      <div className="relative">

        <div className="absolute -top-14 right-0 flex gap-2 z-10">
          <NavButton dir="left" />
          <NavButton dir="right" />
        </div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll pb-6 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {WORKS.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              onClick={(e) => hasDragged.current && e.preventDefault()}
              className="flex-shrink-0 w-[45%] rounded-2xl overflow-hidden border border-primary/10 group block hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden bg-primary/5">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
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

        <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: `color-mix(in srgb, var(--color-primary) 20%, transparent)` }}>
          <div
            className="absolute top-0 h-1.5 rounded-full"
            style={{
              background: "var(--color-primary)",
              width: `${thumbWidth}%`,
              left: `${thumbLeft}%`,
              transition: "left 0.1s ease",
            }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
