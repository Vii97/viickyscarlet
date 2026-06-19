"use client"

import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const artLOL = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/F-p9DOkWMAArc15?format=jpg&name=medium",
        alt: "ez hs",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/F9SPSsIWgAAdSBb?format=jpg&name=medium",   
        alt: "ez hs chibi",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/GZXrEvdWQAAieDq?format=jpg&name=medium",   
        alt: "ezreal kaisa",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/FKIQSUbWUAEzTby?format=jpg&name=medium",   
        alt: "vi",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/F1f-cYoWIAsoQN1?format=jpg&name=medium",   
        alt: "rakan",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/FeTa9mxXgAA2-3V?format=jpg&name=medium",   
        alt: "settphelios",
    }
]

export default function LeagueOfLegends() {

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            League Of Legends
          </h1>
          <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>
              
          
          <ArtGallery imageSets={[artLOL]} altContext="Fan art y dibujo digital de League of Legends por Viicky Scarlet" />

        </div>
      </section>
    </div>
  );
}