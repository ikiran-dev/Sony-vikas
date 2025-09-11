import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Outstanding Sony TV repair service! The technician fixed my BRAVIA X90J's display issue on the same day. Very knowledgeable about Sony TVs and professional service."
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Had issues with my Sony Android TV's software and HDMI ports. They diagnosed and fixed everything quickly. Their expertise with Sony systems is impressive!"
    },
    {
      name: "Amit Kumar",
      rating: 5,
      comment: "Great experience with my Sony OLED TV repair. They used genuine parts and the picture quality is perfect now. Highly recommend for any Sony TV issues."
    },
    {
      name: "Meera Reddy",
      rating: 5,
      comment: "Fixed my Sony BRAVIA's smart features and updated the software. Very transparent about the repair process and reasonable pricing for quality Sony service."
    },
    {
      name: "Vikram Singh",
      rating: 5,
      comment: "Excellent same-day service for my Sony LED TV. The technician explained the issue clearly and fixed both the sound and picture problems. Very satisfied!"
    },
    {
      name: "Anita Desai",
      rating: 5,
      comment: "Professional Sony TV repair team. They repaired my Sony X85K's backlight issue and even helped set up all the smart features. Great after-service support!"
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sony TV Repair Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{review.rating}/5</span>
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <p className="font-semibold text-gray-800">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}