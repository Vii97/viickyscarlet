import type { MetadataRoute } from "next";
import { SITE } from "./lib/seo";

export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/cosplay", priority: 0.8 },
  { path: "/art", priority: 0.8 },
  { path: "/virtual-photography", priority: 0.8 },

  // Cosplay
  { path: "/cosplay/akali", priority: 0.7 },
  { path: "/cosplay/eru", priority: 0.7 },
  { path: "/cosplay/ezreal", priority: 0.7 },
  { path: "/cosplay/link", priority: 0.7 },
  { path: "/cosplay/silk", priority: 0.7 },
  { path: "/cosplay/sonic", priority: 0.7 },
  { path: "/cosplay/sova", priority: 0.7 },
  { path: "/cosplay/otros", priority: 0.6 },

  // Arte
  { path: "/art/black-desert", priority: 0.7 },
  { path: "/art/black-desert/chibis", priority: 0.6 },
  { path: "/art/league-of-legends", priority: 0.7 },
  { path: "/art/valorant", priority: 0.7 },
  { path: "/art/sonic-the-hedgehog", priority: 0.7 },
  { path: "/art/yzhel", priority: 0.7 },
  { path: "/art/otros", priority: 0.6 },

  // Fotografía virtual
  { path: "/virtual-photography/black-desert", priority: 0.7 },
  { path: "/virtual-photography/black-desert/archer", priority: 0.6 },
  { path: "/virtual-photography/black-desert/ranger", priority: 0.6 },
  { path: "/virtual-photography/black-desert/dosa", priority: 0.6 },
  { path: "/virtual-photography/black-desert/hashashin", priority: 0.6 },
  { path: "/virtual-photography/black-desert/lahn", priority: 0.6 },
  { path: "/virtual-photography/black-desert/otros", priority: 0.6 },
  { path: "/virtual-photography/where-winds-meet", priority: 0.7 },

  // Web
  { path: "/web", priority: 0.7 },

  // Legal
  { path: "/policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
