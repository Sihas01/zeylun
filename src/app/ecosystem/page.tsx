"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Layers, Globe, Zap, Cpu, Code2 } from "lucide-react";

export default function EcosystemPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[160px] opacity-20 -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora">
            Zeylun <span className="text-gradient">Ecosystem.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed">
            Our ecosystem connects technology, strategy, and business processes to create a seamless digital foundation for modern organizations. This is where innovation meets execution.
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Product Strategy",
              description: "Defining the roadmap for successful product launches and market entry.",
              icon: Zap,
            },
            {
              title: "Engineering",
              description: "High-performance software systems built with cutting-edge technologies.",
              icon: Code2,
            },
            {
              title: "Cloud Infrastructure",
              description: "Scalable, reliable, and secure cloud solutions that manage your data.",
              icon: Cpu,
            },
            {
              title: "Digital Transformation",
              description: "Modernizing legacy processes for a digital-first world and ensuring scalability.",
              icon: Layers,
            },
            {
              title: "Global Reach",
              description: "Expanding your digital presence across international markets and borders.",
              icon: Globe,
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="glass-card"
            >
              <item.icon className="h-10 w-10 text-white mb-6 opacity-80" />
              <h3 className="text-2xl font-semibold text-white font-sora mb-4">{item.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-32 p-12 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent -z-10" />
          <h2 className="text-3xl font-bold font-sora text-white max-w-xl mx-auto leading-tight">
            Connecting People, Technology, and Business Strategy
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            The Zeylun Ecosystem is more than just tools—it's a holistic approach to building digital powerhouses. We integrate every part of your digital infrastructure to ensure peak performance and growth.
          </p>
          <div className="mt-12">
            <button className="btn-secondary">Explore Our Methodology</button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
