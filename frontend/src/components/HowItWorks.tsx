
import React from 'react';
import { Compass, Sliders, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: "Tell us about your dream trip",
    description: "Share your travel preferences, budget, timeframe, and must-see attractions with our AI planning assistant.",
    icon: Compass,
    color: "bg-travel-teal"
  },
  {
    id: 2,
    title: "AI builds your perfect itinerary",
    description: "Our AI analyzes thousands of options to create a personalized travel plan optimized for your preferences.",
    icon: Sliders,
    color: "bg-travel-orange"
  },
  {
    id: 3,
    title: "Review, adjust, and explore",
    description: "Receive your custom itinerary with real-time updates and modify it as needed before or during your trip.",
    icon: Calendar,
    color: "bg-travel-blue"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How ExploreEase Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes travel planning simple, personalized, and stress-free in just three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="travel-card p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
            >
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", step.color)}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-travel-teal mr-2">{step.id}.</span> {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="travel-card overflow-hidden p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-travel-teal via-travel-blue to-travel-orange"></div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-travel-blue">
              Ready to start your journey?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Popular destinations</h4>
                <ul className="space-y-2">
                  {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Almora', 'Nainital'].map((city) => (
                    <li key={city} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-travel-teal mr-2"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Trip types</h4>
                <ul className="space-y-2">
                  {['Beach Getaway', 'Cultural Exploration', 'Adventure', 'Luxury', 'Budget-Friendly', 'Family Trip'].map((type) => (
                    <li key={type} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-travel-orange mr-2"></span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
