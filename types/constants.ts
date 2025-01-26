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
  description: "Olá, sou personal trainer certificada, especializada em ajudar pessoas como você a alcançarem seus objetivos de saude e bem-estar de forma pratica e eficiente. Eu acredito que cada pessoa é única e merece m plano de treino personalizado, adaptado as suas necessidades, rotina e metas.",
  qualities: [
    { title: "Especialidades", description: "Perda de peso, ganho de massa muscular, condicionamento fisico de vida e bem-estar", icon: GraduationCap },
    { title: "Resultados", description: "Seja qual for o seu objetivo, eu posso te ajudar.", icon: Award },
    { title: "Suporte", description: "Via whatsapp de segunda a sexta.", icon: Award },
  ] as Quality[],
  cta: "Você merece se sentir incrível!",
};

