"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Zeylun LMS",
    description: "A comprehensive learning management system for schools and educators featuring online exams, student management, and payments.",
    image: "/zeylun-lms.png",
    category: "EdTech",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    link: "https://lms.zeylun.com",
  },
  {
    title: "Joyful Tours",
    description: "Luxury travel and tourism platform showcasing curated travel packages across Sri Lanka.",
    image: "/joyful-tours.png",
    category: "Travel",
    tags: ["React", "Next.js", "Tailwind CSS", "CMS"],
    link: "https://joyfultours.lk",
  },
];

export default function WorkPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-sora"
          >
            Featured <span className="text-gradient hover:opacity-80 transition-opacity">Work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A collection of high-performance digital products and systems crafted by Zeylun to solve real-world problems.
          </motion.p>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="glass-card !p-0 overflow-hidden border-white/5 hover:border-white/10 transition-all flex flex-col h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="btn-primary !px-6 !py-2 text-sm flex items-center">
                      View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora mb-3">{project.title}</h3>
                  <p className="text-zinc-400 font-light text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-40 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-zinc-600 mb-8 uppercase tracking-[0.3em] text-[10px] font-bold">
            <div className="h-px w-8 bg-zinc-800" />
            <span>Coming Soon</span>
            <div className="h-px w-8 bg-zinc-800" />
          </div>
          <h2 className="text-3xl font-bold font-sora text-white">More Projects in Pipeline</h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto font-light">
            We are currently wrapping up several high-profile enterprise systems and customer-facing platforms.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
