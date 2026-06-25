"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";
import { WORKS } from "../constants/works";
import Footer from "../components/Footer";

export default function WorksListPage() {
    const { lang } = useLang();

    return (
        <main className="min-h-screen bg-white px-6 py-24">
            <div className="max-w-5xl mx-auto">

                <p className="label mb-2">WORKS</p>
                <h1 className="mb-16">Works</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {WORKS.map((work) => (
                        <Link
                            key={work.slug}
                            href={`/works/${work.slug}`}
                            className="rounded-2xl overflow-hidden border border-primary/10 group block hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-56 overflow-hidden bg-primary/5">
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
                                <div className="flex flex-wrap gap-1">
                                    {work.tags.map((tag) => (
                                        <span key={tag} className="label bg-primary/10 rounded-full px-3 py-0.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* 戻るリンク */}
                <Link
                    href="/#works"
                    className="label hover:text-accent transition-colors my-12 inline-block"
                >
                    ← TOP
                </Link>
            </div>
            <Footer />
        </main>
    );
}
