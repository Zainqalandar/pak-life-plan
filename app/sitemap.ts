import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/plans/golden-endowment",
    "/plans/platinum-plus",
    "/plans/jeevan-sathi",
    "/plans/child-education-marriage",
    "/about",
    "/contact",
  ];
  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date("2026-09-09"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
