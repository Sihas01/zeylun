"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-28 sm:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-20 -z-10" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-full max-w-6xl premium-glow opacity-40 blur-[130px] pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center relative">
          {/* Floating element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.1, x: 0, y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-blue blur-3xl hidden lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="flex flex-col text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-9xl font-sora max-w-5xl">
              <span>Digital products.</span>
              <span className="text-gradient">Built to scale.</span>
            </h1>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl lg:text-2xl font-light">
              Engineering high-performance websites and custom business platforms for global industry leaders.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Book a Consultation
              </Link>
              <Link href="/work" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Modern line separator */}
      <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
