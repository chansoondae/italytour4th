"use client";

import Image from "next/image";
import { Plane } from "lucide-react";
import { TOUR_INFO } from "@/lib/data";

const CITIES = ["#로마", "#피렌체", "#베네치아", "#밀라노", "#친퀘테레", "#돌로미티", "#토스카나", "#폼페이"];

function getDDay() {
  const today = new Date();
  const departure = new Date("2026-06-15");
  const diff = Math.ceil((departure.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diff > 0) return `D-${diff}`;
  if (diff === 0) return "D-Day";
  return `D+${Math.abs(diff)}`;
}

export function HeroBanner() {
  const dday = getDDay();

  return (
    <div className="relative w-full h-72 overflow-hidden">
      <Image
        src="/images/hero-italy.jpg"
        alt="이탈리아 아트 투어"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 flex flex-col justify-end px-4 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#008c45] text-white text-xs font-bold rounded-full px-3 py-1">{dday}</span>
          <span className="bg-white/20 text-white text-xs rounded-full px-3 py-1 flex items-center gap-1 backdrop-blur-sm">
            <Plane className="h-3 w-3" /> {TOUR_INFO.flightOutbound}/{TOUR_INFO.flightInbound}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white leading-tight font-playfair">
          이탈리아 아트 투어 9일
        </h1>
        <p className="text-white/80 text-sm mt-1">2026.06.15(월) → 06.23(화) · 7박 9일</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="text-xs bg-white/20 text-white rounded-full px-2.5 py-1 backdrop-blur-sm"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
