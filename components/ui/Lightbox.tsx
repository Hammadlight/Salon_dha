"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

type LightboxProps = {
  images: { src: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const current = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-background/10 p-2 text-background hover:bg-background/20"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute left-4 rounded-full bg-background/10 p-2 text-background hover:bg-background/20 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        className="relative aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-salon"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={current.src} alt={current.caption ?? "Gallery image"} fill sizes="600px" className="object-cover" />
        {current.caption && (
          <p className="absolute bottom-0 w-full bg-gradient-to-t from-ink/80 to-transparent p-5 text-sm text-background">
            {current.caption}
          </p>
        )}
      </div>

      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute right-4 rounded-full bg-background/10 p-2 text-background hover:bg-background/20 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
