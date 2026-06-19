import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";
import SocialMediaBanner from "@/app/components/SocialMediaBanner";

const xIcon = (
  <svg role="img" className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
    <title>X</title>
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
  </svg>
);

export const cosplaySova = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/GXmGewsWQAAULEe?format=jpg&name=medium",
        alt: "vanepujol",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/GI5HY2GWoAAZMQB?format=jpg&name=4096x4096",
        alt: "ido",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/G2uPZQ0WcAA2DVX?format=jpg&name=medium",
        alt: "valorant champions",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/GFLZ9YpaIAA1YJ2?format=jpg&name=4096x4096",
        alt: "selfie sova",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/GeXXf0GWwAAbgw0?format=jpg&name=medium",
        alt: "makeup sova",
    },  
    {
        id: 6,
        src: "https://pbs.twimg.com/media/GjvrH9tWsAE_b8F?format=jpg&name=medium",
        alt: "san valentin sova",
    }, 
  
  ]


export const texts = {
    title: "Sova",
    subtitle: "Valorant",
    quote: "Da igual que huyan, los encontraré",
    credits: "Vanepujol - Iro.prods - Riot Games",
    title2: "El cazador",
    whoIs: "Alexander 'Shasha' Novikov es un agente de Valorant, el shooter de Riot Games. Es un explorador de Rusia y su seña de identidad es llevar un arco de alta tecnología consigo con el que puede disparar flechas de reconocimiento o explosivas para localizar y eliminar a los enemigos… ¡Eh! Y también se ayuda con un dron muy mono, personalizado como si fuese un búho metálico de tonos cyan ¿Por qué esa ave en concreto? Porque su nombre, “Сова”, es búho en ruso. Perdió su ojo derecho en una pelea contra su contraparte de la “otra Tierra”, reemplazándolo por uno biónico que le ayuda en el rastreo.",
    officialSite: "https://playvalorant.com/es-es/agents/sova/",
    storyTime: "En 2023 no tenía muchas ganas de hacer cosplay. Se me hacía cuesta arriba, me enfoqué en mis dibujos, en el rol, y en mis inicios como desarrolladora web. Simplemente tenía otros intereses y me gustaba mucho pasar mis ratos libres jugando a videojuegos, escribiendo o mejorando en mis dibujos. También era una época en la que después de la pandemia sentía que las expos ya no me llenaban tanto como antes, porque mis fandoms son algo de ¿nicho? Y he llegado a sentirme fuera de lugar. Pero me gustaba Valorant. Y me gustaba mucho Sova~ Opté por animarme a llevar las expos de otra manera y… sacar un cosplay que pensé que me quedaría fatal. Sova es mucho Sova. Y yo soy yo y mis circunstancias. Era otro rubio vestido de azul con arco y en eso llevaba experiencia, pero era llevado a lo difícil por su diseño tan particular. Empecé a compartir mi progreso en mi twitter @thehuntersova y ¡me llevé toda una sorpresa por la recepción tan positiva por parte de tantas personas de todo el mundo! Tanto que con los años me subí a un pequeño escenario en un chiquievento, tuve grupales, conocí a muchas personas y me reecontré con otr@s, fui a mis primeras ediciones de Gamergy, fui a eventos oficiales de Valorant… ¡hasta estuve en la Champions de París laburando! Sin duda, un cosplay que repetiría mil veces.",
    events: ["Primer premio en el evento de Events Freaks de Moratalaz 2024", "Valorant Champions 2025 Paris - Sova Cosplayer for Coinbase"],
    }


import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sova | Cosplay | Viicky Scarlet",
  description:
    "Cosplay de Sova de Valorant por Viicky Scarlet. Fotos del cosplay y experiencia en Valorant Champions.",
  path: "/cosplay/sova",
  keywords: ["cosplay Sova", "Valorant cosplay", "Viicky Scarlet"],
});

export default function Sova() {
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
          
          <ArtGallery imageSets={[cosplaySova]} altContext="Cosplay de Sova de Valorant por Viicky Scarlet" />    
         
          <p className="text-center mt-8 text-sm text-white/70">
            {texts.credits}
          </p>

<section className="max-w-6xl mx-auto" >
          <FadeInSection>
          <div className="mt-20">
              <div className="mx-5 md:mx-16 py-8 border-t border-white/10" />
            <h2 className="subtitle text-3xl mb-4 text-center">{texts.title2}</h2>
            <p className="text-white mb-6">{texts.whoIs}</p>
            <div className="text-center">
            <a href={texts.officialSite} target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
              Sitio oficial de Valorant
            </a>
            </div>
            
          </div>
          </FadeInSection>
          
          <div className="mt-12">
            <FadeInSection>
            <div className="bg-[#9D50BB]/30 p-3 md:p-6"><p className="border border-white/50 p-4 md:p-8 text-white">{texts.storyTime}</p></div>
            </FadeInSection>
          </div>
</section>
          <div className="mt-6 text-center">
            <FadeInSection>
            <SocialMediaBanner  
                social="¡Tengo una cuenta en Twitter dedicada a Sova!"
                name="@ViickyScarlet"
                url="https://x.com/thehunterSova"
                icon={xIcon}
            />
            <div className="mt-8 py-2 border-t border-white/10" />
            </FadeInSection>
            <FadeInSection>
            <ul className="text-[#db80ff] list-style-none text-lg py-5">
              {texts.events.map((event, index) => (
                <li className="mb-2" key={index}>{event}</li>
              ))}
            </ul> 
            <div className="text-center">
              <a href="https://www.youtube.com/watch?v=_Hms1749mVI" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
                Epic Cosplay Music Video - Cosplayers Hunters
              </a>
            </div>
            </FadeInSection>
              
          </div>
          

        </div>
      </section>
    </div>
  )
}   