"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// No voy a usar any, creo una interfaz de elementos para tipar
interface SubMenuItem {
  label: string;
  href: string;
  image: string;
}

interface MenuItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Cosplay",
    href: "/cosplay",
    submenu: [
      { label: "Eru", href: "/cosplay/eru", image: "/menu/cosplay/archer.jpg" },
      { label: "Sova", href: "/cosplay/sova", image: "/menu/cosplay/sova.jpg" },
      { label: "Ezreal", href: "/cosplay/ezreal", image: "/menu/cosplay/ezreal.jpg" },
      { label: "Link", href: "/cosplay/link", image: "/menu/cosplay/link.jpg" },
      { label: "Sonic", href: "/cosplay/sonic", image: "/menu/cosplay/sonic.jpg" },
      { label: "Silk", href: "/cosplay/silk", image: "/menu/cosplay/silk.jpg" },
      { label: "Akali", href: "/cosplay/akali", image: "/menu/cosplay/akali.jpg" },
      {label: "- Otros -", href: "/cosplay/otros", image: "/menu/cosplay/juvia.jpg" }
    ]
  },
  {
    label: "Art",
    href: "/art",
    submenu: [
      { label: "Black Desert", href: "/art/black-desert", image: "/menu/art/black-desert.jpg" },
      { label: "Valorant", href: "/art/valorant", image: "/menu/art/sova.jpg" },
      { label: "League Of Legends", href: "/art/league-of-legends", image: "/menu/art/lol.jpg" },
      { label: "Sonic The Hedgehog", href: "/art/sonic-the-hedgehog", image: "/menu/art/sonic.jpg" },
      { label: "Yzhel", href: "/art/yzhel", image: "/menu/art/yzhel.jpg" },
      { label: "- Otros -", href: "/art/otros", image: "/menu/art/zelda.jpg" }
    ]
  },
  {
    label: "Virtual Photography",
    href: "/screenshots",
    submenu: [
      { label: "Black Desert", href: "/virtual-photography/black-desert", image: "/menu/photography/bdo.JPG" },
      { label: "Where Winds Meet", href: "/virtual-photography/where-winds-meet", image: "/menu/photography/wwm.png" },
    ]
  },
 /* {
    label: "Web Dev", 
    href: "/webdev"
  }*/
]


export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
// Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (openSubmenu || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openSubmenu, isMobileMenuOpen]);

  // Cerrar al hacer clic fuera (PC)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      {/* 1. OVERLAY (FONDO OSCURO) */}
      <AnimatePresence>
        {(openSubmenu || isMobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenSubmenu(null);
              setIsMobileMenuOpen(false);
            }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
<header ref={navRef} className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-[2px] transition-colors duration-300 ${(openSubmenu || isMobileMenuOpen) ? "bg-black/90" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          <span className="text-sm opacity-30">@</span>VIICKYSCARLET
        </Link>
        
        {/* PC */}
<nav className="hidden items-center gap-8 md:flex h-full">
  {menuItems.map((item) => {
    // Comprobamos si este submenú específico es el que está abierto actualmente
    const isThisSubmenuOpen = openSubmenu === item.label;

    return (
      <div key={item.label} className="relative h-full flex items-center">
        <button
          onClick={() => toggleSubmenu(item.label)}
          className={`text-base transition-all duration-300 cursor-pointer outline-none
            ${isThisSubmenuOpen 
              ? "title" // Color activo 
              : "text-white/70 hover:text-white"         
            }
          `}
        >
          {item.label}
        </button>
      </div>
    );
  })}
</nav>

        {/* Hamburger (Móvil) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer flex h-10 w-10 items-center justify-center text-white transition-colors md:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* megamenu PC */}
      <AnimatePresence>
        {openSubmenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block absolute left-0 w-full overflow-hidden bg-black/90 border-b border-white/10 shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-8 py-10">
              {/* Virtual Photography */}
              {openSubmenu === "Virtual Photography" ? (
                <div className="flex justify-center gap-4">
                  {menuItems.find(i => i.label === openSubmenu)?.submenu?.map((subItem, index) => (
                    <motion.div
                      key={subItem.label}
                      initial={{ opacity: 0, x: -50, rotateY: -15 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      <Link 
                        href={subItem.href}
                        onClick={() => setOpenSubmenu(null)}
                        className="group flex flex-col gap-3 w-[280px]"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                          <Image 
                            src={subItem.image} 
                            alt={subItem.label}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <span className={`text-xs uppercase tracking-widest text-center transition-colors ${pathname === subItem.href ? "text-purple-400" : "text-white/40 group-hover:text-white"}`}>
                          {subItem.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Cosplay y Art */
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                  {menuItems.find(i => i.label === openSubmenu)?.submenu?.map((subItem, index) => (
                    <motion.div
                      key={subItem.label}
                      initial={{ opacity: 0, x: -80, rotateZ: -8 }}
                      animate={{ opacity: 1, x: 0, rotateZ: 0 }}
                      exit={{ opacity: 0, x: 40, rotateZ: 4 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.08,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    >
                      <Link 
                        href={subItem.href}
                        onClick={() => setOpenSubmenu(null)}
                        className="group flex flex-col gap-3"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                          <Image 
                            src={subItem.image} 
                            alt={subItem.label}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <span className={`text-[10px] uppercase tracking-widest text-center transition-colors ${pathname === subItem.href ? "text-purple-400" : "text-white/40 group-hover:text-white"}`}>
                          {subItem.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MÓVIL ORIGINAL */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="cursor-pointer flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-white transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        openSubmenu === item.label ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-3 border-l border-white/10 pl-3 py-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              className={`block px-3 py-2 text-sm transition-colors hover:text-white ${isActiveLink(subItem.href) ? "text-purple-500" : "text-white/70"}`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-3 text-base font-medium transition-colors ${isActiveLink(item.href) ? "text-purple-500" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}