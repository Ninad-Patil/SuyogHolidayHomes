import React from 'react';
import { motion } from 'framer-motion';
import { PalmtreeIcon, Compass, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PalmtreeIcon size={56} className="mx-auto mb-6 text-white" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4">
            Suyog Holiday Homes
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100">
            Experience the perfect blend of comfort and natural beauty in Alibag
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#rooms" className="btn btn-primary">
              View Our Rooms
            </a>
            <a href="#gallery" className="btn btn-secondary border-white text-white hover:bg-white hover:text-teal-800">
              Explore Gallery
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-100">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Alibag, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass size={20} />
              <span>Near beautiful beaches & historic forts</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;