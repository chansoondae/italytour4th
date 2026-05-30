import { TOUR_INFO } from "@/lib/data";
import { Download } from "lucide-react";

const ITEMS = [
  { icon: "📅", label: "여행기간", value: "7박 9일 (6/26 금 ~ 7/4 토)" },
  { icon: "🚌", label: "이동수단", value: "전용 버스" },
  { icon: "🏨", label: "숙박", value: "4성급 호텔 7박 + 기내 1박" },
  { icon: "🍽️", label: "식사", value: "호텔식, 현지식, 한식(삼겹살), 와인 시음" },
  { icon: "👥", label: "컨셉", value: "노쇼핑 · 노옵션 · 우리끼리" },
  { icon: "💶", label: "가이드 경비", value: `EUR ${TOUR_INFO.guideFeeEur} (현지 결제)` },
];

export function TourSummaryCard() {
  return (
    <div className="mx-4">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="bg-[#008c45] px-4 py-3">
          <h2 className="text-white font-bold text-sm">투어 핵심 정보</h2>
        </div>
        <div className="divide-y divide-neutral-100">
          {/* 항공편 */}
          <div className="flex items-start gap-3 px-4 py-3">
            <span className="text-lg leading-none mt-0.5">✈️</span>
            <div className="flex-1">
              <p className="text-xs text-neutral-500 font-medium">항공편</p>
              <p className="text-sm text-neutral-900 font-semibold mt-0.5">6/26(금) 12:35 → 19:15  TW0405</p>
              <p className="text-sm text-neutral-900 font-semibold mt-0.5">7/3(금) 21:15 → 7/4(토) 16:10  TW0406</p>
            </div>
            <a
              href="/이탈리아4차.pdf"
              download
              className="flex items-center gap-1 text-xs font-semibold text-[#008c45] bg-[#e8f5ed] rounded-full px-2.5 py-1 shrink-0 hover:bg-[#d0eddb]"
            >
              <Download className="h-3 w-3" />
              이티켓
            </a>
          </div>
          {ITEMS.map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 px-4 py-3">
              <span className="text-lg leading-none mt-0.5">{icon}</span>
              <div className="flex-1">
                <p className="text-xs text-neutral-500 font-medium">{label}</p>
                <p className="text-sm text-neutral-900 font-semibold mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
