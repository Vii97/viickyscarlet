import type { Metadata } from "next";
import { Antic_Didone } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { SITE } from "./lib/seo";

const anticDidone = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Viicky Scarlet", url: SITE.url }],
  creator: "Viicky Scarlet",
  publisher: "Viicky Scarlet",
  category: "Arts & Entertainment",
  referrer: "no-referrer",
  keywords: [
    "Viicky Scarlet",
    "cosplay",
    "cosplayer",
    "cosplay España",
    "arte digital",
    "dibujo digital",
    "ilustración",
    "fan art",
    "personajes originales",
    "OC",
    "fotografía virtual",
    "virtual photography",
    "Black Desert",
    "Where Winds Meet",
    "League of Legends",
    "Valorant",
    "desarrolladora web",
    "portfolio",
  ],
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE.defaultTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 3878,
        height: 2304,
        alt: "Viicky Scarlet | cosplay, arte digital y desarrollo web",
      },
    ],
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.description,
    images: [SITE.ogImage],
    creator: SITE.twitter,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "Viicky Scarlet",
      alternateName: "Viicky",
      url: SITE.url,
      image: `${SITE.url}${SITE.ogImage}`,
      jobTitle: ["Desarrolladora web", "Artista digital", "Cosplayer"],
      description:
        "Desarrolladora web, artista digital y cosplayer. Crea cosplay, dibujo digital, personajes originales (OC) y fotografía virtual en videojuegos.",
      nationality: "ES",
      knowsLanguage: ["es", "en"],
      knowsAbout: [
        "Cosplay",
        "Arte digital",
        "Ilustración",
        "Fotografía virtual en videojuegos",
        "Desarrollo web",
        "Next.js",
        "React",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "U-tad — Centro Universitario de Tecnología y Arte Digital",
      },
      sameAs: [
        SITE.social.instagramCosplay,
        SITE.social.instagramArt,
        SITE.social.x,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${anticDidone.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
