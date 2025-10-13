"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src: string; // path under /public, e.g. "/hobbies/hike.jpg"
  title?: string;
  blurb?: string;
};

export default function ImageCarousel({
  items,
  className,
  aspect = "aspect-[16/9]",
}: {
  items: GalleryItem[];
  className?: string;
  aspect?: string; // e.g. "aspect-square" or "aspect-[3/4]"
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden rounded-2xl shadow" ref={emblaRef}>
        <div className="flex">
          {items.map((it, i) => (
            <div className="min-w-0 flex-[0_0_100%] p-2" key={i}>
              <div className={cn("w-full overflow-hidden rounded-xl", aspect)}>
                <Image
                  src={it.src}
                  alt={it.title ?? `slide-${i}`}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  priority={i === 0}
                />
              </div>
              {(it.title || it.blurb) && (
                <div className="mt-3">
                  {it.title && (
                    <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                  )}
                  {it.blurb && (
                    <p className="text-sm text-muted-foreground">{it.blurb}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow ring-1 ring-border backdrop-blur transition hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow ring-1 ring-border backdrop-blur transition hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
