import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Map, Anchor, Castle, Compass } from 'lucide-react';

const Explore: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  const attractions = [
    {
      name: 'Alibag Beach',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'The main beach of Alibag, perfect for swimming and relaxation.',
      icon: <Anchor size={20} className="text-teal-600" />,
      distance: '2 km'
    },
    {
      name: 'Kolaba Fort',
      image: 'https://images.pexels.com/photos/5273544/pexels-photo-5273544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A historic sea fort accessible by walking during low tide.',
      icon: <Castle size={20} className="text-teal-600" />,
      distance: '4 km'
    },
    {
      name: 'Kashid Beach',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'One of the most beautiful beaches near Alibag with white sand and clear waters.',
      icon: <Anchor size={20} className="text-teal-600" />,
      distance: '15 km'
    },
    {
      name: 'Revdanda Beach & Fort',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Historic fort ruins and a scenic beach ideal for a day trip.',
      icon: <Compass size={20} className="text-teal-600" />,
      distance: '12 km'
    }
  ];

  return (
    <section id="explore" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-teal-600 font-medium block mb-2">EXPLORE ALIBAG</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">Discover Nearby Attractions</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Alibag is famous for its pristine beaches and historic forts, all just a short distance from Suyog Holiday Homes
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {attraction.icon}
                  <h3 className="text-xl font-semibold text-teal-800">{attraction.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{attraction.description}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Map size={16} />
                  <span>{attraction.distance} from property</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Our staff can help arrange tours and transportation to these attractions.
            Ask us for recommendations on the best time to visit each location.
          </p>
          <a href="#contact" className="btn btn-primary">
            Inquire About Tours
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;