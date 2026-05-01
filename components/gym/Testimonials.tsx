"use client";

import Image from "next/image";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "HAMZA R.",
    goal: "Muscle Gain",
    text: "FuelFit is not just a gym, it's a lifestyle. The trainers are amazing and the results are real. I've never felt stronger and more confident!",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1480&auto=format&fit=crop"
  },
  {
    name: "SANA K.",
    goal: "Weight Loss",
    text: "I lost 14kg in 3 months with their diet plan and consistent training. The support and motivation here is unmatched.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
  },
  {
    name: "ARMAAN P.",
    goal: "Strength Training",
    text: "Best gym experience so far. Clean environment, great equipment and world-class trainers. Highly recommend FuelFit!",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1374&auto=format&fit=crop"
  }
];


export default function Testimonials() {
  return (
    <section className="py-24 bg-background px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent/50" />
          <p className="text-accent font-bold tracking-widest text-sm uppercase">REAL PEOPLE. REAL RESULTS</p>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
          WHAT OUR <span className="text-accent">MEMBERS SAY</span>
        </h2>
        <p className="text-text-secondary">Transformations that speak for themselves.</p>

        {/* Top Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 bg-card border border-white/5 px-8 md:px-12 py-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <Star className="w-8 h-8 text-accent fill-accent" />
            <div className="text-left">
              <div className="font-heading text-3xl font-bold">4.9</div>
              <div className="text-[10px] text-text-secondary font-bold tracking-widest uppercase">AVERAGE RATING</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4">
            <Quote className="w-8 h-8 text-accent fill-accent rotate-180" />
            <div className="text-left">
              <div className="font-heading text-3xl font-bold">250+</div>
              <div className="text-[10px] text-text-secondary font-bold tracking-widest uppercase">REVIEWS</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="text-accent font-heading text-3xl font-bold flex">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-heading text-3xl font-bold">500+</div>
              <div className="text-[10px] text-text-secondary font-bold tracking-widest uppercase">HAPPY MEMBERS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-6 mb-20">
        <button className="hidden lg:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center hover:border-accent hover:text-accent transition-colors absolute left-0 z-10 -translate-x-1/2 bg-background">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-white/5 flex flex-col relative"
            >
              <Quote className="w-10 h-10 text-accent mb-6" />
              <p className="text-text-secondary mb-10 flex-1 leading-relaxed text-sm md:text-base">
                {t.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold tracking-wide uppercase">{t.name}</h4>
                  <p className="text-text-secondary text-xs">{t.goal}</p>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4,5].map((star) => <Star key={star} className="w-3 h-3 text-accent fill-accent" />)}
                  </div>
                </div>
                <Quote className="w-16 h-16 text-white/5 absolute bottom-6 right-6 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        <button className="hidden lg:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center hover:border-accent hover:text-accent transition-colors absolute right-0 z-10 translate-x-1/2 bg-background">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
