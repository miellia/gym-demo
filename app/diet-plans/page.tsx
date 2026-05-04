"use client";

import { plans, DietPlanCard } from "@/components/gym/DietPlans";
import { ArrowLeft, ClipboardList } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DietPlansPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <ClipboardList className="w-6 h-6 text-accent" />
            <p className="text-accent font-bold tracking-widest text-sm uppercase">NUTRITION FIRST</p>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            ALL DIET <span className="text-accent">PLANS</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            Explore our full range of nutritionist-approved diet plans. Whether you're looking to bulk, shred, or maintain, we have the perfect fuel for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <DietPlanCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
