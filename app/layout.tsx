import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_JP, Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const bodyFontJP = Noto_Sans_JP({
  variable: "--font-body-jp",
  subsets: ["latin"],
  weight: ["400", "500"],
  fallback: ["Hiragino Sans", "Yu Gothic", "sans-serif"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  fallback: ["Georgia"],
});

const headingFontJP = Noto_Serif_JP({
  variable: "--font-heading-jp",
  subsets: ["latin"],
  weight: ["300", "400"],
  fallback: ["Hiragino Sans", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Rui | Frontend Engineer / Designer",
  description: "デザインとコードの両方を扱えるフロントエンドエンジニア・デザイナーのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${bodyFont.variable} ${bodyFontJP.variable} ${headingFont.variable} ${headingFontJP.variable}`}>
      <body className="antialiased">
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
