import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { oswald, raleway } from '@/types/fonts'
import { ClipboardList, Dumbbell, Headset, Heart, Info, MonitorPlay, Receipt } from 'lucide-react'

const card = [
  {
    name: 'treinamento personalizado',
    icon: ClipboardList,
  },
  {
    name: 'Mentoria exclusiva',
    icon: Dumbbell,
  },
  {
    name: 'Atendimento 24 horas',
    icon: Headset,
  },
]


export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-violet-50 to-violet-300">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col">
            <div>
              <span className='text-primary flex gap-2 font-bold items-center py-2'>Seja bem vindo <Heart className='size-4'/></span>
              <h1 className={`text-5xl md:text-6xl font-bold mb-4`}>Transforme Seu <span className='rounded-xl text-violet-600'>Corpo</span>, Transforme Sua <span className='p-1 rounded-xl  text-violet-600'>Vida</span>!</h1>
              <p className={`text-xl mb-6 ${oswald.className}`}>aproveite a oportunidade, é hora de entrar na melhor forma da sua vida</p>
              <div className="space-x-4">
                <Button size={'lg'} className='shadow-lg'>Ver Planos  <Receipt /> </Button>
                <Button variant="outline" size={'lg'} className='shadow-lg'>Saiba Mais</Button>
              </div>
            </div>
            <div className={`uppercase ${oswald.className} flex flex-col gap-4 mt-20`} >
              <h2 className='' >o que você ganha</h2>
              <div className='flex flex-wrap gap-10'>
              {card.map((card, i) => (
              <div key={i} className={`flex items-center gap-2 w-32`}>
                  <card.icon aria-hidden="true" className="size-8 " />
                  <span>{card.name}</span>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[-15%] bottom-0 w-full md:w-[70%]">
        <Image
          src="/bg-hero.svg"
          alt="Hero Background"
          layout="fill"
          priority
          className='hidden md:flex'
        />
      </div>
    </div>
  )
}

