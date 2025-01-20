"use client"

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <Image
            src="/logo.png" // Altere o caminho para o arquivo da sua logo
            alt="Logo da Empresa"
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
        </div>

        {/* Navegação */}
        <nav className="mb-4 lg:mb-0">
          <ul className="flex space-x-6 justify-center">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Sobre</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Serviços</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contato</a></li>
          </ul>
        </nav>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Linha de divisão */}
      <div className=" container mx-auto border border-gray-100 my-4"></div>

      {/* Informações abaixo da linha */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 mb-2">
          CREF: 12345-G/XX - Fernanda Prates Bitencourt
        </p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} develop by Gabriel Prates.
        </p>
      </div>
    </footer>
  )
}
