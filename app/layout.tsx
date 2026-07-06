import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ScrollHoverGuard } from "@/components/ScrollHoverGuard";

const SITE_URL = "https://merhex.github.io/axelbreekweg";
const OG_TITLE = "Sveiki, aš Axel — patikimas nuomininkas Vilniuje";
const OG_DESC =
  "Programinės įrangos inžinierius, ieškantis būsto Vilniuje kartu su dviem ramiais, gerai išdresuotais šunimis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Axel — patikimas nuomininkas Vilniuje",
  description:
    "Susipažinkite su Axel — programinės įrangos inžinieriumi, persikeliančiu į Vilnių su dviem gerai išdresuotais šunimis. Stabilus, ramus ir pagarbus nuomininkas.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Axel — nuomininkas Vilniuje",
    title: OG_TITLE,
    description: OG_DESC,
    locale: "lt_LT",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Axel su Raava ir Goldas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
    images: [`${SITE_URL}/og.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollHoverGuard />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
