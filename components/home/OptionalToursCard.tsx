import { Star, Euro, Clock } from "lucide-react";
import { OPTIONAL_TOURS } from "@/lib/data";

export function OptionalToursCard() {
  return (
    <div className="mx-4">
      <h2 className="text-lg font-bold text-neutral-900 mb-3">선택관광 안내</h2>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="bg-yellow-400 px-4 py-3 flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-800" fill="currentColor" />
          <h3 className="text-yellow-900 font-bold text-sm">선택 관광 프로그램</h3>
        </div>
        <div className="divide-y divide-neutral-100">
          {OPTIONAL_TOURS.map((tour, i) => (
            <div key={i} className="px-4 py-3 flex items-start gap-3">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-xs font-bold text-yellow-700">
                {tour.day}일
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-900">{tour.name}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {tour.duration}
                  </span>
                  {tour.priceEur ? (
                    <span className="text-xs font-bold text-yellow-700 flex items-center gap-0.5">
                      <Euro className="h-3 w-3" /> {tour.priceEur}
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-500">현지 문의</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
