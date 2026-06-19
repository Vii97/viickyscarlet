import { ArtGallery } from "@/app/components/ArtGallery";
import FadeInSection from "@/app/components/FadeInSection";

export const artOtros = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/Gcv6TR-XgAEcjwH?format=jpg&name=medium",
        alt: "ororon",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/FzTkT8pWIAMG-9X?format=jpg&name=medium",   
        alt: "kaminari",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/Fv2cK8pWcAEr1qT?format=jpg&name=medium",   
        alt: "zelda",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/EYsqZfiWkAAZpcf?format=jpg&name=medium",   
        alt: "zelink",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/HC1sXWfXgAAD5DL?format=jpg&name=medium",   
        alt: "wwm moon",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/HI9E2gSXcAAYE--?format=jpg&name=medium",   
        alt: "wwm hexi",
    },

]

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Otros | Art | Viicky Scarlet",
  description:
    "Galería de otros dibujos digitales y fan art de Viicky Scarlet: ilustraciones variadas de videojuegos, anime y personajes originales.",
  path: "/art/otros",
  keywords: ["fan art", "dibujo digital", "ilustración", "Viicky Scarlet"],
});

export default function OtrosArts() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            Otros
          </h1>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>

          <ArtGallery imageSets={[artOtros]} altContext="Dibujo digital y fan art por Viicky Scarlet" />

        </div>
      </section>
    </div>
  );
}