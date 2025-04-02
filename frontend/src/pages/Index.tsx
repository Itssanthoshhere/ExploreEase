
import React, { useEffect } from 'react';
import { 
  NavBar, 
  HeroSection, 
  HowItWorks, 
  Features, 
  Testimonials, 
  ContactForm, 
  PlanTripSection,
  Footer
} from '@/components';

const Index = () => {
  useEffect(() => {
    // Simple animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <PlanTripSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
