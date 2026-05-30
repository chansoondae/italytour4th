"use client";

import { MapPin, ExternalLink } from "lucide-react";

interface Props {
  url: string;
  label?: string;
  size?: "sm" | "md";
}

export function GoogleMapsButton({ url, label = "구글맵에서 열기", size = "md" }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold active:scale-95 transition hover:bg-emerald-100 ${
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
      }`}
    >
      <MapPin className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      {label}
      <ExternalLink className={size === "sm" ? "h-3 w-3 opacity-60" : "h-3.5 w-3.5 opacity-60"} />
    </a>
  );
}
