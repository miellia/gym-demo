"use client";

import Image from "next/image";
import { ArrowRight, Menu, Users, Dumbbell, Star, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import JoinModal from "./JoinModal";
import { getWhatsAppUrl } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const HERO_IMAGES = [
  "/image/hero/one.jpg",
  "/image/hero/two.jpg",
  "/image/hero/three.jpg",
  "/image/hero/four.jpg",
  "/image/hero/five.jpg",
  "/image/hero/six.jpg",
  "/image/hero/seven.jpg",
  "/image/hero/eight.jpg",
  "/image/hero/nine.jpg",
  "/image/hero/ten.jpg",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Disable Background Scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Animate Before Unmount
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }} // 70-80% opacity as requested
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex]}
              alt={`Gym background ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradients for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 z-10" />
            <div className="absolute inset-0 bg-background/20 z-10" />
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "bg-accent w-8" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-6 lg:px-12 ${
          isScrolled 
            ? 'fixed glass py-3 shadow-sm' 
            : 'absolute bg-transparent py-5'
        }`}
      >
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity relative z-50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <path d="M10 28L18 4H26L18 28H10Z" fill="currentColor" />
            <path d="M2 28L10 4H18L10 28H2Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-2xl tracking-wider font-bold italic text-foreground">FUELFIT</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#home" className="text-foreground relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent font-bold">HOME</a>
          <a href="#about" className="text-text-secondary hover:text-foreground transition-colors uppercase">ABOUT</a>
          <a href="#trainers" className="text-text-secondary hover:text-foreground transition-colors uppercase">TRAINERS</a>
          <a href="#programs" className="text-text-secondary hover:text-foreground transition-colors uppercase">PROGRAMS</a>
          <a href="#pricing" className="text-text-secondary hover:text-foreground transition-colors uppercase">PRICING</a>
          <a href="#contact" className="text-text-secondary hover:text-foreground transition-colors uppercase">CONTACT</a>
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-accent text-black px-6 py-2.5 font-bold hover:bg-accent-hover transition-colors rounded-sm text-sm shadow-sm"
          >
            JOIN NOW <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden text-foreground p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen z-[9999] bg-background flex flex-col"
          >
            <div className="absolute top-5 right-6 z-[10000] flex items-center gap-4">
              <ThemeToggle />
              <button 
                onClick={toggleMobileMenu} 
                className="text-foreground p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-10 py-24 flex flex-col gap-8 scrollbar-hide">
              <a href="#home" onClick={toggleMobileMenu} className="text-foreground text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">HOME</a>
              <a href="#about" onClick={toggleMobileMenu} className="text-text-secondary hover:text-foreground transition-colors text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">ABOUT</a>
              <a href="#trainers" onClick={toggleMobileMenu} className="text-text-secondary hover:text-foreground transition-colors text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">TRAINERS</a>
              <a href="#programs" onClick={toggleMobileMenu} className="text-text-secondary hover:text-foreground transition-colors text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">PROGRAMS</a>
              <a href="#pricing" onClick={toggleMobileMenu} className="text-text-secondary hover:text-foreground transition-colors text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">PRICING</a>
              <a href="#contact" onClick={toggleMobileMenu} className="text-text-secondary hover:text-foreground transition-colors text-3xl font-heading font-bold tracking-[0.2em] uppercase border-b border-card-border pb-4">CONTACT</a>
              <button 
                onClick={() => {
                  toggleMobileMenu();
                  setIsModalOpen(true);
                }}
                className="mt-8 flex items-center justify-center gap-3 bg-accent text-black px-6 py-5 font-bold rounded-sm text-sm w-full tracking-[0.2em] uppercase shadow-lg"
              >
                JOIN NOW <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-6 lg:px-12 pt-32 lg:pt-40 pb-12 md:pb-0 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 
            className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.9] font-bold uppercase mb-12 tracking-tight text-foreground"
            style={{ 
              textShadow: "0 0 20px rgba(var(--accent-rgb), 0.3), 0 0 40px rgba(var(--accent-rgb), 0.1)" 
            }}
          >
            BUILD YOUR <br />
            <span className="text-accent italic">STRONGEST</span> <br />
            BODY
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-accent text-black px-10 py-5 font-bold hover:bg-accent-hover transition-colors rounded-sm text-base shadow-xl"
            >
              START YOUR JOURNEY <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-accent text-foreground px-10 py-5 font-bold hover:bg-accent/10 transition-colors rounded-sm text-base"
            >
              BOOK VIA WHATSAPP <ArrowRight className="w-5 h-5 text-accent" />
            </a>
          </div>
        </motion.div>
      </div>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating Free Pass Button (Lead Magnet) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 100 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-accent text-black font-bold py-2.5 px-4 md:py-4 md:px-6 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 md:gap-3 group"
          >
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-70">Claim your</span>
              <span className="text-[10px] md:text-sm uppercase tracking-wider">Free Day Pass</span>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
