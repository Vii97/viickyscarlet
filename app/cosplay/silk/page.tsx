import FadeInSection from "@/app/components/FadeInSection"

import { ArtGallery } from "@/app/components/ArtGallery"

export const cosplaySilk = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/FEPnie0XoAQyvib?format=jpg&name=medium",
        alt: "pzne",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/F0Q8Zo2XgAAZO50?format=jpg&name=medium",
        alt: "danidiaz",

    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/F-QbxzPXcAA9o_4?format=jpg&name=medium",   
        alt: "puig",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/FWQ5n_7X0AIpTFH?format=jpg&name=small",   
        alt: "puig",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/E7i72UfX0AQvAZ1?format=jpg&name=small",   
        alt: "adrii",
    },
        {
        id: 6,
        src: "https://pbs.twimg.com/media/FN0h3FsWUAoqLQF?format=jpg&name=medium",   
        alt: "adrii",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/EpM5a2uXUAATomf?format=jpg&name=small",   
        alt: "adrii",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/Ev9p6AIWYAEHtyC?format=jpg&name=medium",   
        alt: "adrii",
    }   
]


export const texts = {
    title: "Silk",
    subtitle: "Spider-Verse",
    quote: "Tal vez no esté en mi mejor momento. Está bien, no estoy ni cerca de mi mejor momento. Pero no importa. Tengo que intentarlo o, de lo contrario, la gente inocente pagará el precio... Eso es lo que significa ser un héroe",
    credits: "Adri - Dani Diaz - Alguientle&Djpuigmoreno - Prnzetitan",
    title2: "Cindy Moon",
    whoIs: "Cindy Moon (Seda) es una superheroína de Marvel que fue mordida por la misma araña radiactiva que mordió a Peter Parker que le hizo convertirse en Spiderman. Sin embargo, ella pasó 10 años encerrada en un búnker por Ezequiel para protegerla de Morlun, el supervillano cazador de los poderes totémicos (basados en animales, como los arácnidos). Tuvo un papel relevante en la trama del spiderverso de los cómics y mantuvo una relación con Peter Parker, aunque pronto tomaron caminos distintos y su vida siguió en su propia serie de cómics, donde aprende a adaptarse a la sociedad de hoy en día tras tantos años encerrada y, además de trabajar en Fact Channel News con el famoso J. Jonah Jameson, es superheroína y busca pistas para encontrar a su familia desaparecida.",
    storyTime: "De siempre mi superhéroe favorito fue Spiderman, tanto en cómics como en pelis de Marvel. Me encanta lo tan “amigo y vecino” que se siente, por ser tan humano, cercano, y su manera de expresarse y actuar. Lo curioso es que mi idea original era hacer cosplay de Black Cat, pero… pensándolo mejor, me sentí más cómoda haciendo de Cindy. E hice bien. Es como no llevar naaaada~ No se le da bien la gente, en su caso, porque estuvo encerrada por mucho tiempo, pero también tiene esas ganas de conocer, de conectar con la gente y ayudar en lo que puede. Tengo mil ganas de que salga en más contenido multimedia de Marvel, como en los videojuegos de Spiderman, alguna peli o serie, o yo qué sé, en el Marvel Rivals, porque es un personaje que se hace querer. Honestamente, de los superhéroes arácnidos, tiene el diseño que más me gusta, llevando el pelo suelto, viéndose sus ojos y cubriéndose con esa máscara roja.", 
    events: ["Spider-Verse Video Cosplay Showcase - Gigano Regulus"]
}

import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Silk | Cosplay | Viicky Scarlet",
  description:
    "Cosplay de Silk (Cindy Moon) del Spider-Verse de Marvel por Viicky Scarlet. Fotos del cosplay e historia del personaje.",
  path: "/cosplay/silk",
  keywords: ["cosplay Silk", "Cindy Moon", "Spider-Verse", "Marvel cosplay", "Viicky Scarlet"],
});

export default function Silk() {
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
              <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>
          
          <ArtGallery imageSets={[cosplaySilk]} altContext="Cosplay de Silk (Cindy Moon) del Spider-Verse por Viicky Scarlet" />
         
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
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VUw0vQABF1k?si=LH5ke60l_SUWaifY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}   