import { CheckCircle, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const benefits = [
    "Atendimento humanizado e próximo",
    "Treinos dinâmicos e eficientes",
    "Suporte direto para dúvidas e orientações",
    "Acompanhamento de resultados em tempo real",
    "Suporte via Whatsapp de segunda a sexta",
  ]

  const planFeatures = [
    "Acesso ao aplicativo",
    "Atualização mensal de treino",
    "Anamineze inicial, medidas e foto",
    "Video dos exercícios no app",
    "Análise de execução do exercício"
  ]

  return (
    <div className="min-h-screen w-full flex items-center justify-center" id="prices">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-20">Porque Escolher meu trabalho?</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-around">
          {/* Left side */}
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Confira os beneficios!</h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Star className="text-violet-500 mr-2 flex-shrink-0 w-5" />
                  <h3 className="font-medium">{benefit}</h3>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-violet-500"> O primeiro passo começa com você. Vamos nessa? </p>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 max-w-md">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Plano</CardTitle>
                <CardDescription>Solução completa para o seu objetivo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">R$ 129,99<span className="text-lg">/mês</span> </p>
                <ul className="space-y-2">
                  {planFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Entre em contato</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

