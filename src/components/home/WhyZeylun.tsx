"use client";

import { Container } from "../ui/Container";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Modern Architecture",
    description: "Built with the latest battle-tested technologies like Next.js, and Cloudflare Workers.",
    icon: Zap,
  },
  {
    title: "Fast Execution",
    description: "Iterative development cycles focused on delivering value quickly without compromising quality.",
    icon: TrendingUp,
  },
  {
    title: "Business-Focused",
    description: "We align our technical decisions with your business goals to ensure maximum ROI.",
    icon: Shield,
  },
  {
    title: "Scalable Solutions",
    description: "Architectures designed to handle exponential growth from day one.",
    icon: CheckCircle,
  },
];

export function WhyZeylun() {
  return (
    <section id="why-zeylun" className="py-12 sm:py-32 bg-black">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mb-24">
          <h2 className="text-base font-semibold leading-7 text-brand-blue uppercase tracking-widest">The Zeylun Advantage</h2>
          <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl font-sora">
            Why high-growth companies choose us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 transition-all group-hover:border-brand-blue/50">
                   <reason.icon className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">{reason.title}</h3>
                <p className="text-zinc-400 text-sm leading-7 max-w-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
