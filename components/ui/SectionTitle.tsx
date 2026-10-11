import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean; // true when placed on a dark/photo background
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "text-secondary")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-heading text-4xl leading-[1.1] md:text-5xl",
          light ? "text-background" : "text-ink"
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-divider my-6", align === "center" && "mx-auto")} />
      {description && (
        <p className={cn("font-body text-base leading-relaxed", light ? "text-secondary/90" : "text-muted")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
