'use client';
import { useState, useCallback } from 'react';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export function useMasonryImageViewer(images: ImageItem[]) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const handleClose = useCallback(() => {
    setViewerOpen(false);
  }, []);

  return {
    viewerOpen,
    currentImageIndex,
    handleImageClick,
    handleNext,
    handlePrev,
    handleClose,
  };
}
