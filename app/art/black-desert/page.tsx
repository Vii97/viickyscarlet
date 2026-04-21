
"use client";
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import Image from "next/image"; 


export const artBDOeru = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GbfRtPpbQAEHzl7?format=jpg&name=4096x4096",
        alt: "wolf",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GH6yvL8WkAAs0gW?format=jpg&name=4096x4096",   
        alt: "academia",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/HA0MGS-bYAAucWz?format=jpg&name=4096x4096",   
        alt: "comic",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/GrjzDp6WcAAKTrV?format=jpg&name=4096x4096",   
        alt: "blue",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/G1oZs8lXIAAg2B-?format=jpg&name=4096x4096",   
        alt: "lake",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/GQiOOI3XkAAyyLv?format=jpg&name=4096x4096",   
        alt: "sielos",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/FztcGxSWIAMNHr3?format=jpg&name=large",   
        alt: "bi",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/F9xYdSKWkAAu0qx?format=jpg&name=4096x4096",   
        alt: "halloween",
    },
    {
        id: 9,
        src: "https://s1.pearlcdn.com/NAEU/Upload/Community/77641a01a0520211025135023005.jpg",   
        alt: "thunder",
    },
    {
        id: 10,
        src: "https://pbs.twimg.com/media/HF4hkVyWsAAiy4Q?format=jpg&name=4096x4096",   
        alt: "fields",
    },
    {
        id: 11,
        src: "https://pbs.twimg.com/media/GG8YWAiWwAEyldi?format=jpg&name=large",   
        alt: "flor",
    },
    {
        id: 12,
        src: "https://pbs.twimg.com/media/GKlxrZpW0AAL1VH?format=jpg&name=4096x4096",   
        alt: "chibi",
    },
    {
        id: 13,
        src: "https://pbs.twimg.com/media/GLeY72NXsAAtq84?format=jpg&name=4096x4096",   
        alt: "sketch",
    },
]
export const artBDOluth = [
       {
        id: 1,
        src: "https://pbs.twimg.com/media/Ge9dV_9WYAAwyoM?format=jpg&name=4096x4096",
        alt: "luth",
    }, 
       {
        id: 2,
        src: "https://s1.pearlcdn.com/NAEU/Upload/News/14c396e220f20230823145309863.jpg",
        alt: "luth",
    },  
]

export const artBDOakame = [
      {
        id: 1,
        src: "https://pbs.twimg.com/media/G9NwmAAXYAADsmS?format=jpg&name=medium",
        alt: "akame",
    },
]

export const artBDOanubis = [
      {
        id: 1,
        src: "https://pbs.twimg.com/media/GZ8Pg1HWgAAXTin?format=jpg&name=4096x4096",
        alt: "anubis night",
    },
      {
        id: 2,
        src: "https://pbs.twimg.com/media/GnoW6LoXIAA2g8h?format=jpg&name=4096x4096",
        alt: "anubis portrait",
    },
      {
        id: 3,
        src: "https://pbs.twimg.com/media/F3lxHPqWIBMWDyF?format=jpg&name=4096x4096",
        alt: "modern",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/Fe3tzZ_WAAAgPv-?format=jpg&name=large",
        alt: "moderngraf",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/FsPCvaaXoAUWeqm?format=jpg&name=medium",
        alt: "ears",
    },
]

export default function BlackDesert() {

  const sections = [
    { id: "eru", nombre: "Eru", clase: "Archer" },
    { id: "luth", nombre: "Luth", clase: "Ranger" },
    { id: "akame", nombre: "Akame", clase: "Lahn" },
    { id: "anubis", nombre: "Anubis", clase: "Hashashin" },
    { id: "CHIBIS", nombre: "CHIBIS" },
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
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
              Black Desert
            </h1>
          </FadeInSection>

          <FadeInSection>
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

          <FadeInSection>
            <div id="eru" className="scroll-mt-24">
              <div className="mx-5 md:mx-16 mt-5 pb-6 border-t border-white/10" />
              <h2 className="subtitle text-center text-4xl">Eru</h2>
              <p className="text-white text-center mb-5 text-base">Archer</p>
              <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
              
              <ArtGallery imageSets={[artBDOeru]} />
              
              <div className="mt-8 flex justify-center">
                <a href="/oc/eru" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                  Ver ficha de personaje
                </a>
              </div>
            </div>
          </FadeInSection>        

          <div className="grid grid-cols-2 gap-8">
            <div>
              <FadeInSection>
                <div id="luth" className="scroll-mt-24">
                  <div className="mx-5 md:mx-16 mt-10 pb-6 border-t border-white/10" />
                  <h2 className="subtitle text-center text-4xl">Luth</h2>
                  <p className="text-white text-center mb-5 text-base">Ranger</p>
                  <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
                  
                  <ArtGallery imageSets={[artBDOluth]} />
                </div>
              </FadeInSection>   
            </div>

            <div>
              <FadeInSection>
                <div id="akame" className="scroll-mt-24">
                  <div className="mx-5 md:mx-16 mt-10 pb-6 border-t border-white/10" />
                  <h2 className="subtitle text-center text-4xl">Akame</h2>
                  <p className="text-white text-center mb-5 text-base">Lahn</p>
                  <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />

                  <ArtGallery imageSets={[artBDOakame]} />
                  
                  <div className="mt-8 flex justify-center">
                    <a href="/oc/akame" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                      Ver ficha de personaje
                    </a>
                  </div>
                </div>
              </FadeInSection>     
            </div>
          </div>

          <FadeInSection>
            <div id="anubis" className="scroll-mt-24">
              <div className="mx-5 md:mx-16 mt-10 pb-6 border-t border-white/10" />
              <h2 className="subtitle text-center text-4xl">Anubis</h2>
              <p className="text-white text-center mb-5 text-base">Hashashin</p>
              <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />

              <ArtGallery imageSets={[artBDOanubis]} />

              <div className="mt-8 flex justify-center">
                <a href="/oc/anubis-bdo" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                  Ver ficha de personaje
                </a>
              </div>
            </div>
          </FadeInSection> 

              <div id="CHIBIS" className="scroll-mt-24">
                <div className="mx-5 md:mx-16 mt-10 pb-6 border-t border-white/10" /> 
              <h2 className="subtitle text-center text-4xl">CHIBIS</h2>
              <div className="py-2 mb-4 flex justify-center">
              <a href="/art/black-desert/chibis" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                ¡Encuentra el chibi de tu clase!
              </a></div>
                </div>
              <Image src="https://s1.pearlcdn.com/NAEU/Upload/Community/7f27fe299a220240816234714309.png" 
              alt="Let Your Adventure Unfold!" width={1200} height={1200} className="mx-auto" />
                
        </div>
      </section>
    </div>
  );
}