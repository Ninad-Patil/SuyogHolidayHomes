import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PalmtreeIcon, Wifi, Waves, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: <PalmtreeIcon size={32} className="mb-4 text-teal-600" />,
      title: 'Scenic Location',
      description: 'Nestled among coconut trees with stunning views of Alibag\'s natural beauty.'
    },
    {
      icon: <Waves size={32} className="mb-4 text-teal-600" />,
      title: 'Close to Beaches',
      description: 'Just minutes away from Alibag\'s most pristine and scenic beaches.'
    },
    {
      icon: <Wifi size={32} className="mb-4 text-teal-600" />,
      title: 'Modern Amenities',
      description: 'All rooms equipped with AC, TV, hot water and other essential comforts.'
    },
    {
      icon: <HeartHandshake size={32} className="mb-4 text-teal-600" />,
      title: 'Exceptional Service',
      description: 'Dedicated staff ensuring your stay is comfortable and memorable.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Welcome to Suyog Holiday Homes
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Your perfect getaway in the heart of Alibag, where comfort meets natural beauty.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700">
              Suyog Holiday Homes offers a tranquil retreat amidst the natural beauty of Alibag. Our property combines modern comfort with the serene charm of coastal Maharashtra.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700">
              Whether you're looking to explore Alibag's famous beaches and historic forts or simply unwind in our peaceful surroundings, Suyog Holiday Homes provides the perfect base for your coastal getaway.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700">
              Our spacious rooms, swimming pool, and unique dining experience among coconut trees create memories that last a lifetime.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#rooms" className="btn btn-primary mr-4">Our Rooms</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-teal-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;