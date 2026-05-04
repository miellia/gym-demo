"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Target, ArrowRight, Activity } from "lucide-react";

export default function BMICalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);

  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Healthy";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  // Rough Macro estimate (Simple 40/40/20 split of ~2000 calories for demo)
  const calories = weight * 33; // Very basic TDEE estimate
  const macros = {
    protein: Math.round((calories * 0.4) / 4),
    carbs: Math.round((calories * 0.4) / 4),
    fats: Math.round((calories * 0.2) / 9),
  };

  const getStatusColor = () => {
    if (status === "Healthy") return "text-accent";
    if (status === "Underweight") return "text-blue-400";
    return "text-red-500";
  };

  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <Calculator className="w-4 h-4 text-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Smart Tool</span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
              CALCULATE YOUR <span className="text-accent">POTENTIAL</span>
            </h2>
          </div>

          <div className="w-full space-y-10">
            {/* Input Controls */}
            <div className="space-y-8">
              {/* Weight Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">Weight (kg)</label>
                  <span className="text-xl font-bold text-accent italic">{weight}</span>
                </div>
                <div className="relative h-4 flex items-center">
                  <div className="absolute w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      animate={{ width: `${((weight - 40) / (150 - 40)) * 100}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="absolute w-full appearance-none bg-transparent cursor-pointer z-10 outline-none
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                  />
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">Height (cm)</label>
                  <span className="text-xl font-bold text-accent italic">{height}</span>
                </div>
                <div className="relative h-4 flex items-center">
                  <div className="absolute w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      animate={{ width: `${((height - 140) / (220 - 140)) * 100}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="absolute w-full appearance-none bg-transparent cursor-pointer z-10 outline-none
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Results Card */}
            <motion.div
              layout
              className="bg-background border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Activity className="w-24 h-24 text-accent" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* BMI Score */}
                <div className="text-center md:text-left space-y-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary">Your BMI Score</span>
                  <motion.div 
                    key={bmi}
                    initial={{ scale: 0.9, filter: "blur(4px)" }}
                    animate={{ scale: 1, filter: "blur(0px)" }}
                    className="text-6xl font-bold text-accent tracking-tighter drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]"
                  >
                    {bmi}
                  </motion.div>
                  <div className={`text-sm font-bold uppercase tracking-[0.2em] ${getStatusColor()}`}>
                    {status}
                  </div>
                </div>

                {/* Macro Recommendations */}
                <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
                  <div className="bg-card/50 border border-white/5 p-3 rounded-xl text-center min-w-[80px]">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-text-secondary block mb-1">Protein</span>
                    <div className="text-sm font-bold text-white">{macros.protein}g</div>
                  </div>
                  <div className="bg-card/50 border border-white/5 p-3 rounded-xl text-center min-w-[80px]">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-text-secondary block mb-1">Carbs</span>
                    <div className="text-sm font-bold text-white">{macros.carbs}g</div>
                  </div>
                  <div className="bg-card/50 border border-white/5 p-3 rounded-xl text-center min-w-[80px]">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-text-secondary block mb-1">Fats</span>
                    <div className="text-sm font-bold text-white">{macros.fats}g</div>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center">
                <a 
                  href="#pricing"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-black font-bold tracking-widest uppercase py-4 rounded-lg hover:bg-accent-hover transition-all text-xs"
                >
                  Get Your Plan <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
