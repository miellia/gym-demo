"use client";

import Image from "next/image";
import { CheckCircle2, ClipboardList, TrendingUp, Users, ArrowRight, Target, Apple, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const plans = [
  {
    title: "MUSCLE GAIN",
    subtitle: "High Protein Plan",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop",
    icon: TrendingUp,
    features: ["High Protein Meals", "Calorie Surplus", "Performance Focused", "Muscle Building"],
    popular: false
  },
  {
    title: "FAT LOSS",
    subtitle: "Calorie Deficit Plan",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop",
    icon: Target,
    features: ["Low Calorie Meals", "High Nutrient Foods", "Metabolism Boost", "Sustainable Results"],
    popular: true
  },
  {
    title: "LEAN & FIT",
    subtitle: "Balanced Plan",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop",
    icon: Apple,
    features: ["Balanced Macronutrients", "Clean & Whole Foods", "Energy & Strength", "Ideal for Everyday"],
    popular: false
  },
  {
    title: "VEGAN PLAN",
    subtitle: "Plant Based Plan",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1528&auto=format&fit=crop",
    icon: Leaf,
    features: ["100% Plant Based", "Protein Rich Meals", "Vitamins & Minerals", "Heart Healthy"],
    popular: false
  }
];

export default function DietPlans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % plans.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <Section id="programs" showDivider variant="subtle">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-16 text-center lg:text-left">
        <div className="max-w-2xl flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-accent font-bold tracking-widest text-sm uppercase">EAT RIGHT. FUEL YOUR TRANSFORMATION.</p>
            <div className="w-12 h-px bg-accent/50 hidden md:block" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-center lg:text-left text-foreground">
            DIET <span className="text-accent italic">PLANS</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Personalized nutrition plans designed by expert nutritionists to help you achieve your fitness goals faster.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-12 mt-8">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-accent" />
              <div className="text-[10px] font-bold tracking-widest uppercase text-foreground">Nutritionist Approved</div>
            </div>
            <div className="flex items-center gap-3">
              <Apple className="w-6 h-6 text-accent" />
              <div className="text-[10px] font-bold tracking-widest uppercase text-foreground">Balanced Meals</div>
            </div>
            <div className="flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-accent" />
              <div className="text-[10px] font-bold tracking-widest uppercase text-foreground">Custom Plans</div>
            </div>
          </div>
        </div>

        <div className="glass border border-card-border rounded-xl p-6 hidden lg:block text-center min-w-[180px] shadow-sm">
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center bg-white/50">
              <span className="text-accent text-lg">🔥</span>
            </div>
          </div>
          <div className="text-xs text-text-secondary font-bold tracking-widest uppercase mb-2">CALORIE CONTROLLED</div>
          <div className="font-heading text-3xl text-accent font-bold">500 - 700</div>
          <div className="text-[10px] text-text-secondary tracking-widest uppercase mt-1">CAL / MEAL</div>
        </div>
      </div>

      {/* Desktop Grid View (lg+) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12 relative">
        {plans.map((plan, i) => (
          <DietPlanCard key={i} plan={plan} index={i} />
        ))}
      </div>

      {/* Mobile Carousel View (< lg) */}
      <div className="lg:hidden relative mb-12">
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DietPlanCard plan={plans[currentIndex]} index={currentIndex} />
          </motion.div>
        </AnimatePresence>

        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-card-border flex items-center justify-center glass hover:bg-accent hover:text-black transition-all shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mb-16">
        <Link 
          href="/diet-plans"
          className="flex items-center gap-3 border border-card-border text-foreground px-8 py-4 font-bold tracking-wider hover:bg-black/5 transition-colors rounded-sm text-sm uppercase shadow-sm glass"
        >
          <ClipboardList className="w-4 h-4 text-accent" /> VIEW ALL DIET PLANS <ArrowRight className="w-4 h-4 text-accent" />
        </Link>
      </div>

      <div className="glass border border-card-border rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex items-center gap-6 text-center lg:text-left">
          <div className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden relative shrink-0 shadow-md">
             <Image 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
              alt="Coach" 
              fill 
              className="object-cover" 
              sizes="64px"
              quality={80}
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-accent mb-2">NEED A CUSTOM PLAN?</h3>
            <p className="text-text-secondary text-sm md:text-base max-w-md">Get a personalized diet plan tailored to your body, goals, and lifestyle.</p>
          </div>
        </div>

        <button className="bg-accent text-black px-8 py-4 font-bold tracking-widest text-sm hover:bg-accent-hover transition-colors rounded-sm uppercase w-full md:w-auto flex justify-center items-center gap-2 shadow-md">
          GET STARTED <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Section>
  );
}

export function DietPlanCard({ plan, index }: { plan: typeof plans[0], index: number }) {
  return (
    <div 
      className={`glass rounded-2xl border ${plan.popular ? 'border-accent shadow-md' : 'border-card-border'} p-6 flex flex-col relative z-10 h-full shadow-sm`}
    >
      {plan.popular && (
        <div className="absolute -top-3 right-6 bg-accent text-black text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase shadow-sm">
          POPULAR
        </div>
      )}
      
      <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white mb-6 shadow-xl mx-auto max-w-[180px]">
        <Image 
          src={plan.image} 
          alt={plan.title} 
          fill 
          className="object-cover" 
          sizes="(max-width: 640px) 180px, 180px"
          quality={80}
        />
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full border border-accent bg-white/60 backdrop-blur-sm flex items-center justify-center">
          <plan.icon className="w-4 h-4 text-accent" />
        </div>
      </div>

      <h3 className="font-heading text-3xl font-bold tracking-wide mt-2 text-foreground">{plan.title}</h3>
      <p className="text-accent text-sm font-medium mb-6 uppercase tracking-wider">{plan.subtitle}</p>

      <ul className="space-y-4 mb-8 flex-1 text-left">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2 shadow-sm ${plan.popular ? 'bg-accent text-black hover:bg-accent-hover' : 'border border-accent text-accent hover:bg-accent/10'}`}>
        VIEW PLAN <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
