import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const BASE = site.social.website;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "a-propos", priority: 0.9 },
    { path: "services", priority: 0.9 },
    { path: "projets", priority: 0.9 },
    { path: "evenements", priority: 0.7 },
    { path: "equipe", priority: 0.7 },
    { path: "contact", priority: 0.9 },
  ];
  return routes.map((r) => ({
    url: `${BASE}/${r.path}`.replace(/\/$/, ""),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
