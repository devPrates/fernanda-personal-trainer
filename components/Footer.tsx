"use client"

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre Mim', id: 'about' },
    { name: 'Consultoria', id: 'services' },
    { name: 'Preços', id: 'prices' },
  ]

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }) // Fechar o menu no mobile após o clique
    }
  }
  return (
    <footer className="text-white py-6 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <Image
            src="/logo-completa.png"
            alt="Logo da Empresa"
            width={250}
            height={70}
            className="mx-auto lg:mx-0"
          />
        </div>

        {/* Navegação */}
        <nav className="mb-4 lg:mb-0">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className={`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md text-md font-medium`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a href="https://w.app/fernandapratesbitencourt" >
            <Image src="/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/fernanda.pratesbitencort/" className="text-blue-800 hover:text-blue-600">
            <Facebook className="w-6 h-6" />
          </a>

          <a href="https://www.instagram.com/personalfernandaprates" className="text-[#F56040] hover:text-[#F56040]">
            <Instagram className="w-6 h-6" />
          </a>

        </div>
      </div>

      {/* Linha de divisão */}
      <div className=" container mx-auto border border-gray-100 my-4"></div>

      {/* Informações abaixo da linha */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 mb-2">
          CREF: 010462-G/MS - Fernanda Prates Bitencourt
        </p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} desenvolvido por Gabriel Prates.
        </p>
      </div>
    </footer>
  )
}
