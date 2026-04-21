// crear la estructura tipo galería por columnas en toda la web que sea responsivo con imagenes de twitter
import React from "react";

interface MasonryGridProps {
  children: React.ReactNode;
  imageCount?: number;
}   

export const MasonryGrid: React.FC<MasonryGridProps> = ({ children, imageCount = 2 }) => {
  // Si hay menos de 2 imágenes, mostrar solo 1 columna en todos los dispositivos
  const columnClass = imageCount < 3 
    ? "columns-1" 
    : "columns-2 sm:columns-2 lg:columns-3";

  return (
    <div className={`${columnClass} gap-4`}>
        {children}
    </div>
    );  
};  


