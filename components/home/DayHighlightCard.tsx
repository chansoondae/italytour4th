import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { DAYS } from "@/lib/data";

const COVERS: Record<number, string> = {
  1: "/images/day1-cover.jpg",
  2: "/images/florence/duomo.jpg",
  3: "/images/venice/biennale-giardini.jpg",
  4: "/images/dolomites/cinque-torri.jpg",
  5: "/images/venice/piazza-san-marco.jpg",
  6: "/images/cinque-terre/cinque-terre.jpg",
  7: "/images/tuscany/val-dorcia.jpg",
  8: "/images/rome/colosseum.jpg",
  9: "/images/day1-cover.jpg",
};

export function DayHighlightCards() {
  return (
    <div className="px-4">
      <h2 className="text-lg font-bold text-neutral-900 mb-3">9일 일정</h2>
      <div className="space-y-3">
        {DAYS.map((day) => {
          const dateObj = new Date(day.date);
          const coverSrc = COVERS[day.dayNumber];

          return (
            <Link
              key={day.dayNumber}
              href={`/day/${day.dayNumber}`}
              className="flex items-center gap-3 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden active:scale-[0.98] transition-transform"
            >
              <div className="relative w-24 h-16 shrink-0">
                <Image
                  src={coverSrc}
                  alt={`Day ${day.dayNumber}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-[#008c45]/90 rounded-full px-2 py-0.5">
                    Day {day.dayNumber}
                  </span>
                </div>
              </div>
              <div className="flex-1 py-3 pr-3">
                <p className="text-xs text-neutral-500">
                  {dateObj.getMonth() + 1}/{dateObj.getDate()}({day.dayOfWeek})
                </p>
                <p className="text-sm font-semibold text-neutral-900 mt-0.5 leading-tight">{day.routeSummary}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-neutral-400 mr-3 shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
