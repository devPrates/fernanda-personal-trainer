'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white'}`}>
                Home
              </Link>
              <Link href="/about" className={`hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white'}`}>
                About
              </Link>
              <Link href="/services" className={`hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white'}`}>
                Services
              </Link>
              <Link href="/contact" className={`hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white'}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100' : 'text-white hover:text-gray-300 hover:bg-gray-700'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


