import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-pill font-body font-semibold tracking-wide transition-all duration-300 ease-out will-change-transform";

const variants = {
  primary: "bg-primary text-background hover:-translate-y-0.5 hover:shadow-soft",
  outline: "border border-primary text-primary hover:bg-primary hover:text-background",
  ghost: "text-ink hover:text-primary",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  showArrow = true,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
