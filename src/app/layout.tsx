import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spiritual-universe.psyverse.fun"),
  title: "Human Spiritual Universe · 人类精神宇宙 | The Atlas of Belief, Consciousness, Myth & Meaning",
  description:
    "Human Spiritual Universe — a world-class bilingual atlas of humanity's search for meaning: belief systems, religions, philosophies, mythologies, mysticism, and consciousness, mapped as one interconnected cosmos. Educational, not religious.",
  keywords: [
    "spirituality", "religion", "mythology", "consciousness", "philosophy", "belief systems",
    "monotheism", "polytheism", "pantheism", "animism", "mysticism", "Taoism", "Buddhism",
    "Hinduism", "meaning of life", "afterlife", "the soul", "enlightenment",
    "人类精神宇宙", "信仰", "意识", "神话", "哲学", "宗教", "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: "Human Spiritual Universe · 人类精神宇宙",
    description:
      "The Atlas of Belief, Consciousness, Myth & Meaning — humanity's entire search for meaning, mapped as one interconnected cosmos.",
    url: "https://spiritual-universe.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Spiritual Universe · 人类精神宇宙",
    description: "A bilingual atlas of belief, consciousness, myth & meaning across all human traditions.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#070612" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23070612'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23e8c074' stroke-width='1.3'/%3E%3Ccircle cx='16' cy='16' r='4.5' fill='none' stroke='%23a489ff' stroke-width='1'/%3E%3Ccircle cx='16' cy='16' r='1.7' fill='%235fd6c4'/%3E%3C/svg%3E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Human Spiritual Universe",
              alternateName: "人类精神宇宙",
              description:
                "A bilingual atlas of belief, consciousness, myth, and meaning across all human traditions.",
              url: "https://spiritual-universe.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
