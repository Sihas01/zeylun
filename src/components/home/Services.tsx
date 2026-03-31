"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Globe, Layers, Database, Cloud } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "High-performance marketing websites built for speed and conversion with premium design.",
    icon: Globe,
  },
  {
    title: "Custom Platforms",
    description: "Tailored SaaS platforms and customer portals designed to solve complex business needs.",
    icon: Layers,
  },
  {
    title: "ERP / Internal Systems",
    description: "Robust internal tools and business management systems to automate core workflows.",
    icon: Database,
  },
  {
    title: "Cloud & Deployment",
    description: "Scalable cloud architecture and automated deployment pipelines for mission-critical apps.",
    icon: Cloud,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-black overflow-hidden relative">
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue uppercase tracking-widest animate-pulse">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl font-sora">
            Focused on outcomes.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We don't just build websites; we build scalable digital infrastructure that drives business growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className="flex flex-col glass-card group relative"
              >
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/[0.02] transition-colors rounded-2xl -z-10" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-all group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-white font-sora group-hover:text-brand-blue transition-colors">
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-zinc-400">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
