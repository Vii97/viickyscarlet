"use client"
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import { OCCard } from "@/app/components/OCCard";
import YzhelOC from "@/app/data/YzhelOC";
import { useState } from "react";

export const artYzhel = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GqBFq71W0AAmVC1?format=jpg&name=medium",
        alt: "yzhel",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GsoU6dFXMAA-mlg?format=png&name=900x900",   
        alt: "yzhel brilli",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/G5lRMIJWUAA6RQL?format=jpg&name=medium",   
        alt: "ocyzhel",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/GuiqsfOWMAA8eoo?format=jpg&name=medium",   
        alt: "yzhel valhalla",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/GyARndvWYAEFY8d?format=jpg&name=medium",   
        alt: "yzhel",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/GuOW3qwWkAA_nFb?format=jpg&name=medium",   
        alt: "atardecer",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/Gy-uFlTXMAAueol?format=jpg&name=medium",   
        alt: "wereheog",
    }
]

export default function Yzhel() {
const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="pt-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
           Yzhel
          </h1>
          <p className="subtitle text-center mb-8 text-lg">
          OC
          </p>
          <p className="text-white/70 text-center mb-12 text-lg"><i>El viento se llevará las palabras que quedaron por decir</i></p>
          <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>

          <ArtGallery imageSets={[artYzhel]} /> 
        </div>
      </section>
      <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setOpenModal('yzhel')}
                      className="cursor-pointer text-white bg-black border-[#9D50BB] border hover:bg-[#9D50BB]/50 px-4 py-2 transition-colors duration-300 inline-block"
                    >
                      Ver ficha de personaje
                    </button>

                    {openModal === 'yzhel' && (
                      <OCCard oc={YzhelOC} onClose={() => setOpenModal(null)} />
                    )}
      </div>  
    </div>
  );
}