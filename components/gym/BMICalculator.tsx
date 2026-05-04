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
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Input Controls */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <Calculator className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-bold tracking-widest uppercase">Smart Calculator</span>
              </motion.div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                Calculate Your <span className="text-stroke">Potential</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl">
                Get instant feedback on your BMI and suggested daily macros to help you choose the right training plan.
              </p>
            </div>

            <div className="space-y-8">
              {/* Weight Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold tracking-widest uppercase text-text-secondary">Weight (kg)</label>
                  <span className="text-2xl font-bold text-white">{weight}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>

              {/* Height Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold tracking-widest uppercase text-text-secondary">Height (cm)</label>
                  <span className="text-2xl font-bold text-white">{height}</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                  className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>
            </div>
          </div>

          {/* Right: Results Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-background border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-32 h-32 text-accent" />
              </div>

              <div className="relative z-10 space-y-12">
                {/* BMI Score */}
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-text-secondary">Your BMI Score</span>
                  <div className="text-7xl md:text-8xl font-bold text-accent tracking-tighter">
                    {bmi}
                  </div>
                  <div className={`text-xl font-bold uppercase tracking-widest ${getStatusColor()}`}>
                    {status}
                  </div>
                </div>

                {/* Macro Recommendations */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/50 border border-white/5 p-4 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">Protein</span>
                    <div className="text-xl font-bold text-white">{macros.protein}g</div>
                  </div>
                  <div className="bg-card/50 border border-white/5 p-4 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">Carbs</span>
                    <div className="text-xl font-bold text-white">{macros.carbs}g</div>
                  </div>
                  <div className="bg-card/50 border border-white/5 p-4 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">Fats</span>
                    <div className="text-xl font-bold text-white">{macros.fats}g</div>
                  </div>
                </div>

                {/* Conversion Hook */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">Recommended Goal</p>
                      <p className="text-text-secondary text-sm">Based on your metrics, we suggest the <span className="text-accent font-bold">Pro Transformation</span> plan.</p>
                    </div>
                  </div>

                  <a 
                    href="#pricing"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-black font-bold tracking-widest uppercase py-5 rounded-xl hover:bg-accent-hover transition-all transform hover:scale-[1.02]"
                  >
                    View Recommended Plans <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
