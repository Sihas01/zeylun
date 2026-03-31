import Link from "next/link";
import { Container } from "../ui/Container";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Work", href: "/work" },
    { name: "Career", href: "/career" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black py-12">
      <Container>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold font-sora tracking-tight text-white">
              Zeylun
            </Link>
            <p className="text-sm leading-6 text-zinc-400 max-w-xs">
              Building high-performance digital systems and products for modern businesses globally.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Connect</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} Zeylun. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-zinc-500 italic">
            Built for scalability.
          </p>
        </div>
      </Container>
    </footer>
  );
}
