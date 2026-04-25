'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar el botón tras scrollear x px
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer py-3 px-6 text-4xl rounded-full bg-black/80 text-white/80 shadow-lg transition-all duration-300 hover:bg-black hover:scale-110 active:scale-95 hover:text-white border border-white/10"
          aria-label="Volver arriba"
        >
          ↟
        </button>
      )}
    </div>
  );
}