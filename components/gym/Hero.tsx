"use client";

import Image from "next/image";
import { ArrowRight, Menu, Users, Dumbbell, Star, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import JoinModal from "./JoinModal";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full h-full md:w-3/4 lg:w-2/3">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 md:bg-gradient-to-t md:from-background md:via-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
            alt="Muscular man lifting dumbbell"
            fill
            className="object-cover object-top md:object-right mix-blend-lighten opacity-80"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-6 lg:px-12 ${
          isScrolled 
            ? 'fixed bg-[rgba(11,11,11,0.6)] backdrop-blur-md border-b border-white/5 py-3' 
            : 'absolute bg-transparent py-5'
        }`}
      >
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <path d="M10 28L18 4H26L18 28H10Z" fill="currentColor" />
            <path d="M2 28L10 4H18L10 28H2Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-2xl tracking-wider font-bold italic">FUELFIT</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#home" className="text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent">HOME</a>
          <a href="#about" className="text-text-secondary hover:text-white transition-colors">ABOUT</a>
          <a href="#trainers" className="text-text-secondary hover:text-white transition-colors">TRAINERS</a>
          <a href="#programs" className="text-text-secondary hover:text-white transition-colors">PROGRAMS</a>
          <a href="#pricing" className="text-text-secondary hover:text-white transition-colors">PRICING</a>
          <a href="#contact" className="text-text-secondary hover:text-white transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-accent text-black px-6 py-2.5 font-bold hover:bg-accent-hover transition-colors rounded-sm text-sm"
          >
            JOIN NOW <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white relative z-50">
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[rgba(11,11,11,0.95)] backdrop-blur-xl border-b border-white/10 flex flex-col px-6 py-8 gap-6 z-40 lg:hidden shadow-2xl"
            >
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-bold tracking-widest uppercase">HOME</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary hover:text-white transition-colors text-lg font-bold tracking-widest uppercase">ABOUT</a>
              <a href="#trainers" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary hover:text-white transition-colors text-lg font-bold tracking-widest uppercase">TRAINERS</a>
              <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary hover:text-white transition-colors text-lg font-bold tracking-widest uppercase">PROGRAMS</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary hover:text-white transition-colors text-lg font-bold tracking-widest uppercase">PRICING</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary hover:text-white transition-colors text-lg font-bold tracking-widest uppercase">CONTACT</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-accent text-black px-6 py-4 font-bold rounded-sm text-sm w-full"
              >
                JOIN NOW <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 lg:px-12 pt-32 lg:pt-40 pb-12 md:pb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-accent hidden md:block" />
            <p className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase">
              <span className="hidden md:inline">Discipline. Training. Transformation.</span>
              <span className="md:hidden">Train Hard<br/>Transform Forever</span>
            </p>
          </div>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.9] font-bold uppercase mb-6 tracking-tight">
            BUILD YOUR <br />
            <span className="text-accent">STRONGEST</span> <br />
            BODY
          </h1>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl max-w-md mb-8 leading-relaxed">
            Train with expert coaches, personalized plans, and a system designed to get real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-accent text-black px-8 py-4 font-bold hover:bg-accent-hover transition-colors rounded-sm text-sm"
            >
              START YOUR JOURNEY <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-accent text-white px-8 py-4 font-bold hover:bg-accent/10 transition-colors rounded-sm text-sm"
            >
              BOOK VIA WHATSAPP <ArrowRight className="w-4 h-4 text-accent" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 px-6 lg:px-12 pb-12 w-full max-w-[1400px] mx-auto">
        <div className="bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4 w-full md:w-1/3 justify-center md:justify-start text-center md:text-left">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-text-secondary text-xs font-medium tracking-widest uppercase">HAPPY MEMBERS</div>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div className="w-16 h-px bg-white/10 md:hidden" />

          <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4 w-full md:w-1/3 justify-center text-center md:text-left">
            <Dumbbell className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold">20+</div>
              <div className="text-text-secondary text-xs font-medium tracking-widest uppercase">EXPERT TRAINERS</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div className="w-16 h-px bg-white/10 md:hidden" />

          <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4 w-full md:w-1/3 justify-center md:justify-end text-center md:text-left">
            <Star className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold">4.9</div>
              <div className="text-text-secondary text-xs font-medium tracking-widest uppercase">MEMBER RATING</div>
            </div>
          </div>

        </div>

        {/* Mobile Trust Badges & Scroll */}
        <div className="mt-8 flex flex-col items-center md:hidden gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
                  <Image src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`} alt="Member" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider">TRUSTED BY 500+ MEMBERS</div>
              <div className="flex gap-1 mt-1">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-3 h-3 text-accent fill-accent" />)}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-text-secondary text-[10px] font-bold tracking-widest mt-4">
            SCROLL TO EXPLORE
            <ChevronDown className="w-5 h-5 text-accent animate-bounce" />
          </div>
        </div>
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
            className="fixed bottom-8 right-8 z-[100] bg-accent text-black font-bold py-4 px-6 rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
          >
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase tracking-widest opacity-70">Claim your</span>
              <span className="text-sm uppercase tracking-wider">Free Day Pass</span>
            </div>
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
