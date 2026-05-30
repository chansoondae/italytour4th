import { notFound } from "next/navigation";
import { DAYS } from "@/lib/data";
import { DayHeader } from "@/components/day/DayHeader";
import { SpotCard } from "@/components/day/SpotCard";
import { HotelCard } from "@/components/day/HotelCard";

interface Props {
  params: Promise<{ day: string }>;
}

export async function generateStaticParams() {
  return DAYS.map((d) => ({ day: String(d.dayNumber) }));
}

export async function generateMetadata({ params }: Props) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const day = DAYS.find((d) => d.dayNumber === dayNum);
  if (!day) return {};
  return {
    title: `Day ${day.dayNumber} · ${day.routeSummary} | 이탈리아 아트 투어`,
  };
}

export default async function DayPage({ params }: Props) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const day = DAYS.find((d) => d.dayNumber === dayNum);

  if (!day) notFound();

  return (
    <div>
      <DayHeader day={day} />
      <div className="px-4 pt-2 pb-4">
        {day.spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
        <HotelCard day={day} />
        <p className="text-center text-xs text-neutral-400 pt-2">
          하나투어 ·{" "}
          <a
            href="https://msstour.hanatour.com/trp/pkg/CHPC0PKG0200M100?pkgCd=EWQ111260626TW5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-600"
          >
            상품코드 EWQ111260626TW5
          </a>
        </p>
      </div>
    </div>
  );
}
