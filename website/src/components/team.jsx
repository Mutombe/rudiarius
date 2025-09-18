import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Building2, MapPin, Phone, Mail, Award, TrendingUp, Globe } from 'lucide-react';

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
    <div className="px-6 py-20 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
            LEADERSHIP
          </span>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Meet our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experienced in investing in multiple markets & in running investment management businesses. 
            Our dedicated professionals bring decades of expertise to every investment decision.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24+</div>
            <div className="text-gray-400 text-sm">Years Combined Experience</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400 text-sm">Markets Covered</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm">Company Site Visits</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400 text-sm">Years Track Record</div>
          </GlassCard>
        </motion.div>

        {/* Main Team Member - Fungai Tarira */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="max-w-6xl mx-auto">
            <GlassCard className="relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Profile Section */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="relative mb-6">
                      <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                          <img 
                            src="/fungai.jpeg"
                            alt="Fungai Tarira - Chief Investment Officer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Floating badge */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:transform-none">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl">
                          24 Years Experience
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <h2 className="text-4xl font-bold text-white">Fungai Tarira</h2>
                      <p className="text-blue-300 font-semibold text-xl">Chief Investment Officer</p>
                      <p className="text-gray-400 text-lg">BCom (Hons)Fin, IOB(Z)</p>
                      
                      {/* Contact Info */}
                      <div className="space-y-2 pt-4">
                        <div className="flex items-center justify-center lg:justify-start text-gray-300">
                          <MapPin size={16} className="mr-2 text-blue-400" />
                          <span className="text-sm">Zimbabwe & South Africa</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start text-gray-300">
                          <Building2 size={16} className="mr-2 text-blue-400" />
                          <span className="text-sm">Founding Partner</span>
                        </div>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex justify-center lg:justify-start pt-4">
                        <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                          <Linkedin size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience and Details */}
                  <div className="lg:col-span-3">
                    <div className="space-y-8">
                      {/* Career Timeline */}
                      <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/20">
                        <h4 className="text-white font-semibold mb-6 flex items-center text-xl">
                          <Building2 size={24} className="mr-3 text-blue-400" />
                          Career Timeline
                        </h4>
                        <div className="space-y-4">
                          <div className="flex">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-400 mt-2 mr-4"></div>
                            <div>
                              <div className="text-white font-medium text-lg">Feb 2014 - Present</div>
                              <div className="text-blue-200 font-semibold">Founding Partner & CIO, Rudiarius Capital Management</div>
                              <div className="text-gray-300 text-sm mt-1">Leading investment strategy and portfolio management for African equity investments</div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-400 mt-2 mr-4"></div>
                            <div>
                              <div className="text-white font-medium">Jun 2008 - Dec 2013</div>
                              <div className="text-green-200 font-semibold">Head Africa Investments, RMB Asset Management</div>
                              <div className="text-gray-300 text-sm mt-1">Oversaw African investment strategies and portfolio construction</div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-orange-400 mt-2 mr-4"></div>
                            <div>
                              <div className="text-white font-medium">Apr 2007 - Dec 2007</div>
                              <div className="text-orange-200 font-semibold">Portfolio Manager West Africa, African Alliance</div>
                              <div className="text-gray-300 text-sm mt-1">Managed West African equity portfolios and investment decisions</div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-400 mt-2 mr-4"></div>
                            <div>
                              <div className="text-white font-medium">Jun 2005 - Mar 2007</div>
                              <div className="text-purple-200 font-semibold">Chief Investment Officer, Imara Asset Management</div>
                              <div className="text-gray-300 text-sm mt-1">Led investment strategy and risk management processes</div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-pink-400 mt-2 mr-4"></div>
                            <div>
                              <div className="text-white font-medium">Jul 2003 - May 2005</div>
                              <div className="text-pink-200 font-semibold">Senior Investment Manager, ABC Asset Management</div>
                              <div className="text-gray-300 text-sm mt-1">Senior role in investment analysis and portfolio management</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Leadership & Vision */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-xl p-6 border border-orange-500/20">
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <Users size={20} className="mr-2 text-orange-400" />
                            Leadership & Vision
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Fungai sits at the helm of a talented multidisciplinary team that travels extensively 
                            to the target areas our investment strategies focus on; engaging with management teams 
                            on the ground and applying proven, world-class techniques.
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-orange-500/20">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-300">15+</div>
                              <div className="text-xs text-gray-400">Markets Covered</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-300">500+</div>
                              <div className="text-xs text-gray-400">Site Visits</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl p-6 border border-green-500/20">
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <TrendingUp size={20} className="mr-2 text-green-400" />
                            Investment Philosophy
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Believes in identifying mispriced assets in inefficient African markets through 
                            rigorous fundamental analysis and comprehensive risk assessment, focusing on 
                            long-term value creation.
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs">Value Investing</span>
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs">Risk Management</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">ESG Focus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">What Drives Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team operates on core principles that guide every decision and interaction with clients and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2374&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Independence</h3>
                <p className="text-gray-300 leading-relaxed">
                  As an independent firm, we maintain complete freedom to act in our clients' best interests 
                  without external conflicts or pressures.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2415&q=80"
                  alt="Data analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We apply world-class investment techniques and rigorous analysis to deliver 
                  superior risk-adjusted returns for our clients.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2338&q=80"
                  alt="Global connectivity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Local Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep understanding of African markets through extensive on-ground research 
                  and direct engagement with management teams.
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Team Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                OUR APPROACH
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">Collaborative Excellence</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our multidisciplinary team combines diverse expertise in investment analysis, 
                risk management, and African market dynamics to deliver comprehensive solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Through extensive travel and direct engagement with companies across our target markets, 
                we maintain an unparalleled understanding of the opportunities and challenges in African investments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">Direct management engagement through site visits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">Rigorous fundamental analysis and due diligence</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-gray-300">Comprehensive risk assessment frameworks</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-gray-300">ESG integration in all investment decisions</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Team meeting and strategy discussion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">24</div>
                        <div className="text-sm text-gray-300">Countries Analyzed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">World-Class</div>
                        <div className="text-sm text-gray-300">Standards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <GlassCard className="text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Professional handshake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to work with our team?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with our experienced professionals to explore how our expertise and 
                proven track record can help achieve your investment objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule a Meeting
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300">
                  Learn About Our Approach
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;