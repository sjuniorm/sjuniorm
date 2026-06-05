import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sjuniorm.xyz", priority: 1 },
    { url: "https://sjuniorm.xyz/links", priority: 0.8 },
  ];
}
