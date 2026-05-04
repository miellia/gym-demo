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
      <div id="home">
        <Hero />
      </div>
      
      <Trainers />
      <SuccessStories />
      <Testimonials />
      <BMICalculator />
      <DietPlans />
      <Membership />
      <CTAFooter />
      
      <ScrollControls />
    </main>
  );
}
