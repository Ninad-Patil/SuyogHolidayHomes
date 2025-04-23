import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smile, ThumbsUp, Umbrella } from 'lucide-react';

const Pool: React.FC = () => {
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
    <section 
      id="pool" 
      className="section relative py-24 md:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(2, 35, 33, 0.7), rgba(2, 35, 33, 0.7)), url('https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-teal-300 font-medium block mb-2">RELAXATION</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Unwind at Our Swimming Pool
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-200 mb-6">
              Take a refreshing dip in our pristine swimming pool, surrounded by lush greenery and comfortable loungers. The perfect place to cool off after a day of exploring Alibag.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Smile className="text-teal-300" />
                <span>Family Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Umbrella className="text-teal-300" />
                <span>Poolside Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="text-teal-300" />
                <span>Well Maintained</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a href="#gallery" className="btn btn-primary">See More in Gallery</a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Swimming pool at Suyog Holiday Homes" 
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pool;