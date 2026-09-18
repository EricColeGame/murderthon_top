import { defineRouting } from "next-intl/routing";

/**
 * 语言集合的唯一真相源。
 * 修改这里时必须同步以下三处，四处必须完全一致：
 *   1. src/i18n/request.ts 的 messagesMap
 *   2. src/components/language-switcher.tsx 的 localeLabels
 *   3. src/locales/*.json 的文件名
 */
export const routing = defineRouting({
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
