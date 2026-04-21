"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
// Importamos los iconos necesarios
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageViewerProps {
  isOpen: boolean;
  images: Array<{ id: number | string; src: string; alt: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageViewer = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageViewerProps) => {
  const [direction, setDirection] = useState(0);
  const currentImage = images[currentIndex];

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrev = () => {
    setDirection(-1);
    onPrev();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  },);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center p-4"
          >
            {/* Imagen con animación de slide */}
            <div className="relative h-full w-full max-h-[83vh] max-w-[83vw] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.15 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority
                    className="object-contain"
                    sizes="90vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles */}
            <div className="absolute inset-x-0 z-[999] bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-6">
              {/* Botón Anterior */}
              <button
                onClick={handlePrev}
                className="group cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#9d50bb] hover:bg-[#9d50bb]/20 md:h-12 md:w-12"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Contador */}
              <span className="text-sm font-medium tracking-wider text-white/70">
                {currentIndex + 1} / {images.length}
              </span>

              {/* Botón Siguiente */}
              <button
                onClick={handleNext}
                className="group cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#9d50bb] hover:bg-[#9d50bb]/20 md:h-12 md:w-12"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="bg-black cursor-pointer fixed top-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#9d50bb] hover:bg-[#9d50bb]/20 md:top-8 md:right-8 md:h-14 md:w-14"
              aria-label="Cerrar visor"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};