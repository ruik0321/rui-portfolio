"use client";

import { useLang } from "../context/LangContext";
import Button from "./ui/Button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const { lang, toggleLang } = useLang();

  return (
    <>
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* ドロワー */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-white flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex items-center justify-end px-8 py-6">
          <button onClick={onClose} className="text-primary/40 hover:text-primary transition-colors">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ナビ */}
        <nav className="flex flex-col px-6 pt-4 flex-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="py-4 text-2xl font-light text-primary/60 hover:text-primary border-b border-primary/10 last:border-0 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 下部：言語タブ + Contact */}
        <div className="px-6 pb-10 flex items-center justify-between">
          <div className="flex items-center bg-primary/5 rounded-md p-0.5 text-xs">
            <button
              onClick={() => lang !== "ja" && toggleLang()}
              className={`px-3 py-1 rounded transition-all duration-200 ${
                lang === "ja" ? "bg-white text-primary shadow-sm" : "text-primary/40"
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => lang !== "en" && toggleLang()}
              className={`px-3 py-1 rounded transition-all duration-200 ${
                lang === "en" ? "bg-white text-primary shadow-sm" : "text-primary/40"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
