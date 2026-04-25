"use client"
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image";

export const trystan = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/F3VLQGfXcAAh1n0?format=jpg&name=medium",
        alt: "trystan",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/F3VMBXOXcAAR3EJ?format=jpg&name=medium",   
        alt: "trystan",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/F3VLRf2XMAAo9lC?format=jpg&name=medium",   
        alt: "trystan",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/GYSN-1fWcAA40Aa?format=jpg&name=medium",   
        alt: "trystan",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/F5qeTEBX0AAD9Y3?format=jpg&name=medium",   
        alt: "trystan",
    },
]
export const ayano = [
       {
        id: 1,
        src: "https://pbs.twimg.com/media/GsiosmLWwAAfZvB?format=jpg&name=medium",
        alt: "ayano",
    }, 
       {
        id: 2,
        src: "https://pbs.twimg.com/media/GsiouTAWEAAhdTz?format=jpg&name=medium",
        alt: "ayano",
    },  
    {
        id: 3,
        src: "https://pbs.twimg.com/media/Gsiov3AW0AEL3Lj?format=jpg&name=medium",
        alt: "ayano",
    }, 
    {
        id: 4,
        src: "https://pbs.twimg.com/media/GKcYmyNWsAA7FEi?format=jpg&name=medium",
        alt: "ayano",
    }, 
    {
        id: 5,
        src: "https://pbs.twimg.com/media/F3VTCi9WgAAHyRM?format=jpg&name=medium",
        alt: "ayano",
    }, 
    {
        id: 6,
        src: "https://pbs.twimg.com/media/F3VTQ6-WYAML42n?format=jpg&name=medium",
        alt: "ayano",
    }, 
]

export const esthella = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GMyGgrlXkAAH0Ou?format=jpg&name=medium",
        alt: "esthella",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GMyGskmWQAAzR_4?format=jpg&name=medium",   
        alt: "esthella",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/F3VO_pyWAAAC3Gg?format=jpg&name=medium",   
        alt: "esthella",
    },
     {
        id: 4,
        src: "https://pbs.twimg.com/media/F3VPAvhXcAAkh9l?format=jpg&name=medium",   
        alt: "esthella",
    }, 
     {
        id: 5,
        src: "https://pbs.twimg.com/media/F7PerUYWAAA166X?format=jpg&name=medium",   
        alt: "esthella",
    },   
     {
        id: 6,
        src: "https://pbs.twimg.com/media/F3VO2-HWoAIw3c3?format=jpg&name=medium",   
        alt: "esthella",
    }, 
]

export const wukong = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/Gw5b-DRWkAAh2ca?format=jpg&name=medium",
        alt: "wukong",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GxTji4yWwAAzsME?format=jpg&name=medium",   
        alt: "wukong",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/Gw5cC1xXIAAvRln?format=jpg&name=medium",   
        alt: "wukong",
    }
]



export const woosa = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GIplFC0WkAAciPw?format=jpg&name=medium",
        alt: "woosa",
    },
]

export default function OtrosOC() {

  const sections = [
    { id: "trystan", nombre: "Trystan", clase: "Ninja", icon:"/icons/ninja.webp", data: trystan },
    { id: "ayano", nombre: "Ayano", clase: "Kunoichi", icon: "/icons/kuno.webp", data: ayano },
    { id: "esthella", nombre: "Esthella", clase: "Dark Knight", icon:"/icons/dk.webp", data: esthella },
    { id: "wukong", nombre: "Anubis Wukong", clase: "Wukong", icon:"/icons/wukong.webp", data: wukong },

  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          
          <FadeInSection>
            <h1 className="py-4 title text-center text-balance text-6xl leading-none  md:text-8xl">
              Otros
            </h1>

            {/* MENÚ DE NAVEGACIÓN */}
            <nav className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="cursor-pointer border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 transition-all duration-300 ease-in-out hover:border-[#9D50BB] hover:bg-[#9D50BB]/10 hover:text-white md:px-6 md:text-sm"
                >
                  {sec.nombre}
                </button>
              ))}
            </nav>
          </FadeInSection>

          {/* RENDERIZADO DE sections */}
          {sections.map((sec) => (
            <FadeInSection key={sec.id}>
              <div id={sec.id} className="scroll-mt-24">
                <div className="mx-5 mt-5 border-t border-white/10 pb-6 md:mx-16" />
                <h2 className="subtitle text-center text-4xl">{sec.nombre}</h2>
                <p className="mb-2 text-center text-base text-white">{sec.clase}</p>
          <div className="pb-4 flex justify-center">
            <Image src={sec.icon} alt="BDO" width={50} height={50} /> 
          </div>
                <div className="mx-5 pb-6 border-t border-white/10 md:mx-16" />
                
                <ArtGallery imageSets={[sec.data]} />
              </div>
            </FadeInSection>
          ))}

        </div>
      </section>
    </div>
  );
}
