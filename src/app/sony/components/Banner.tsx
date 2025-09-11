"use client"
import Image from 'next/image'
import Button from './Button'
import { gtag_report_conversion } from '@/app/gtag'

export default function Banner() {
  return (
    <section className="bg-gray-100 pt-12 pb-4 max-w-[1300px] mx-auto">
      <div className="container mx-auto px-6 py-0 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sony TV Service & Repair Specialists in Bangalore
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Expert Repairs for Sony BRAVIA, Android TV, Google TV & All Latest Models
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Doorstep Service for Sony LED, OLED, 4K & Smart TVs - Top-rated Repair Partner
          </p>
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-yellow-500 mr-2">4</span>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">100+ reviews on Google Maps</span>
          </div>
          <ul className="text-gray-700 mb-8">
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Same-Day Sony TV Repair & Service
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ₹199 Diagnosis - No Fix No Charge Policy
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              1 Year Warranty on Parts & Service
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Experienced Sony TV Service Professionals
            </li>
          </ul>
          <a onClick={(event)=>{event.preventDefault()
          gtag_report_conversion("tel:+917483742863")}} href="tel:+917483742863"><Button>Call Now</Button></a>
        </div>
        <div className="md:w-1/2 md:pl-8 pb-6">
          <Image
            src="/banner.jpg?height=400&width=600"
            alt="TV Repair Service"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}