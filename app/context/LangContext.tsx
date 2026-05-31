"use client";

import { createContext, useContext, useState } from "react";

type Lang = "ja" | "en";

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextType>({
  lang: "ja",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");
  const toggleLang = () => setLang((l) => (l === "ja" ? "en" : "ja"));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}