import { CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    "Expert technicians with 12+ years of experience",
    "Same-day repair service",
    "6-month warranty on replacement parts",
    "Transparent pricing with no hidden fees",
    "Genuine parts and high-quality service",
    "Convenient at-home service"
  ]

  return (
    <section id='choose-us' className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

