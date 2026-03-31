"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const items = [
  {
    name: "Zeylun Studio",
    description: "High-end UI/UX and product design for digital interfaces.",
  },
  {
    name: "Zeylun ERP",
    description: "Automated business management and resource planning.",
  },
  {
    name: "Zeylun Labs",
    description: "Experimental R&D for next-gen scalable systems.",
  },
  {
    name: "Zeylun AI",
    description: "Intelligent automation and data-driven insights.",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-zinc-950/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px] -z-10" />

      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base font-semibold leading-7 text-zinc-500 uppercase tracking-widest"
          >
            The Ecosystem
          </motion.h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl font-sora">
            Synergy under one brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 112, 243, 0.4)" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-white/5 p-8 rounded-2xl transition-all duration-300 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="h-1.5 w-12 bg-zinc-800 rounded-full mb-6 group-hover:bg-brand-blue transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4 font-sora group-hover:text-glow transition-all">{item.name}</h3>
              <p className="text-zinc-500 text-sm leading-6">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
