"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
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
            Privacy <span className="text-gradient">Policy.</span>
          </h1>
          <p className="mt-8 text-lg text-zinc-400 font-light leading-relaxed">
            Your privacy is important to us. At Zeylun, we are committed to being transparent about how we collect, use, and protect your personal information.
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">Information we collect</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                When you visit our website, use our services, or contact us through our platform, we may collect personal information such as your name, email address, and any information you provide in messages or inquiries.
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">How we use your information</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                We use the information we collect to provide and improve our services, communicate with you about inquiries or support, and enhance your user experience on our website.
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-white font-sora mb-6">Data Security</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, please note that no method of transmission over the Internet is completely secure.
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
