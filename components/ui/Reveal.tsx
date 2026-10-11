"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: "div" | "span";
  id?: string;
};

/**
 * Fades + lifts children into view the first time they cross into the
 * viewport. Pure IntersectionObserver — no animation library dependency,
 * so it stays cheap on pages with many repeated cards.
 */
export default function Reveal({ children, delay = 0, className, as = "div", id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Comp = as as "div";
  return (
    <Comp ref={ref} id={id} className={cn("reveal", className)}>
      {children}
    </Comp>
  );
}
