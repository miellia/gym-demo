"use client";

import Image from "next/image";
import { CheckCircle2, ClipboardList, TrendingUp, Users, ArrowRight, Target, Apple, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
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
  return (
    <section className="py-24 bg-background px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-accent font-bold tracking-widest text-sm uppercase">EAT RIGHT. FUEL YOUR TRANSFORMATION.</p>
            <div className="w-12 h-px bg-accent/50 hidden md:block" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            DIET <span className="text-accent">PLANS</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Personalized nutrition plans designed by expert nutritionists to help you achieve your fitness goals faster.
          </p>
          
          <div className="flex flex-wrap gap-6 md:gap-12 mt-8">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-accent" />
              <div className="text-xs font-bold tracking-widest uppercase">Nutritionist<br/>Approved</div>
            </div>
            <div className="flex items-center gap-3">
              <Apple className="w-6 h-6 text-accent" />
              <div className="text-xs font-bold tracking-widest uppercase">Balanced<br/>Meals</div>
            </div>
            <div className="flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-accent" />
              <div className="text-xs font-bold tracking-widest uppercase">Custom Plan<br/>For You</div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <div className="text-xs font-bold tracking-widest uppercase">Faster<br/>Results</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-white/5 rounded-xl p-6 hidden lg:block text-center min-w-[180px]">
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center">
              <span className="text-accent text-lg">🔥</span>
            </div>
          </div>
          <div className="text-xs text-text-secondary font-bold tracking-widest uppercase mb-2">CALORIE<br/>CONTROLLED</div>
          <div className="font-heading text-3xl text-accent font-bold">500 - 700</div>
          <div className="text-[10px] text-text-secondary tracking-widest uppercase mt-1">CAL / MEAL</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
        {/* Large Decorative Image in Background on Desktop */}
        <div className="hidden lg:block absolute -right-24 -top-64 w-[500px] h-[500px] rounded-full overflow-hidden opacity-20 pointer-events-none blur-sm z-0">
          <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop" alt="Food background" fill className="object-cover" />
        </div>

        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-card rounded-2xl border ${plan.popular ? 'border-accent' : 'border-white/5'} p-6 flex flex-col relative z-10`}
          >
            {plan.popular && (
              <div className="absolute -top-3 right-6 bg-accent text-black text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase">
                POPULAR
              </div>
            )}
            
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-background mb-6 shadow-2xl mx-auto max-w-[200px]">
              <Image src={plan.image} alt={plan.title} fill className="object-cover" />
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full border border-accent bg-card/80 backdrop-blur-sm flex items-center justify-center">
                <plan.icon className="w-4 h-4 text-accent" />
              </div>
            </div>

            <h3 className="font-heading text-3xl font-bold tracking-wide mt-2">{plan.title}</h3>
            <p className="text-accent text-sm font-medium mb-6">{plan.subtitle}</p>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2 ${plan.popular ? 'bg-accent text-black hover:bg-accent-hover' : 'border border-accent text-accent hover:bg-accent/10'}`}>
              VIEW PLAN <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
        
        {/* Mobile-only meal plan includes */}
        <div className="lg:hidden bg-card border border-white/5 rounded-2xl p-6 mt-6 col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <div>
               <h4 className="font-bold uppercase tracking-widest text-sm">MEAL PLAN</h4>
               <p className="text-accent font-bold text-sm tracking-widest">INCLUDES</p>
             </div>
           </div>
           <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3 text-sm text-text-secondary"><ClipboardList className="w-4 h-4 text-white" /> Custom Meal Plan</div>
             <div className="flex items-center gap-3 text-sm text-text-secondary"><ClipboardList className="w-4 h-4 text-white" /> Grocery List</div>
           </div>
        </div>
      </div>

      <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
        <div className="flex items-center gap-6 text-center lg:text-left">
          <div className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden relative shrink-0">
             <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" alt="Coach" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-accent mb-2">NEED A CUSTOM PLAN?</h3>
            <p className="text-text-secondary text-sm md:text-base max-w-md">Get a personalized diet plan tailored to your body, goals, and lifestyle.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-accent" />
            <div className="text-xs font-bold tracking-widest uppercase">ASSESSMENT<br/>BASED PLAN</div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-accent" />
            <div className="text-xs font-bold tracking-widest uppercase">EXPERT<br/>NUTRITIONISTS</div>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-accent" />
            <div className="text-xs font-bold tracking-widest uppercase">GOAL<br/>SPECIFIC</div>
          </div>
        </div>

        <button className="bg-accent text-black px-8 py-4 font-bold tracking-widest text-sm hover:bg-accent-hover transition-colors rounded-sm uppercase w-full md:w-auto flex justify-center items-center gap-2">
          GET STARTED <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
