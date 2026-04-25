"use client";
import { ArtGallery } from "@/app/components/ArtGallery";
import FadeInSection from "@/app/components/FadeInSection";
import EruOC from "@/app/data/EruOC";
import Image from "next/image";
import { useState } from "react";
import { OCCard } from "@/app/components/OCCard";

export const screenshotEru = [
  { id: 1, src: "https://pbs.twimg.com/media/Gcs6s3fWwAAO7eL?format=jpg&name=medium", alt: "Eru" },
  { id: 2, src: "https://pbs.twimg.com/media/Gdg2L_sWsAAuN3y?format=jpg&name=medium", alt: "Eru" },
  { id: 3, src: "https://pbs.twimg.com/media/GW_uSWOWgAEEsUw?format=jpg&name=medium", alt: "Eru" },
  { id: 4, src: "https://pbs.twimg.com/media/G_STYvOXoAAkV0p?format=jpg&name=medium", alt: "Eru" },
  { id: 5, src: "https://pbs.twimg.com/media/G9m5ptyXIAAdW9E?format=jpg&name=medium", alt: "Eru" },
  { id: 6, src: "https://pbs.twimg.com/media/Gi1FWNQWgAAiG0j?format=jpg&name=medium", alt: "Eru" },
  { id: 7, src: "https://pbs.twimg.com/media/GRwuZB0WgAAxwCD?format=jpg&name=medium", alt: "Eru" },
  { id: 8, src: "https://pbs.twimg.com/media/GRpuc0XWEAAFPCs?format=jpg&name=medium", alt: "Eru" },
  { id: 9, src: "https://pbs.twimg.com/media/GNLXXj4XAAAMliA?format=jpg&name=medium", alt: "Eru" },
  { id: 10, src: "https://pbs.twimg.com/media/GRDS5y1WoAAQfeM?format=jpg&name=medium", alt: "Eru" },
  { id: 11, src: "https://pbs.twimg.com/media/GSkA7OHXgAA-dy6?format=jpg&name=medium", alt: "Eru" },
  { id: 12, src: "https://pbs.twimg.com/media/GS4dZx4WkAA2mfn?format=jpg&name=medium", alt: "Eru" },
  { id: 13, src: "https://pbs.twimg.com/media/GS4deCSXEAEhDX2?format=jpg&name=medium", alt: "Eru" },
  { id: 14, src: "https://pbs.twimg.com/media/Gkmam-3XMAA4DvR?format=jpg&name=medium", alt: "Eru" },
  { id: 15, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/90c13eef4b120240419203627330.jpg?format=jpg&name=medium", alt: "Eru" },
  { id: 16, src: "https://pbs.twimg.com/media/F98YwPEXcAEqiYa?format=jpg&name=medium", alt: "Eru" },
  { id: 17, src: "https://pbs.twimg.com/media/GtGHb7QW4AAPZSI?format=jpg&name=medium", alt: "Eru" },
  { id: 18, src: "https://pbs.twimg.com/media/G89Ew97XwAM10LH?format=jpg&name=medium", alt: "Eru" },
  { id: 19, src: "https://pbs.twimg.com/media/GHHMo9nXkAAifzH?format=jpg&name=medium", alt: "Eru" },
  { id: 20, src: "https://pbs.twimg.com/media/GOjHDd1W8AA1nw3?format=jpg&name=medium", alt: "Eru" },
  { id: 21, src: "https://pbs.twimg.com/media/GXRtES3WEAEjo9P?format=jpg&name=medium", alt: "Eru" },
  { id: 22, src: "https://pbs.twimg.com/media/GqdPq_jW8AAAloF?format=jpg&name=medium", alt: "Eru" },
  { id: 23, src: "https://pbs.twimg.com/media/GowVfbBXUAA7Vw4?format=jpg&name=medium", alt: "Eru" },
  { id: 24, src: "https://pbs.twimg.com/media/GpkMOfmWEAATJ-Z?format=jpg&name=medium", alt: "Eru" },
  { id: 25, src: "https://pbs.twimg.com/media/GUwR3ebX0AETMFh?format=jpg&name=medium", alt: "Eru" },
  { id: 26, src: "https://pbs.twimg.com/media/GolwT81XsAQGM0w?format=jpg&name=medium", alt: "Eru" },
  { id: 27, src: "https://pbs.twimg.com/media/F3hUYhyWoAI4blZ?format=jpg&name=medium", alt: "Eru" },
  { id: 28, src: "https://pbs.twimg.com/media/GpAABhGWQAAog2i?format=jpg&name=medium", alt: "Eru" },
  { id: 29, src: "https://pbs.twimg.com/media/GLIw8lQXYAARWsy?format=jpg&name=medium", alt: "Eru" },
  { id: 30, src: "https://pbs.twimg.com/media/GLIw9VeXEAA6eaJ?format=jpg&name=medium", alt: "Eru" },
  { id: 31, src: "https://pbs.twimg.com/media/GLECZc5X0AM6RxG?format=jpg&name=medium", alt: "Eru" },
  { id: 32, src: "https://pbs.twimg.com/media/G_L4UTZXEAA5Kam?format=jpg&name=medium", alt: "Eru" },
  { id: 33, src: "https://pbs.twimg.com/media/HGNo60XXkAA463F?format=jpg&name=medium", alt: "Eru" },
  { id: 34, src: "https://pbs.twimg.com/media/GsbSg3aXgAALWLK?format=jpg&name=medium", alt: "Eru" },
  { id: 35, src: "https://pbs.twimg.com/media/GbwVNLGXkBEWoYy?format=jpg&name=medium", alt: "Eru" },
  { id: 36, src: "https://pbs.twimg.com/media/GGUBAImXcAAftU3?format=jpg&name=medium", alt: "Eru" },
  { id: 37, src: "https://pbs.twimg.com/media/Ga6Mb-CWQAAW44P?format=jpg&name=medium", alt: "Eru" },
  { id: 38, src: "https://pbs.twimg.com/media/GqIi7i2XYAA1oF_?format=jpg&name=medium", alt: "Eru" },
  { id: 39, src: "https://pbs.twimg.com/media/F3QsZB8WUAAPNg-?format=jpg&name=medium", alt: "Eru" },
  { id: 40, src: "https://pbs.twimg.com/media/GXZTGOvXgAERLL1?format=jpg&name=medium", alt: "Eru" },
  { id: 41, src: "https://pbs.twimg.com/media/GEDx07uWAAAsnkk?format=jpg&name=medium", alt: "Eru" },
  { id: 42, src: "https://pbs.twimg.com/media/GEDyf1iXAAA7_Ta?format=jpg&name=medium", alt: "Eru" },
  { id: 43, src: "https://pbs.twimg.com/media/GFh8nAiWQAAkoyZ?format=jpg&name=medium", alt: "Eru" },
  { id: 44, src: "https://pbs.twimg.com/media/GhsBs9yWEAAxt3n?format=jpg&name=medium", alt: "Eru" },
  { id: 45, src: "https://pbs.twimg.com/media/GSzS5-WXYEAfrmr?format=jpg&name=medium", alt: "Eru" },
  { id: 46, src: "https://pbs.twimg.com/media/GaWspjFXYAA1vMk?format=jpg&name=medium", alt: "Eru" },
  { id: 47, src: "https://pbs.twimg.com/media/GhbckLvXsAAWOX7?format=jpg&name=medium", alt: "Eru" },
  { id: 48, src: "https://pbs.twimg.com/media/HEmsbl0agAAFr1-?format=jpg&name=medium", alt: "Eru" },
  { id: 49, src: "https://pbs.twimg.com/media/G4DlRqpW8AAowLX?format=jpg&name=medium", alt: "Eru" },
  { id: 50, src: "https://pbs.twimg.com/media/F3QsaliWkAAHA_U?format=jpg&name=medium", alt: "Eru" },
  { id: 51, src: "https://pbs.twimg.com/media/GKCWl-7XcAAJfgV?format=jpg&name=medium", alt: "Eru" },
  { id: 52, src: "https://pbs.twimg.com/media/GKCWqrFWAAA-8pN?format=jpg&name=medium", alt: "Eru" },
  { id: 53, src: "https://pbs.twimg.com/media/GKLrZclWwAAHyFP?format=jpg&name=medium", alt: "Eru" },
  { id: 54, src: "https://pbs.twimg.com/media/F7dACabXEAAxiQQ?format=jpg&name=medium", alt: "Eru" },
  { id: 55, src: "https://pbs.twimg.com/media/GlYSwHTXAAIytj-?format=jpg&name=medium", alt: "Eru" },
  { id: 56, src: "https://pbs.twimg.com/media/GPUdIpDXkAAJz6X?format=jpg&name=medium", alt: "Eru" },
  { id: 57, src: "https://pbs.twimg.com/media/GX2r_7KWwAAAMvu?format=jpg&name=medium", alt: "Eru" },
  { id: 58, src: "https://pbs.twimg.com/media/GICVk25XQAA3DQw?format=jpg&name=medium", alt: "Eru" },
  { id: 59, src: "https://pbs.twimg.com/media/HDuWF2kWAAEsXKL?format=jpg&name=medium", alt: "Eru" },
  { id: 60, src: "https://pbs.twimg.com/media/F7c_fMHXkAExFJC?format=jpg&name=medium", alt: "Eru" },
];

export default function Archer() {
const [openModal, setOpenModal] = useState<string | null>(null);

    return (
        <div className="min-h-screen">
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto p-4">
          <FadeInSection>
          <h1 className="title text-center mt-6 text-balance text-6xl leading-none  md:text-8xl">
            Eru
          </h1>
          <p className="subtitle text-center text-lg">
            Black Desert
          </p>
          <div className="py-4 flex justify-center">
            <Image src="/icons/archer.webp" alt="Archer" width={50} height={50} /> 
          </div>
          <p className="text-white/70 text-center mb-12 text-lg">
            <i>Disparo porque quiero que mis flechas sean la luz en medio de la oscuridad</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotEru]} />
                </div>
            </section>
            <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setOpenModal('eru')}
                      className="cursor-pointer text-white bg-black border-[#9D50BB] border hover:bg-[#9D50BB]/50 px-4 py-2 transition-colors duration-300 inline-block"
                    >
                      Ver ficha de personaje
                    </button>

                    {openModal === 'eru' && (
                      <OCCard oc={EruOC} onClose={() => setOpenModal(null)} />
                    )}
            </div>  
        </div>
    );
}
