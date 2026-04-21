"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ViiImage {
  id: number | string;
  src: string;
  alt: string;
  title?: string;
}

interface AnimatedCardProps {
  image: ViiImage;
  onClick?: () => void;
  onLoad?: () => void; // Callback
}

export const AnimatedCard = ({ image, onClick, onLoad }: AnimatedCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.(); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      className={`mb-4 break-inside-avoid border border-white/10 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div>
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={750}
        onLoad={handleLoad}
        loading="eager"
        // Blur y opacidad
        className={`w-full h-auto object-cover transition-all duration-700 ${
          onClick ? "hover:scale-110" : ""
        } ${
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {image.title && <h2 className="subtitle text-center text-lg md:text-3xl py-4 border-t border-zinc-800">{image.title}</h2>}
    </div>
    </motion.div>
  );
};