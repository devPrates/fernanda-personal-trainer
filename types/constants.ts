import { Users, Dumbbell, Salad, Award } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

export interface Quality {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const trainerInfo = {
  name: "Fernanda Bitencourt",
  title: "Personal Trainer",
  description: "Com mais de 03 anos de experiência, minha missão é transformar vidas através do fitness e da nutrição personalizada.",
  qualities: [
    { title: "Experiência", description: "03+ anos como personal trainer", icon: Users },
    { title: "Especialidades", description: "Perda de peso, Musculação", icon: Dumbbell },
    { title: "Abordagem", description: "Treinamento personalizado e suporte contínuo", icon: Salad },
    { title: "Resultados", description: "Centenas de clientes satisfeitos e transformados", icon: Award },
  ] as Quality[],
  cta: "Comece sua jornada fitness hoje!",
};

