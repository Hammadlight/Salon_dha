import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { theme } from "@/config/theme";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${theme.salonName} — Luxury Hair, Skin & Makeup Studio`,
  description: `${theme.salonName} is a premium beauty studio in Seattle offering hair, skin, bridal makeup, and spa services. ${theme.tagline}`,
  keywords: ["beauty salon", "bridal makeup", "hair salon Seattle", "luxury spa", theme.salonName],
  openGraph: {
    title: `${theme.salonName} — Luxury Beauty Studio`,
    description: theme.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
