import Hero from "@/components/gym/Hero";
import Trainers from "@/components/gym/Trainers";
import Testimonials from "@/components/gym/Testimonials";
import SuccessStories from "@/components/gym/SuccessStories";
import BMICalculator from "@/components/gym/BMICalculator";
import DietPlans from "@/components/gym/DietPlans";
import Membership from "@/components/gym/Membership";
import CTAFooter from "@/components/gym/CTAFooter";
import ScrollControls from "@/components/ui/ScrollControls";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen">
      <div id="home"><Hero /></div>
      
      {/* Subtle Divider for Section Separation */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="trainers" className="relative">
        <Trainers />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="results" className="relative">
        <SuccessStories />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="about" className="relative">
        <Testimonials />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="calculator" className="relative">
        <BMICalculator />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="programs" className="relative">
        <DietPlans />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div id="pricing" className="relative">
        <Membership />
      </div>

      <div id="contact" className="relative">
        <CTAFooter />
      </div>
      
      <ScrollControls />
    </main>
  );
}
