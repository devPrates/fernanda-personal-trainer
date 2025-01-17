import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Smile, Heart } from 'lucide-react'

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('hero-white.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2">
                    <span className='text-primary flex gap-2 font-bold items-center py-2 text-violet-600'>Seja bem vindo <Heart className='size-4' /></span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transforme Seu <span className='rounded-xl text-violet-600'>Corpo</span>, Transforme Sua <span className='p-1 rounded-xl  text-violet-600'>Vida</span>!</h1>
                    <p className="text-xl mb-8">aproveite a oportunidade, é hora de entrar na melhor forma da sua vida</p>

                    <div className="space-x-4 mb-12">
                        <Button variant="default" size="lg">
                            Ver Planos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-black">
                            Saiba Mais
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <Zap className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Rápido</h3>
                            <p>Soluções ágeis para suas necessidades</p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <Shield className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Seguro</h3>
                            <p>Proteção de dados em primeiro lugar</p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <Smile className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Amigável</h3>
                            <p>Interface intuitiva e fácil de usar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


