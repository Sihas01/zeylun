"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Code, Layout, database, Shield, Cpu, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, responsive websites built with modern technologies like React, Next.js, and TypeScript.",
    icon: Globe,
  },
  {
    title: "Custom Software",
    description: "Tailored business solutions designed to solve complex operational challenges and improve efficiency.",
    icon: Code,
  },
  {
    title: "Scalable Systems",
    description: "Architecting cloud-native systems that grow with your business, ensuring stability and performance.",
    icon: Cpu,
  },
  {
    title: "UI/UX Design",
    description: "Premium user interfaces and experiences that delight your customers and strengthen your brand.",
    icon: Layout,
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora">
            Our <span className="text-gradient">Services.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed">
            We provide a comprehensive suite of digital engineering services designed to help modern businesses scale and succeed in a digital-first world.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="glass-card group"
            >
              <div className="rounded-2xl bg-white/5 p-4 w-fit border border-white/10 mb-6 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all">
                <service.icon className="h-8 w-8 text-white group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-white font-sora">{service.title}</h3>
              <p className="mt-4 text-zinc-400 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-32 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-12 text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] -z-10" />
          <h2 className="text-3xl font-bold text-white font-sora">Ready to start your project?</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto font-light">
            Contact us today for a free consultation and let's discuss how we can build something amazing together.
          </p>
          <div className="mt-10">
            <button className="btn-primary">Get in Touch</button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
