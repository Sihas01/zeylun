"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={cn("nav-blur", isOpen && "!z-[9999]")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold tracking-tight text-white font-sora">Zeylun</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="btn-primary group !px-6 !py-2">
            Let's Talk
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col bg-black lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                <span className="text-xl font-bold font-sora text-white">Zeylun</span>
              </Link>
              <button
                type="button"
                className="rounded-full bg-zinc-800 p-2 text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="mt-8 flex flex-col px-6">
              <div className="divide-y divide-white/5 border-t border-white/5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.1 + i * 0.05 } 
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between py-6 text-2xl font-semibold transition-colors",
                        pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <ArrowRight className={cn(
                        "h-6 w-6 transition-transform",
                        pathname === link.href ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4 } 
                }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  className="btn-primary flex w-full items-center justify-center py-4 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
            
            {/* Footer decoration */}
            <div className="mt-auto p-10 opacity-30">
              <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
                Creating Digital Excellence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
