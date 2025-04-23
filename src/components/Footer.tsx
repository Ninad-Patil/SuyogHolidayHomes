import React from 'react';
import { PalmtreeIcon, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-teal-900 text-gray-200 pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PalmtreeIcon size={28} className="text-teal-400" />
              <h3 className="text-xl font-serif font-bold text-white">Suyog Holiday Homes</h3>
            </div>
            <p className="mb-4">
              Your perfect getaway in the heart of Alibag, offering comfortable accommodation and unique experiences amidst natural beauty.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors">Dining</a>
              </li>
              <li>
                <a href="#explore" className="hover:text-white transition-colors">Explore Alibag</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-teal-400" />
                <span>+91 9876543210<br />+91 9998887770</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-teal-400" />
                <span>info@suyogholidayhomes.com<br />bookings@suyogholidayhomes.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-teal-400" />
                <span>Near Alibag Beach,<br />Alibag, Maharashtra, India - 402201</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 rounded-md bg-teal-800 border border-teal-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-6 border-t border-teal-800 text-center sm:flex sm:justify-between sm:text-left">
          <p>&copy; {currentYear} Suyog Holiday Homes. All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;