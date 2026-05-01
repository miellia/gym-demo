"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Dumbbell, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export default function JoinModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </motion.div>
                  <h3 className="font-heading text-3xl font-bold uppercase tracking-wider mb-2">Request Received!</h3>
                  <p className="text-text-secondary">Our team will contact you shortly to confirm your membership and schedule your first visit.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold uppercase tracking-wider">Join FuelFit</h3>
                      <p className="text-accent text-sm font-bold tracking-widest uppercase">Start Your Journey</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-text-secondary">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input 
                          required 
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold tracking-widest uppercase text-text-secondary">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                          <input 
                            required 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold tracking-widest uppercase text-text-secondary">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                          <input 
                            required 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-text-secondary">Select Plan (Optional)</label>
                      <select className="w-full bg-background border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                        <option value="">I'm not sure yet</option>
                        <option value="basic">Basic Plan ($99/mo)</option>
                        <option value="pro">Pro Plan ($199/mo)</option>
                        <option value="elite">Elite Plan ($299/mo)</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-accent text-black font-bold tracking-widest uppercase py-4 rounded-lg mt-4 hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                      Submit Request <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
