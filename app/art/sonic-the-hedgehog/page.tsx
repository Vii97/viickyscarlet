
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const artSonic = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/EElqqa5WkAAul1K?format=jpg&name=medium",
        alt: "sonic megadrive",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/DmbS2BEW4AEfEIt?format=jpg&name=medium",   
        alt: "sonic mania emerald",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/D4IIS0JWAAApq2R?format=jpg&name=medium",   
        alt: "sonic mania poster",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/Eazpv7eWoAADwjs?format=jpg&name=medium",   
        alt: "sonic mania cap",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/EdNr3p6XoAAhQWa?format=jpg&name=medium",   
        alt: "sonic friends",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/FRWhb53XEAANFjN?format=jpg&name=medium",   
        alt: "kunckles",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/DsXoiFoXgAE_jFV?format=jpg&name=medium",   
        alt: "wereheog",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/DrzqT1EX4AEsuaD?format=jpg&name=medium",   
        alt: "supersonic",
    }
]

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sonic | Art | Viicky Scarlet",
  description:
    "Galería de fan art y dibujo digital de Sonic the Hedgehog por Viicky Scarlet.",
  path: "/art/sonic-the-hedgehog",
  keywords: ["fan art Sonic", "Sonic the Hedgehog", "dibujo digital", "Viicky Scarlet"],
});

export default function LeagueOfLegends() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            Sonic The Hedgehog
          </h1>
            <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>
          
          <ArtGallery imageSets={[artSonic]} altContext="Fan art y dibujo digital de Sonic the Hedgehog por Viicky Scarlet" /> 

        </div>
      </section>
    </div>
  );
}