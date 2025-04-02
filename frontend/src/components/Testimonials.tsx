
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maligi Bindu",
    location: "Explored Hyderabad",
    quote: "Your travel planner based on AI is a good concept, and applying machine learning to personalizing itineraries is astounding.Ensure that the AI generates varied suggestions and not generic ones.API cost management is also essential for scaling.If well executed, this would be a great market- ready product.",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Vinoth M",
    location: "Backpacked Europe",
    quote: "UI/UX appears promising, and the use of AI for generating itineraries is innovative. I prefer incorporating weather conditions and price changes in real-time. One of my concerns would be API call limits—thought on caching popular queries to alleviate reliance. Second, a friend-sharing planning option would be awesome too.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Madhu",
    location: "Road Trip Pune",
    quote: "I love the concept of an AI trip planner that creates customized itineraries. It's a competitive field, so product differentiation will be paramount. Concentrate on smooth user experience, and perhaps consider collaborations with travel agencies or hotels for revenue generation. Great effort!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Travelers Love ExploreEase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from explorers who have transformed their travel experiences with our AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="travel-card p-8 flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-travel-orange text-travel-orange" />
                  ))}
                </div>
                <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
            {[
              // { number: "10K+", label: "Travelers" },
              // { number: "50+", label: "Countries" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="travel-card py-8 px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-travel-blue mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
