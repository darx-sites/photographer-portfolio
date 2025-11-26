'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Camera, Mail, Phone, Instagram, Facebook, Twitter, MapPin, Clock, Award, Users, Heart, Star, ChevronLeft, ChevronRight, X, Menu, Send } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const portfolioImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop', category: 'Wedding', title: 'Romantic Ceremony' },
    { id: 2, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop', category: 'Portrait', title: 'Natural Beauty' },
    { id: 3, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop', category: 'Wedding', title: 'Golden Hour' },
    { id: 4, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1000&fit=crop', category: 'Portrait', title: 'Urban Style' },
    { id: 5, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=1000&fit=crop', category: 'Event', title: 'Celebration' },
    { id: 6, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1000&fit=crop', category: 'Nature', title: 'Landscape' },
    { id: 7, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop', category: 'Wedding', title: 'First Dance' },
    { id: 8, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop', category: 'Portrait', title: 'Elegance' },
    { id: 9, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop', category: 'Event', title: 'Corporate' },
  ];

  const services = [
    { icon: Heart, title: 'Wedding Photography', price: 'From $2,500', description: 'Full-day coverage, engagement session, and beautifully edited photos' },
    { icon: Users, title: 'Portrait Sessions', price: 'From $350', description: 'Individual, couple, or family portraits in studio or outdoor locations' },
    { icon: Award, title: 'Event Photography', price: 'From $500', description: 'Corporate events, parties, and special occasions professionally documented' },
    { icon: Star, title: 'Commercial Projects', price: 'Custom Quote', description: 'Product photography, brand content, and commercial campaigns' },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Awards Won' },
    { number: '10+', label: 'Years Experience' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-dark-900" />
              <span className="text-lg sm:text-xl font-display font-bold text-dark-900">Alex Morgan</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-dark-700 hover:text-dark-900 transition-colors font-medium">Home</a>
              <a href="#about" className="text-dark-700 hover:text-dark-900 transition-colors font-medium">About</a>
              <a href="#portfolio" className="text-dark-700 hover:text-dark-900 transition-colors font-medium">Portfolio</a>
              <a href="#services" className="text-dark-700 hover:text-dark-900 transition-colors font-medium">Services</a>
              <a href="#contact" className="btn-primary">Contact</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-dark-900"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-dark-200"
            >
              <div className="container-custom py-4 space-y-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-dark-700 hover:text-dark-900 transition-colors font-medium">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-dark-700 hover:text-dark-900 transition-colors font-medium">About</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-dark-700 hover:text-dark-900 transition-colors font-medium">Portfolio</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-dark-700 hover:text-dark-900 transition-colors font-medium">Services</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-dark-700 hover:text-dark-900 transition-colors font-medium">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop"
            alt="Photography hero"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900/60" />
        </motion.div>

        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl text-white mb-6 text-balance">
              Capturing Life's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Precious Moments</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
              Professional photographer specializing in weddings, portraits, and events
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="btn-primary w-full sm:w-auto">
                View Portfolio
              </a>
              <a href="#contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-dark-900 w-full sm:w-auto">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=1000&fit=crop"
                  alt="Alex Morgan - Photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-dark-900 mb-6">About Me</h2>
              <div className="space-y-4 text-body">
                <p>
                  Hi, I'm Alex Morgan, a passionate photographer with over 10 years of experience capturing life's most beautiful moments. My journey began with a simple camera and a love for storytelling through images.
                </p>
                <p>
                  I specialize in wedding photography, portrait sessions, and event coverage. My approach is to blend artistic vision with authentic emotion, creating timeless photographs that you'll treasure forever.
                </p>
                <p>
                  Every photo session is a unique collaboration. I work closely with my clients to understand their vision and bring it to life through my lens. Whether it's your wedding day, a family portrait, or a corporate event, I'm committed to delivering exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-dark-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-dark-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-dark-900 mb-4">Portfolio</h2>
            <p className="text-body max-w-2xl mx-auto">
              Explore a curated selection of my best work. Each image tells a unique story and captures a special moment in time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-medium text-primary-400 mb-1">{image.category}</div>
                    <div className="text-lg font-display font-semibold">{image.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] w-full h-full">
                <Image
                  src={portfolioImages[currentImageIndex].url}
                  alt={portfolioImages[currentImageIndex].title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="text-sm font-medium text-primary-400 mb-1">{portfolioImages[currentImageIndex].category}</div>
                <div className="text-xl font-display font-semibold">{portfolioImages[currentImageIndex].title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="services" className="section-padding bg-dark-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-dark-900 mb-4">Services & Packages</h2>
            <p className="text-body max-w-2xl mx-auto">
              Professional photography services tailored to your needs. Each package includes high-resolution edited images and online gallery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-dark-900 mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>
                  <p className="text-dark-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#contact" className="btn-primary">
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-dark-900 mb-6">Let's Create Something Beautiful</h2>
              <p className="text-body mb-8">
                Ready to book a session or have questions about my services? I'd love to hear from you. Fill out the form or reach out directly through the contact information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 mb-1">Email</div>
                    <a href="mailto:hello@alexmorgan.photo" className="text-dark-600 hover:text-dark-900 transition-colors">
                      hello@alexmorgan.photo
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-dark-600 hover:text-dark-900 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 mb-1">Location</div>
                    <div className="text-dark-600">Los Angeles, CA</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 mb-1">Hours</div>
                    <div className="text-dark-600">Mon - Sat: 9AM - 6PM</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-dark-50 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-dark-900 text-white py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="w-6 h-6" />
                <span className="text-lg font-display font-bold">Alex Morgan</span>
              </div>
              <p className="text-dark-300 text-sm">
                Professional photographer capturing life's precious moments with passion and creativity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-dark-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-dark-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-dark-300 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#services" className="text-dark-300 hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-dark-300">Wedding Photography</li>
                <li className="text-dark-300">Portrait Sessions</li>
                <li className="text-dark-300">Event Photography</li>
                <li className="text-dark-300">Commercial Projects</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-3 mb-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-dark-300 text-sm">
                Follow me for daily inspiration and behind-the-scenes content.
              </p>
            </div>
          </div>

          <div className="border-t border-dark-800 pt-8 text-center text-sm text-dark-400">
            <p>&copy; {new Date().getFullYear()} Alex Morgan Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}