"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type Project = {
  title: string;
  description: string;
  image: string; // under /public
  tech?: string[];
  github?: string;
  link?: string;
};

export function ProjectCarousel({ items }: { items: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: items.length > 3, align: "start" });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((p, idx) => (
            <div
              className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              key={idx}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_8px_#38bdf8,0_0_0_4px_#0ea5e9] hover:border-[#0ea5e9] border border-border bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-[#13294B]">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-[#13294B]">{p.description}</p>
                  {p.tech && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge variant="secondary" key={t} className="text-[#13294B] bg-[#e3e9f4] border-none">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center gap-3">
                    {p.github && (
                      <a className="inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline text-[#13294B]" href={p.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {p.link && (
                      <a className="inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline text-[#13294B]" href={p.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow ring-1 ring-border backdrop-blur hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow ring-1 ring-border backdrop-blur hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
