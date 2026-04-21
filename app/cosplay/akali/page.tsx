import FadeInSection from "@/app/components/FadeInSection"
import { ArtGallery } from "@/app/components/ArtGallery"    

export const cosplayAkali = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/D_robVxXsAYCM8w?format=jpg&name=4096x4096",
        alt: "adrii",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/EkH-IkvXsAABH_8?format=jpg&name=4096x4096",
        alt: "adrii",

    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/E1HReh_XEAANHow?format=jpg&name=4096x4096",   
        alt: "adrii",
    },
    {
        id: 4,
        src: "https://pbs.twimg.com/media/EGXSAIEXoAAxgvM?format=jpg&name=4096x4096",   
        alt: "adrii",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/EAFBWmUW4AQRTGq?format=jpg&name=large",   
        alt: "adrii",
    },
        {
        id: 6,
        src: "https://pbs.twimg.com/media/EJqPA6RXkAAX5em?format=jpg&name=medium",   
        alt: "adrii",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/D_MZtYYX4AE4muL?format=jpg&name=4096x4096",   
        alt: "adrii",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/D9_Ug6qXoAEVlAP?format=jpg&name=4096x4096",   
        alt: "adrii",
    },    
    {
        id: 9,
        src: "https://pbs.twimg.com/media/Egg0R6aUYAEdHs4?format=jpg&name=large",   
        alt: "danidiaz",
    }, 
    {
        id: 10,
        src: "https://pbs.twimg.com/media/D5kOXT-XsAAs-iq?format=jpg&name=large",   
        alt: "danidiaz",
    },
    {
        id: 11,
        src: "https://pbs.twimg.com/media/D5T7RMaXoAA-1Pe?format=jpg&name=large",   
        alt: "danidiaz",
    },
    {
        id: 12,
        src: "https://pbs.twimg.com/media/FJ3uKUgWQAcazgm?format=jpg&name=4096x4096",   
        alt: "allout",
    },
    {
        id: 13,
        src: "https://pbs.twimg.com/media/FP0oi_mX0AMGytN?format=jpg&name=4096x4096",   
        alt: "allout",
    },
    {
        id: 14,
        src: "https://pbs.twimg.com/media/FRRYRxCWQAAy_n-?format=jpg&name=4096x4096",   
        alt: "allout",
    },
    {
        id: 15,
        src: "https://pbs.twimg.com/media/FHnYTL8WQAAqxbz?format=jpg&name=4096x4096",   
        alt: "allout",
    },
    {
        id: 16,
        src: "https://pbs.twimg.com/media/FnpcTt5XwAAMFDJ?format=jpg&name=large",   
        alt: "allout",
    },
]

export const texts = {
    title: "Akali",
    subtitle: "League Of Legends",
    quote: "Teme a la asesina sin maestro",
    credits: "Dani Diaz - Adri",
    title2: "La asesina sigilosa",
    whoIs: "La que un día fue el Puño de la Sombra abandonó la orden Kinkou de Jonia para actuar en solitario y defender su región de los invasores noxianos y de la Orden de las Sombras de Zed con su kama y kunai. En el universo musical de League Of Legends es la rapera de K/DA, la banda de Kpop, ella distinguida por su estilo más callejero ¡Se volvió tan popular que también se unió a la banda True Damage!",
    officialSite:"https://universe.leagueoflegends.com/es_ES/champion/akali/",
    storyTime: "Akali fue mi primer main en el LOL ¡Y la seguí jugando incluso cuando pasé a mi etapa de Ezreal! Siempre me gustó su estilo y cuando salió Pop-stars fue lo que me hizo instalarme el jueguito~~ Quería hacer algo de estilo moderno y diferente, y en su día fue todo un boom. Me sentí muy cómoda llevándolo, tanto que no pude resistirme a unirme a un grupal de K/DA All Out con las demás."
 }


export default function Akali() {
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

            <ArtGallery imageSets={[cosplayAkali]} />

         
          <p className="text-center mt-8 text-sm text-gray-500">
            {texts.credits}
          </p>

          <FadeInSection>
          <div className="mt-20 text-center">
              <div className="mx-5 md:mx-16 py-8 border-t border-white/10" />
            <h2 className="subtitle text-3xl mb-4">{texts.title2}</h2>
            <p className="text-white mb-6">{texts.whoIs}</p>
            <a href={texts.officialSite} target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block ">
              Sitio oficial de Universo LOL
            </a>
            
          </div>
          </FadeInSection>
          
          <div className="mt-12 text-center">
            <FadeInSection>
            <div className="bg-[#9D50BB]/30 p-4 md:p-6"><p className="border border-white/50 p-6 md:p-8 text-white">{texts.storyTime}</p></div>
            </FadeInSection>
          </div>
          

        </div>
      </section>
    </div>
  )
}   