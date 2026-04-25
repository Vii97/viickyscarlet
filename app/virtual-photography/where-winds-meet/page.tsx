"use client"; 

import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import { useState } from "react";
import AnubisWWMOC from "@/app/data/AnubisWWMOC";
import { OCCard } from "@/app/components/OCCard";

export const screenshotWWM = [
  { id: 1, src: "https://pbs.twimg.com/media/HFu9N0WaoAAX2PD?format=jpg&name=medium", alt: "WM" },
  { id: 2, src: "https://pbs.twimg.com/media/HDKrg9UXYAERi5x?format=jpg&name=medium", alt: "WM" },
  { id: 3, src: "https://pbs.twimg.com/media/HD4kTjKXsAAS3HB?format=jpg&name=medium", alt: "WM" },
  { id: 4, src: "https://pbs.twimg.com/media/HC6-yRabMAAfQ2m?format=jpg&name=medium", alt: "WM" },
  { id: 5, src: "https://pbs.twimg.com/media/HARIpyLXwAAusuI?format=jpg&name=medium", alt: "WM" },
  { id: 6, src: "https://pbs.twimg.com/media/HFAi7tMb0AAb8I9?format=jpg&name=medium", alt: "WM" },
  { id: 7, src: "https://pbs.twimg.com/media/HFAjP3daEAA_mHn?format=jpg&name=medium", alt: "WM" },
  { id: 8, src: "https://pbs.twimg.com/media/HAFrKb3XAAAWN98?format=jpg&name=medium", alt: "WM" },
  { id: 9, src: "https://pbs.twimg.com/media/G-Vq2yRWMAEKxwh?format=jpg&name=medium", alt: "WM" },
  { id: 10, src: "https://pbs.twimg.com/media/G9tUZdjWYAA-yoD?format=jpg&name=medium", alt: "WM" },
  { id: 11, src: "https://pbs.twimg.com/media/G9IPKG3WcAEM0kf?format=jpg&name=medium", alt: "WM" },
  { id: 12, src: "https://pbs.twimg.com/media/G8tECTRW4AA6YXt?format=jpg&name=medium", alt: "WM" },
  { id: 13, src: "https://pbs.twimg.com/media/HBj9n3QWcAA-zLK?format=jpg&name=medium", alt: "WM" },
  { id: 14, src: "https://pbs.twimg.com/media/G8UaIwfWwAUo9Q2?format=jpg&name=medium", alt: "WM" },
  { id: 15, src: "https://pbs.twimg.com/media/G-ZsKe2WgAASie9?format=jpg&name=medium", alt: "WM" },
  { id: 16, src: "https://pbs.twimg.com/media/G-ZsSkVWkAAEhK_?format=jpg&name=medium", alt: "WM" },
  { id: 17, src: "https://pbs.twimg.com/media/G8zGPN9X0AAz8ca?format=jpg&name=medium", alt: "WM" },
  { id: 18, src: "https://pbs.twimg.com/media/G6D0pq4WIAAEmCh?format=jpg&name=medium", alt: "WM" },
  { id: 19, src: "https://pbs.twimg.com/media/G_xW1bQXsAEjMnf?format=jpg&name=medium", alt: "WM" },
  { id: 20, src: "https://pbs.twimg.com/media/G9c9yLAXEAAeAqh?format=jpg&name=medium", alt: "WM" },
  { id: 21, src: "https://pbs.twimg.com/media/G6cyVC9XYAAcudD?format=jpg&name=medium", alt: "WM" },
  { id: 22, src: "https://pbs.twimg.com/media/HFqLGyjWkAAmxZm?format=jpg&name=medium", alt: "WM" },
  { id: 23, src: "https://pbs.twimg.com/media/HAlwbr3WwAAPD5H?format=jpg&name=medium", alt: "WM" },
  { id: 24, src: "https://pbs.twimg.com/media/HAlwdRIX0AAhJmx?format=jpg&name=medium", alt: "WM" },
  { id: 25, src: "https://pbs.twimg.com/media/G_DMcrpWcAE81rO?format=jpg&name=medium", alt: "WM" },
  { id: 26, src: "https://pbs.twimg.com/media/HBPbnj-WsAAT7ur?format=jpg&name=medium", alt: "WM" },
  { id: 27, src: "https://pbs.twimg.com/media/HFZQA9WXkAAKB0-?format=jpg&name=medium", alt: "WM" },
  { id: 28, src: "https://pbs.twimg.com/media/G8oFQMEW4AAd5sO?format=jpg&name=medium", alt: "WM" },
  { id: 29, src: "https://pbs.twimg.com/media/HD-NTEiaIAAuHkB?format=jpg&name=medium", alt: "WM" },
  { id: 30, src: "https://pbs.twimg.com/media/HD-OZxGX0AIMZYt?format=jpg&name=medium", alt: "WM" },
  { id: 31, src: "https://pbs.twimg.com/media/HC53EB6XYAAzMWo?format=jpg&name=medium", alt: "WM" },
  { id: 32, src: "https://pbs.twimg.com/media/HEyMyNqXUAAUofy?format=jpg&name=medium", alt: "WM" },
  { id: 33, src: "https://pbs.twimg.com/media/G69GGRCW8AEje7o?format=jpg&name=medium", alt: "WM" },
  { id: 34, src: "https://pbs.twimg.com/media/G69F_GxWYAEo2lv?format=jpg&name=medium", alt: "WM" },
  { id: 35, src: "https://pbs.twimg.com/media/G_eTZ18XIAAbSkJ?format=jpg&name=medium", alt: "WM" },
  { id: 36, src: "https://pbs.twimg.com/media/G_3TPSiW8AAvvKx?format=jpg&name=medium", alt: "WM" },
  { id: 37, src: "https://pbs.twimg.com/media/G7xIFhYWwAAdj50?format=jpg&name=medium", alt: "WM" },
  { id: 38, src: "https://pbs.twimg.com/media/G8tEFTSXMAAfurA?format=jpg&name=medium", alt: "WM" },
  { id: 39, src: "https://pbs.twimg.com/media/G8AJjEgXIAM6CrS?format=jpg&name=medium", alt: "WM" },
];

export default function WWM() {
const [openModal, setOpenModal] = useState<string | null>(null);
    return (
    <div className="min-h-screen selection:bg-purple-500/30">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-35">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center text-balance text-6xl leading-none  md:text-8xl">
            Where Winds Meet
          </h1>
          <p className="subtitle text-center mb-12 text-lg">
            Anubis, from Hexi
          </p>
          <p className="text-white/70 text-center mb-12 text-lg">
            <i>Correré por el sendero del jianghu, donde ni siquiera la historia pordrá borrarme</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotWWM]} />
          </div>
          </section>
          <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setOpenModal('anubisWWM')}
                      className="cursor-pointer text-white bg-black border-[#9D50BB] border hover:bg-[#9D50BB]/50 px-4 py-2 transition-colors duration-300 inline-block"
                    >
                      Ver ficha de personaje
                    </button>

                    {openModal === 'anubisWWM' && (
                      <OCCard oc={AnubisWWMOC} onClose={() => setOpenModal(null)} />
                    )}
          </div>  
    </div>
  )
}   