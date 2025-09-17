
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

const TeamPage = () => {
  return (
    <div className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Team</h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Experienced in investing in multiple markets & in running investment management businesses.
          </p>

          <GlassCard className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                FT
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Fungai Tarira</h2>
              <p className="text-blue-200 font-semibold mb-4">Chief Investment Officer</p>
              <p className="text-gray-300 mb-4">24 years experience</p>
              <p className="text-gray-300 mb-6">BCom (Hons)Fin, IOB(Z)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-900/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Experience Timeline</h4>
                <div className="space-y-2 text-gray-300 text-left">
                  <div>Feb 2014 - Founding Partner & CIO, Rudiarius Capital Management</div>
                  <div>Jun 2008 - Dec 2013 - Head Africa Investments, RMB Asset Management</div>
                  <div>Apr 2007 - Dec 2007 - Portfolio Manager West Africa, African Alliance</div>
                  <div>Jun 2005 - Mar 2007 - Chief Investment Officer, Imara Asset Management</div>
                  <div>Jul 2003 - May 2005 - Senior Investment Manager, ABC Asset Management</div>
                  <div>Jun 2001 - Jun 2003 - Equity Trader, Analyst, Fleming Asset Management</div>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Leadership</h4>
                <p className="text-gray-300 text-left">
                  Fungai sits at the helm of a talented multidisciplinary team that travels extensively 
                  to the target areas our investment strategies focus on; engaging with management teams 
                  on the ground and applying proven, world-class techniques to make high quality investments 
                  pursuant to our client mandates.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;