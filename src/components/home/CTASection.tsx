"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-black">
      {/* Dynamic background beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-full max-w-6xl bg-brand-blue/20 blur-[160px] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-background opacity-5 -z-20" />
      
      <Container>
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl font-sora mb-8 text-gradient">
              Build something that moves your business forward.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 mb-12 sm:text-xl font-light">
              Ready to scale your digital presence or optimize your internal operations? Let's discuss how we can help your business reach its full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary shadow-[0_0_30px_rgba(0,112,243,0.3)]"
              >
                Book a Consultation
              </motion.button>
              <button className="btn-secondary">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
