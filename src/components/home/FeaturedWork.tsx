"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Joyful Tours",
    category: "Travel & E-Commerce Platform",
    description: "A high-performance booking platform for Sri Lanka tour packages, featuring custom itineraries and responsive private transport booking.",
    color: "from-emerald-600/20 to-green-600/20",
    href: "https://joyfultours.lk",
    image: "/joyful-tours.png",
  },
  {
    title: "Zeylun LMS",
    category: "Learning Management System",
    description: "A comprehensive academic platform handling complex course structures, live student schedules, and lecturer management systems.",
    color: "from-brand-blue/20 to-purple-600/20",
    href: "https://app.zeylun.com",
    image: "/zeylun-lms.png",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-12 sm:py-32 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-brand-blue uppercase tracking-widest">Selected Work</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl font-sora">
              Client Projects.
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
            >
              <Link href={project.href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className={`aspect-[16/9] w-full rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 overflow-hidden relative mb-8 flex items-center justify-center transition-all group-hover:border-white/20`}>
                  <div className="absolute inset-0 grid-background opacity-20" />
                  {/* Project Image */}
                  <div className="absolute bottom-[-10%] right-[-5%] w-[85%] h-[85%] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:translate-y-[-5%] group-hover:translate-x-[-2%] overflow-hidden border border-white/10 bg-zinc-900">
                    <div className="w-full h-8 bg-zinc-900/90 border-b border-white/5 flex items-center px-4 space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-brand-blue font-sora mb-2 flex items-center gap-2 block">
                    {project.category}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 font-sora">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-6 max-w-md">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
