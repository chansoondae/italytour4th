import { CheckCircle2, XCircle, Star, ShieldAlert, Backpack, CreditCard, Smartphone, Shirt, Phone, Euro } from "lucide-react";
import { KakaoChannelButton } from "@/components/common/KakaoChannelButton";
import { OPTIONAL_TOURS } from "@/lib/data";

export const metadata = {
  title: "여행 정보 | 이탈리아 아트 투어",
};

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

const SECTIONS = [
  {
    value: "included",
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
    title: "포함 사항",
    titleClass: "text-emerald-700",
    content: (
      <ul className="space-y-2">
        {INCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    value: "excluded",
    icon: <XCircle className="h-4 w-4 text-red-500" />,
    title: "불포함 사항",
    titleClass: "text-red-600",
    content: (
      <ul className="space-y-2">
        {EXCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
            <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" /> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    value: "optional",
    icon: <Star className="h-4 w-4 text-yellow-500" />,
    title: "선택관광 안내",
    titleClass: "text-yellow-700",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-1.5 pr-3 text-xs text-neutral-500 font-medium">일차</th>
              <th className="text-left py-1.5 pr-3 text-xs text-neutral-500 font-medium">항목</th>
              <th className="text-left py-1.5 pr-3 text-xs text-neutral-500 font-medium">요금</th>
              <th className="text-left py-1.5 text-xs text-neutral-500 font-medium">소요</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {OPTIONAL_TOURS.map((tour, i) => (
              <tr key={i}>
                <td className="py-2 pr-3 text-xs font-bold text-yellow-700">Day {tour.day}</td>
                <td className="py-2 pr-3 text-xs text-neutral-800 font-medium">{tour.name}</td>
                <td className="py-2 pr-3 text-xs text-neutral-600">
                  {tour.priceEur ? (
                    <span className="flex items-center gap-0.5"><Euro className="h-3 w-3" />{tour.priceEur}</span>
                  ) : "현지 문의"}
                </td>
                <td className="py-2 text-xs text-neutral-600">{tour.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    value: "ees",
    icon: <ShieldAlert className="h-4 w-4 text-blue-500" />,
    title: "EES 입출국 시스템 안내",
    titleClass: "text-blue-700",
    content: (
      <div className="space-y-2 text-sm text-neutral-700">
        <p>2025년 10월 12일부터 유럽 EES(Entry/Exit System) 시행</p>
        <ul className="space-y-1 list-disc list-inside text-neutral-600 text-xs">
          <li>얼굴 인식 + 지문 등록 절차 추가</li>
          <li>입국 심사 시간이 길어질 수 있습니다</li>
          <li>공항 도착 시 충분한 시간을 확보하세요</li>
        </ul>
      </div>
    ),
  },
  {
    value: "safety",
    icon: <ShieldAlert className="h-4 w-4 text-red-500" />,
    title: "소매치기 주의",
    titleClass: "text-red-600",
    content: (
      <ul className="space-y-2 text-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>로마, 베네치아 등 관광지 다중 운집 구역 특히 주의
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>가방은 항상 앞으로 메고, 지갑은 안주머니에
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>호텔 금고를 적극 활용하세요
        </li>
      </ul>
    ),
  },
  {
    value: "baggage",
    icon: <Backpack className="h-4 w-4 text-neutral-500" />,
    title: "수하물 안내",
    titleClass: "text-neutral-700",
    content: (
      <ul className="space-y-2 text-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>LCC 항공 수하물 규정 출발 전 반드시 확인
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>분실 대비 짐 사진 촬영 및 명함 부착 권장
        </li>
      </ul>
    ),
  },
  {
    value: "money",
    icon: <CreditCard className="h-4 w-4 text-neutral-500" />,
    title: "환전·결제",
    titleClass: "text-neutral-700",
    content: (
      <ul className="space-y-2 text-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>통화: 유로(EUR) — 가이드 경비 EUR 90 현금 준비 권장
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>카드: 비자/마스터 대부분 사용 가능
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>일부 소도시는 현금 위주
        </li>
      </ul>
    ),
  },
  {
    value: "sim",
    icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
    title: "유심·로밍",
    titleClass: "text-neutral-700",
    content: (
      <ul className="space-y-2 text-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>유럽 다국가 유심 또는 통신사 로밍 추천
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>인천공항 사전 수령 권장
        </li>
      </ul>
    ),
  },
  {
    value: "clothes",
    icon: <Shirt className="h-4 w-4 text-neutral-500" />,
    title: "옷차림",
    titleClass: "text-neutral-700",
    content: (
      <ul className="space-y-2 text-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>6월 중순 초여름: 낮 25~30°C, 자외선 강함 — 선크림·선글라스 필수
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>성당 입장 시 어깨·무릎을 가리는 옷 필수
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0">•</span>로마는 도보 이동이 많으니 편한 신발 추천
        </li>
      </ul>
    ),
  },
];

export default function InfoPage() {
  return (
    <div className="space-y-6 py-6">
      <div className="px-4">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">여행 정보</h1>
        <p className="text-sm text-neutral-500">이탈리아 아트 투어 9일 · 2026.06.15~06.23</p>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden divide-y divide-neutral-100">
          {SECTIONS.map((section) => (
            <div key={section.value} className="px-4 py-4">
              <p className={`flex items-center gap-2 text-sm font-semibold mb-3 ${section.titleClass}`}>
                {section.icon}
                {section.title}
              </p>
              {section.content}
            </div>
          ))}
        </div>
      </div>

      {/* 연락처 */}
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
    </div>
  );
}
