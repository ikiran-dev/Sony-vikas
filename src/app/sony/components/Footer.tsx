"use client"
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { gtag_report_conversion } from '@/app/gtag'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image className='pb-3' src="/sony-logo.svg" alt="logo" width={100} height={50} />
            <p className="mb-4">Expert Sony TV repair services in Bangalore, Karnataka. Fast, reliable, and affordable.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="#faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="#choose-us" className=" hover:text-gray-300">Why Choose Us</Link></li>
              
              <li><Link onClick={(event)=>{event.preventDefault()
                        gtag_report_conversion("tel:+917483742863")}} href="tel:+917483742863" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span><a href="tel:+917483742863" className="hover:text-gray-300">+91 7483742863</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:sonycare2025@gmail.com" className="hover:text-gray-300">sonycare2025@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>No. 5, Jp Nagar 7th phase kanakpura main road <br />Bangalore, Karnataka, India-560078</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SONY CARE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
