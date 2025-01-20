"use client"

import Image from 'next/image'
import { trainerInfo, Quality } from '@/types/constants'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">{trainerInfo.surname}</h2>
              <p className="text-xl text-muted-foreground mb-8 text-justify pr-3 sm:pr-0">
                {trainerInfo.description}
              </p>
              <div className="grid grid-cols-1 gap-6 mb-10">
                {trainerInfo.qualities.map((quality: Quality, index) => (
                  <motion.div 
                    key={quality.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {quality.icon && <quality.icon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{quality.title}</h3>
                      <p className="text-muted-foreground">{quality.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button size="lg" className="w-full sm:w-2/3 group text-lg px-8 py-3">
                  {trainerInfo.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] w-full">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/about.jpeg"
                alt={`${trainerInfo.name} - ${trainerInfo.title}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-2">{trainerInfo.name}</h3>
              <p className="text-xl">{trainerInfo.title}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

