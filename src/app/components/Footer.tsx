"use client"
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { gtag_report_conversion } from '../gtag'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 pb-36 md:pb-12">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image className="pb-3" src="/sony-logo.svg" alt="logo" width={100} height={50} />
            <p className="mb-4">
              Expert Sony TV repair services in Bangalore, Karnataka. Fast, reliable, and affordable.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="#faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="#choose-us" className="hover:text-gray-300">Why Choose Us</Link></li>
              <li>
                <Link
                  onClick={(event) => {
                    event.preventDefault()
                    gtag_report_conversion("tel:+91-9700525905")
                  }}
                  href="tel:+91-9700525905"
                  className="hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>
                  <a href="tel:+91-9700525905" className="hover:text-gray-300">
                    +91-9700525905
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:sonycare2025@gmail.com" className="hover:text-gray-300">
                  sonycare2025@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>
                  3-6-113, 1st Floor, opp. to BSNL Office,
                  <br /> L. B. Nagar Hyderabad, Telangana 500074
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SONY CARE. All rights reserved.</p>
        </div>
        <div className="mt-8 text-sm text-gray-400 text-center leading-relaxed">
          <p>
            Disclaimer: Sony CARE is an independent third-party service center. We are not affiliated
            with or authorized by any TV manufacturer. All repairs and services will be chargeable,
            even if your product is still under the manufacturer’s warranty.
          </p>
        </div>
      </div>
    </footer>
  )
}
