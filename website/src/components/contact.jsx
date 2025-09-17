
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Shield, TrendingUp, Globe, Users, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

// Color palette from images
const colors = {
  primary: '#001D39',
  secondary: '#0A4174', 
  tertiary: '#49769F',
  quaternary: '#4E8EA2',
  light: '#6EA2B3',
  lighter: '#7BBDE8',
  lightest: '#BDD8E9'
};

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Contact Us</h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Let us connect and learn how we may be of service to you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-300">fungai@rudiarius.co.za</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-gray-300">+27 10 017 6996</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 mt-1" size={20} />
                  <div className="text-gray-300">
                    <p>Level 2, Bowman Building</p>
                    <p>11 Alice Lane</p>
                    <p>Sandton, Johannesburg 2196</p>
                    <p>South Africa</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;