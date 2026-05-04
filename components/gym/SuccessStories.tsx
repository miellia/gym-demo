"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import Section from "@/components/ui/Section";

const STORIES = [
  {
    name: "Michael Chen",
    role: "Lost 25kg in 6 Months",
    quote: "FuelFit didn't just give me a workout plan; they gave me a new lifestyle. The trainers kept me accountable when I wanted to quit.",
    initials: "MC",
    stats: { strength: "+40%", weight: "-25kg", energy: "100%" },
    beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
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
  const [showAfter, setShowAfter] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <>
      {/* Desktop Slider View (md+) */}
      <div 
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        className="hidden md:block relative aspect-[4/5] w-full rounded-3xl overflow-hidden cursor-ew-resize group shadow-2xl"
      >
        <Image src={after} alt="After" fill className="object-cover" />
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image src={before} alt="Before" fill className="object-cover grayscale" />
        </div>
        
        <div 
          className="absolute inset-y-0 z-20 w-1.5 bg-accent"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 border-4 border-background">
            <div className="flex items-center gap-1">
              <div className="w-1 h-4 bg-foreground/20 rounded-full" />
              <div className="w-1 h-4 bg-foreground/20 rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 z-30 px-4 py-2 glass rounded-full text-xs font-bold tracking-widest text-foreground uppercase border border-card-border pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-6 right-6 z-30 px-4 py-2 bg-accent/90 rounded-full text-xs font-bold tracking-widest text-black uppercase border border-white/20 shadow-md pointer-events-none">
          After
        </div>
      </div>

      {/* Mobile Tap-Toggle View (< md) */}
      <div 
        onClick={() => setShowAfter(!showAfter)}
        className="md:hidden relative aspect-square w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? "after" : "before"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image 
              src={showAfter ? after : before} 
              alt={showAfter ? "After" : "Before"} 
              fill 
              className={`object-cover ${!showAfter ? 'grayscale' : ''}`} 
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-3 left-3 z-30 px-3 py-1 glass rounded-full text-[8px] font-bold tracking-widest text-foreground uppercase border border-card-border">
          {showAfter ? "After" : "Before"}
        </div>
        <div className="absolute top-3 right-3 z-30 bg-accent/90 text-black px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-sm">
          Tap to toggle
        </div>
      </div>
    </>
  );
}

export default function SuccessStories() {
  const [active, setActive] = useState(0);

  return (
    <Section id="results" showDivider>
      {/* Background Decorative Glow - contained on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-accent/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Visuals Area */}
        <div className="w-full lg:w-[45%] relative order-1">
          {/* Mobile Only Badge */}
          <div className="lg:hidden flex items-center gap-4 glass border border-card-border p-4 rounded-xl mb-6 shadow-sm">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-0.5">Transformation</div>
              <div className="text-lg font-bold text-foreground leading-none">{STORIES[active].role}</div>
            </div>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <BeforeAfterSlider 
              before={STORIES[active].beforeImg} 
              after={STORIES[active].afterImg} 
            />
          </motion.div>
        </div>

        {/* Narrative Content */}
        <div className="w-full lg:w-[55%] space-y-8 md:space-y-10 order-2">
          {/* Heading Area */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <span className="text-accent text-[10px] md:text-sm font-bold tracking-widest uppercase">Member Success</span>
              </div>
              
              <div className="hidden lg:flex items-center gap-3 bg-card-border px-4 py-2 rounded-full border border-card-border glass shadow-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-bold tracking-widest text-foreground uppercase">{STORIES[active].role}</span>
              </div>
            </div>
            
            <h2 className="font-heading text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-tight md:leading-[0.85] text-foreground">
              Proven <span className="italic text-accent">Results.</span><br />
              Real <span className="text-accent">Change.</span>
            </h2>
          </div>

          <div className="space-y-8 relative">
            <Quote className="hidden md:block absolute -top-12 -left-8 w-24 h-24 text-accent/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8 md:space-y-10"
              >
                <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed max-w-2xl">
                  &ldquo;{STORIES[active].quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-accent flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-accent bg-accent/5 shadow-sm">
                    {STORIES[active].initials}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">{STORIES[active].name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 md:gap-12 py-8 md:py-10 border-y border-card-border">
                  {Object.entries(STORIES[active].stats).map(([label, value]) => (
                    <div key={label} className="space-y-2">
                      <span className="text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase text-text-secondary block">{label}</span>
                      <div className="text-xl md:text-4xl font-bold text-foreground font-heading">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                   <button className="w-full md:w-auto bg-accent text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-accent-hover transition-all rounded-sm flex items-center justify-center gap-3 group shadow-md">
                      JOIN THE MOVEMENT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>

                   <div className="flex items-center gap-6">
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setActive((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1))}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all group glass shadow-sm"
                        >
                          <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => setActive((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1))}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-card-border flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all group glass shadow-sm"
                        >
                          <ArrowRight className="w-6 h-6" />
                        </button>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
