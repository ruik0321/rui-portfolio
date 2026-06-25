import { notFound } from "next/navigation";
import Link from "next/link";
import { WORKS } from "../../constants/works";
import Footer from "../../components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return WORKS.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) notFound();

  const lang = "ja";
  const [mainShot, ...subShots] = work.screenshots;

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto mt-16">

        {/* タイトル */}
        <h1
          className="text-4xl font-light text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {work.title}
        </h1>

        {/* ディスクリプション */}
        <p className="text-sm text-gray-500 leading-relaxed mb-12">
          {work.description[lang]}
        </p>

        {/* メインスクショ */}
        <div className="rounded-2xl overflow-hidden mb-6">
          <img
            src={mainShot}
            alt={work.title}
            className="w-full object-cover"
          />
        </div>

        {/* サブスクショ */}
        {subShots.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-12">
            {subShots.map((shot, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img
                  src={shot}
                  alt={`${work.title} screenshot ${i + 2}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 長文テキスト */}
        <p className="text-sm text-gray-600 leading-loose mb-16 whitespace-pre-line">
          {work.detail[lang]}
        </p>

        {/* メタ情報 */}
        <div className="border-t border-gray-100 py-8 space-y-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-3">TECH</p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-3">PERIOD</p>
            <p className="text-sm text-gray-600">{work.period[lang]}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-700 transition-colors"
            >
              Demo
            </a>
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-gray-300 text-gray-600 px-6 py-2.5 rounded-full hover:border-gray-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
                {/* 戻るリンク */}
        <Link
          href="/#works"
          className="text-xs tracking-widest text-gray-400 hover:text-gray-700 transition-colors mb-12 inline-block"
        >
          ← WORKS
        </Link>

      </div>
      <Footer />
    </main>
  );
}
