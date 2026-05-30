import { BedDouble, MapPin, AlertCircle } from "lucide-react";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";
import { DayData } from "@/lib/data";

interface Props {
  day: DayData;
}

export function HotelCard({ day }: Props) {
  if (day.accommodationName === "기내" || day.accommodationName === "귀국") return null;

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm">🏨</div>
      </div>
      <div className="pb-4 flex-1">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <BedDouble className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600">숙박</span>
            {day.accommodationStatus === "예정" && (
              <span className="text-xs bg-orange-100 text-orange-600 rounded-full px-2 py-0.5 flex items-center gap-0.5">
                <AlertCircle className="h-3 w-3" /> 예정 호텔
              </span>
            )}
          </div>
          <p className="font-bold text-neutral-900">{day.accommodationName}</p>
          {day.accommodationStatus === "예정" && (
            <p className="text-xs text-orange-600 mt-1">출발 3일 전 확정 예정입니다.</p>
          )}
          {day.accommodationMapsUrl && (
            <div className="mt-3">
              <GoogleMapsButton url={day.accommodationMapsUrl} label="호텔 위치 보기" size="sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
