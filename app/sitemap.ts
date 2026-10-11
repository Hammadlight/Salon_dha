import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/makeup",
  "/gallery",
  "/pricing",
  "/team",
  "/testimonials",
  "/faq",
  "/blog",
  "/contact",
  "/booking",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example-salon.com"; // replace with your production domain
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
