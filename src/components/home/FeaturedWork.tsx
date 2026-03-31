"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EcoConnect Platform",
    category: "Custom ERP & Dashboard",
    description: "A centralized platform for resource management, achieving a 40% increase in operational efficiency.",
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "Zeylun Live",
    category: "LMS & Video Streaming",
    description: "Scalable education platform supporting thousands of concurrent users with low-latency streaming.",
    color: "from-purple-600/20 to-blue-600/20",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-brand-blue uppercase tracking-widest">Featured Work</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl font-sora">
              Results that matter.
            </p>
          </div>
          <button className="btn-secondary group">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[16/9] w-full rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 overflow-hidden relative mb-8 flex items-center justify-center transition-all group-hover:border-white/20`}>
                <div className="absolute inset-0 grid-background opacity-20" />
                <div className="z-10 text-white/5 font-sora text-8xl font-bold select-none tracking-tighter group-hover:scale-110 transition-transform duration-700">
                  {project.title.split(' ')[0]}
                </div>
                {/* Subtle interface representation (CSS only) */}
                <div className="absolute bottom-[-10%] right-[-5%] w-[80%] h-[80%] bg-zinc-900 rounded-xl border border-white/10 shadow-2xl p-4 transition-transform group-hover:translate-y-[-5%] group-hover:translate-x-[-2%]">
                   <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                   </div>
                   <div className="space-y-3">
                      <div className="h-4 w-[60%] bg-white/5 rounded" />
                      <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5" />
                      <div className="flex gap-4">
                        <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
                        <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
                        <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
                      </div>
                   </div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-brand-blue font-sora mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-3 font-sora">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-6 max-w-md">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
