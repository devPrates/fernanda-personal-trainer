import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Dumbbell, Users, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
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
              Seja bem vindo
            </span>
            <Heart className="size-4 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Alcance seus{" "}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              objetivos
            </span>{" "}
            com treinamento{" "}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              personalizado!
            </span>
          </h1>
          <p className="text-xl mb-8">
            Aproveite a oportunidade, é hora de entrar na melhor forma da sua
            vida.
          </p>

          <div className="space-x-4 mb-12">
            <Button variant="default" size="lg" className="bg-purple-500">
              Ver Planos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-black">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
