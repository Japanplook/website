import type { MetadataRoute } from "next";

const BASE_URL = "https://plook.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                   lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/our-produce`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/how-we-grow`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/technology`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
