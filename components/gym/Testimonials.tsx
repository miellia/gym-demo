"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    name: "HAMZA R.",
    goal: "Muscle Gain",
    text: "FuelFit is not just a gym, it's a lifestyle. The trainers are amazing and the results are real. I've never felt stronger and more confident!",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1480&format=auto&fit=crop"
  },
  {
    name: "SANA K.",
    goal: "Weight Loss",
    text: "I lost 14kg in 3 months with their diet plan and consistent training. The support and motivation here is unmatched.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&format=auto&fit=crop"
  },
  {
    name: "ARMAAN P.",
    goal: "Strength Training",
    text: "Best gym experience so far. Clean environment, great equipment and world-class trainers. Highly recommend FuelFit!",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1374&format=auto&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="about" showDivider variant="subtle">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent/50" />
          <p className="text-accent font-bold tracking-widest text-sm uppercase">REAL PEOPLE. REAL RESULTS</p>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-foreground">
          WHAT OUR <span className="text-accent italic">MEMBERS SAY</span>
        </h2>
        <p className="text-text-secondary">Transformations that speak for themselves.</p>

        {/* Top Stats */}
        <div className="grid grid-cols-3 md:flex md:justify-center gap-4 md:gap-16 mt-12 glass border border-card-border px-4 md:px-12 py-6 rounded-2xl w-full shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
            <div className="text-center md:text-left">
              <div className="font-heading text-xl md:text-3xl font-bold text-foreground">4.9</div>
              <div className="text-[8px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">RATING</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-card-border" />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent rotate-180" />
            <div className="text-center md:text-left">
              <div className="font-heading text-xl md:text-3xl font-bold text-foreground">250+</div>
              <div className="text-[8px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">REVIEWS</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-card-border" />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <div className="text-accent font-heading text-xl md:text-3xl font-bold flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-8 md:h-8">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <div className="font-heading text-xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-[8px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">MEMBERS</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Grid View (lg+) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 w-full">
        {testimonials.map((t, i) => (
          <div 
            key={i}
            className="glass p-8 rounded-2xl border border-card-border flex flex-col relative shadow-sm hover:shadow-md transition-shadow"
          >
            <Quote className="w-10 h-10 text-accent mb-6" />
            <p className="text-text-secondary mb-10 flex-1 leading-relaxed text-base italic">
              &quot;{t.text}&quot;
            </p>
            
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-sm">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold tracking-wide uppercase text-foreground">{t.name}</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">{t.goal}</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map((star) => <Star key={star} className="w-3 h-3 text-accent fill-accent" />)}
                </div>
              </div>
              <Quote className="w-16 h-16 text-foreground/5 absolute bottom-6 right-6 rotate-180" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View (< lg) */}
      <div className="lg:hidden relative">
        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-4 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full relative min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 rounded-2xl border border-card-border relative w-full shadow-sm"
              >
                <Quote className="w-10 h-10 text-accent mb-8" />
                <p className="text-text-secondary text-base mb-12 leading-relaxed italic">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-sm">
                    <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest">{testimonials[currentIndex].goal}</p>
                    <div className="flex gap-1 mt-2">
                      {[1,2,3,4,5].map((star) => <Star key={star} className="w-3 h-3 text-accent fill-accent" />)}
                    </div>
                  </div>
                </div>
                <Quote className="w-20 h-20 text-foreground/5 absolute bottom-8 right-8 rotate-180" />
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={next}
            className="absolute -right-4 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-accent' : 'w-2 bg-foreground/10'}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
