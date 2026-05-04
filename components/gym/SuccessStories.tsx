"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";

const STORIES = [
  {
    name: "Michael Chen",
    role: "Lost 25kg in 6 Months",
    quote: "FuelFit didn't just give me a workout plan; they gave me a new lifestyle. The trainers kept me accountable when I wanted to quit.",
    initials: "MC",
    stats: { strength: "+40%", weight: "-25kg", energy: "100%" },
    beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=1470&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Strength & Conditioning",
    quote: "I never thought I could lift my own body weight. Now, I'm deadlifting 100kg. The community here is my second family.",
    initials: "SJ",
    stats: { strength: "+120%", weight: "-5kg", energy: "High" },
    beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop"
  }
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative aspect-square md:aspect-[4/5] w-full rounded-3xl overflow-hidden cursor-ew-resize group"
    >
      {/* After Image */}
      <Image src={after} alt="After" fill className="object-cover" />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image src={before} alt="Before" fill className="object-cover grayscale brightness-75" />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-accent shadow-[0_0_10px_rgba(0,255,136,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-2xl">
          <ArrowLeft className="w-3 h-3 text-black -ml-0.5" />
          <ArrowRight className="w-3 h-3 text-black -mr-0.5" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-30 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-white uppercase border border-white/10 pointer-events-none">
        Before
      </div>
      <div className="absolute bottom-6 right-6 z-30 px-3 py-1 bg-accent/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-black uppercase border border-white/10 pointer-events-none">
        After
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Visuals */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BeforeAfterSlider 
                before={STORIES[active].beforeImg} 
                after={STORIES[active].afterImg} 
              />
            </motion.div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -top-6 -right-6 md:-right-12 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-40"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">Transformation</div>
                  <div className="text-xl font-bold text-white">{STORIES[active].role}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative Content */}
          <div className="w-full lg:w-[55%] space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent text-sm font-bold tracking-widest uppercase">Member Success</span>
              </motion.div>
              
              <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                Proven <span className="text-stroke">Results.</span><br />
                Real <span className="text-accent">Change.</span>
              </h2>
            </div>

            <div className="space-y-8 relative">
              <Quote className="absolute -top-10 -left-6 w-20 h-20 text-accent/5" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed">
                    &ldquo;{STORIES[active].quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center font-heading text-2xl font-bold text-accent">
                      {STORIES[active].initials}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white uppercase tracking-wider">{STORIES[active].name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                    {Object.entries(STORIES[active].stats).map(([label, value]) => (
                      <div key={label} className="space-y-1">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">{label}</span>
                        <div className="text-2xl font-bold text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex gap-3">
                <button 
                  onClick={() => setActive((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1))}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all group"
                >
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActive((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1))}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all group"
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="text-text-secondary text-sm font-bold tracking-widest uppercase">
                {active + 1} <span className="mx-2 opacity-30">/</span> {STORIES.length}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
