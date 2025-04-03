
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow animate-fade-in">
            AI-Powered Travel Planning, <span className="text-travel-sand">Personalized for You</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ExploreEase creates customized travel itineraries based on your preferences, 
            budget, and schedule. Let our AI handle the details while you focus on making memories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="gradient-button text-lg px-8 py-6"
              onClick={() => document.getElementById('plan-trip')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan Your Trip Now 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none">
        <div className="animate-bounce opacity-70">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
