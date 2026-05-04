"use client";

import { CheckCircle2, Dumbbell, Crown, Gem, Calendar, PauseCircle, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import JoinModal from "./JoinModal";

const plans = [
  {
    name: "BASIC",
    subtitle: "Perfect for getting started",
    price: "49",
    period: "/month",
    icon: Dumbbell,
    popular: false,
    features: [
      "Gym Access",
      "Basic Equipment",
      "1 Fitness Assessment",
      "Locker Room Access",
      "Free Wi-Fi"
    ]
  },
  {
    name: "PRO",
    subtitle: "For real progress & results",
    price: "99",
    period: "/month",
    icon: Crown,
    popular: true,
    features: [
      "Everything in Basic",
      "Access to All Equipment",
      "Personalized Workout Plan",
      "2 Personal Training Sessions",
      "InBody Analysis",
      "Group Classes"
    ]
  },
  {
    name: "ELITE",
    subtitle: "Ultimate transformation",
    price: "149",
    period: "/month",
    icon: Gem,
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited Personal Training",
      "Custom Diet Plan",
      "Priority Support",
      "Monthly Progress Tracking",
      "Guest Pass (2 per month)"
    ]
  }
];

export default function Membership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1); // Default to PRO

  return (
    <section className="py-24 bg-background px-6 lg:px-12 max-w-[1400px] mx-auto relative">
      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-accent/50" />
          <p className="text-accent font-bold tracking-widest text-sm uppercase">CHOOSE YOUR PLAN</p>
          <div className="w-12 h-px bg-accent/50" />
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
          MEMBERSHIP <span className="text-accent">PLANS</span>
        </h2>
        <p className="text-text-secondary">Flexible plans. Premium facilities. Real results.</p>
      </div>

      {/* Mobile Tab Buttons */}
      <div className="lg:hidden flex justify-center gap-2 mb-12 bg-card/30 p-1.5 rounded-xl border border-white/5 max-w-sm mx-auto">
        {plans.map((plan, i) => (
          <button
            key={plan.name}
            onClick={() => setActiveTab(i)}
            className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              activeTab === i 
                ? "bg-accent text-black shadow-[0_0_20px_rgba(0,255,136,0.2)]" 
                : "text-text-secondary hover:text-white hover:bg-white/5"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Desktop Grid View (lg+) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16 relative z-10 items-center">
        {plans.map((plan, i) => (
          <MembershipCard key={i} plan={plan} i={i} onChoose={() => setIsModalOpen(true)} />
        ))}
      </div>

      {/* Mobile Single View (< lg) */}
      <div className="lg:hidden mb-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <MembershipCard plan={plans[activeTab]} i={activeTab} onChoose={() => setIsModalOpen(true)} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Benefits Section - Refactored for Screenshot Layout */}
      <div className="bg-card border border-white/5 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-10 md:gap-16 w-full lg:w-auto">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0">
              <Calendar className="w-7 h-7 text-accent" />
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl tracking-wider uppercase text-white">NO JOINING FEE</div>
              <div className="text-text-secondary text-sm">Limited Time Offer</div>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0">
              <PauseCircle className="w-7 h-7 text-accent" />
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl tracking-wider uppercase text-white">FREEZE YOUR PLAN</div>
              <div className="text-text-secondary text-sm">Pause Anytime</div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <div>
              <div className="font-bold text-lg md:text-xl tracking-wider uppercase text-white">BRING A FRIEND</div>
              <div className="text-text-secondary text-sm">Get 10% OFF</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] flex flex-col items-center gap-6 bg-black/40 p-8 lg:p-10 rounded-2xl border border-white/5 text-center">
          <div>
            <h4 className="font-bold text-xl tracking-[0.2em] uppercase text-white mb-2">READY TO TRANSFORM?</h4>
            <p className="text-text-secondary text-sm leading-relaxed">Let&apos;s build your strongest version together.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-accent text-black py-4 font-bold tracking-[0.2em] text-sm hover:bg-accent-hover transition-all rounded-lg uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
          >
            JOIN NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>


      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

function MembershipCard({ plan, i, onChoose }: { plan: typeof plans[0], i: number, onChoose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`bg-card rounded-2xl relative flex flex-col ${plan.popular ? 'border-2 border-accent transform lg:-translate-y-4 shadow-[0_0_30px_rgba(0,255,136,0.1)] py-12 px-8' : 'border border-white/5 py-10 px-8'}`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-black text-xs font-bold tracking-widest px-6 py-2 rounded-sm uppercase flex items-center gap-2">
          <StarIcon className="w-3 h-3" /> MOST POPULAR
        </div>
      )}
      
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
          <plan.icon className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="text-center border-b border-white/5 pb-8 mb-8">
        <h3 className="font-heading text-4xl font-bold tracking-wider mb-2">{plan.name}</h3>
        <p className="text-text-secondary text-sm mb-6">{plan.subtitle}</p>
        <div className="flex items-end justify-center gap-1 font-heading">
          <span className="text-3xl font-bold">$</span>
          <span className="text-6xl font-bold leading-none">{plan.price}</span>
          <span className="text-text-secondary text-lg mb-1 tracking-widest font-sans">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onChoose}
        className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2 ${plan.popular ? 'bg-accent text-black hover:bg-accent-hover' : 'border border-accent text-accent hover:bg-accent/10'}`}
      >
        CHOOSE PLAN <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
