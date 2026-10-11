// ============================================================================
// THEME CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to rebrand this site for a new salon.
// Change the values below — logo, name, colors, fonts, contact info — and every
// page updates automatically. No component code needs to change.
// ============================================================================

export type ThemeConfig = {
  salonName: string;
  tagline: string;
  logo: {
    light: string; // logo for light backgrounds
    dark: string; // logo for dark / photo backgrounds (e.g. footer, hero)
    monogram: string; // short mark, 1-3 letters, used as a decorative signature
  };
  colors: {
    primary: string; // deep brand color — buttons, headings accents
    secondary: string; // warm neutral — backgrounds, section fills
    accent: string; // metallic/gold highlight — dividers, icons, price tags
    background: string; // page background
    surface: string; // card / panel background
    text: string; // body copy
    textMuted: string; // secondary copy, captions
    border: string;
  };
  fonts: {
    heading: string; // display serif
    body: string; // UI / body sans
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsapp: string; // digits only, international format, no + or spaces
    address: string;
    mapEmbedUrl: string;
  };
  hours: { day: string; time: string }[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
  branches?: { name: string; address: string; phone: string }[];
};

export const theme: ThemeConfig = {
  salonName: "Fusion by Madiha",
  tagline: "Beauty, composed.",
  logo: {
    light: "/logos/logo-dark.svg",
    dark: "/logos/logo-light.svg",
    monogram: "F.M",
  },
  colors: {
    primary: "#6E2C3A", // deep bordeaux
    secondary: "#E7D9C8", // warm sand
    accent: "#B4874F", // antique gold
    background: "#FAF6F1", // ivory
    surface: "#F4EAE3", // soft blush panel
    text: "#241C1A", // ink
    textMuted: "#7A6F69",
    border: "#E3D6CB",
  },
  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  },
  contact: {
    phone: "03005921220",
    phoneDisplay: "03005921220",
    email: "hello@fusionbymadiha.com",
    whatsapp: "03005921220",
    address: "C-64 Lane 3, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area Phase 8 Defence Housing Authority, Karachi, 75500",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7244.335837127503!2d67.0744168!3d24.789703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d6e605e2523%3A0xd7211ae2ce284cdf!2sSalon%20Fusion%20By%20Madiha!5e0!3m2!1sen!2s!4v1784830909528!5m2!1sen!2s",
  },
  hours: [
    { day: "Monday — Friday", time: "11:00 AM – 7:30 PM" },
    { day: "Saturday", time: "11:00 AM – 7:30 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/fusionsalonbymadiha/",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
  },
  branches: [
    {
      name: "Salon Fusion By Madiha",
      address: "C-64 Lane 3, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area Phase 8 Defence Housing Authority, Karachi, 75500",
      phone: "03005921220",
    }
  ],
};
