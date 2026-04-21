"use client";

import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./components/FadeInSection";

const images = [
  "/home/hero_link.jpg",
  "/home/hero_art_ocs.jpg",
  "/home/hero_sonic.jpg",
  "/home/hero_wwm_pic.jpg",
  "/home/hero_art_ororon.jpg",
  "/home/hero_wwm.jpg",
  "/home/hero_bdo_slide.jpg",
];

const creatives = [
  {
    id:1,
    icon: "/home/icon1_cosplay.webp",
    title: "Cosplay",
    description:
      "Llevo 10 años haciendo cosplay por mi cuenta, un hobby que me ha dado la oportunidad de llevar al mundo real mis personajes de ficción más queridos. Para mí el cosplay son homenajes a esos videojuegos, series, cómics y libros que de alguna manera han sido importantes en mi vida. Gracias al cosplay he conocido a muchas personas y he podido incluso participar en proyectos y eventos grandes. Además, he podido organizar pequeñas actuaciones, haciendo regresar a esa pequeña Viicky que siempre le gustó interpretar un papel de teatro.",
  },
  {
    id:2,
    icon: "/home/icon2_art.webp",
    title: "Dibujo digital",
    description:
      "Desde pequeña siempre me encantó dibujar, y más cuando descubrí el anime de Inuyasha y el manga en general. He ido aprendiendo un montón a lo largo de los años ¡y sobre todo no paro de practicar! Sobre todo, estoy más enfocada últimamente en dibujar a mis OCs y personajes de rol, pero también tengo un estilo más cartoon o chibis. A pesar de haber dibujado para algún particular o streamer, yo me lo tomo como una especie de “terapia” que me relaja, me anima y me ayuda a expresarme. Sinceramente espero que os gusten y lleguen al corazón de alguna manera.",
  },
  { id: 3,
    icon: "/home/icon3_photo.webp",
    title: "Fotografía virtual en videojuegos",
    description:
      "Yo tampoco sabía que esto existía. Pero si os dais cuenta, los videojuegos cuidan cada vez más la ambientación, el diseño de los paisajes, los personajes, sus poses y vestimentas… Tanto que no pocos títulos tienen ya un “Modo Foto” para hacer estas capturas de pantalla o screenshots tan especiales. Cuando me di cuenta de que mucha gente hacía esto como yo, me animé compartir mis fotos… ¡y resultó que gustaron bastante en redes sociales y foros de videojuegos!",
  },
   {
    id: 4,
    icon: "/home/icon4_daw.webp",
    title: "Desarrollo de aplicaciones web",
    description:
      "Soy técnica superior de Desarrollo de Aplicaciones Web, graduada en 2025 en U-Tad con diploma al mejor expediente en DAW online. Aún me siento un pollito pequeño en este basto mundo, pero sin duda estoy sacándole mucho partido y siento que puedo crear cosas que antes me parecían imposibles ¡con lo mucho que me gustan los ordenadores! Un poquito de HTML por aquí, CSS por allí, TypeScript por allá… y un toquecito de bases de datos SQL o MongoDB. No es magia, es tech ✨. Con lo que más me manejo es con Next.js, React, Node.js Express… ¡Oh! ¡Y por circunstancias de la vida Wordpress!",
  }, 
];


const cosplayCards = [ 
      { label: "Eru", href: "/cosplay/eru", image: "/menu/cosplay/archer.jpg" },
      { label: "Sova", href: "/cosplay/sova", image: "/menu/cosplay/sova.jpg" },
      { label: "Ezreal", href: "/cosplay/ezreal", image: "/menu/cosplay/ezreal.jpg" },
      { label: "Link", href: "/cosplay/link", image: "/menu/cosplay/link.jpg" },
      { label: "Sonic", href: "/cosplay/sonic", image: "/menu/cosplay/sonic.jpg" },
      { label: "Silk", href: "/cosplay/silk", image: "/menu/cosplay/silk.jpg" },
      { label: "Akali", href: "/cosplay/akali", image: "/menu/cosplay/akali.jpg" },
      {label: "- Otros -", href: "/cosplay/juvia", image: "/menu/cosplay/juvia.jpg" }
    ]

const artCards = [
      { label: "Black Desert", href: "/art/black-desert", image: "/menu/art/black-desert.jpg" },
      { label: "Valorant", href: "/art/valorant", image: "/menu/art/sova.jpg" },
      { label: "League Of Legends", href: "/art/league-oflegends", image: "/menu/art/lol.jpg" },
      { label: "Sonic The Hedgehog", href: "/art/sonic-the-hedgehog", image: "/menu/art/sonic.jpg" },
      { label: "Yzhel", href: "/art/yzhel", image: "/menu/art/yzhel.jpg" },
      { label: "- Otros -", href: "/art/otros", image: "/menu/art/zelda.jpg" }
]

const virtualPhotographyCards = [
      { label: "Black Desert", href: "/virtual-photography/black-desert", image: "/menu/photography/bdo.JPG" },
      { label: "Where Winds Meet", href: "/virtual-photography/where-winds-meet", image: "/menu/photography/wwm.png" },
]

export default function Home() {
  const [index, setIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div key={pathname} className="text-white">

      {/* HERO*/}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Slides hero */}
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${images[index]})` }}
            className="absolute inset-0 bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        </AnimatePresence>

        {/* Título hero */}
        <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-[12rem] text-white uppercase tracking-tighter leading-[0.9]">
              VIICKY SCARLET
            </h1>
          </motion.div>
        </div>
      </section>

      {/* HOLA */}
      <section className="px-10 md:px-16 py-20 md:py-36 max-w-6xl mx-auto">
        <FadeInSection>
          <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
            — ¡Hola mundo!
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h2 className="title text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8 max-w-3xl">
            Intento hacer cosas bonitas
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 text-white/90 text-base md:text-lg leading-relaxed">
            <p>
              ¡Bienvenid@ a mi rincón feliz! Soy Viicky, desarrolladora web, artista y cosplayer. Me encanta el arte, la informática… ¡y los videojuegos y series! Después de tantos años creando, he decidido abrir mi propia página web con todo tipo de imágenes y comentarios de algunos de mis proyectos más destacados, incluidos mis personajes originales con las que llevo explorando historias a través de relatos cortos y el rol. Porque sí, crear me ayuda a sanar, a cuidarme. 
            </p>
            <p>
            El hacer cosplay, dibujar personajes, escribir historias o incluso fotografiar en entornos virtuales es una forma de expresarme muy especial. En Internet, un entorno digital saturado de estímulos efímeros, entiendo el proceso creativo como una herramienta de bienestar y sanación, con la que busco transmitir un mensaje auténtico y conectar de forma significativa con los demás.            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Espacio */}
      <FadeInSection>
        <div className="mx-5 md:mx-16 border-t border-white/10" />
      </FadeInSection>

      {/* Descripción de mis áreas! CREATIVES */}
      <section className="px-5 md:px-16 py-6 max-w-6xl mx-auto">
        <FadeInSection>
          <p className="subtitle px-10 text-xs uppercase tracking-[0.3em] mb-6">
            — Descubre...
          </p>
        </FadeInSection>

        <div className="space-y-0">
          {creatives.map((creative, i) => (
            <FadeInSection key={creative.id} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[120px_1fr_auto] gap-6 md:gap-10 items-center py-10 border-t border-white/10 hover:border-white/30 transition-colors duration-500 text-center md:text-left">
              
                <span className="text-white/20 text-sm flex justify-center md:justify-center pt-1">
                  <Image
                    src={creative.icon}
                    alt={creative.title}
                    width={150} 
                    height={150}
                  />
                </span>

                <div className="flex flex-col items-center md:items-start px-6">
                  <h3 className="title text-2xl md:text-3xl font-light mb-3 group-hover:text-white/90 transition-colors">
                    {creative.title}
                  </h3>
                  <p className="text-white/90 text-balanced leading-relaxed">
                    {creative.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Espacio */}
      <FadeInSection>
        <div className="mx-5 md:mx-16 border-t border-white/10" />
      </FadeInSection>

      {/* COSPLAY */}
      <section className="w-full mx-auto px-6 lg:px-20 pt-10 pb-5">
        <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
            — COSPLAY</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-4">
          {cosplayCards.map((character, index) => (
            <motion.div
              key={character.label}
              initial={{ opacity: 0, y: 30, rotateZ: -4 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              exit={{ opacity: 0, y: 20, rotateZ: 4 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href={character.href} className="group flex flex-col gap-1 sm:gap-3">
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Image
                    src={character.image}
                    alt={character.label}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span
                  className={`text-sm uppercase tracking-widest text-center transition-colors ${
                    pathname === character.href
                      ? "text-purple-400"
                      : "text-white/40 group-hover:text-purple-400"
                  }`}
                >
                  {character.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ART */}
      <section className="w-full mx-auto px-6 lg:px-20 py-5">
        <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
            — ART</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {artCards.map((character, index) => (
            <motion.div
              key={character.label}
              initial={{ opacity: 0, y: 30, rotateZ: -4 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              exit={{ opacity: 0, y: 20, rotateZ: 4 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href={character.href} className="group flex flex-col gap-2 sm:gap-3">
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Image
                    src={character.image}
                    alt={character.label}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span
                  className={`text-sm md:text-md uppercase tracking-widest text-center transition-colors ${
                    pathname === character.href
                      ? "text-purple-400"
                      : "text-white/40 group-hover:text-purple-400"
                  }`}
                >
                  {character.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>     

      {/* VIRTUAL PHOTOGRAPHY */}
      <section className="w-full mx-auto px-6 lg:px-20 py-5">
        <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
            — VIRTUAL PHOTOGRAPHY</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
          {virtualPhotographyCards.map((character, index) => (
            <motion.div
              key={character.label}
              initial={{ opacity: 0, y: 30, rotateZ: -4 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              exit={{ opacity: 0, y: 20, rotateZ: 4 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href={character.href} className="group flex flex-col gap-2 sm:gap-6">
                <div className="relative aspect-[16/9] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Image
                    src={character.image}
                    alt={character.label}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span
                  className={`text-sm md:text-lg uppercase tracking-widest text-center transition-colors ${
                    pathname === character.href
                      ? "text-purple-400"
                      : "text-white/40 group-hover:text-purple-400"
                  }`}
                >
                  {character.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>   

    </div>
  );
}