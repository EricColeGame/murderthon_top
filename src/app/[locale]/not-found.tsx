"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { localizeHref } from "@/components/site";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

/**
 * 404 页面。
 *
 * 段级 not-found 不接收 params，也无法保证被 [locale] layout 的
 * NextIntlClientProvider 包裹，因此这里不依赖 i18n 运行时上下文：
 * 直接从 pathname 取语言、从 locale JSON 取文案（单一真相源，不重复维护字符串）。
 * 链接同样按当前语言本地化，避免把 /en 硬编码进 CTA 而让其它语言跳错。
 */
const MESSAGES: Record<string, typeof en.notFound> = {
  en: en.notFound,
  es: es.notFound,
  pt: pt.notFound,
  de: de.notFound,
};

export default function NotFoundPage() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] ?? "en";
  const t = MESSAGES[locale] ?? MESSAGES.en;

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t.title}</h1>
        <p className="mt-4 text-muted-foreground">{t.description}</p>
        <Button asChild className="mt-6">
          <Link href={localizeHref("/guide", locale)}>{t.cta}</Link>
        </Button>
      </div>
    </main>
  );
}
