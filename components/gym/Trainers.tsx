"use client";

import Image from "next/image";
import { ArrowRight, Dumbbell, Zap, Crown, HeartPulse, Users } from "lucide-react";
import { motion } from "framer-motion";

const trainers = [
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
  return (
    <section className="py-24 bg-background px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent/50" />
          <p className="text-accent font-bold tracking-widest text-sm uppercase">EXPERT GUIDANCE, REAL RESULTS</p>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight">
          MEET OUR <span className="text-accent">TRAINERS</span>
        </h2>
        <p className="text-text-secondary mt-4">Elite coaches. Proven experience. Your transformation starts here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {trainers.map((trainer, index) => {
          const Icon = trainer.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col group"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-accent p-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm text-black">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col items-center text-center -mt-12 relative z-10">
                <h3 className="font-heading text-3xl font-bold tracking-wide">{trainer.name}</h3>
                <p className="text-accent text-xs font-bold tracking-widest uppercase mt-1 mb-4">{trainer.role}</p>
                <div className="w-8 h-px bg-accent mb-6" />
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {trainer.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto w-full flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <svg className="w-4 h-4 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <svg className="w-4 h-4 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <button className="text-accent text-xs font-bold tracking-widest flex items-center gap-2 hover:text-accent-hover transition-colors">
                    BOOK SESSION <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-3 border border-white/10 text-white px-8 py-4 font-bold tracking-wider hover:bg-white/5 transition-colors rounded-sm text-sm uppercase">
          <Users className="w-4 h-4 text-accent" /> VIEW ALL TRAINERS <ArrowRight className="w-4 h-4 text-accent" />
        </button>
      </div>
    </section>
  );
}
