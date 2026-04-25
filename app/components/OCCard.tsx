'use client'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect} from "react"
import { 
  User, 
  MessageSquare, 
  Cake, 
  Fingerprint, 
  MapPin, 
  Briefcase, 
  Swords, 
  BookOpen, 
  ScrollText, 
  Sparkles, 
  Play,
  X
} from 'lucide-react';

interface RelatedLink {
  label: string;
  href: string;
}

interface OCCardProps {
  oc: {
    title: string;
    quote: string;
    img: string;
    fullname: string;
    pronoums: string;
    bday: string;
    race: string;
    country: string;
    combat: string | string[];
    job: string;
    personality: string | string[];
    story: string | string[];
    description: string | string[];
    storyTime: string;
    song: string;
    player: string;
    relatedLinks?: RelatedLink[];
  };
  onClose: () => void;
}

export const OCCard = ({ oc, onClose }: OCCardProps) => {


useEffect(() => {
    document.body.style.overflow = 'hidden'; // Se bloquea al montar
    return () => {
      document.body.style.overflow = 'unset'; // Se libera al desmontar
    }
  }, []);

  return (
<AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose} 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
      >
        <div 
          className="bg-black/95 border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-y-auto modal-scrollbar"
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Botón X */}
          <button 
            onClick={onClose}
            className="cursor-pointer sticky top-4 right-4 float-right z-50 text-white hover:text-[#9D50BB] transition-colors drop-shadow-lg p-2"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

        <div className="flex flex-col lg:flex-row justify-end gap-8 lg:gap-12 p-8 pr-0">
          
          {/* ASIDE - Header e Imagen */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <p className="subtitle text-xs uppercase tracking-[0.3em] text-center mb-6">
              — Ficha de personaje —
            </p>
            <h1 className="title text-center text-balance text-4xl lg:text-6xl leading-none mb-6">
              {oc.title}
            </h1>
            <p className="text-white/70 text-center mb-8 text-base"><i>{oc.quote}</i></p>

            <div className="mb-8 border-t border-white/10" />

            <div className="flex justify-center">
              <Image 
                src={oc.img} 
                alt={oc.title} 
                loading="eager"
                width={320} 
                height={450} 
                className="w-full aspect-[3/4] object-cover border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_20px_rgba(188,188,188,0.3)]" 
              />
            </div>

          {/* Enlaces dinámicos del OC */}
          {oc.relatedLinks?.map((link, index) => (
            <div key={index} className={`mt-${index === 0 ? '6' : '4'} flex justify-center`}>
              <a 
                href={link.href} 
                className="text-white bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-block"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <div className="flex-1">
          {/* INFORMACIÓN BÁSICA */}
          <section className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {/* Nombre completo */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <User size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Nombre completo</p>
                </div>
                <p className="text-white text-md ml-7">{oc.fullname}</p>
              </div>

              {/* Pronombres */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Pronombres</p>
                </div>
                <p className="text-white text-md ml-7">{oc.pronoums}</p>
              </div>

              {/* Cumpleaños */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Cake size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Cumpleaños</p>
                </div>
                <p className="text-white text-md ml-7">{oc.bday}</p>
              </div>

              {/* Raza */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Fingerprint size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Raza</p>
                </div>
                <p className="text-white text-md ml-7">{oc.race}</p>
              </div>

              {/* Origen */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Origen</p>
                </div>
                <p className="text-white text-md ml-7">{oc.country}</p>
              </div>

              {/* Ocupación */}
              <div className="border-b border-white/10 py-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Ocupación</p>
                </div>
                <p className="text-white text-md ml-7">{oc.job}</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pb-12">

            {/* Combate */}
            <div className="">
              <div className="flex items-center gap-2 mb-3">
                <Swords size={20} className="title" />
                <p className="title text-sm font-bold uppercase tracking-[0.2em]">Combate</p>
              </div>
              <div className="text-white text-md ml-7 space-y-4">
                {Array.isArray(oc.combat) ? (
                  oc.combat.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{oc.combat}</p>
                )}
              </div>
            </div>
            </section>
          </div>
          </div>
          <div className="p-6">
            {/* Historia */}
            <div className="border-y border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={22} className="title" />
                <p className="title text-sm font-bold uppercase tracking-[0.2em]">Historia</p>
              </div>
              <div className="text-white text-md ml-7 space-y-4">
                {Array.isArray(oc.story) ? (
                  oc.story.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{oc.story}</p>
                )}
              </div>
            </div>

            {/* Personalidad */}
            <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={22} className="title" />
                <p className="title text-sm font-bold uppercase tracking-[0.2em]">Personalidad</p>
              </div>
              <div className="text-white text-md ml-7 space-y-4">
                {Array.isArray(oc.personality) ? (
                  oc.personality.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{oc.personality}</p>
                )}
              </div>
            </div>

            {/* Descripción Física */}
            <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
              <div className="flex items-center gap-2 mb-3">
                <ScrollText size={22} className="title" />
                <p className="title text-sm font-bold uppercase tracking-[0.2em]">Descripción física</p>
              </div>
              <div className="text-white text-md ml-7 space-y-4">
                {Array.isArray(oc.description) ? (
                  oc.description.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{oc.description}</p>
                )}
              </div>
            </div>

            {/*PLAY*/}
            <div className="pt-8 border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
              <div className="flex items-center gap-2 mb-3">
                <Play size={22} className="subtitle" />
                <a href={oc.song} target="_blank" rel="noopener noreferrer" className="subtitle text-sm font-bold uppercase tracking-[0.2em]">Play {oc.player}</a>
              </div>
              </div>

            {/* Story Time */}
            <div className="pt-6">
              <div className="max-w-6xl mx-auto">
                <div className="bg-[#9D50BB]/30 p-3 md:p-6">
                <p className="border border-white/50 p-4 md:p-8 text-white">{oc.storyTime}</p></div>
              </div>

            </div>
            

        </div>
      </div>
      </motion.div>
      </AnimatePresence> );
};