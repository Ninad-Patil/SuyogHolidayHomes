import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Calendar, Users, Bed } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Deluxe Room',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Your booking inquiry has been submitted. We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: 'Deluxe Room',
      message: ''
    });
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-teal-600 font-medium block mb-2">CONTACT US</motion.span>
          <motion.h2 variants={itemVariants} className="section-title">Book Your Stay</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Reserve your slice of paradise at Suyog Holiday Homes in Alibag
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-serif font-bold text-teal-800 mb-6">
              Get in Touch
            </motion.h3>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-gray-600">+91 9998887770</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@suyogholidayhomes.com</p>
                  <p className="text-gray-600">bookings@suyogholidayhomes.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">Suyog Holiday Homes,</p>
                  <p className="text-gray-600">Near Alibag Beach,</p>
                  <p className="text-gray-600">Alibag, Maharashtra, India - 402201</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-teal-800 text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">Why Book Directly With Us?</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Best rate guarantee</li>
                <li>Flexible cancellation options</li>
                <li>Personalized service</li>
                <li>Special requests accommodated</li>
                <li>No hidden fees</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold text-teal-800 mb-6">Book Your Stay</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar size={16} className="inline mr-1" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar size={16} className="inline mr-1" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      <Users size={16} className="inline mr-1" />
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                      <Bed size={16} className="inline mr-1" />
                      Room Type
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Premium Suite">Premium Suite</option>
                      <option value="Family Room">Family Room</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn btn-primary">
                  Submit Booking Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;