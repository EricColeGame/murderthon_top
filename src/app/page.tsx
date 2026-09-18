import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">{siteConfig.name}</Link>…
      </p>
    </main>
  );
}
