import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://skillops.vercel.app",
      lastModified: new Date("2026-11-05"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
