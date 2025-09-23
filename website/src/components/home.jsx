import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Shield, TrendingUp, Globe, Users, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { SiFsecure } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { FaGlobeAfrica } from "react-icons/fa";
import NewsFeed from './newsfeed';
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

// Home Page
const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="px-6 relative">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-2xl opacity-10"
              style={{
                background: `linear-gradient(135deg, ${colors.quaternary}, ${colors.light})`,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          
          {/* Interactive mouse-following gradient */}
          <motion.div
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${colors.lighter}40, transparent)`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
          />
        </div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            {/* Animated tagline */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="gellix-font text-sm text-blue-300 tracking-[0.3em] uppercase font-medium">
                Investment Excellence Since 2014
              </span>
            </motion.div>

            {/* Main heading with enhanced typography */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mb-8"
            >
              <span className="gellix-font block text-3xl md:text-5xl text-gray-200 font-light mb-4">
                Welcome to
              </span>
              <span className="gellix-font block text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-purple-300 bg-clip-text text-transparent leading-none">
                Rudiarius
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-6 max-w-md mx-auto"
              />
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="gellix-font text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Preserving the value of wealth created and growing capital in today's markets
              </p>
              <p className="gellix-font text-lg md:text-xl text-gray-400 mt-4 leading-relaxed">
                requires a nuanced approach, handled by dedicated professionals.
              </p>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/about"
                className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
              >
                <span className="gellix-font relative z-10 flex items-center">
                  Discover Our Approach 
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              
              <Link
                to="/strategies"
                className="group px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl shadow-white/10"
              >
                <span className="gellix-font flex items-center">
                  View Strategies
                  <motion.div
                    className="ml-3 w-2 h-2 rounded-full bg-blue-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating glassmorphism cards preview */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="space-y-4"
          >
            {[
              { title: "Multi-Asset", value: "62.8%", color: "from-blue-500 to-purple-500" },
              { title: "Fixed Income", value: "29.5%", color: "from-green-500 to-blue-500" },
              { title: "Alternatives", value: "7.7%", color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 w-48"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} mb-2`} />
                <p className="gellix-font text-white font-semibold">{item.title}</p>
                <p className="gellix-font text-2xl font-bold text-blue-200">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard>
            <SiFsecure className="text-blue-400 mb-4" size={40} />
            <h3 className="gellix-font text-xl font-semibold text-white mb-3">Risk Management</h3>
            <p className="gellix-font text-gray-300">
              With a keen eye on risk management, our focus is on long-term returns earned 
              in a manner appropriate for different clients.
            </p>
          </GlassCard>
          
          <GlassCard>
            <GrMoney className="text-blue-400 mb-4" size={40} />
            <h3 className="gellix-font text-xl font-semibold text-white mb-3">Multi-Asset Investing</h3>
            <p className="gellix-font text-gray-300">
              We build portfolios with exposure to various asset classes in different 
              parts of the world using flexibility and innovation.
            </p>
          </GlassCard>
          
          <GlassCard>
            <FaGlobeAfrica className="text-blue-400 mb-4" size={40} />
            <h3 className="gellix-font text-xl font-semibold text-white mb-3">Global Opportunities</h3>
            <p className="gellix-font text-gray-300">
              Independent investment company focused on multi-asset investing opportunities 
              on behalf of long-term investors worldwide.
            </p>
          </GlassCard>
        </div>
      </div>

      {/* News Feed Section */}
      {/* Values Section */}
      <div className="max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gellix-font text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="gellix-font text-gray-300 text-lg max-w-2xl mx-auto">
            These values shape our approach to work and are reflected in everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { number: '01', title: 'Bold', desc: 'We are confident and courageous', color: 'from-orange-500 to-red-500' },
            { number: '02', title: 'Insight', desc: 'We gain deep and accurate understanding', color: 'from-blue-600 to-indigo-600' },
            { number: '03', title: 'Execution', desc: 'We don\'t just speak, we get things done', color: 'from-orange-500 to-red-500' },
            { number: '04', title: 'Responsibility', desc: 'We own our actions', color: 'from-blue-600 to-indigo-600' },
            { number: '05', title: 'Impact', desc: 'We have positive and marked influence', color: 'from-orange-500 to-red-500' }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                {value.number}
              </div>
              <h3 className="gellix-font text-white font-semibold text-lg mb-2">{value.title}</h3>
              <p className="gellix-font text-gray-300 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;