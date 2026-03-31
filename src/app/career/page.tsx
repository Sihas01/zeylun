"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Briefcase, AlertCircle, Terminal, Globe, Rocket, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-brand-blue/10 blur-[160px] opacity-20 -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">
            <Sparkles className="h-3 w-3 text-brand-blue" /> Careers at Zeylun
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora">
            Join the <span className="text-gradient">Mission.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed">
            We are always on the lookout for thinkers, dreamers, and builders who want to shape the future of digital products and scalable systems.
          </p>
        </motion.div>

        {/* Improved Vacancies Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group p-1 lg:p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl"
        >
          <div className="relative rounded-[2rem] bg-zinc-950 p-8 lg:p-16 overflow-hidden">
            {/* Interior glow */}
            <div className="absolute -top-24 -right-24 h-64 w-64 bg-brand-blue/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-8 rounded-2xl bg-white/5 border border-white/10 p-4 shadow-xl">
                <Briefcase className="h-8 w-8 text-white opacity-80" />
              </div>
              <h2 className="text-3xl font-bold text-white font-sora mb-4">Current Openings</h2>
              <p className="text-zinc-400 font-light max-w-lg mx-auto leading-relaxed mb-10">
                While we're currently at full capacity, our team is constantly evolving. We're always eager to meet exceptional talent for future opportunities.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-medium text-zinc-500 mb-10">
                <div className="h-2 w-2 rounded-full bg-orange-500/50 animate-pulse" />
                No active vacancies right now
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group !px-10">
                  Submit Speculative Application
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Modern Stack",
              description: "Work with cutting-edge technologies like Next.js, TypeScript, and cloud-native systems.",
              icon: Terminal,
            },
            {
              title: "Remote First",
              description: "Our culture is built on trust and global collaboration, allowing you to work from anywhere.",
              icon: Globe,
            },
            {
              title: "Rapid Growth",
              description: "Accelerate your career while delivering high-impact systems for global industry leaders.",
              icon: Rocket,
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
            >
              <item.icon className="h-10 w-10 text-white/40 mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold text-white font-sora mb-3">{item.title}</h4>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
