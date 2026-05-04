"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  showDivider?: boolean;
  variant?: "transparent" | "subtle";
}

export default function Section({ 
  children, 
  id, 
  className = "", 
  showDivider = false,
  variant = "transparent" 
}: SectionProps) {
  const bgClass = variant === "subtle" ? "bg-foreground/[0.02]" : "bg-transparent";

  return (
    <section id={id} className={`relative ${className} ${bgClass} transition-colors duration-500`}>
      {showDivider && (
        <div className="absolute top-0 left-0 w-full flex justify-center px-6 lg:px-12 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-card-border/60 to-transparent" />
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-24 lg:py-32"
      >
        {children}
      </motion.div>
    </section>
  );
}
