import FadeInSection from "@/app/components/FadeInSection"
import { ArtGallery } from "@/app/components/ArtGallery"

export const cosplayEzreal = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/F6374GmWgAAY4eX?format=jpg&name=medium",
        alt: "danidiaz",

    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/HFtjlVqXAAArbyq?format=jpg&name=medium",
        alt: "danidiaz",

    },   
    {
        id: 3,
        src: "https://pbs.twimg.com/media/HFtjj7FXkAAu8wH?format=jpg&name=medium",
        alt: "danidiaz",

    },   
    {
        id: 4,
        src: "https://pbs.twimg.com/media/ETZHl5HWkAE3byu?format=jpg&name=medium",   
        alt: "gigano",
    },
        {
        id: 5,
        src: "https://pbs.twimg.com/media/ETt0sp6WoAAz9Jz?format=jpg&name=medium",   
        alt: "gigano",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/Eb7PiYMVAAApvRP?format=jpg&name=medium",   
        alt: "gigano",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/Gl2n43hXYAAhls4?format=jpg&name=medium",   
        alt: "cosplayhunters",
    },    
    {
        id: 8,
        src: "https://pbs.twimg.com/media/GRKgKL0WEAARjXY?format=jpg&name=medium",   
        alt: "midou",
    }, 
    {
        id: 9,
        src: "https://pbs.twimg.com/media/GEIrmvRWcAAfPkq?format=jpg&name=medium",   
        alt: "selfie",
    },
    {
        id: 11,
        src: "https://pbs.twimg.com/media/F7NE-zuWkAAkkrT?format=jpg&name=medium",   
        alt: "voad",
    },
    {
        id: 12,
        src: "https://pbs.twimg.com/media/F68-R9BWYAAtAO2?format=jpg&name=medium",   
        alt: "star guardian",
    }
]


export const texts = {
    title: "Ezreal",
    subtitle: "League Of Legends",
    quote: "¡Misión aceptada! Espera... ¿A dónde vamos?",
    credits: "Dani Diaz - Gigano Regulus - Cosplayers Hunters - Midoucloud - Voad",
    title2: "El explorador pródigo",
    whoIs: "Ezreal es un joven aventurero de Piltover que viaja por toda Runaterra en busca de tesoros y artefactos antiguos… y sus padres, quienes son también unos exploradores que se encuentran desaparecidos. Lo cuidó su tío el profesor Lymere, y a pesar de ser un liante, es increíblemente bueno en Cartografía e Historia. En Shurima encontró la tumba perdida de Ne’Zuk donde se topó con el guantelete de energía arcana que le sirve para defenderse y escapar de las peores trampas de las ruinas. Para nada tiene que ver con un tal Jarro PlumaLigera~",
    officialSite: "https://universe.leagueoflegends.com/es_ES/champion/ezreal/",
    storyTime: "Hay quienes dicen que meterse al LOL es una muy mala idea. No les culpo. Pero he de decir que me ha dado momentos geniales y divertidos. Y la comunidad creativa (artistas, cosplayers, amantes del lore…) es increíble. Yo por lo menos mi mayor interés estuvo más en los personajes, sus historias, sus cinemáticas, sus skins y, en general, el desarrollo del mundo de Runaterra. He sido main Ezreal mid desde los tiempos de la Cleptomanía cargando mi Lágrima desde que empezaba cada partida. Y me gustaba mucho. Y seguro que, si abro espacio en mi disco duro y reinstalo el juego, si juego Ezreal, lo pasaría muy bien. Porque lo que a mí me llenaba no era competir ni ganar partidas, sino lograr cosas con un personaje que me hacía sonreír. Y para entonces creedme, sonreír era algo que me venía bien. Muchos recuerdan mis años de ir siempre de Ezreal a las expos, ya sea sin skin, de Star Guardian o Heartsteel. Me encantaba pintarme los “doritos azules” de las mejillas ¿Volvería a ponerme el cosplay de Ezreal? ¡Por supuesto! ¡Y más si un Taric viniera conmigo!"
    }


export default function Ezreal() {

  
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

          <ArtGallery imageSets={[cosplayEzreal]} />

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
              Sitio oficial de Universo LOL
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
        </div>
      </section>
    </div>
  )
}   