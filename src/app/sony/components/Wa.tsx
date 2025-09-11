"use client"
import { FaWhatsapp} from "react-icons/fa";
import { gtag_report_conversion } from "@/app/gtag";
export default function Whatsapp(){
    return(
    <div className='whatsappButtonStyle'>
  <a  href="https://wa.me/917483742863?text=Hi%20I%20would%20like%20to%20request%20TV%20repair%20services" onClick={(event)=>{event.preventDefault()
          gtag_report_conversion("https://wa.me/917483742863?text=Hi%20I%20would%20like%20to%20request%20Sony%20TV%20repair%20services")}}
>
        <FaWhatsapp className='iconStyle' />
      </a>
    </div>
    )
}