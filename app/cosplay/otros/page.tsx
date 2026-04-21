"use client"
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const juvia = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/F5rv25JWIAAE_QE?format=jpg&name=large",
        alt: "juvia",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/FCPHghTWEAIlS7v?format=jpg&name=4096x4096",   
        alt: "juvia",
    }
]
export const erza = [
       {
        id: 1,
        src: "https://pbs.twimg.com/media/EdhyFxeWsAEVqYn?format=jpg&name=4096x4096",
        alt: "erza",
    }, 
       {
        id: 2,
        src: "https://pbs.twimg.com/media/EeLJPM5XoAUCEmu?format=jpg&name=4096x4096",
        alt: "erza",
    },  
    {
        id: 3,
        src: "https://pbs.twimg.com/media/Do5l0rhXsAU6L0i?format=jpg&name=medium",
        alt: "erza",
    }, 
    {
        id: 4,
        src: "https://pbs.twimg.com/media/DL2mQYHWsAAfW40?format=jpg&name=large",
        alt: "erza",
    }, 
]

export const sadie = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/ESbIm4JXcAcoZSo?format=jpg&name=large",
        alt: "sadie",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/ESbIpN5XYAAeVo7?format=jpg&name=medium",   
        alt: "sadie",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/ESbIq6jX0AEPeLi?format=jpg&name=large",   
        alt: "sadie",
    },
     {
        id: 4,
        src: "https://pbs.twimg.com/media/EiMjD33WkAU9XYB?format=jpg&name=large",   
        alt: "sadie",
    },   
]

export const pokemon = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/EU6soQtWAAAX4qo?format=jpg&name=large",
        alt: "n",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/EWIK3vnWAAErLq1?format=jpg&name=large",   
        alt: "n",
    }
]

export const vi = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/FjfGwLFX0BA68ov?format=jpg&name=large",
        alt: "vi",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/F-0ukWMXcAEQORw?format=jpg&name=large",   
        alt: "vi",
    }
]

export const yandere = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GIplFC0WkAAciPw?format=jpg&name=large",
        alt: "yandere",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GIplFF6WIAAw1-C?format=jpg&name=large",   
        alt: "yandere",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/GIplFKGW0AEWnwt?format=jpg&name=large",   
        alt: "yandere",
    },
     {
        id: 4,
        src: "https://pbs.twimg.com/media/GIplFDLWEAAjSBJ?format=jpg&name=large",   
        alt: "yandere",
    },   
]

export const kaminari = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/FI6AdkTWQAELzna?format=jpg&name=4096x4096",
        alt: "kaminari",
    },
     {
        id: 2,
        src: "https://pbs.twimg.com/media/FI6AZjxXIAcbP-C?format=jpg&name=4096x4096",
        alt: "kaminari",
    }, 
     {
        id: 3,
        src: "https://pbs.twimg.com/media/EKyGsCmWwAEjG-D?format=jpg&name=medium",
        alt: "kaminari",
    }, 
  ]

export default function OtrosCosplays() {

  const sections = [
    { id: "juvia", nombre: "Juvia", serie: "Fairy Tail", data: juvia },
    { id: "erza", nombre: "Erza", serie: "Fairy Tail", data: erza },
    { id: "sadie", nombre: "Sadie Kane", serie: "The Kane Chronicles", data: sadie },
    { id: "n", nombre: "N", serie: "Pokémon B&W", data: pokemon },
    { id: "vi", nombre: "Vi", serie: "Arcane", data: vi },
    { id: "yandere", nombre: "Ayano Aishi", serie: "Yandere Simulator", data: yandere },
    { id: "kaminari", nombre: "Denki Kaminari", serie: "My Hero Academia", data: kaminari },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Espacio para que no quede pegado arriba
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
                <p className="mb-5 text-center text-base text-white">{sec.serie}</p>
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