import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Linkedin,
  Building2,
  MapPin,
  Phone,
  Mail,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiSketching } from "react-icons/ri";

// Color palette from images
const colors = {
  primary: "#001D39",
  secondary: "#0A4174",
  tertiary: "#49769F",
  quaternary: "#4E8EA2",
  light: "#6EA2B3",
  lighter: "#7BBDE8",
  lightest: "#BDD8E9",
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
  const navigate = useNavigate();
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
            Meet our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experienced in investing in multiple markets & in running investment
            management businesses. Our dedicated professionals bring decades of
            expertise to every investment decision.
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
              <IoPeopleCircleOutline size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24+</div>
            <div className="text-gray-400 text-sm">
              Years Combined Experience
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GiWorld size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400 text-sm">Markets Covered</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HiOutlineBuildingOffice2 size={32} className="text-white" />
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
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              OUR LEADERSHIP
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dedicated professionals with decades of combined experience in
              African investment markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Edward Bennet - Director */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                      <IoPeopleCircleOutline size={48} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xl">
                      15 Years Experience
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Edward Bennet</h3>
                  <p className="text-blue-600 font-semibold">
                    Director
                  </p>
                  <p className="text-gray-600">CFA, MBA Finance</p>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <MapPin size={14} className="mr-2 text-blue-600" />
                      <span className="text-sm">South Africa</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Building2 size={14} className="mr-2 text-blue-600" />
                      <span className="text-sm">Founding Partner</span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                      <Linkedin size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leads investment strategy with deep expertise in African
                    equity markets and portfolio management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-blue-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">10+</div>
                      <div className="text-xs text-gray-600">Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Site Visits</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emma Hall - Director */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-blue-600 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                      <TrendingUp size={48} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xl">
                      12 Years Experience
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Emma Hall</h3>
                  <p className="text-green-600 font-semibold">
                    Director
                  </p>
                  <p className="text-gray-600">BCom (Hons), CFA Level II</p>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <MapPin size={14} className="mr-2 text-green-600" />
                      <span className="text-sm">Kenya</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Building2 size={14} className="mr-2 text-green-600" />
                      <span className="text-sm">Portfolio Management</span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <div className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                      <Linkedin size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Specializes in East African markets with extensive
                    experience in fundamental analysis and risk management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-green-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">8+</div>
                      <div className="text-xs text-gray-600">Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        150+
                      </div>
                      <div className="text-xs text-gray-600">Site Visits</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Senziwani Sikhosana - Director */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-orange-600 to-red-600 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                      <Award size={48} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xl">
                      10 Years Experience
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Senziwani Sikhosana</h3>
                  <p className="text-orange-600 font-semibold">
                    Director
                  </p>
                  <p className="text-gray-600">PhD Economics, CFA</p>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <MapPin size={14} className="mr-2 text-orange-600" />
                      <span className="text-sm">Ghana</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Building2 size={14} className="mr-2 text-orange-600" />
                      <span className="text-sm">Research & Analysis</span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <div className="w-8 h-8 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                      <Linkedin size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leads comprehensive research initiatives across West African
                    markets with focus on macroeconomic analysis.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-orange-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">
                        6+
                      </div>
                      <div className="text-xs text-gray-600">Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">
                        100+
                      </div>
                      <div className="text-xs text-gray-600">Site Visits</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fungai Tarira - Director */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                      <IoPeopleCircleOutline size={48} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xl">
                      15 Years Experience
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Fungai Tarira</h3>
                  <p className="text-blue-600 font-semibold">
                    Director
                  </p>
                  <p className="text-gray-600">CFA, MBA Finance</p>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <MapPin size={14} className="mr-2 text-blue-600" />
                      <span className="text-sm">South Africa</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Building2 size={14} className="mr-2 text-blue-600" />
                      <span className="text-sm">Founding Partner</span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                      <Linkedin size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Leads investment strategy with deep expertise in African
                    equity markets and portfolio management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-blue-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">10+</div>
                      <div className="text-xs text-gray-600">Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Site Visits</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              What Drives Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team operates on core principles that guide every decision and
              interaction with clients and stakeholders.
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
                  <IoPeopleCircleOutline size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Independence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As an independent firm, we maintain complete freedom to act in
                  our clients' best interests without external conflicts or
                  pressures.
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
                <h3 className="text-xl font-semibold text-white mb-4">
                  Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We apply world-class investment techniques and rigorous
                  analysis to deliver superior risk-adjusted returns for our
                  clients.
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
                  <GiWorld size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Local Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep understanding of African markets through extensive
                  on-ground research and direct engagement with management
                  teams.
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Collaborative Excellence
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our multidisciplinary team combines diverse expertise in
                investment analysis, risk management, and African market
                dynamics to deliver comprehensive solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Through extensive travel and direct engagement with companies
                across our target markets, we maintain an unparalleled
                understanding of the opportunities and challenges in African
                investments.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">
                    Direct management engagement through site visits
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">
                    Rigorous fundamental analysis and due diligence
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-gray-300">
                    Comprehensive risk assessment frameworks
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-gray-300">
                    ESG integration in all investment decisions
                  </span>
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
                        <div className="text-sm text-gray-300">
                          Countries Analyzed
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">
                          World-Class
                        </div>
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
                src="/23.jpg"
                alt="Professional handshake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to work with our team?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with our experienced professionals to explore how our
                expertise and proven track record can help achieve your
                investment objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate("/contact")}>
                  Schedule a Meeting
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => navigate("/approach")}>
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