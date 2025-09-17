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

const AboutPage = () => {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
            ABOUT OUR FIRM
          </span>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            About our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">approach</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At our firm, we pride ourselves on delivering tailored solutions that empower businesses to thrive. 
            With years of experience across various industries, our dedicated team is committed to driving growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started →
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300">
              Free trial
            </button>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="h-full">
              <h2 className="text-3xl font-bold text-white mb-6">Our Company</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Rudiarius Capital Management is an independent, performance-driven investment company 
                owned by investment professionals. We have a strong team, focused solely on identifying 
                and analysing African equity investment opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                As a boutique with a limited product range, we are keenly aware of clients' needs and 
                have the nimbleness to respond quickly to changing conditions and new opportunities.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">$2.4M</div>
                  <div className="text-sm text-gray-400">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">24</div>
                  <div className="text-sm text-gray-400">Countries Analyzed</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Investment Excellence</h3>
                <p className="text-gray-300">Trusted by institutions worldwide</p>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Gladiator Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <GlassCard className="text-center">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              OUR NAME
            </span>
            <h2 className="text-4xl font-bold text-white mb-8">The Story of <span className="text-blue-400">Rudiarius</span></h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                A gladiator who earned his freedom through skill and fortune while fighting in the arena.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">The Arena</h4>
                  <p className="text-gray-400 text-sm">Gladiators fought to entertain crowds at the behest of the Emperor</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">The Rudis</h4>
                  <p className="text-gray-400 text-sm">A wooden sword symbolizing freedom from slavery</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Freedom</h4>
                  <p className="text-gray-400 text-sm">Free to choose their path, many returned as free fighters</p>
                </div>
              </div>
              
              <div className="bg-blue-900/20 rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed">
                  Imbued with a strong entrepreneurial spirit, these <strong className="text-white">Rudiarii</strong> of the modern investment world are 
                  fiercely independent, energetic and totally focused on achieving their clients' mandate.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Philosophy & Approach */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <GlassCard>
              <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                PHILOSOPHY
              </span>
              <h3 className="text-3xl font-bold text-white mb-6">Our Investment Approach</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We believe that African markets are relatively inefficient and that investors allowing 
                room for patient investors to find mispriced assets they may benefit from.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our focus is on valuation of listed African companies in order to find shares that are 
                trading below their intrinsic value.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">Market Analysis</span>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm">Risk Management</span>
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">Long-term Focus</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <GlassCard>
              <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                EXPERTISE
              </span>
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">African Market Expertise</h4>
                    <p className="text-gray-400 text-sm">Deep understanding of African equity markets and their unique challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Independent Approach</h4>
                    <p className="text-gray-400 text-sm">Boutique firm with the agility to respond quickly to market changes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-gray-400 text-sm">Delivering attractive risk-adjusted returns since 2014</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              MILESTONES
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Our journey: key milestones and achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the significant milestones that have shaped our firm. Each achievement reflects our commitment to excellence and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2014', title: 'Company Founded', desc: 'Rudiarius Capital Management established as independent investment firm', color: 'from-blue-500 to-purple-500' },
              { year: '2016', title: 'First Major Fund', desc: 'Launched our flagship African equity investment strategy', color: 'from-green-500 to-blue-500' },
              { year: '2019', title: 'Trade Finance', desc: 'Introduced multicurrency trade finance solutions for SADC region', color: 'from-orange-500 to-red-500' },
              { year: '2024', title: 'Growth Milestone', desc: 'Reached significant assets under management and expanded team', color: 'from-purple-500 to-pink-500' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${milestone.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3">{milestone.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{milestone.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <GlassCard className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to start your investment journey?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in exploring opportunities across African markets with our experienced team and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/strategies"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
              >
                View Our Strategies
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage
