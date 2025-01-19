import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Dumbbell, Headset, Users, Smartphone } from 'lucide-react'

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
                <div className="text-primary flex gap-2 font-bold items-center py-2">
                    <span className='bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Seja bem vindo </span>
                        <Heart className='size-4 text-yellow-500' />

                </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transforme Seu <span className='rounded-xl bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Corpo</span>, Transforme Sua <span className='p-1 rounded-xl  bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text'>Vida</span>!</h1>
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
                            <Dumbbell className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">Personal Trainer</h3>
                            <p>Treinos personalizado para o seu resultado.</p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <Users className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">Mentorias Online</h3>
                            <p>Análise e definição de treinos semanais.</p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <Smartphone className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">App para Treino</h3>
                            <p>Contato 24 horas para tirar duvidas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


