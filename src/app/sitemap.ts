import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { CONTENT_TYPES } from "@/config/navigation";

export const dynamic = "force-static";

// Legal / static pages that are not content types
const LEGAL_PATHS = ["/privacy-policy", "/terms-of-service", "/copyright", "/about"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

  // Static paths: home + one listing page per CONTENT_TYPES entry + legal pages
  const staticPaths = ["/", ...CONTENT_TYPES.map((ct) => `/${ct}`), ...LEGAL_PATHS];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/bosses" ? 0.8 : 0.6,
    })),
  );
}
