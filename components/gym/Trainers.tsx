"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Dumbbell, Zap, Crown, HeartPulse, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export const trainers = [
  {
    name: "ALI KHAN",
    role: "STRENGTH COACH",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    icon: Dumbbell,
    tags: ["Strength Training", "Muscle Gain", "Powerlifting"]
  },
  {
    name: "SARA AHMED",
    role: "FITNESS TRAINER",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1470&auto=format&fit=crop",
    icon: Zap,
    tags: ["HIIT", "Weight Loss", "Functional Training"]
  },
  {
    name: "USMAN MALIK",
    role: "BODYBUILDING COACH",
    image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1470&auto=format&fit=crop",
    icon: Crown,
    tags: ["Bodybuilding", "Bulking", "Strength"]
  },
  {
    name: "NEHA SHARMA",
    role: "NUTRITION & WELLNESS",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    icon: HeartPulse,
    tags: ["Nutrition", "Fat Loss", "Wellness"]
  }
];

export default function Trainers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  return (
    <Section id="trainers" showDivider variant="subtle">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent/50" />
          <p className="text-accent font-bold tracking-widest text-sm uppercase">EXPERT GUIDANCE, REAL RESULTS</p>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
          MEET OUR <span className="text-accent italic">TRAINERS</span>
        </h2>
        <p className="text-text-secondary mt-4">Elite coaches. Proven experience. Your transformation starts here.</p>
      </div>

      {/* Desktop Grid View (lg+) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} index={index} />
        ))}
      </div>

      {/* Mobile/Tablet Carousel View (< lg) */}
      <div className="lg:hidden relative">
        <button 
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all"
          aria-label="Previous trainer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <TrainerCard trainer={trainers[currentIndex]} index={0} />
          <div className="hidden md:block">
            <TrainerCard trainer={trainers[(currentIndex + 1) % trainers.length]} index={1} />
          </div>
        </div>

        <button 
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all"
          aria-label="Next trainer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-12">
        <a 
          href="/trainers"
          className="flex items-center gap-3 border border-card-border text-foreground px-8 py-4 font-bold tracking-wider hover:bg-card-border transition-colors rounded-sm text-sm uppercase shadow-sm glass"
        >
          <Users className="w-4 h-4 text-accent" /> VIEW ALL TRAINERS <ArrowRight className="w-4 h-4 text-accent" />
        </a>
      </div>
    </Section>
  );
}

export function TrainerCard({ trainer, index }: { trainer: typeof trainers[0], index: number }) {
  const Icon = trainer.icon;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden border border-card-border flex flex-col group h-full shadow-sm"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-4 right-4 bg-accent p-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm text-black z-20 shadow-md">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col items-center text-center -mt-12 relative z-10">
        <h3 className="font-heading text-3xl font-bold tracking-wide text-foreground">{trainer.name}</h3>
        <p className="text-accent text-xs font-bold tracking-widest uppercase mt-1 mb-4">{trainer.role}</p>
        <div className="w-8 h-px bg-accent mb-6" />
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {trainer.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-card-border text-text-secondary bg-card-border">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto w-full flex items-center justify-between border-t border-card-border pt-6">
          <div className="flex items-center gap-3 text-text-secondary">
            <svg className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <svg className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <svg className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <button className="text-accent text-xs font-bold tracking-widest flex items-center gap-2 hover:text-accent-hover transition-colors">
            BOOK SESSION <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
