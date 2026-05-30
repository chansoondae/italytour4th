import Image from "next/image";
import { CategoryChip } from "@/components/common/CategoryChip";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";
import { Spot } from "@/lib/data";
import { Clock, Euro } from "lucide-react";

interface Props {
  spot: Spot;
}

export function SpotCard({ spot }: Props) {
  if (spot.category === "transport") {
    return (
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm">🚌</div>
          <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />
        </div>
        <div className="pb-6 pt-1 flex-1">
          {spot.time && (
            <p className="text-xs font-bold text-neutral-400 mb-0.5">{spot.time}</p>
          )}
          <p className="text-sm font-semibold text-neutral-700">{spot.nameKo}</p>
          {spot.duration && (
            <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {spot.duration}
            </p>
          )}
          {spot.description && (
            <p className="text-xs text-neutral-500 mt-1">{spot.description}</p>
          )}
          {spot.googleMapsUrl && (
            <div className="mt-2">
              <GoogleMapsButton url={spot.googleMapsUrl} size="sm" />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (spot.category === "flight") {
    return (
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm">✈️</div>
          <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />
        </div>
        <div className="pb-6 pt-1 flex-1">
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
            {spot.time && (
              <p className="text-xs font-bold text-neutral-400 mb-1">{spot.time}</p>
            )}
            <p className="font-bold text-neutral-900">{spot.nameKo}</p>
            {spot.nameEn && <p className="text-xs text-neutral-500 font-playfair italic">{spot.nameEn}</p>}
            {spot.duration && (
              <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {spot.duration}
              </p>
            )}
            {spot.description && (
              <p className="text-sm text-neutral-600 mt-2">{spot.description}</p>
            )}
            {spot.googleMapsUrl && (
              <div className="mt-3">
                <GoogleMapsButton url={spot.googleMapsUrl} size="sm" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (spot.category === "optional") {
    return (
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm">⭐</div>
          <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />
        </div>
        <div className="pb-6 pt-1 flex-1">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl overflow-hidden">
            {spot.imagePath && (
              <div className="relative aspect-video w-full">
                <Image
                  src={spot.imagePath}
                  alt={spot.nameKo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <CategoryChip category="optional" />
                {spot.priceEur && (
                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full px-2 py-1">
                    <Euro className="h-3 w-3" />{spot.priceEur}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-neutral-900">{spot.nameKo}</h3>
              {spot.nameEn && <p className="text-xs text-neutral-500 font-playfair italic">{spot.nameEn}</p>}
              {spot.duration && (
                <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {spot.duration}
                </p>
              )}
              {spot.description && (
                <p className="text-sm text-neutral-600 mt-2">{spot.description}</p>
              )}
              {spot.googleMapsUrl && (
                <div className="mt-3">
                  <GoogleMapsButton url={spot.googleMapsUrl} size="sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (spot.category === "meal") {
    return (
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-sm">🍽️</div>
          <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />
        </div>
        <div className="pb-6 pt-1 flex-1">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl overflow-hidden">
            {spot.imagePath && (
              <div className="relative aspect-video w-full">
                <Image
                  src={spot.imagePath}
                  alt={spot.nameKo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {spot.time && (
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">{spot.time}</span>
                )}
                <CategoryChip category="meal" />
              </div>
              <h3 className="font-bold text-neutral-900">{spot.nameKo}</h3>
              {spot.description && (
                <p className="text-sm text-neutral-600 mt-1">{spot.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // sight (default)
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-sm">📍</div>
        <div className="w-0.5 flex-1 bg-neutral-200 mt-2" />
      </div>
      <div className="pb-6 pt-1 flex-1">
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
          {spot.imagePath && (
            <div className="relative aspect-video w-full">
              <Image
                src={spot.imagePath}
                alt={spot.nameKo}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              {spot.time && (
                <span className="text-xs font-bold text-[#008c45] bg-[#e8f5ed] rounded-full px-2 py-0.5">{spot.time}</span>
              )}
              <CategoryChip category={spot.category} />
              {spot.isInsideVisit === true && (
                <span className="text-xs bg-blue-50 text-blue-600 rounded-full px-2 py-0.5 font-medium">내부입장</span>
              )}
            </div>
            <h3 className="font-bold text-neutral-900">{spot.nameKo}</h3>
            {spot.nameEn && (
              <p className="text-xs text-neutral-500 font-playfair italic mt-0.5">{spot.nameEn}</p>
            )}
            {spot.description && (
              <p className="text-sm text-neutral-600 mt-2">{spot.description}</p>
            )}
            {spot.youtubeUrls && spot.youtubeUrls.map(({ title, url }) => (
              <div key={url} className="mt-3">
                <p className="text-xs font-semibold text-neutral-500 mb-1">{title}</p>
                <div className="rounded-xl overflow-hidden aspect-video w-full">
                  <iframe
                    src={url}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
            {spot.googleMapsUrl && (
              <div className="mt-3">
                <GoogleMapsButton url={spot.googleMapsUrl} size="sm" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
