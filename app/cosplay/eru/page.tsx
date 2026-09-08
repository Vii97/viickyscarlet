import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const cosplayEru = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/G-j4Pm5WEAEnLb1?format=jpg&name=medium",
        alt: "kameko",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/HEM1H8yWYAA1pu7?format=jpg&name=medium",
        alt: "kameko",
    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/HFeC3s6WcAAJoyl?format=jpg&name=medium",
        alt: "kameko",
    },   
    {
        id: 4,
        src: "https://pbs.twimg.com/media/HFeDCR4XQAAKy70?format=jpg&name=medium",
        alt: "kameko",
    },   
    {
        id: 5,
        src: "https://pbs.twimg.com/media/G3t9MWwWEAA6ZsV?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/G3PbWXsXwAAe5_d?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
        {
        id: 7,
        src: "https://pbs.twimg.com/media/G4_oljdXYAAH9M1?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/G5o365UWYAAmse0?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
    {
        id: 9,
        src: "https://pbs.twimg.com/media/G42r1roXEAARUHg?format=jpg&name=medium",   
        alt: "irenekuroi",
    },    
       {
        id: 10,
        src: "https://s1.pearlcdn.com/NAEU/Upload/Community/d573b772c8a20251212143005522.jpg",   
        alt: "irenekuroi",
    },   
    {
        id: 12,
        src: "https://pbs.twimg.com/media/HNL6TrFXcAAeV7o?format=jpg&name=medium",   
        alt: "irenekuroi",
    }, 
    {
        id: 13,
        src: "https://pbs.twimg.com/media/GmQF9dhW4AAnnCn?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
    {
        id: 14,
        src: "https://pbs.twimg.com/media/Gof_kngXwAAs5ub?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
    {
        id: 15,
        src: "https://pbs.twimg.com/media/GoqXSq4W0AE_T8F?format=jpg&name=medium",   
        alt: "irenekuroi",
    },
]

export const texts = {
    title: "Archer",
    subtitle: "Black Desert",
    quote: "Aquellos que amenazan el árbol sagrado no podrán esquivar mis flechas",
    credits: "Irene Kuroi - Kameko",
    title2: "El hijo perdido de Sylva, protector de la tierra",
    whoIs: "El montaraz (Archer en inglés) es una clase en Black Desert, un videojuego MMORPG coreano que destaca por su combate a distancia y su movilidad. Su lore oficial en BDO es que son “luthragon”, los elfos hijos de la diosa Sylvia provenientes de Adùir, la fortaleza de las Raíces del Kamarbor, el árbol sagrado, donde luchan como guardianes de la tierra contra la oscuridad que amenaza constantemente la tierra de los elfos y del mundo entero.",
    officialSite: "https://www.naeu.playblackdesert.com/es-ES/GameInfo/Class?classType=29",
    storyTime: "Este cosplay es un homenaje a mi personaje en Black Desert, EruScarlet, donde no solo lo maineo jugándolo, sino que también lo roleo, lo dibujo y literalmente es como mi modelo para expresar mi creatividad. Incluso tiene su propia historia, la cual me encanta desarrollar con relatos, dibujos y roles. Muchas veces me han preguntado cuál es mi cosplay favorito y realmente es siempre muy difícil decantarse por uno porque todos tienen mucho esfuerzo y cariño detrás; pero quizá si tuviera uno, sería este. Fue en el que más trabajé durante meses, es de los más nuevos y completos a nivel técnico, y es con el que volví a los escenarios después de un tiempo donde el mundillo del cosplay ya no lo sentía como antes. Llevarlo me llena de esa manera tan especial con la que vivo el cosplay ♥", 
    events: ["Japan Weekend Madrid 2025", "BDO Monthly April 2025","Mención de honor en Madrid Otaku 2025", "BDO Monthly January 2026", "VOA Europe 2026 Sevilla invitee"],
    }



import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Archer (Eru) | Cosplay | Viicky Scarlet",
  description:
    "Cosplay de Archer de Black Desert por Viicky Scarlet, encarnando a su personaje Eru. Fotos del cosplay e historia del personaje.",
  path: "/cosplay/eru",
  keywords: ["cosplay Archer", "Black Desert cosplay", "BDO", "Viicky Scarlet"],
});

export default function Eru() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="title text-center text-balance text-6xl leading-none  md:text-8xl">
            {texts.title}
          </h1>
          <p className="subtitle text-center mb-8 text-lg">
            {texts.subtitle}
          </p>
          <p className="text-white/70 text-center mb-12 text-lg"><i>{texts.quote}</i></p>
          </FadeInSection>

          <FadeInSection>
              <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>
          
          <ArtGallery imageSets={[cosplayEru]} altContext="Cosplay de Archer de Black Desert por Viicky Scarlet" />

          <p className="text-center mt-8 text-sm text-white/70">
            {texts.credits}
          </p>

          <div className="max-w-6xl mx-auto">
            <FadeInSection>
            <div className="mt-20">
                <div className="mx-5 md:mx-16 py-8 border-t border-white/10" />
              <h2 className="subtitle text-3xl mb-4 text-center">{texts.title2}</h2>
              <p className="text-white mb-6">{texts.whoIs}</p>
              <div className="text-center">
              <a href={texts.officialSite} target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                Sitio oficial de Black Desert
              </a>
              </div>
              
            </div>
            </FadeInSection>
            
            <div className="mt-12">
              <FadeInSection>
              <div className="bg-[#9D50BB]/30 p-3 md:p-6"><p className="border border-white/50 p-4 md:p-8 text-white">{texts.storyTime}</p></div>
              </FadeInSection>
            </div>
          </div>
          
          <ul className="text-[#db80ff] mb-6 list-style-none text-center text-lg py-5">
            {texts.events.map((event, index) => (
              <li className="mb-2" key={index}>{event}</li>
            ))}
          </ul>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tafSxYGXsto?si=_shMdxcHH_DkXz9T" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}