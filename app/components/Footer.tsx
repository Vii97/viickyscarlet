import { Origami, Shield, AtSign } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 mt-8 border-t border-zinc-800">
      <div className="md:grid md:grid-cols-3 gap-8 px-4">

        {/* Izquierda - Social Media */}
        <div className="p-4 flex flex-col items-center text-center">
          <AtSign className="text-white/80 mb-2 w-6 h-6" />
          <p className="text-white mb-4">viickyscarlet@gmail.com</p>
          <a href="https://viickyscarlet.carrd.co/" target="_blank" rel="noopener noreferrer" className="text-white border border-white/30 bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300">
            Explora mis redes sociales en Carrd
          </a>
        </div>

        {/* Centro - Contacto */}
        <div className="p-4 flex flex-col items-center text-center">
          <a href="https://viickyscarlet-contact.viickyscarlet.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-white border border-white/30 bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 flex items-center gap-2">
            <Origami className="w-4 h-4" />
            ¡Contáctame!
          </a>
          <div className="flex justify-center mt-6">
            <Image 
              src="/home/eruchibi.webp"  
              alt="Logo Viicky Scarlet"
              width={25}
              height={27}  
              className="h-27 w-25"
            />
          </div>
        </div>

        {/* Derecha - Política de Privacidad */}
        <div>
          <div className="p-4 flex flex-col items-center text-center">
          <Shield className="text-white/80 mb-2 w-6 h-6" /> 
          <a href="/policy" className="text-white/80 hover:text-white transition-colors duration-300">
            Política de privacidad
          </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 flex justify-center text-white">
        <p className="text-md font-bold">©{new Date().getFullYear()} Viicky Scarlet 🥑</p>
      </div>
    </footer>
  );
}