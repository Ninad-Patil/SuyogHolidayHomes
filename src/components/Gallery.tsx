import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Gallery images
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Hotel exterior view'
    },
    {
      src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Luxury room interior'
    },
    {
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Swimming pool area'
    },
    {
      src: 'https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Dining area under coconut trees'
    },
    {
      src: 'https://images.pexels.com/photos/261385/pexels-photo-261385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Hotel lobby'
    },
    {
      src: 'https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Room with a view'
    },
    {
      src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Modern bathroom'
    },
    {
      src: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Beach near the property'
    }
  ];

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-teal-600 font-medium block mb-2">OUR GALLERY</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">Experience the Beauty</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Take a visual tour of our property and its stunning surroundings
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-teal-800" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-teal-800" />
            </button>
          </div>

          {/* Scrollable Gallery */}
          <div 
            ref={scrollContainerRef}
            className="gallery-scroll flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="snap-center flex-shrink-0 min-w-[280px] md:min-w-[400px] lg:min-w-[500px] rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Swipe or use the arrows to navigate through our gallery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;