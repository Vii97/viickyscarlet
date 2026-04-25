"use client";

import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image";
import { OCCard } from "@/app/components/OCCard";
import { useState } from "react";
import AkameOC from "@/app/data/AkameOC";

export const screenshotAkame = [
    { id: 1, src: "https://pbs.twimg.com/media/GXXBPRoWkAAYDlj?format=jpg&name=medium", alt: "Akame" },
    { id: 2, src: "https://pbs.twimg.com/media/G-88WGVX0AANhUh?format=jpg&name=medium", alt: "Akame" },
    { id: 3, src: "https://pbs.twimg.com/media/GQtut4BXMAEl9ax?format=jpg&name=medium", alt: "Akame" },
    { id: 4, src: "https://pbs.twimg.com/media/GiUIsurXQAA5iwM?format=jpg&name=medium", alt: "Akame" },
    { id: 5, src: "https://pbs.twimg.com/media/GiK8IHNXkAA6Gu7?format=jpg&name=medium", alt: "Akame" },
    { id: 6, src: "https://pbs.twimg.com/media/GiK8G0DXUAA_CIj?format=jpg&name=medium", alt: "Akame" },
    { id: 7, src: "https://pbs.twimg.com/media/HDkvf3PXYAEedCe?format=jpg&name=medium", alt: "Akame" },
    { id: 8, src: "https://pbs.twimg.com/media/Gd6R7EBXEAAP0A8?format=jpg&name=medium", alt: "Akame" },
    { id: 9, src: "https://pbs.twimg.com/media/G5_hi1bWgAEIVH2?format=jpg&name=medium", alt: "Akame" },
    { id: 10, src: "https://pbs.twimg.com/media/G5_hlKGXgAAfeHE?format=jpg&name=medium", alt: "Akame" },
    { id: 11, src: "https://pbs.twimg.com/media/GjJFUIJXoAAdDVJ?format=jpg&name=medium", alt: "Akame" },
    { id: 12, src: "https://pbs.twimg.com/media/F3SSwpcWIAAfusd?format=jpg&name=medium", alt: "Akame" },
    { id: 13, src: "https://pbs.twimg.com/media/F3lJUZHbwAA6Jtw?format=jpg&name=medium", alt: "Akame" },
    { id: 14, src: "https://pbs.twimg.com/media/F3Sbyx1WAAALKcg?format=jpg&name=medium", alt: "Akame" },
];

export default function Lahn() {
const [openModal, setOpenModal] = useState<string | null>(null);
    return (
        <div className="min-h-screen">
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center mt-6 text-balance text-6xl leading-none  md:text-8xl">
            Akame
          </h1>
          <p className="subtitle text-center text-lg">
            Black Desert
          </p>
          <div className="py-4 flex justify-center">
            <Image src="/icons/lahn.webp" alt="Lahn" width={50} height={50} /> 
          </div>
          <p className="text-white/70 text-center mb-12 text-lg px-8">
            <i>No hay nada puramente bueno ni nada completamente malo. El fuego es cálido a la par que peligroso.</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotAkame]} />
                </div>
            </section>
            <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setOpenModal('akame')}
                      className="cursor-pointer text-white bg-black border-[#9D50BB] border hover:bg-[#9D50BB]/50 px-4 py-2 transition-colors duration-300 inline-block"
                    >
                      Ver ficha de personaje
                    </button>

                    {openModal === 'akame' && (
                      <OCCard oc={AkameOC} onClose={() => setOpenModal(null)} />
                    )}
            </div>  
        </div>
    );
}
