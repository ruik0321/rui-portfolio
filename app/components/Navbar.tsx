"use client";

import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { GITHUB_URL } from "../constants/profile";

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
    <header
      className={
        scrolled
          ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm"
          : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
      }
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-sm font-medium tracking-widest text-gray-800">
          RUI
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            
             <a key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* 言語切り替え */}
          <button
            onClick={toggleLang}
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors tracking-widest"
          >
            {lang === "ja" ? "EN" : "JA"}
          </button>

          {/* GitHubアイコン */}
          
           <a href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* ハンバーガー */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={menuOpen ? "w-5 h-px bg-current transition-all mb-1 rotate-45 translate-y-1.5" : "w-5 h-px bg-current transition-all mb-1"} />
          <div className={menuOpen ? "w-5 h-px bg-current transition-all mb-1 opacity-0" : "w-5 h-px bg-current transition-all mb-1"} />
          <div className={menuOpen ? "w-5 h-px bg-current transition-all -rotate-45 -translate-y-1.5" : "w-5 h-px bg-current transition-all"} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            
             <a key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={toggleLang}
              className="text-xs text-gray-500 tracking-widest"
            >
              {lang === "ja" ? "EN" : "JA"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}