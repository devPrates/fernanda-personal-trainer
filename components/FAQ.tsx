'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function FAQ() {
  return (
    <section className="min-h-screen py-20 px-4 bg-purple-50/50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
              <h3 className="font-semibold">Still have questions?</h3>
              <p className="text-sm text-gray-600">
                We're ready to help you to answer questions, please{' '}
                <Link href="#" className="text-purple-600 hover:text-purple-700 underline">
                  contact us
                </Link>
                .
              </p>
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline">
                  How do I get started on the Fitness Platform?
                </AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply sign up, create your profile, and explore our diverse range of workout routines, expert tips, and community features tailored to your fitness goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline">
                  What types of workouts are available on the platform?
                </AccordionTrigger>
                <AccordionContent>
                  Our platform offers a wide variety of workouts including strength training, cardio, yoga, HIIT, and more. All workouts are designed by certified fitness professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline">
                  How does the subscription cycle work?
                </AccordionTrigger>
                <AccordionContent>
                  Our subscription plans are billed monthly or annually. You can choose the plan that works best for you, and you're free to cancel or change your subscription at any time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline">
                  Is there a personalized nutrition guide available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We provide personalized nutrition guides based on your goals, dietary preferences, and lifestyle. Our nutrition experts regularly update the recommendations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}



