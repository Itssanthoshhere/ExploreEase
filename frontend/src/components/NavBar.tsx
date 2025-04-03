import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          {/* <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3CAEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 18L12 14" stroke="#3CAEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 14H15" stroke="#3CAEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 10C8 10 9.5 8 12 8C14.5 8 16 10 16 10" stroke="#3CAEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> */}
          {/* Logo with plane icon */}
          <svg
            className="my-plane-icon lucide lucide-plane h-8 w-8 text-travel-blue"
            xmlns="https://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
          </svg>
          <span className={cn(
            "font-poppins font-semibold text-xl",
            isScrolled ? "text-travel-blue" : "text-white text-shadow"
          )}>
            ExploreEase
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium hover:text-travel-teal transition-colors",
                isScrolled ? "text-gray-700" : "text-white text-shadow"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="gradient-button-secondary"
            onClick={() => document.getElementById('plan-trip')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Plan Trip
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium py-2 hover:text-travel-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="gradient-button-secondary w-full"
              onClick={() => {
                document.getElementById('plan-trip')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Plan Trip
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
