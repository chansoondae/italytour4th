import { Bus } from "lucide-react";
import { DayData } from "@/lib/data";

interface Props {
  day: DayData;
}

const DOW_FULL: Record<string, string> = {
  월: "월요일", 화: "화요일", 수: "수요일", 목: "목요일",
  금: "금요일", 토: "토요일", 일: "일요일",
};

export function DayHeader({ day }: Props) {
  const dateObj = new Date(day.date);
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();

  return (
    <div className="px-4 pt-6 pb-4">
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center bg-[#008c45] text-white rounded-2xl px-4 py-2 min-w-[72px]">
          <span className="text-xs font-semibold opacity-80">Day</span>
          <span className="text-3xl font-bold leading-none">{day.dayNumber}</span>
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-neutral-900">
            {month}월 {date}일 ({DOW_FULL[day.dayOfWeek] ?? day.dayOfWeek})
          </p>
          <p className="text-sm text-neutral-600 mt-0.5">{day.routeSummary}</p>
          {day.totalTravelTime && (
            <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
              <Bus className="h-3 w-3" /> 총 이동 {day.totalTravelTime}
            </p>
          )}
        </div>
      </div>

      {/* 식사 요약 */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: "🥐", label: "조식", value: day.breakfast },
          { icon: "🍝", label: "중식", value: day.lunch },
          { icon: "🥩", label: "석식", value: day.dinner },
        ].map(({ icon, label, value }) => (
          <div key={label} className="bg-amber-50 rounded-xl p-2.5 text-center">
            <p className="text-xs text-amber-600 font-semibold">{icon} {label}</p>
            <p className="text-xs text-neutral-700 mt-0.5 leading-tight">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
