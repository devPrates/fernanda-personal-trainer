import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Nosso Site</h1>
            <p className="text-xl mb-6">Descubra soluções incríveis para o seu negócio</p>
            <div className="space-x-4">
              <Button variant="default">Saiba Mais</Button>
              <Button variant="outline">Contate-nos</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%]">
        <Image
          src="/placeholder.svg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  )
}

