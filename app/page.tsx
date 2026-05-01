import Hero from "@/components/gym/Hero";
import Trainers from "@/components/gym/Trainers";
import Testimonials from "@/components/gym/Testimonials";
import DietPlans from "@/components/gym/DietPlans";
import Membership from "@/components/gym/Membership";
import CTAFooter from "@/components/gym/CTAFooter";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen">
      <div id="home"><Hero /></div>
      <div id="trainers"><Trainers /></div>
      <div id="about"><Testimonials /></div>
      <div id="programs"><DietPlans /></div>
      <div id="pricing"><Membership /></div>
      <div id="contact"><CTAFooter /></div>
    </main>
  );
}
