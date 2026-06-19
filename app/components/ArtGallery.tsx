'use client';

import { ImageViewer } from "@/app/components/ImageViewer";
import { MasonryGrid } from "@/app/components/MasonryGrid";
import { AnimatedCard } from "@/app/components/AnimatedCard";
import { useMasonryImageViewer } from "@/app/hooks/useMasonryImageViewer";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface ArtGalleryProps {
  imageSets: ImageItem[][];
  /**
   * Contexto descriptivo de la galería (p. ej. "Cosplay de Akali — League of
   * Legends"). Se antepone al alt de cada imagen para mejorar el SEO de
   * imágenes, conservando el detalle propio de cada foto.
   */
  altContext?: string;
}

export function ArtGallery({ imageSets, altContext }: ArtGalleryProps) {
  // Combinar todos los arrays en uno y enriquecer el texto alternativo
  const allImages = imageSets.flat().map((image) => {
    if (!altContext) return image;
    const detail = image.alt?.trim();
    return {
      ...image,
      alt: detail ? `${altContext} — ${detail}` : altContext,
    };
  });

  const {
    viewerOpen,
    currentImageIndex,
    handleImageClick,
    handleNext,
    handlePrev,
    handleClose,
  } = useMasonryImageViewer(allImages);

  return (
    <>
      <ImageViewer
        isOpen={viewerOpen}
        images={allImages}
        currentIndex={currentImageIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <MasonryGrid imageCount={allImages.length}>
        {allImages.map((image, index) => (
          <AnimatedCard 
            key={image.id} 
            image={image} 
            onClick={() => handleImageClick(index)}
          />
        ))}
      </MasonryGrid>
    </>
  );
}
