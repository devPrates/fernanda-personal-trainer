import { Card, CardContent } from "@/components/ui/card"
import { NotebookPen, UserPlus, Youtube, ClipboardPenLine, ClipboardList, Headset } from "lucide-react"

const features = [
  {
    icon: NotebookPen,
    title: "Treinametos personalizados",
    description: "Treino sob medida para resultados reais, com flexibilidade para treinar onde você preferir, seja em casa ou ao ar-livre.",
  },
  {
    icon: UserPlus,
    title: "Acompanhamento Contínuo",
    description: "tutorial de como tirar suas medidas e fotos para monitoramento dos seus progressos.",
  },
  {
    icon: Youtube,
    title: "Biblioteca de Videos",
    description: "Videos explicativos e orientações detalhadas ensinando a execução correta do movimento de cada exercicio.",
  },
  {
    icon: ClipboardPenLine,
    title: "Avaliação Inicial online",
    description: "Questionario de anamineze direto no aplicativo para entender seus objetivos.",
  },
  {
    icon: ClipboardList,
    title: "Análise de Exercicios",
    description: "Atraves de videos enviados no whatsapp para correção dos movimentos.",
  },
  {
    icon: Headset,
    title: "Suporte e Motivação",
    description: "Estou ao seu lado em cada etapa, garantindo foco e resultados.",
  },
]

export default function Features() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center" id="services">
      <div className="w-full px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-2">Consultoria Online</h1>
        <p className="text-xl font-normal text-center mb-14">Você terá acesso ao aplicativo Fernanda Personal e a recursos para maximizar seus resultados!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="flex items-center space-x-4 p-4">
              <feature.icon className="w-12 h-12 text-primary flex-shrink-0" />
              <CardContent className="flex-1 p-0">
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

