"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { gtag_report_conversion } from "../gtag"

export default function CallButton() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 sparkle-border rounded-t-lg"></div>
        <a
        onClick={(event)=>{event.preventDefault()
          gtag_report_conversion("tel:+91-9700525905")}} href="tel:+91-9700525905"
          className="block w-full bg-black text-white py-4 flex items-center justify-center text-lg font-semibold shadow-lg relative z-10 rounded-t-lg call-button"
        >
          <Phone className="w-5 h-5 mr-2 phone-icon" />
          Call Now: +91-9700525905
        </a>
      </div>
    </div>
  )
}

