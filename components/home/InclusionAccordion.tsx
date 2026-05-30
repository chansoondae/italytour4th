import { CheckCircle2, XCircle } from "lucide-react";

const INCLUDED = [
  "왕복 항공권 (티웨이항공 인천↔로마 직항)",
  "관광진흥개발기금, 전쟁보험료, 국내공항세, 유류할증료",
  "7박 숙박비 (4성급 호텔)",
  "1억원 여행자보험",
];

const EXCLUDED = [
  "가이드/기사 경비 EUR 90 (15명 미만 시 20~30유로 추가)",
  "개인경비 (물값, 자유시간 비용)",
  "각종 매너팁 (테이블팁, 객실팁, 포터비 등) — 자율",
];

export function InclusionAccordion() {
  return (
    <div className="mx-4">
      <h2 className="text-lg font-bold text-neutral-900 mb-3">포함/불포함 사항</h2>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-neutral-100">
          <p className="text-sm font-semibold text-emerald-700 flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-4 w-4" /> 포함 사항
          </p>
          <ul className="space-y-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-red-600 flex items-center gap-2 mb-3">
            <XCircle className="h-4 w-4" /> 불포함 사항
          </p>
          <ul className="space-y-2">
            {EXCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
