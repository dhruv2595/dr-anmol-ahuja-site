import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allConditionPages } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact-us`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/faqs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/hi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/hi/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/hi/contact-us`, changeFrequency: "monthly", priority: 0.8 },
    ...allConditionPages.map((p) => ({
      url: `${site.url}/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: p.isHub ? 0.8 : 0.6,
    })),
  ];
}
