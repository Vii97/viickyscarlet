 import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image";

export const screenshotRan = [
    { id: 1, src: "https://pbs.twimg.com/media/Gx9VoJKWUAA0nc9?format=jpg&name=medium", alt: "Ran" },
    { id: 2, src: "https://pbs.twimg.com/media/GnUuDnlW4AAqnmU?format=jpg&name=medium", alt: "Ran" },
    { id: 3, src: "https://pbs.twimg.com/media/Gx2HiOiXgAEnBxz?format=jpg&name=medium", alt: "Ran" },
    { id: 4, src: "https://pbs.twimg.com/media/GyLYaWSXcAE19rw?format=jpg&name=medium", alt: "Ran" },
    { id: 5, src: "https://pbs.twimg.com/media/G27qqAXWgAAsExK?format=jpg&name=medium", alt: "Ran" },
    { id: 6, src: "https://pbs.twimg.com/media/GSFKtOEW0AEUrqj?format=jpg&name=medium", alt: "Ran" },
    { id: 7, src: "https://pbs.twimg.com/media/GRmZlQTWwAAcLhq?format=jpg&name=medium", alt: "Ran" },
    { id: 8, src: "https://pbs.twimg.com/media/GSUknXuW0AAH49Q?format=jpg&name=medium", alt: "Ran" },
];

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dosa | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de la clase Dosa de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/dosa",
  keywords: ["Dosa", "Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Dosa() {
    return (
        <div className="min-h-screen">
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center mt-6 text-balance text-6xl leading-none  md:text-8xl">
            Ran
          </h1>
          <p className="subtitle text-center text-lg">
            Black Desert
          </p>
          <div className="py-4 flex justify-center">
            <Image src="/icons/dosa.webp" alt="Dosa" width={50} height={50} /> 
          </div>
          <p className="text-white/70 text-center mb-12 text-lg">
            <i>Solo quedarán las lágrimas de la Luna cayendo en el mar de plata</i>
          </p>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[screenshotRan]} altContext="Fotografía virtual de la clase Dosa en Black Desert por Viicky Scarlet" />
                </div>
            </section>
        </div>
    );
}
