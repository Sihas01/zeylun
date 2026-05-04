"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please email us directly at hello@zeylun.com");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-10 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-full max-w-6xl bg-brand-blue/10 blur-[120px] opacity-20 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora">
              Let's build something <span className="text-gradient">extraordinary.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 font-light max-w-lg">
              Whether you're looking for a consultation or have a specific project in mind, our team is ready to help you scale.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/5 p-3 border border-white/10">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <p className="text-zinc-400 mt-1">hello@zeylun.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/5 p-3 border border-white/10">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <a href="tel:+94 740311733" className="text-zinc-400 mt-1 hover:text-white transition-colors">+94 74 031 1733</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card !p-8 lg:!p-12 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-green-500/10 p-6 mb-6">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white font-sora">Message Sent!</h3>
                <p className="text-zinc-400 mt-4">
                  Thank you for reaching out. We'll get back to you at hello@zeylun.com very soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 btn-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Your Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry" className="bg-zinc-900">General Inquiry</option>
                    <option value="Book a Consultation" className="bg-zinc-900">Book a Consultation</option>
                    <option value="Project Proposal" className="bg-zinc-900">Project Proposal</option>
                    <option value="Technical Support" className="bg-zinc-900">Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary !py-4 text-lg group disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </button>

                <p className="text-xs text-zinc-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and we'll respond via <b>hello@zeylun.com</b>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
