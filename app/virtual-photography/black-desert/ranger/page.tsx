import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image";

export const screenshotLuth = [
    { id: 1, src: "https://pbs.twimg.com/media/F3Qxc4dW4AAA_x4?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 2, src: "https://pbs.twimg.com/media/GQEFRxgW8AAGVRQ?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 3, src: "https://pbs.twimg.com/media/GwEzk2SWsAAElLT?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 4, src: "https://pbs.twimg.com/media/GvgwPTXWcAAaZ0D?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 5, src: "https://pbs.twimg.com/media/GLxqCj0WQAARdt5?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 6, src: "https://pbs.twimg.com/media/GIgOZp9W0AAusGR?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 7, src: "https://pbs.twimg.com/media/Gjiyjg2WAAAAFvL?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 8, src: "https://pbs.twimg.com/media/Gf675FLWkAA3jUv?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 9, src: "https://pbs.twimg.com/media/F9SYHJKW4AAG_nz?format=jpg&name=4096x4096", alt: "Luth" },
    { id: 10, src: "https://pbs.twimg.com/media/F3QxbqAW0AA4k_c?format=jpg&name=large", alt: "Luth" },
    { id: 11, src: "https://pbs.twimg.com/media/F3QxZXnWkAAw44V?format=jpg&name=4096x4096", alt: "Luth" },
];

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ranger | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de la clase Ranger de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/ranger",
  keywords: ["Ranger", "Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Ranger() {
    return (
        <div className="min-h-screen">
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center mt-6 text-balance text-6xl leading-none md:text-8xl">
            Luth
          </h1>
          <p className="subtitle text-center text-lg">
            Black Desert
          </p>
          <div className="py-4 flex justify-center">
            <Image src="/icons/ranger.webp" alt="Ranger" width={50} height={50} /> 
          </div>
          <p className="text-white/70 text-center mb-12 text-lg">
            <i>¡Ahora forjaré mi propio destino!</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotLuth]} altContext="Fotografía virtual de la clase Ranger en Black Desert por Viicky Scarlet" />
                </div>
            </section>
        </div>
    );
}
