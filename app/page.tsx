'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Menu, X, ChevronDown, Star, Award, Users } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const portfolioImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', category: 'Wedding', title: 'Romantic Ceremony' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop', category: 'Portrait', title: 'Natural Beauty' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', category: 'Event', title: 'Corporate Gathering' },
    { id: 4, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', category: 'Nature', title: 'Golden Hour' },
    { id: 5, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop', category: 'Wedding', title: 'First Dance' },
    { id: 6, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop', category: 'Portrait', title: 'Urban Style' },
  ];

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our comprehensive wedding packages.',
      price: 'From $2,500',
      features: ['Full day coverage', 'Edited digital gallery', 'Engagement session', 'Online gallery'],
      icon: '💍'
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portraits for individuals, families, and professionals.',
      price: 'From $350',
      features: ['1-2 hour session', '20+ edited photos', 'Location of choice', 'Print rights'],
      icon: '📸'
    },
    {
      title: 'Event Coverage',
      description: 'Document your corporate events, parties, and special occasions.',
      price: 'From $500',
      features: ['Hourly packages', 'Quick turnaround', 'High-res images', 'Event highlights'],
      icon: '🎉'
    },
  ];

  const stats = [
    { icon: Camera, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: Star, value: '5.0', label: 'Average Rating' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              <span className="text-lg sm:text-xl font-bold text-dark-900">PhotoLens</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    activeSection === item.toLowerCase() ? 'text-primary-600' : 'text-dark-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-dark-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-dark-100"
          >
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-dark-600 hover:bg-dark-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            Capturing Life's
            <br />
            <span className="gradient-text bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">
              Beautiful Moments
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            Professional photography that tells your unique story
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=800&fit=crop"
                  alt="Photographer"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-dark-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                Hello! I'm a passionate photographer dedicated to capturing the essence of every moment. With over a decade of experience, I specialize in creating timeless images that tell your unique story.
              </p>
              <p className="text-lg text-dark-600 mb-8 leading-relaxed">
                My approach combines technical expertise with artistic vision, ensuring that every photograph is not just a picture, but a cherished memory that will last a lifetime.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-dark-50 rounded-xl"
                  >
                    <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dark-900">{stat.value}</div>
                    <div className="text-sm text-dark-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
              >
                Let's Work Together
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-dark-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Explore a collection of my recent work showcasing various photography styles and moments
            </p>
          </motion.div>

          <div className="image-grid">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs font-semibold text-primary-400 mb-2">{image.category}</div>
                    <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-dark-900 text-white rounded-full font-semibold hover:bg-dark-800 transition-all hover:scale-105 shadow-lg">
              View Full Gallery
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
              Services & Packages
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-dark-100 rounded-2xl p-8 hover:border-primary-600 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-600 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-dark-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-dark-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's Create Together
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch and let's discuss your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hello@photolens.com" className="text-white/80 hover:text-primary-400 transition-colors">
                      hello@photolens.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-white/80 hover:text-primary-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-white/80">
                      Los Angeles, CA
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-400 transition-colors text-white placeholder-white/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-400 transition-colors text-white placeholder-white/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-400 transition-colors text-white"
                  >
                    <option value="" className="bg-dark-900">Select a service</option>
                    <option value="wedding" className="bg-dark-900">Wedding Photography</option>
                    <option value="portrait" className="bg-dark-900">Portrait Session</option>
                    <option value="event" className="bg-dark-900">Event Coverage</option>
                    <option value="other" className="bg-dark-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-400 transition-colors text-white placeholder-white/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-white/10 py-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">PhotoLens</span>
            </div>
            <div className="text-white/60 text-sm text-center md:text-left">
              © 2024 PhotoLens. All rights reserved.
            </div>
            <div className="text-white/60 text-sm mt-4 md:mt-0">
              Built with ❤️ by DARX
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}