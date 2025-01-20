import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}
