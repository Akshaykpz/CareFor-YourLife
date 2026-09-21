import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://careforyourlife247.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/how-it-works",
    "/why-choose-us",
    "/app",
    "/become-a-provider",
    "/faq",
    "/contact",
    "/book",
    "/privacy-policy",
    "/terms",
    "/cancellation-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
