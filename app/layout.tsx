import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { DayChipNav } from "@/components/layout/DayChipNav";

export const metadata: Metadata = {
  title: "이탈리아 아트 투어 9일 | 아트프렌즈",
  description: "2026년 6월 26일~7월 4일 이탈리아 아트 투어 9일 일정표. 로마, 피렌체, 베네치아, 밀라노, 친퀘테레, 돌로미티.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇮🇹</text></svg>",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fafaf9]">
        <TopBar />
        <main className="flex-1 pb-20">
          <div className="max-w-lg mx-auto">{children}</div>
        </main>
        <DayChipNav />
      </body>
    </html>
  );
}
