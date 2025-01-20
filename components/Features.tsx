"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dumbbell, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FitnessConsultoria() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" max-w-6xl w-full"
      >
        <div className="flex flex-col md:flex-row">
          {/* Seção de Consultoria */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Consultoria Online
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 mb-8"
            >
              Nossa consultoria fitness personalizada oferece um plano de treino e nutrição sob medida para você
              alcançar seus objetivos de forma eficiente e saudável.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              {[
                "Planos de treino personalizados",
                "Orientação nutricional",
                "Suporte contínuo",
                "Acompanhamento de progresso",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <CheckCircle className="text-violet-500" size={20} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Button
              size="lg"
            >
              Comece Agora
            </Button>
          </div>

          {/* Seção do App */}
          <div className="w-full md:w-1/2 p-8 md:p-12 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold  mb-6">Acompanhe seu progresso</h3>
              <p className="text-gray-600 mb-8">
                Baixe nosso aplicativo exclusivo e tenha acesso a recursos incríveis para maximizar seus resultados.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Registro de treinos",
                  "Acompanhamento de medidas",
                  "Biblioteca de exercícios",
                  "Integração com wearables",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Smartphone className="text-blue-500" size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                >
                  Baixe o App
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}