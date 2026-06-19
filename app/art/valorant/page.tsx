import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const artValorant = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/HEb2OuQbsAAiiqo?format=jpg&name=medium",
        alt: "wallsova",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/G3Dw_nnWYAAOjDY?format=jpg&name=medium",   
        alt: "sovaportrait",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/FfWjrIwWYAATU4L?format=jpg&name=medium",   
        alt: "soviper",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/GI9z6FTX0AMZgQP?format=jpg&name=medium",   
        alt: "sova",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/GIK8wDCWEAEhmBY?format=jpg&name=medium",   
        alt: "sage",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/GIRcSr_XgAAi3Tz?format=jpg&name=medium",   
        alt: "gekko",
    },
]

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Valorant | Art | Viicky Scarlet",
  description:
    "Galería de fan art y dibujo digital de Valorant por Viicky Scarlet.",
  path: "/art/valorant",
  keywords: ["fan art Valorant", "dibujo digital", "Viicky Scarlet"],
});

export default function Valorant() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            Valorant
          </h1>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>
          
          <ArtGallery imageSets={[artValorant]} altContext="Fan art y dibujo digital de Valorant por Viicky Scarlet" />

        </div>
      </section>
    </div>
  );
}