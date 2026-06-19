import FadeInSection from "@/app/components/FadeInSection"
import { ArtGallery } from "@/app/components/ArtGallery"


export const cosplayLink = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/Fv7MKyHXgAIBvZ9?format=jpg&name=large",
        alt: "irenekuroi",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/FvRqjr8XgAEUbPR?format=jpg&name=large",
        alt: "irenekuroi",

    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/FwpywAeWYAAhTGT?format=jpg&name=large",   
        alt: "irenekuroi",
    },
        {
        id: 5,
        src: "https://pbs.twimg.com/media/F5voR-KWsAAVVOv?format=jpg&name=large",   
        alt: "asturias",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/GNYcZFaXsAEYSCF?format=jpg&name=large",   
        alt: "asturias",
    },   
    {
        id: 6,
        src: "https://pbs.twimg.com/media/F5cH2bdW8AACzSD?format=jpg&name=medium",   
        alt: "asturias playa",
    },
    {
        id: 9,
        src: "https://pbs.twimg.com/media/EMO0WwpWoAEVdnP?format=jpg&name=medium",   
        alt: "rob",
    },
    {
        id: 10,
        src: "https://pbs.twimg.com/media/FMHxse0XsAUsLoh?format=jpg&name=medium",   
        alt: "rob",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/FjfG4i-X0AcowHp?format=jpg&name=medium",   
        alt: "rob",
    }, 
    {
        id: 11,
        src: "https://pbs.twimg.com/media/FySJg2nXsAMw9l0?format=jpg&name=large",   
        alt: "gerudo",
    },
    {
        id: 12,
        src: "https://pbs.twimg.com/media/F3qwZ6wX0AYVRci?format=jpg&name=medium",   
        alt: "gerudo",
    },
    {
        id: 13,
        src: "https://pbs.twimg.com/media/D9QzVLzXsAA9QEO?format=jpg&name=900x900",   
        alt: "gerudo",
    },
    {
        id: 14,
        src: "https://pbs.twimg.com/media/FcyKRZ3XoAE-8Fh?format=jpg&name=large",   
        alt: "gerudo",
    },
]


export const texts = {
    title: "Link",
    subtitle: "The Legend Of Zelda: Breath Of The Wild",
    quote: "HYAAAAAA",
    credits: "Irene Kuroi - Mi madre! - Photorobertog - Dani Díaz",
    title2: "El héroe de Hyrule",
    whoIs: "Link es un joven hyliano que despierta en el Santuario de la Vida de la Meseta de los Albores después de 100 años sin recordar nada de su pasado, cuando el cataclismo asoló todo el reino. Fue elegido caballero protector de la Princesa Zelda y elegido por la Espada Maestra, y ahora explora el basto mundo de Hyrule para recuperar sus recuerdos, derrotar a Ganon y salvar a la princesa, poniendo a prueba su astucia y valentía… aunque a veces se entretiene comiendo, haciendo el loco por ahí con la Piedra Sheikah o atropellando a los pobres pollitos con la moto~",
    storyTime: "BOF! Link, Link… posiblemente el personaje que más veces he llevado, ya sea con el arco y la flecha ancestral o la Espada Maestra, o simplemente con la Piedra Sheikah y mis Princesas de la calma ❀, versión campeón, versión Gerudo, versión casual…  He de decir que Breath Of The Wild no es solo mi juego de Zelda favorito, sino que es mi videojuego favorito; por supuesto seguido por el Tears Of The Kingdom. Las sensaciones que me dio en su día y que sin duda siguen ahí a día de hoy es algo… mágico y único. La aventura que viví en cada paso sobre la hierba, el valor para enfrentarme a cada enemigo, el paisaje a mis pies cuando subía a las montañas, el correr huyendo despavoridamente de los rayos láseres de los guardianes, el meterme en cada santuario de luces de azul neón resolviendo puzzles… Ya solo escuchar la música o ver imágenes de Zelda y Link me llena el corazón a día de hoy. Y quise transmitir todo esto a través de mi cosplay, uno en el que puse todas mis ganas y mil de cariño tras todo lo que supuso llevar a Sonic. A día de hoy no sé cómo lo hago, pero siempre encuentro alguna excusa por pequeña que sea para volver a llevarlo... ¿Podría actualizarlo a la versión de TOTK? ¿O hacer al Link verde más clásico que todos conocemos?", 
    events: ["Primer premio Jornadas de Barajas 2019", "Primer premio Tinta Digital 2019", "Mención en Madrid Games Week 2019", "Japan Weekend Madrid 2020 (pasarela)", "Cosplay, una historia de amor, Ana Esteve Reig", "Salón del Videojuego Madrid 2025"]
    }

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Link | Cosplay | Viicky Scarlet",
  description:
    "Cosplay de Link de The Legend of Zelda: Breath of the Wild por Viicky Scarlet. Fotos del cosplay e historia del héroe de Hyrule.",
  path: "/cosplay/link",
  keywords: ["cosplay Link", "Zelda cosplay", "Breath of the Wild", "Viicky Scarlet"],
});

export default function Link() {
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

          <ArtGallery imageSets={[cosplayLink]} altContext="Cosplay de Link de The Legend of Zelda: Breath of the Wild por Viicky Scarlet" />

         
          <p className="text-center mt-8 text-sm text-white/70">
            {texts.credits}
          </p>

          <div className="max-w-6xl mx-auto">
            <FadeInSection>
            <div className="mt-20">
                <div className="mx-5 md:mx-16 py-8 border-t border-white/10" />
              <h2 className="subtitle text-3xl mb-4 text-center">{texts.title2}</h2>
              <p className="text-white mb-6">{texts.whoIs}</p>
            </div>
            </FadeInSection>
            
            <div className="mt-12">
              <FadeInSection>
              <div className="bg-[#9D50BB]/30 p-3 md:p-6"><p className="border border-white/50 p-4 md:p-8 text-white">{texts.storyTime}</p></div>
              </FadeInSection>
            </div>
          </div>

          <FadeInSection>
          <ul className="text-[#db80ff] text-center mb-6 list-style-none text-lg py-5">
            {texts.events.map((event, index) => (
              <li className="mb-2" key={index}>{event}</li>
            ))}
          </ul>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X7mliLyz6Io?si=eanj6phqolwdu3Jb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Z2VtJ-qtVCo?si=rJlBsHBhTdEEKHi9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
           <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2csIpObwI-s?si=jlpIzlnZ9MPFCWye" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}   