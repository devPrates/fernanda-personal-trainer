import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    
      <div className="h-screen bg-gray-100">a</div>
      <div className="h-screen bg-gray-100">b</div>
    </main>
  );
}
