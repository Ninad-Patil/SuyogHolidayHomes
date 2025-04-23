import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tv, Droplets, Refrigerator, Wind, Wifi } from 'lucide-react';

const Rooms: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const rooms = [
    {
      name: 'Deluxe Room',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Spacious and comfortable room with all modern amenities for a relaxing stay.',
      amenities: ['AC', 'TV', 'Hot Water', 'Cupboard']
    },
    {
      name: 'Premium Suite',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Luxurious suite with additional space and premium furnishings for the discerning traveler.',
      amenities: ['AC', 'Smart TV', 'Hot Water', 'Cupboard', 'Mini Fridge']
    },
    {
      name: 'Family Room',
      image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Perfect for families, this spacious room accommodates up to 4 guests comfortably.',
      amenities: ['AC', 'TV', 'Hot Water', 'Cupboard', 'Extra Beds']
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'AC':
        return <Wind size={16} />;
      case 'TV':
      case 'Smart TV':
        return <Tv size={16} />;
      case 'Hot Water':
        return <Droplets size={16} />;
      case 'Mini Fridge':
        return <Refrigerator size={16} />;
      case 'WiFi':
        return <Wifi size={16} />;
      default:
        return null;
    }
  };

  return (
    <section id="rooms" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-teal-600 font-medium block mb-2">ACCOMMODATIONS</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">Our Comfortable Rooms</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Spacious rooms with modern amenities to make your stay in Alibag truly memorable
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-teal-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a href="#contact" className="btn btn-primary w-full">Book Now</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;