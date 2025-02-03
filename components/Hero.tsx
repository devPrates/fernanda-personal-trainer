"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 overflow-hidden" id="home">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 py-32 sm:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left text-white mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text text-sm mr-2">Seja bem vindo</span>
              <Heart className="w-4 h-4 stroke-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alcance seus{" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
                objetivos
              </span>{" "}
              com a melhor {" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
                Consultoria Online!
              </span></h1>
            <p className="text-xl mb-6">
              Seja para treinar na <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
                academia{" "}
              </span>
              ou no conforto da sua{" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
                casa
              </span>, eu posso ajudar você a conquistar o corpo que sempre quis!
            </p>
            <div className="space-x-4">
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
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mobile-image.svg"
              alt="Hero Image"
              width={1600}
              height={700}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

