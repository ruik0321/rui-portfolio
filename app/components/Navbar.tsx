"use client";

import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { GITHUB_URL } from "../constants/profile";
import { GitHub } from "./ui/Icons";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-8">
  <div
    className={`w-full max-w-7xl px-10 py-6 flex items-center justify-between rounded-full transition-all duration-300 ${
      scrolled
        ? "bg-white/70 backdrop-blur-md shadow-sm scale-97 origin-top"
        : "bg-white/0"
    }`}
  >

          {/* ロゴ */}
          <a href="#hero" className="text-xl font-medium tracking-widest text-primary">
            RUI
          </a>

          <div className="flex flex-row gap-6">
            {/* ナビ + GitHubアイコン */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 links text-primary/60 hover:text-primary transition-colors group"
                >
                  {item.label}
                  <span
                    className="absolute bottom-1 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                    style={{ background: "var(--color-accent)" }}
                  />
                </a>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-primary hover:text-primary/50 transition-colors"
              >
                <GitHub />
              </a>
            </nav>

            {/* 右端：言語タブ + 問い合わせ */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center bg-primary/5 rounded-md p-0.5 text-xs">
                <button
                  onClick={() => lang !== "ja" && toggleLang()}
                  className={`px-3 py-1 rounded transition-all duration-200 ${lang === "ja" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary"
                    }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => lang !== "en" && toggleLang()}
                  className={`px-3 py-1 rounded transition-all duration-200 ${lang === "en" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary"
                    }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* ハンバーガー（モバイル） */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMenuOpen(true)}
            >
              <div className="w-5 h-px bg-current mb-1" />
              <div className="w-5 h-px bg-current mb-1" />
              <div className="w-5 h-px bg-current" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
