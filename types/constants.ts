import { Users, Dumbbell, Salad, Award, GraduationCap } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

export interface Quality {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const trainerInfo = {
  name: "Fernanda Prates Bitencourt",
  surname: "Fernanda Personal",
  title: "Personal Trainer",
  description: "Olá, sou personal trainer e ofereço treinos personalizados que respeitam suas necessidades e limitações, garantindo resultados seguros e eficazes. Se você busca emagrecimento, ganho de massa muscular ou mais disposição no dia a dia, estou aqui para te apoiar. Vamos juntos transformar sua saúde e alcançar o seu melhor!",
  qualities: [
    { title: "Especialidades", description: "Perda de peso, Musculação", icon: GraduationCap },
    { title: "Resultados", description: "Centenas de clientes satisfeitos e transformados", icon: Award },
  ] as Quality[],
  cta: "Vamos juntos nessa!",
};

