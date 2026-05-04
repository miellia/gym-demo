"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  showDivider?: boolean;
}

export default function Section({ children, id, className = "", showDivider = false }: SectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {showDivider && (
        <div className="absolute top-0 left-0 w-full flex justify-center px-6 lg:px-12 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24"
      >
        {children}
      </motion.div>
    </section>
  );
}
