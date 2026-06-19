"use client"
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image"; 
import { useState } from "react";
import { OCCard } from "@/app/components/OCCard";
import AnubisBDOOC from "@/app/data/AnubisBDOOC";

export const screenshotAnubis = [
    { id: 1, src: "https://pbs.twimg.com/media/GQoHlSsXoAA1Cdt?format=jpg&name=medium", alt: "Anubis" },
    { id: 2, src: "https://pbs.twimg.com/media/GcEUWTxWEAEDZ93?format=jpg&name=medium", alt: "Anubis" },
    { id: 3, src: "https://pbs.twimg.com/media/Gc4dbzTWwAAiAsP?format=jpg&name=medium", alt: "Anubis" },
    { id: 4, src: "https://pbs.twimg.com/media/Gc4dj6BWYAA27Xv?format=jpg&name=medium", alt: "Anubis" },
    { id: 5, src: "https://pbs.twimg.com/media/GQOid-uXUAAUzvu?format=jpg&name=medium", alt: "Anubis" },
    { id: 6, src: "https://pbs.twimg.com/media/GSslsfOXQAAheer?format=jpg&name=medium", alt: "Anubis" },
    { id: 7, src: "https://pbs.twimg.com/media/Guoh_g1XwAAemBo?format=jpg&name=medium", alt: "Anubis" },
    { id: 8, src: "https://pbs.twimg.com/media/F3VJ3-UWUAIwGai?format=jpg&name=medium", alt: "Anubis" },
    { id: 9, src: "https://pbs.twimg.com/media/HDJiT_gaUAAgdqw?format=jpg&name=medium", alt: "Anubis" },
    { id: 10, src: "https://pbs.twimg.com/media/F3VJ6uTXAAEcx_T?format=jpg&name=medium", alt: "Anubis" },
    { id: 11, src: "https://pbs.twimg.com/media/Gt2dIRYXkAAV4vA?format=jpg&name=medium", alt: "Anubis" },
    { id: 12, src: "https://pbs.twimg.com/media/GoKFDuXXUAAwI4L?format=jpg&name=medium", alt: "Anubis" },
    { id: 13, src: "https://pbs.twimg.com/media/GcN6N1bWUAAsMDa?format=jpg&name=medium", alt: "Anubis" },
    { id: 14, src: "https://pbs.twimg.com/media/GOTUwheXIAAWCrg?format=jpg&name=medium", alt: "Anubis" },
    { id: 15, src: "https://pbs.twimg.com/media/GMIyzDGWQAAZMnS?format=jpg&name=medium", alt: "Anubis" },
    { id: 16, src: "https://pbs.twimg.com/media/Gtb1YNbWsAAFDFK?format=jpg&name=medium", alt: "Anubis" },
    { id: 17, src: "https://pbs.twimg.com/media/GQ8T5CnXoAAszpg?format=jpg&name=medium", alt: "Anubis" },
    { id: 18, src: "https://pbs.twimg.com/media/GQ8TyhPWsAABb-J?format=jpg&name=medium", alt: "Anubis" },
    { id: 19, src: "https://pbs.twimg.com/media/GrAinTLX0AA6bU5?format=jpg&name=medium", alt: "Anubis" },
    { id: 20, src: "https://pbs.twimg.com/media/Gci9jZuW8AA_WX5?format=jpg&name=medium", alt: "Anubis" },
    { id: 21, src: "https://pbs.twimg.com/media/GLQRWM7W0AA7EeN?format=jpg&name=medium", alt: "Anubis" },
    { id: 22, src: "https://pbs.twimg.com/media/GUqNeCwWEAABRHf?format=jpg&name=medium", alt: "Anubis" },
    { id: 23, src: "https://pbs.twimg.com/media/GYWvUvfWoAAp1kW?format=jpg&name=medium", alt: "Anubis" },
    { id: 24, src: "https://pbs.twimg.com/media/GljBEajXUAASY9X?format=jpg&name=medium", alt: "Anubis" },
    { id: 25, src: "https://pbs.twimg.com/media/GljBAnEW4AAsShB?format=jpg&name=medium", alt: "Anubis" },
    { id: 26, src: "https://pbs.twimg.com/media/GLQTmHJWAAA1mW2?format=jpg&name=medium", alt: "Anubis" },
    { id: 27, src: "https://pbs.twimg.com/media/GgzU42MXMAAUgVV?format=jpg&name=medium", alt: "Anubis" },
];

export default function Hashashin() {
const [openModal, setOpenModal] = useState<string | null>(null);
    return (
        <div className="min-h-screen">
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center mt-6 text-balance text-6xl leading-none  md:text-8xl">
            Anubis
          </h1>
          <p className="subtitle text-center text-lg">
            Black Desert
          </p>
          <div className="py-4 flex justify-center">
            <Image src="/icons/hashashin.webp" alt="Hashashin" width={50} height={50} /> 
          </div>
          <p className="text-white/70 text-center mb-12 text-lg">
            <i>Llámame hijo del polvo o joven derrotado. Seguiré siendo el rey de la arena sin corona</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotAnubis]} altContext="Fotografía virtual de la clase Hashashin en Black Desert por Viicky Scarlet" />
                </div>
            </section>
            <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setOpenModal('anubisBDO')}
                      className="cursor-pointer text-white bg-black border-[#9D50BB] border hover:bg-[#9D50BB]/50 px-4 py-2 transition-colors duration-300 inline-block"
                    >
                      Ver ficha de personaje
                    </button>

                    {openModal === 'anubisBDO' && (
                      <OCCard oc={AnubisBDOOC} onClose={() => setOpenModal(null)} />
                    )}
            </div> 
        </div>
    );
}
