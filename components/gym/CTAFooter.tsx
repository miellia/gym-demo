"use client";

import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle, PauseCircle, Users, Quote, Dumbbell, Star, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import JoinModal from "./JoinModal";

export default function CTAFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-background pt-24 pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-accent font-bold tracking-widest text-sm uppercase">READY TO TRANSFORM?</p>
              <div className="w-12 h-px bg-accent/50" />
            </div>
            
            <h2 className="font-heading text-6xl md:text-7xl font-bold uppercase tracking-tight mb-6 leading-[0.9]">
              JOIN THE <span className="text-white">MOVEMENT</span><br />
              <span className="text-accent">BE YOUR BEST.</span>
            </h2>
            
            <p className="text-text-secondary text-lg max-w-lg mb-8 leading-relaxed">
              Start your journey today and get access to world-class facilities, expert coaches, and a community that pushes you to be better every day.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 mb-10 p-6 rounded-xl border border-white/5 bg-card/30">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-bold text-sm tracking-widest uppercase">NO JOINING FEE</div>
                  <div className="text-text-secondary text-xs">Limited Time Offer</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <PauseCircle className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-bold text-sm tracking-widest uppercase">FREEZE YOUR PLAN</div>
                  <div className="text-text-secondary text-xs">Pause Anytime</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-bold text-sm tracking-widest uppercase">BRING A FRIEND</div>
                  <div className="text-text-secondary text-xs">Get 10% OFF</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-accent text-black px-8 py-4 font-bold hover:bg-accent-hover transition-colors rounded-sm text-sm uppercase"
              >
                JOIN NOW <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#contact" className="flex items-center justify-center gap-2 border border-accent text-accent px-8 py-4 font-bold hover:bg-accent/10 transition-colors rounded-sm text-sm uppercase">
                SCHEDULE A TOUR <Calendar className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym member" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 md:right-8 bg-card border border-white/5 p-6 rounded-2xl max-w-xs shadow-2xl backdrop-blur-md">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-white text-lg font-medium leading-relaxed">
                "The only bad workout is the one that <span className="text-accent">didn't happen.</span>"
              </p>
            </div>
          </div>
        </div>

        {/* Big Stats Bar */}
        <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 mb-24 flex flex-wrap lg:flex-nowrap justify-between gap-8 mt-16 md:mt-24">
          <div className="flex items-center gap-4 w-[calc(50%-1rem)] lg:w-auto justify-center lg:justify-start">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">HAPPY MEMBERS</div>
            </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 w-[calc(50%-1rem)] lg:w-auto justify-center">
            <Dumbbell className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold">20+</div>
              <div className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">EXPERT TRAINERS</div>
            </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 w-[calc(50%-1rem)] lg:w-auto justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded flex items-center justify-center border-2 border-accent text-accent font-bold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold">10K+</div>
              <div className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">TRANSFORMATIONS</div>
            </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 w-[calc(50%-1rem)] lg:w-auto justify-center">
            <Star className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold">4.9</div>
              <div className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">AVERAGE RATING</div>
            </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold">7</div>
              <div className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">DAYS A WEEK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card pt-16 pb-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                  <path d="M10 28L18 4H26L18 28H10Z" fill="currentColor" />
                  <path d="M2 28L10 4H18L10 28H2Z" fill="currentColor" />
                </svg>
                <span className="font-heading text-2xl tracking-wider font-bold italic">FUELFIT</span>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                More than a gym. It's a lifestyle. Join a community that inspires, motivates and transforms.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.674c0 1.513-1.242 2.756-2.756 2.756s-2.756-1.243-2.756-2.756 1.242-2.756 2.756-2.756h.774V9.529h-.774c-3.411 0-6.19 2.779-6.19 6.19s2.779 6.19 6.19 6.19 6.19-2.779 6.19-6.19V11.23a8.121 8.121 0 0 0 4.79 1.545v-3.434a4.814 4.814 0 0 1-1.009-.655z"/></svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-bold tracking-widest uppercase mb-6">QUICK LINKS</h4>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#trainers" className="hover:text-accent transition-colors">Trainers</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Memberships</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>


            <div className="lg:col-span-3">
              <h4 className="font-bold tracking-widest uppercase mb-6">CONTACT US</h4>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span>hello@fuelfit.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span>123 Fitness Ave,<br/>New York, NY 10001</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-bold tracking-widest uppercase mb-6">GYM HOURS</h4>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">5:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">7:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">7:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
            <p>© 2024 FuelFit. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="w-px h-4 bg-white/10" />
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
