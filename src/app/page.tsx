import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhyZeylun } from "@/components/home/WhyZeylun";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Ecosystem />
        <FeaturedWork />
        <WhyZeylun />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
