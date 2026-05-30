"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DAYS } from "@/lib/data";
import { Home, Info } from "lucide-react";

const CHIPS = [
  { href: "/", label: "홈", icon: <Home className="h-3 w-3" /> },
  ...DAYS.map((d) => ({
    href: `/day/${d.dayNumber}`,
    label: `${d.dayNumber}일`,
    sub: d.date.slice(5).replace("-", "/"),
    icon: null,
  })),
  { href: "/info", label: "정보", icon: <Info className="h-3 w-3" /> },
];

export function DayChipNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-neutral-200"
         style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="max-w-lg mx-auto">
      <div
        className="flex gap-2 px-3 py-2 overflow-x-auto scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CHIPS.map((chip) => {
          const isActive = pathname === chip.href;
          return (
            <Link
              key={chip.href}
              href={chip.href}
  
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap min-h-[32px] transition-colors ${
                isActive
                  ? "bg-[#008c45] text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {chip.icon}
              <span>{chip.label}</span>
              {"sub" in chip && chip.sub && (
                <span className={`text-[10px] ${isActive ? "text-green-100" : "text-neutral-400"}`}>
                  {chip.sub}
                </span>
              )}
            </Link>
          );
        })}
      </div>
      </div>
    </nav>
  );
}
