import { Category } from "@/lib/data";

const CONFIG: Record<Category, { label: string; icon: string; className: string }> = {
  flight:    { label: "항공",     icon: "✈️",  className: "bg-neutral-100 text-neutral-600" },
  transport: { label: "이동",     icon: "🚌",  className: "bg-neutral-100 text-neutral-600" },
  sight:     { label: "관광",     icon: "📍",  className: "bg-emerald-50 text-emerald-700" },
  meal:      { label: "식사",     icon: "🍽️", className: "bg-amber-50 text-amber-700" },
  optional:  { label: "선택관광", icon: "⭐",  className: "bg-yellow-50 text-yellow-700" },
  hotel:     { label: "숙박",     icon: "🏨",  className: "bg-blue-50 text-blue-700" },
};

interface Props {
  category: Category;
}

export function CategoryChip({ category }: Props) {
  const { label, icon, className } = CONFIG[category];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>
      <span>{icon}</span>
      {label}
    </span>
  );
}
