'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Mail, Phone, Instagram, Facebook, Twitter, Menu, X, ChevronDown, Send, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const portfolioImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', category: 'Portrait' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', category: 'Wedding' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', category: 'Event' },
    { id: 4, url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', category: 'Portrait' },
    { id: 5, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', category: 'Nature' },
    { id: 6, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', category: 'Wedding' },
  ];

  const services = [
    {
      title: 'Portrait Sessions',
      price: '$299',
      features: ['1-hour session', 'Up to 2 locations', '30 edited photos', 'Online gallery', 'Print release'],
      popular: false,
    },
    {
      title: 'Wedding Package',
      price: '$2,499',
      features: ['8-hour coverage', 'Two photographers', '500+ edited photos', 'Online gallery', 'Engagement session', 'Print release'],
      popular: true,
    },
    {
      title: 'Event Coverage',
      price: '$499',
      features: ['3-hour coverage', 'Unlimited photos', '100+ edited photos', 'Online gallery', '48-hour delivery'],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <Camera className="w-6 h-6 text-gray-900" />
              <span className="font-display text-xl font-bold text-gray-900">Alex Morgan</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Alex Morgan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 font-light"
          >
            Capturing Life's Beautiful Moments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="About Alex Morgan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Hi, I'm Alex Morgan, a passionate photographer with over 10 years of experience capturing life's most precious moments. My journey began with a simple camera and a love for storytelling through images.
                </p>
                <p>
                  I specialize in portrait, wedding, and event photography, always striving to create authentic, emotional, and timeless photographs that you'll treasure forever. Every session is a unique opportunity to connect with my clients and tell their story.
                </p>
                <p>
                  When I'm not behind the camera, you can find me exploring new locations, studying light, and constantly pushing my creative boundaries to deliver exceptional results for every client.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated selection of my favorite work, showcasing the beauty and emotion I capture in every frame.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={image.url}
                  alt={`Portfolio ${image.category}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional photography services tailored to your needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  service.popular ? 'ring-2 ring-gray-900 transform scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    service.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch and let's create something beautiful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Mail className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:hello@alexmorgan.photo" className="text-gray-900 font-medium hover:text-gray-700">
                        hello@alexmorgan.photo
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Phone className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+15551234567" className="text-gray-900 font-medium hover:text-gray-700">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="wedding">Wedding Package</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6" />
              <span className="font-display text-xl font-bold">Alex Morgan</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alex Morgan Photography. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}