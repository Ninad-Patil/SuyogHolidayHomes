import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils, Coffee, PalmtreeIcon, Star } from 'lucide-react';

const Dining: React.FC = () => {
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

  return (
    <section id="dining" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-teal-600 font-medium block mb-2">DINING EXPERIENCE</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">Nature Dining Experience</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Enjoy delicious meals in our unique dining area nestled among coconut trees
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1 grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Outdoor dining area" 
              className="rounded-lg shadow-md h-60 object-cover w-full"
            />
            <img 
              src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Dining table setup" 
              className="rounded-lg shadow-md h-40 object-cover w-full"
            />
            <img 
              src="https://images.pexels.com/photos/5490890/pexels-photo-5490890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Food platter" 
              className="rounded-lg shadow-md h-40 object-cover w-full"
            />
            <img 
              src="https://images.pexels.com/photos/2878741/pexels-photo-2878741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Coconut trees dining area" 
              className="rounded-lg shadow-md h-60 object-cover w-full"
            />
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <PalmtreeIcon className="text-teal-600" />
              <span className="text-xl font-serif text-teal-800">Dining under the Coconut Trees</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700">
              Experience a truly unique dining atmosphere at our nature-inspired dining area. Set among beautiful coconut trees, our dining space offers a perfect blend of natural beauty and culinary delight.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-700">
              We serve a variety of delicious dishes, featuring local specialties and international favorites, prepared with fresh, locally-sourced ingredients.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <Utensils className="text-teal-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Local Cuisine</h4>
                  <p className="text-sm text-gray-600">Authentic Maharashtrian flavors</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Coffee className="text-teal-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Refreshments</h4>
                  <p className="text-sm text-gray-600">Variety of beverages available</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="text-teal-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Special Events</h4>
                  <p className="text-sm text-gray-600">Themed dining experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <PalmtreeIcon className="text-teal-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Natural Setting</h4>
                  <p className="text-sm text-gray-600">Dine amidst coconut trees</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">Reserve Your Table</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dining;