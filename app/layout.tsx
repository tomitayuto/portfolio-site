import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WEBマーケの超☆伴走屋 | 富田 悠斗",
  description:
    "戦略から運用まで、課題が解決するまで伴走するWEBマーケター・富田悠斗のポートフォリオ。広告運用累計1億円以上、支援実績20社以上。広告運用・SNS運用・LP作成・LPO・CRM構築・プロダクトマネジメントまで一気通貫で対応。",
  openGraph: {
    title: "WEBマーケの超☆伴走屋 | 富田 悠斗",
    description:
      "戦略から運用まで、課題が解決するまで伴走するWEBマーケター。広告運用累計1億円以上、支援実績20社以上。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
