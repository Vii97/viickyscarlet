
import FadeInSection from "@/app/components/FadeInSection"
import { ArtGallery } from "@/app/components/ArtGallery"
import Image from "next/image"

export const cosplaySonic = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GRjtRgVXQAA5gKA?format=jpg&name=medium",
        alt: "maria",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GbDuJruXMAAV8VV?format=jpg&name=medium",
        alt: "maria",

    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/GbDuJjrXYAABCRY?format=jpg&name=medium",   
        alt: "maria",
    },
        {
        id: 5,
        src: "https://pbs.twimg.com/media/GSSHRMLWcAA6Kkp?format=jpg&name=medium",   
        alt: "psikowilliams",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/Gc6xAYzX0AA1JFk?format=jpg&name=medium",   
        alt: "psikowilliams",
    },
      {
        id: 4,
        src: "https://pbs.twimg.com/media/GTF2OAkXoAAjsc2?format=jpg&name=medium",   
        alt: "psikowilliams",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/Gg3PdL3XYAABq3W?format=jpg&name=medium",   
        alt: "ivanska",
    },    
    {
        id: 8,
        src: "https://pbs.twimg.com/media/GXHKCSWXkAALbsZ?format=jpg&name=medium",   
        alt: "ivanska",
    }, 
    {
        id: 9,
        src: "https://pbs.twimg.com/media/Gndp2DeXMAAYzin?format=jpg&name=medium",   
        alt: "ivanska",
    },
    {
        id: 10,
        src: "https://pbs.twimg.com/media/GreTS0XWQAAzAO7?format=jpg&name=medium",   
        alt: "ivanska",
    },
    {
        id: 11,
        src: "https://pbs.twimg.com/media/GdzUgUtXMAAiHn2?format=jpg&name=medium",   
        alt: "mansi",
    },
    {
        id: 12,
        src: "https://pbs.twimg.com/media/FjfGyypXkAIFUPh?format=jpg&name=medium",   
        alt: "fjgkl",
    },
    {
        id: 13,
        src: "https://pbs.twimg.com/media/GHBfrKHWYAA1ikR?format=jpg&name=medium",   
        alt: "ijfskf",
    },
    {
        id: 14,
        src: "https://pbs.twimg.com/media/GHBfrKBWkAEmHQ7?format=jpg&name=medium",   
        alt: "adrii",
    },
    {
        id: 15,
        src: "https://pbs.twimg.com/media/GHBfrJ8W8AAR0-k?format=jpg&name=medium",   
        alt: "adrii",
    },
]


export const texts = {
    title: "Sonic",
    subtitle: "Sonic The Hedgehog",
    quote: "¡Lo que ves es lo que hay! ¡Soy un tipo al que le encanta la aventura y la velocidad!",
    credits: "Mxrysphoto - Psikowilliams - Mashi - Ivanska - Soriano",
    title2: "The fastest thing alive!",
    whoIs: "¡El clásico de Sega! Se trata de un erizo antropomórfico azul que salva el mundo de los planes del Dr. Eggman. Es valiente, de buen corazón y, sí, rápido, muy rápido~ Usa los anillos para ganar poder y cuando consigue las Esmeralda del Caos, se vuelve SuperSonic ¡e imparable! Desde los años 90 ha vivido montones de aventuras con sus amigos Tails, Knuckles, Amy… ¡Incluso en más de una ocasión se ha ido de Olimpiadas con Mario!",
    storyTime: "Sonic es sin duda esa brillante estrella en mi vida cosplayer. Quedó estúpidamente bien la idea de la capucha de púas heredada del traje de Hatsune Miku. A pesar de la opresión en mi cerebro, es bastante cómodo ¡Sobre todo cuando me tumbo, porque llevo una almohada incorporada! Los fans más acérrimos de Sonic son increíblemente entusiastas y fueron todos un amor conmigo cuando descubrieron mi cosplay. Muchos me descubrieron por Sonic y siguieron mis pasos deseando que volviese a sacar este cosplay más veces, y así fue, la verdad. Podría decirse que es hasta mítico, me siguen reconociendo por él. Y es suuuuuperdivertido llevarlo, y he estado en grupales muy bonitas con mis amigos… ¡hasta fui el Sonic del megagrupal de Super Smash Bros, el más grande que he vivido! ", 
    events: ["Mención en Jornadas Juveniles de Barajas 2018", "Mención en Madrid Otaku 2018 (pasarela)", "Evento de Sonic Mania en Oh My Game!", "Concurso de cosplay de Super Smash Bros Ultimate (Nintendo) en el Salón del Manga de Barcelona", "Premiere de Sonic 3, la película en Kinépolis"]
 }


export default function Sonic() {
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
          <div className="flex gap-6 justify-center">
            <Image src="/icons/sonic.gif" width={50} height={50} alt="sonic" className="object-contain shrink-0 mb-8" />
            <p className="text-white/70 mb-12 text-lg"><i>{texts.quote}</i></p>
          </div>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
          </FadeInSection>

          <ArtGallery imageSets={[cosplaySonic]} />

         
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
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rT4GfFjY4L0?si=uhezIxyeEILUD4fq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}   