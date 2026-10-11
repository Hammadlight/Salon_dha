"use client";

import { theme } from "@/config/theme";
import { ReactNode } from "react";

/**
 * Converts the theme config into a CSS variable style block.
 * This is what actually re-themes the entire site: every Tailwind
 * color (bg-primary, text-accent, border-line, etc.) resolves to
 * one of these variables, and every one of these variables comes
 * straight from config/theme.ts.
 */
function themeStyle(): React.CSSProperties {
  return {
    ["--color-primary" as string]: theme.colors.primary,
    ["--color-secondary" as string]: theme.colors.secondary,
    ["--color-accent" as string]: theme.colors.accent,
    ["--color-background" as string]: theme.colors.background,
    ["--color-surface" as string]: theme.colors.surface,
    ["--color-text" as string]: theme.colors.text,
    ["--color-text-muted" as string]: theme.colors.textMuted,
    ["--color-border" as string]: theme.colors.border,
  };
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <div style={themeStyle()} className="bg-background text-ink">
      {children}
    </div>
  );
}
