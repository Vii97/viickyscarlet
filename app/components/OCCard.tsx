'use client'
import Image from "next/image"
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
  Sparkles 
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
  };
  relatedLinks?: RelatedLink[];
}

export const OCCard = ({ oc, relatedLinks = [] }: OCCardProps) => {
  return (
    <div className="justify-center items-center min-h-screen overflow-hidden pt-30 px-5 md:px-35">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* ASIDE - Header e Imagen */}
        <div className="w-full lg:w-80 flex-shrink-0 px-6">
            <p className="subtitle text-xs uppercase tracking-[0.3em] text-center mb-6">
              — Ficha de personaje —
            </p>
            <h1 className="title text-center text-balance text-4xl lg:text-6xl leading-none  mb-6">
              {oc.title}
            </h1>
            <p className="text-white/70 text-center mb-8 text-base"><i>{oc.quote}</i></p>

            <div className="mb-8 border-t border-white/10" />


            <div className="flex justify-center">
              <Image 
                src={oc.img} 
                alt={oc.title} 
                width={320} 
                height={450} 
                className="w-full aspect-[3/4] object-cover border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_20px_rgba(188,188,188,0.3)]" 
              />
            </div>

          {/* Enlaces dinámicos */}
          {relatedLinks.map((link, index) => (
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

        <div className="flex-1 px-6 lg:px-0">
          {/* INFORMACIÓN BÁSICA */}
          <section className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {/* Nombre completo */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <User size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Nombre completo</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.fullname}</p>
              </div>

              {/* Pronombres */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Pronombres</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.pronoums}</p>
              </div>

              {/* Cumpleaños */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Cake size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Cumpleaños</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.bday}</p>
              </div>

              {/* Raza */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Fingerprint size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Raza</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.race}</p>
              </div>

              {/* Origen */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Origen</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.country}</p>
              </div>

              {/* Ocupación */}
              <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={20} className="title" />
                  <p className="title text-sm font-bold uppercase tracking-[0.2em]">Ocupación</p>
                </div>
                <p className="text-white text-lg ml-7">{oc.job}</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pb-12">

            {/* Combate */}
            <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
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

            {/* Historia */}
            <div className="border-b border-white/10 p-4 hover:border-white/30 transition-colors duration-500">
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
          </section>
        </div>
      </div>
    </div>
  );
};