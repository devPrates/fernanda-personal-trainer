"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Dumbbell, Users, Smartphone } from "lucide-react";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="relative min-h-screen flex items-center" id="home">
      {/* Background Image */}
      <div>
        {/* Background image for larger screens */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: "url('hero-white.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Background image for smaller screens */}
        <div
          className="absolute inset-0 z-0 md:hidden"
          style={{
            backgroundImage: "url('hero-mobile.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <div className="text-primary flex gap-2 font-bold items-center py-2">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              Seja bem vinda
            </span>
            <Heart className="size-4 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Alcance seus{" "}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              objetivos
            </span>{" "}
            a melhor {" "}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              Consultoria Online!
            </span>
          </h1>
          <p className="text-xl mb-8">
            Seja para treinar na <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              academia{" "}
            </span> 
            ou no conforto da sua{" "}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              casa
            </span>, eu posso ajudar você a conquistar o corpo que sempre quis!
          </p>

          <div className="space-x-4 mb-12">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => handleScrollToSection('about')}
            >
              Saiba Mais
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-black"
              onClick={() => handleScrollToSection('prices')}
            >
              Ver Plano
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
