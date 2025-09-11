'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { gtag_report_conversion } from '@/app/gtag'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header id='home' className="bg-[#000000] shadow-md relative">
      <nav className="container mx-auto px-6 py-5 max-w-[1250px]">
        <div className="flex justify-between items-center">
          <Link href="/sony">
           <Image src="/sony-logo.svg" alt="logo" width={100} height={50} />
          </Link>
          <div className="hidden md:flex space-x-12">
            <Link href="/sony" className="text-white hover:text-gray-300 transition-all ease-in-out duration-300">Home</Link>
            <Link href="/sony#services" className="text-white hover:text-gray-300 transition-all ease-in-out duration-300">Services</Link>
            <Link href="/sony#faq" className="text-white hover:text-gray-300 transition-all ease-in-out duration-300">FAQ</Link>
            <Link href="/sony#choose-us" className="text-white hover:text-gray-300 transition-all ease-in-out duration-300">Why Choose Us</Link>
            <Link href="tel:+917483742863" className="text-white hover:text-gray-300 transition-all ease-in-out duration-300">Contact</Link>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#000000] shadow-md md:hidden">
            <div className="container mx-auto px-6 py-3">
              <Link href="/sony" className="block py-2 text-white hover:text-gray">Home</Link>
              <Link href="/sony#services" className="block py-2 text-white hover:text-gray">Services</Link>
              <Link href="/sony#faq" className="block py-2 text-white hover:text-gray">FAQ</Link>
              <Link href="/sony#choose-us" className="block py-2 text-white hover:text-gray">Why Choose Us</Link>
              <Link onClick={(event)=>{event.preventDefault()
                        gtag_report_conversion("tel:+917483742863")}} href="tel:+917483742863" className="block py-2 text-white hover:text-gray">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

