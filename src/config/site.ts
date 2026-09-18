export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Murderthon Wiki",
  shortName: "Murderthon",
  logoText: "M",
  tagline: "Survivor Guides, Killer Tips, Codes & Maps",
  description: "Murderthon Wiki provides survivor guides, killer tips, codes, maps, and gameplay strategies to help Roblox players master this 4v1 horror escape game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://murderthon.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://murderthon.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/80984321649009/Murderthon",
  heroVideoId: "cJ_aA0Oy0M0", // A Beginner's Guide To Murderthon! | 20+ Tips | Roblox
  social: {
    // Chilly Creations (Murderthon developer) official community server
    discord: "https://discord.com/servers/chilly-creations-community-server-1127407202353807412",
    // Chilly Creations official game-developing channel
    youtube: "https://www.youtube.com/@chillycreations",
  },
  // 语言真相源是 src/i18n/routing.ts，此字段仅为无消费者的配置项，必须与其保持同步，
  // 否则后来者若改回以本字段为准，会静默重新引入已移除的 fr 并生成 /fr 页面。
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
