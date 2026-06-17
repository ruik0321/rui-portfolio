export type Work = {
  slug: string;
  title: string;
  category: { ja: string; en: string };
  description: { ja: string; en: string };
  detail: { ja: string; en: string };
  tags: string[];
  screenshots: string[];
  url?: string;
  github?: string;
  image: string;
  period: { ja: string; en: string };
};

export const WORKS: Work[] = [
  {
    slug: "laundry-weather",
    title: "Laundry Weather",
    category: { ja: "Webアプリ", en: "Web App" },
    description: {
      ja: "天気データをもとに洗濯指数を算出するWebアプリ。湿度・風速・花粉・PM2.5を組み合わせた独自スコアリングを実装。",
      en: "A web app that calculates laundry index based on weather data, with original scoring combining humidity, wind speed, pollen, and PM2.5.",
    },
    detail: {
      ja: "Next.jsを学び始めた際に、ただチュートリアルをこなすだけでなく実際に外部APIと連携したプロダクトを作りたいと考え、このアプリを制作しました。\n\n天気予報APIであるOpen-Meteoを使用し、湿度・風速・花粉・PM2.5といった複数の気象データを取得。それぞれに重み付けをした独自のスコアリングロジックを実装し、「今日は洗濯に適しているか」を数値と言葉でわかりやすく表示しています。\n\nAPIのレスポンス設計やTypeScriptでの型定義、非同期処理の扱いなど、実務を想定した実装を意識しました。シンプルなUIの中に、実用性と技術的な学びを詰め込んだプロジェクトです。",
      en: "When I started learning Next.js, I wanted to build something that actually connected to an external API rather than just following tutorials. That's how this app came about.\n\nUsing the Open-Meteo weather API, the app fetches multiple weather data points — humidity, wind speed, pollen, and PM2.5 — and applies a custom scoring algorithm to determine whether it's a good day for laundry.\n\nThis project gave me hands-on experience with API response design, TypeScript type definitions, and async data handling. It's a simple app on the surface, but packed with practical learning under the hood.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    screenshots: ["/works-laundry.png"],
    url: "https://laundry-weather.vercel.app/",
    github: "https://github.com/ruik0321/laundry-weather",
    image: "/works-laundry.png",
    period: { ja: "2026年5月", en: "May 2026" },
  },
  {
    slug: "veyra-copying",
    title: "Veyra Copying",
    category: { ja: "模写制作", en: "UI Reproduction" },
    description: {
      ja: "FigmaテンプレートをNext.jsで模写したプロジェクト。レスポンシブ対応・コンポーネント設計・色やフォントの変数化まで実装。",
      en: "A reproduction of a Figma template in Next.js, with responsive design, component architecture, and design token setup.",
    },
    detail: {
      ja: "単なる見た目の再現にとどまらず、実務を想定したフロントエンド設計を意識して制作しました。AIを活用しながら効率よく進めつつも、コードの意図を理解しながら実装することを心がけています。\n\nレスポンシブ対応はもちろん、ボタン・アイコン・テキストスタイル・カードなどのUIパーツをコンポーネントとして切り出し、再利用しやすい構成にしました。色・フォント・スペーシングはCSS変数として定義し、デザインの一貫性と保守性を高めています。\n\nFigmaのデザインを忠実に再現するだけでなく、「このコンポーネントは今後どう使われるか」を考えながら設計する経験を積むことができました。",
      en: "Rather than simply copying the visual design, I focused on building this project with a production-ready frontend architecture in mind. I used AI tools to work efficiently, while making sure I understood the intent behind every line of code.\n\nBeyond responsive layout, I broke down the UI into reusable components — buttons, icons, text styles, cards — and structured the codebase for scalability. Colors, fonts, and spacing are defined as CSS variables to ensure design consistency and ease of maintenance.\n\nThis project helped me practice thinking not just about how something looks, but how it should be structured for long-term use.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    screenshots: ["/veyra-copying.png"],
    url: "https://veyra-copying-rui-s-projects8.vercel.app/",
    github: "https://github.com/ruik0321/veyra-copying",
    image: "/veyra-copying.png",
    period: { ja: "2026年6月", en: "Jun 2026" },
  },
  {
    slug: "acumore",
    title: "アキュモア治療院",
    category: { ja: "印刷物デザイン", en: "Print Design" },
    description: {
      ja: "新たに開業する訪問鍼灸サービスの三つ折りパンフレットを制作。競合との差別化とリラックス感のある表現を意識したデザイン。",
      en: "A tri-fold brochure for a newly launched mobile acupuncture service, designed to differentiate from competitors with a calm and approachable feel.",
    },
    detail: {
      ja: "新たに開業する訪問鍼灸サービスの三つ折りパンフレットを制作しました。\n\nまず、競合他社との違いを明確にし、「女性による施術」「痛みのない施術」「美容鍼灸の提供」といった強みを打ち出すことに注力しました。医療や介護のように堅いイメージではなく、リラックス感と安心感のある表現を心がけています。\n\nオーナー様が掲載したい情報を丁寧に精査し、「一度試してみたい」と感じてもらえるような言葉選びにも工夫を凝らしました。配色については、あえてやわらかく落ち着いた色合いを採用し、それ自体を差別化の要素としました。\n\nこのパンフレットを活用した結果、開業から半年で10名の顧客を獲得することができました。",
      en: "I designed a tri-fold brochure for a newly launched mobile acupuncture service.\n\nMy first priority was to clearly differentiate the service from competitors by highlighting its key strengths: treatments performed by a female practitioner, a pain-free approach, and cosmetic acupuncture offerings. Rather than a clinical or medical tone, I aimed for an expression of relaxation and reassurance.\n\nI carefully reviewed the information the owner wanted to convey and focused on word choices that would make readers feel 'I'd like to try this.' For the color palette, I deliberately chose soft, calming tones as a differentiating element in itself.\n\nAs a result of using this brochure, the business acquired 10 clients within six months of opening.",
    },
    tags: ["Illustrator", "Print Design"],
    screenshots: ["/acumore_01.jpg"],
    image: "/acumore_01.jpg",
    period: { ja: "2024年11月", en: "Nov 2024" },
  },
  {
    slug: "aels",
    title: "アエルズ",
    category: { ja: "印刷物デザイン", en: "Print Design" },
    description: {
      ja: "トラベルヘルパーサービス「アエルズ」のA4チラシを制作。誠実な安心感と行動を後押しする前向きな表現を意識したデザイン。",
      en: "An A4 flyer for travel helper service 'Aels', designed with a focus on genuine reassurance and a positive tone that encourages action.",
    },
    detail: {
      ja: "トラベルヘルパーサービス「アエルズ」のパンフレット制作を行いました。\n\nトラベルヘルパーとは、介護や見守りが必要な高齢者や障がいのある方が、旅行や外出を安心して楽しめるようサポートする支援サービスです。\n\n今回の制作では、「安心して外出できる」「行きたい場所にまた行ける」という希望を伝えることを軸に、リラックス感よりも「誠実な安心感」と「行動を後押しする前向きな気持ち」を大切にしたデザインを目指しました。\n\n高齢者ご本人だけでなく、ご家族にも伝わるよう、全体のコントラスト比を高め、視認性・可読性に配慮しました。また、「トラベルヘルパーとは何か？」「どんな課題を解決できるのか？」「具体的にどう利用できるのか？」といった情報を、読者の流れに沿って自然に読み進められるよう、構成・動線を工夫しました。",
      en: "I created a pamphlet for 'Aels', a travel helper service.\n\nTravel helpers support elderly people and those with disabilities who need care or assistance, helping them safely enjoy travel and outings.\n\nFor this project, I centered the design around conveying the message that 'you can go out safely' and 'you can visit the places you love again' — prioritizing genuine reassurance and a forward-looking, action-encouraging tone over a merely relaxing feel.\n\nTo ensure the message reached not only the elderly users themselves but also their families, I paid close attention to contrast ratios, legibility, and readability. I also carefully structured the information flow — covering what a travel helper is, what problems they solve, and how to use the service — so readers could naturally follow along from start to finish.",
    },
    tags: ["Illustrator", "Print Design"],
    screenshots: ["/aelz.jpg"],
    image: "/aelz.jpg",
    period: { ja: "2024年6月", en: "Jun 2024" },
  },
];