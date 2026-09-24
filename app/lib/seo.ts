import type { Metadata } from "next";

/**
 * Configuración central de SEO del sitio.
 * Cambia SITE.url si en el futuro usas un dominio propio.
 */
export const SITE = {
  name: "Viicky Scarlet",
  url: "https://viickyscarlet.pages.dev",
  locale: "es_ES",
  twitter: "@EUSonicOfHyrule",
  defaultTitle: "Viicky Scarlet | Cosplay, arte digital, fotografía virtual y desarrollo web",
  description:
    "Portfolio de Viicky Scarlet: desarrolladora web, artista digital y cosplayer. Cosplay, dibujo digital, personajes originales (OC) y fotografía virtual en videojuegos como Black Desert y Where Winds Meet.",
  ogImage: "/home/hero_bdo_slide.webp",
  social: {
    instagramCosplay: "https://instagram.com/ViickyScarlet",
    instagramArt: "https://instagram.com/viickyscarlet.art",
    x: "https://x.com/EUSonicOfHyrule",
  },
} as const;

type BuildArgs = {
  title: string;
  description: string;
  /** Ruta absoluta del sitio, p. ej. "/cosplay/akali". */
  path: string;
  /** Imagen OG opcional (ruta relativa o URL absoluta). */
  image?: string;
  /** Lista de palabras clave específicas de la página. */
  keywords?: string[];
};

/**
 * Construye el objeto Metadata de una página con canonical, Open Graph y
 * Twitter Card coherentes. El título se compone con la plantilla del layout
 * raíz ("%s · Viicky Scarlet").
 */
export function buildMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  keywords,
}: BuildArgs): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage, alt: `${title} · ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE.name}`,
      description,
      images: [ogImage],
      creator: SITE.twitter,
    },
  };
}
