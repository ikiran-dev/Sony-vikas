'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
 const faqs = [
    {
      question: "How long does TV repair take?",
      answer: "Most Sony TV repairs are completed within the same day. For complex issues requiring specific parts, it might take 1-2 days. We'll keep you updated throughout the process."
    },
    {
      question: "Do you provide warranty repairs?",
      answer: "Yes, we offer a 6-month warranty on all replacement parts and our repair work. This covers both parts and labor for complete peace of mind."
    },
    {
      question: "What are your repair charges?",
      answer: "Our inspection fee is ₹299. The final cost depends on the specific issue and required parts. We provide a detailed quote before starting any repairs, with no hidden charges."
    },
    {
      question: "Do you offer doorstep TV repair service?",
      answer: "Yes, we provide doorstep repair service for all Sony TVs across Bangalore. Our technicians carry essential tools and common spare parts for on-site repairs."
    }
]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id='faq' className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

