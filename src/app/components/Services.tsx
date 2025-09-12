interface ServiceProps {
  image: string
  title: string
  description: string
  isReverse?: boolean
}

const Service: React.FC<ServiceProps> = ({ image, title, description, isReverse = false }) => (
  <div className={`flex flex-col md:flex-row ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start bg-white p-4 rounded-lg shadow-md`}>
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-md" />
    </div>
    <div className={`w-full md:w-1/2 md:pl-6 ${isReverse ? 'md:pr-6' : 'md:pr-0'}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function Services() {
  const services = [
    {
      image: "image.png",
      title: "Sony BRAVIA TV Repair",
      description: "Specialized repair service for all Sony BRAVIA models including LED, OLED, and 4K TVs. Our experts handle everything from display issues and software problems to power board repairs. We ensure your premium Sony TV performs at its best with quality parts and professional service."
    },
    {
      image: "/crttv.jpg",
      title: "Sony Android TV Service",
      description: "Expert solutions for Sony Android TV issues including software updates, smart features troubleshooting, and hardware repairs. We fix connectivity problems, app crashes, display issues, and ensure your Sony Smart TV's features work seamlessly."
    },
    {
      image: "/maintv.jpg",
      title: "Sony TV Maintenance",
      description: "Preventive maintenance service for Sony TVs to ensure optimal performance and longevity. Our comprehensive maintenance includes software updates, hardware cleaning, picture quality optimization, and thorough system checks specific to your Sony model."
    },
    // {
    //   image: "/install.jpg",
    //   title: "Sony TV Installation",
    //   description: "Professional installation service for all Sony TV models. We provide expert wall mounting, optimal placement for perfect viewing angles, complete setup of smart features, and neat cable management. Includes initial calibration for the best picture quality."
    // }
  ]

  return (
    <section id='services' className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sony TV Services</h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <Service key={index} {...service} isReverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}