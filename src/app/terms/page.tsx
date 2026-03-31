"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora">
            Terms of <span className="text-gradient">Service.</span>
          </h1>
          <p className="mt-8 text-lg text-zinc-400 font-light leading-relaxed">
            By accessing or using Zeylun's website or services, you agree to be bound by these Terms of Service.
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">User Conduct</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                You agree not to use our platform or services for any illegal purposes or in any way that could damage or disrupt our website or systems.
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">Intellectual Property</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                All content, trademarks, and intellectual property on this website belong to Zeylun or its licensors. You may not use or reproduce any content without permission.
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">Limitation of Liability</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Zeylun is not liable for any direct or indirect damages resulting from your use of this website or our services to the extent permitted by law.
              </p>
            </section>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/5 opacity-50">
            <p className="text-sm text-zinc-500 font-light italic">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
