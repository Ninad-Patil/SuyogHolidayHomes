import React, { useState, useEffect } from 'react';
import { Menu, X, PalmtreeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Dining', href: '#dining' },
    { name: 'Explore', href: '#explore' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <PalmtreeIcon 
            size={28} 
            className={`transition-colors duration-300 ${isScrolled ? 'text-teal-600' : 'text-white'}`} 
          />
          <span 
            className={`font-serif text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-teal-800' : 'text-white'
            }`}
          >
            Suyog Holiday Homes
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 hover:text-teal-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Book Now Button - Desktop */}
        <a 
          href="#contact" 
          className="hidden md:block btn btn-primary shadow-md"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 border-b border-gray-100 text-gray-800 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;