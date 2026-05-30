import { HeroBanner } from "@/components/home/HeroBanner";
import { TourSummaryCard } from "@/components/home/TourSummaryCard";
import { DayHighlightCards } from "@/components/home/DayHighlightCard";
import { InclusionAccordion } from "@/components/home/InclusionAccordion";
import { KakaoChannelButton } from "@/components/common/KakaoChannelButton";
import { Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-6 pb-6">
      <HeroBanner />
      <TourSummaryCard />
      <DayHighlightCards />
      <InclusionAccordion />

      {/* 인솔자 연락처 CTA */}
      <div className="mx-4">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-neutral-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold text-sm">인솔자 연락처</span>
          </div>
          <p className="text-sm font-medium text-neutral-800">임길원 작가</p>
          <p className="text-sm text-neutral-600">010-4722-5319</p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="tel:010-4722-5319"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#008c45] px-5 py-3 text-sm font-bold text-white active:scale-95 transition hover:bg-[#006d35]"
            >
              <Phone className="h-4 w-4" />
              전화하기
            </a>
            <KakaoChannelButton />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-neutral-400 pb-2">
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
  );
}
