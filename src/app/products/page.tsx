"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/home/CTASection";

const products = [
  {
    title: "Zeylun LMS",
    description: "A modern learning management system designed for tutors, educational businesses, and training providers to manage classes, students, learning content, and growth.",
    category: "EdTech",
    tags: ["Course Management", "Student Portal", "Payments", "Analytics"],
    link: "https://app.zeylun.com",
    cta: "Request Demo",
    image: "/zeylun-lms.png",
  },
  {
    title: "Zeylun Outreach System",
    description: "A streamlined outreach and lead management system designed to help teams manage leads, follow-ups, communication flow, and sales activity more efficiently.",
    category: "CRM & Sales",
    tags: ["Lead Management", "Pipelines", "Automation", "Analytics"],
    link: "https://outreach.zeylun.com",
    cta: "Request Demo",
    image: "/outreach-zeylun.png", // Temporarily using available image as placeholder
  },
];

export default function ProductsPage() {
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
            Our <span className="text-gradient hover:opacity-80 transition-opacity">Products.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Internal software products and solutions built by Zeylun to help businesses and educational providers operate more efficiently.
          </motion.p>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="glass-card !p-0 overflow-hidden border-white/5 hover:border-white/10 transition-all flex flex-col h-full bg-white/5 rounded-2xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Link 
                      href={product.link}
                      className="btn-primary !px-6 !py-2 text-sm flex items-center"
                      {...(product.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {product.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora mb-4">{product.title}</h3>
                  <p className="text-zinc-400 font-light text-base mb-8 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-zinc-500 bg-black/50 px-3 py-1.5 rounded-md border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      
      <div className="mt-32">
        <CTASection />
      </div>
    </div>
  );
}
