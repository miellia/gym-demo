"use client";

import { trainers, TrainerCard } from "@/components/gym/Trainers";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrainersPage() {
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
            <Users className="w-6 h-6 text-accent" />
            <p className="text-accent font-bold tracking-widest text-sm uppercase">THE ELITE TEAM</p>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            OUR EXPERT <span className="text-accent">TRAINERS</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            Meet the world-class professionals dedicated to your transformation. Each trainer brings specialized expertise to help you reach your specific fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
