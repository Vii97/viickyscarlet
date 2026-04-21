"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const bdoocs = [
  {
    id: 1,
    icon: "",
    name: "Eru",
    href: "./black-desert/archer",
    image: "/bdo/eru.jpg",
  },
  {
    id: 2,
    icon: "",
    name: "Akame",
    href: "./black-desert/lahn",
    image: "/bdo/akame.jpg",
  },
  {
    id: 3,
    icon: "",
    name: "Anubis",
    href: "./black-desert/hashashin",
    image: "/bdo/anubis.jpg",
  },
  {
    id: 4,
    icon: "",
    name: "Luth",
    href: "./black-desert/ranger",
    image: "/bdo/luth.jpg",
  },
  {
    id: 5,
    icon: "",
    name: "Ran",
    href: "./black-desert/dosa",
    image: "/bdo/ran.jpg",
  },
  {
    id: 6,
    icon: "",
    name: "- Otros -",
    href: "./black-desert/otros",
    image: "/bdo/otros.jpg",
  },
];

export const screenshotBDO = [
    { id: 1, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/886805e609420251027185632569.jpg", alt: "BDO" },
    { id: 2, src: "https://pbs.twimg.com/media/G0_2LdOWUAAmnyf?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 3, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/409bf3caa0d20250312190854356.jpg", alt: "BDO" },
    { id: 4, src: "https://pbs.twimg.com/media/G510-3hWQAA_CNj?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 5, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/ed3167a01d620250312190447948.jpg", alt: "BDO" },
    { id: 6, src: "https://pbs.twimg.com/media/Gm_PYl-WMAAcYNk?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 7, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/6301bbfe88820250312184833063.jpg", alt: "BDO" },
    { id: 8, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/42b1a34e0a720250312185109337.jpg", alt: "BDO" },
    { id: 9, src: "https://pbs.twimg.com/media/GqdPftfXMAEfLQx?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 10, src: "https://pbs.twimg.com/media/Gtve_02WcAA4q9B?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 11, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/ca6bd11d70520240929182132462.jpg", alt: "BDO" },
    { id: 12, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/b3ee452780820240929175655114.jpg", alt: "BDO" },
    { id: 13, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/d457126820920240929180022898.jpg", alt: "BDO" },
    { id: 14, src: "https://pbs.twimg.com/media/G4IYFN6XkAEvb5b?format=jpg&name=4096x4096", alt: "BDO" },
    { id: 15, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/ab7f4d3be7d20250513171935970.jpg", alt: "BDO" },
    { id: 16, src: "https://s1.pearlcdn.com/NAEU/Upload/Community/6e7d0f81e1920250513174843775.jpg", alt: "BDO" },
    { id: 17, src: "https://pbs.twimg.com/media/Gqn-g0dW8AA5xp4?format=jpg&name=4096x4096", alt: "BDO" },
];

export default function BDO() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <section className="relative flex flex-col items-center pt-20">

        {/* Presentación*/}
        <FadeInSection>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center py-16">
          <h1 className="title text-center text-balance text-6xl leading-none md:text-8xl">
            Black Desert
          </h1>
        </div>     
        </FadeInSection>

        {/* Cartas*/}
        <div className="w-full mx-auto px-6 lg:px-20 pb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {bdoocs.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 30, rotateZ: -4 }}
                animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                exit={{ opacity: 0, y: 20, rotateZ: 4 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <Link href={character.href} className="group flex flex-col gap-1 sm:gap-2">
                                  {character.icon && (
                    <div className="flex justify-center">
                      <Image
                        src={character.icon}
                        alt={character.name}
                        width={40}
                        height={40}
                        className="transition-transform duration-700 opacity-80 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="relative aspect-[3/4] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(188,188,188,0.3)]">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className={`text-[12px] uppercase tracking-widest text-center transition-colors ${
                      pathname === character.href
                        ? "text-purple-400"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {character.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      <section className="container mx-auto px-4 relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
          <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
            — Explora...
          </p>
          <ArtGallery imageSets={[screenshotBDO]} />
      </section>
    </div>
  );
}