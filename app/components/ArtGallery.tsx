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
}

export function ArtGallery({ imageSets }: ArtGalleryProps) {
  // Combinar todos los arrays en uno
  const allImages = imageSets.flat();
  
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
