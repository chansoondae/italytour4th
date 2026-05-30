"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DAYS } from "@/lib/data";

function getSubtitle(pathname: string): string {
  if (pathname === "/") return "9일 전체 일정";
  if (pathname === "/info") return "여행 정보";
  const match = pathname.match(/^\/day\/(\d+)$/);
  if (match) {
    const dayNum = parseInt(match[1]);
    const day = DAYS.find((d) => d.dayNumber === dayNum);
    if (day) {
      const dateStr = day.date.slice(5).replace("-", "/");
      return `${dayNum}일차 · ${dateStr}(${day.dayOfWeek}) · ${day.routeSummary}`;
    }
  }
  return "";
}

export function TopBar() {
  const pathname = usePathname();
  const subtitle = getSubtitle(pathname);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3 min-h-[52px]">
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="text-base font-bold text-neutral-900">🇮🇹 이탈리아 아트 투어</span>
        </Link>
        {subtitle && (
          <>
            <span className="text-neutral-300">·</span>
            <span className="text-xs text-neutral-500 truncate">{subtitle}</span>
          </>
        )}
      </div>
    </header>
  );
}
