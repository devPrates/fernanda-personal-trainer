'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@/components/ui/dialog'
import { Menu } from 'lucide-react'
import { oswald, pacifico } from '@/types/fonts'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre mim', href: '/' },
    { name: 'Serviços', href: '/' },
    { name: 'Preços', href: '/' },
  ]

  return (
    <nav className={`w-full py-4 transition-all duration-300 z-50 ${isScrolled ? 'fixed top-0 bg-white shadow-md' : 'absolute'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${pacifico.className}`}>Fernanda Prates</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, i) => (
              <Link key={i} href={item.href} className={`text-lg hover:text-primary font-semibold ${oswald.className}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <Button className='hidden md:flex'>Contato</Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
              <SheetDescription className="sr-only">
                Access navigation links and login option
              </SheetDescription>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="text-lg hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4">Login</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

