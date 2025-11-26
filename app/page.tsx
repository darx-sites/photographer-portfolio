'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCamera, FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const portfolioImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      category: 'Portrait',
      title: 'Natural Light Portrait',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      category: 'Wedding',
      title: 'Wedding Ceremony',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
      category: 'Fashion',
      title: 'Fashion Editorial',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&q=80',
      category: 'Landscape',
      title: 'Mountain Vista',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80',
      category: 'Portrait',
      title: 'Studio Portrait',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      category: 'Nature',
      title: 'Wildflower Field',
    },
  ];

  const services = [
    {
      title: 'Portrait Photography',
      description: 'Professional headshots and personal portraits that capture your unique personality and style.',
      price: 'From $299',
      features: ['1-2 hour session', 'Multiple outfit changes', '20+ edited photos', 'Online gallery'],
    },
    {
      title: 'Event Photography',
      description: 'Comprehensive coverage of your special events, from corporate gatherings to private celebrations.',
      price: 'From $599',
      features: ['Full event coverage', 'Unlimited photos', 'Professional editing', 'Quick turnaround'],
    },
    {
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every precious moment of your special day.',
      price: 'From $1,999',
      features: ['8+ hours coverage', 'Second photographer', '500+ edited photos', 'Engagement session'],
    },
    {
      title: 'Commercial Photography',
      description: 'High-quality product and commercial photography for businesses and brands.',
      price: 'Custom Quote',
      features: ['Product photography', 'Brand imagery', 'Commercial rights', 'Retouching included'],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80"
            alt="Photography background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <FaCamera className="text-6xl sm:text-7xl text-white mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="heading-1 text-white mb-6 font-display"
          >
            Alex Morgan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="body-large text-dark-100 mb-8 max-w-2xl mx-auto"
          >
            Professional Photographer | Capturing Life's Beautiful Moments
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
              Book a Session
            </a>
            <a href="#portfolio" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-dark-900 w-full sm:w-auto text-center">
              View Portfolio
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dark-300 transition-colors duration-300">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dark-300 transition-colors duration-300">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dark-300 transition-colors duration-300">
              <FaFacebook className="text-3xl" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <a href="#about" className="block animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </section>

      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h2 className="heading-2 text-dark-900 mb-6 font-display">About Me</h2>
              <div className="space-y-4 text-dark-600 body-regular">
                <p>
                  Hello! I'm Alex Morgan, a passionate photographer with over 10 years of experience capturing life's most precious moments. My journey in photography began with a simple love for storytelling through images.
                </p>
                <p>
                  I specialize in portrait, wedding, and event photography, bringing a unique blend of artistic vision and technical expertise to every shoot. My approach is to create authentic, emotional images that you'll treasure for a lifetime.
                </p>
                <p>
                  Whether it's an intimate portrait session, a grand wedding celebration, or a corporate event, I'm dedicated to delivering exceptional results that exceed your expectations. Let's create something beautiful together.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-dark-900 mb-2">10+</div>
                  <div className="text-sm text-dark-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-dark-900 mb-2">500+</div>
                  <div className="text-sm text-dark-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-dark-900 mb-2">50k+</div>
                  <div className="text-sm text-dark-600">Photos Taken</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Photographer at work"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="section-padding bg-dark-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dark-900 mb-4 font-display">Portfolio</h2>
            <p className="body-regular text-dark-600 max-w-2xl mx-auto">
              Explore a selection of my recent work showcasing various photography styles and subjects.
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioImages.map((image) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm font-semibold mb-1">{image.category}</div>
                    <div className="text-lg font-bold">{image.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-dark-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes className="text-3xl" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Portfolio image"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}

      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dark-900 mb-4 font-display">Services & Packages</h2>
            <p className="body-regular text-dark-600 max-w-2xl mx-auto">
              Professional photography services tailored to your needs. Choose the package that's right for you.
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="heading-3 text-dark-900 mb-4 text-xl">{service.title}</h3>
                <p className="text-dark-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-dark-900 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-dark-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary w-full text-center block">
                  Book Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-dark-900 text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4 font-display">Get In Touch</h2>
            <p className="body-regular text-dark-300 max-w-2xl mx-auto">
              Ready to book a session or have questions? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field bg-dark-800 border-dark-700 text-white placeholder-dark-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field bg-dark-800 border-dark-700 text-white placeholder-dark-400"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field bg-dark-800 border-dark-700 text-white placeholder-dark-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="input-field bg-dark-800 border-dark-700 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="textarea-field bg-dark-800 border-dark-700 text-white placeholder-dark-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full bg-white text-dark-900 hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500 text-white rounded-lg text-center font-semibold"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="heading-3 mb-6 text-2xl font-display">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaEnvelope className="text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:hello@alexmorgan.photo" className="text-dark-300 hover:text-white transition-colors">
                        hello@alexmorgan.photo
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+15551234567" className="text-dark-300 hover:text-white transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-dark-300">
                        Los Angeles, CA<br />
                        Available for travel worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-3 mb-6 text-2xl font-display">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors duration-300"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors duration-300"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors duration-300"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="bg-dark-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2 text-dark-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-white">By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-display text-2xl font-bold mb-2">Alex Morgan</div>
              <div className="text-dark-400 text-sm">Professional Photographer</div>
            </div>
            
            <div className="text-center md:text-right text-dark-400 text-sm">
              <div>&copy; {new Date().getFullYear()} Alex Morgan Photography. All rights reserved.</div>
              <div className="mt-2">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}