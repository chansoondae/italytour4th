"use client";

import { MessageCircle, ExternalLink } from "lucide-react";
import { TOUR_INFO } from "@/lib/data";

export function KakaoChannelButton() {
  return (
    <a
      href={TOUR_INFO.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl bg-[#FEE500] px-5 py-3 text-sm font-bold text-[#3C1E1E] active:scale-95 transition hover:bg-[#f5dc00]"
    >
      <MessageCircle className="h-4 w-4" />
      카카오채널
      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}
