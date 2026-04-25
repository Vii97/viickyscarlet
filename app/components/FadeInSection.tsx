"use client";

import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
  
      initial={{ opacity: 0, y: 20 }}
      
      whileInView={{ opacity: 1, y: 0 }}
      
      viewport={{ once: true, margin: "-40px" }}
      
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], 
        delay 
      }}
      
      style={{ minHeight: "fit-content" }}
    >
      {children}
    </motion.div>
  );
}