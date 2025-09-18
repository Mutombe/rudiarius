import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

export const ApproachPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Investment Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Our Investment Approach
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We believe that applying a well-considered, risk-cognisant
              approach to investing, sometimes in markets that are regarded as
              nascent and fragile, lends itself to earning superior investment
              returns over time.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  30-60
                </div>
                <div className="text-sm text-gray-400">Companies Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24</div>
                <div className="text-sm text-gray-400">African Markets</div>
              </div>
            </div>

            <button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/strategies")}
            >
              Learn More →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-96">
              <img
                src="/10.jpg"
                alt="Investment analysis and market research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Market Inefficiencies
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Finding mispriced assets in emerging markets
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Believe Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Believe
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our investment philosophy is built on fundamental principles that
              guide every decision we make.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Market Inefficiencies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Inefficiencies in emerging markets allow room for patient
                investors to find mispriced assets and generate superior returns
                over time.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Risk Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding company-specific, industry and country risks is
                key to assessing the sustainability of businesses and their
                profitability.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Long-term Focus
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We focus on long-term value creation through careful analysis of
                business fundamentals and sustainable competitive advantages.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Investment Process Flow */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src="/11.jpg"
                alt="Financial data analysis and charts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent"></div>

              <div className="absolute top-6 left-6">
                <div className="bg-blue-600/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white text-sm font-semibold">
                    Data-Driven Analysis
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <GlassCard>
              <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                PROCESS
              </span>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Investment Process
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Market Screening
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Apply screening criteria across African stock markets,
                      focusing on liquidity and size parameters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Fundamental Analysis
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Evaluate business models, competitive advantages, and
                      management quality through detailed analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Risk Assessment
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Assess company-specific, industry, and country risks to
                      determine sustainability and profitability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Portfolio Construction
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Build diversified portfolios focusing on best ideas
                      without benchmark constraints.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Dual Investment Approaches */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Investment Methodologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We employ distinct approaches for equity and fixed income
              investments, each tailored to maximize returns while managing
              risk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Equity Investment Process
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">
                    Flexible top-down macroeconomic analysis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">
                    Stock-specific research identifying 30-60 companies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">
                    Focus on attractive valuations and growth potential
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300">
                    Separate analysis for banks vs non-banks
                  </span>
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">
                  Target Metrics
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Companies Analyzed:</span>
                    <span className="text-white font-semibold ml-2">30-60</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Markets Covered:</span>
                    <span className="text-white font-semibold ml-2">24+</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Fixed Income Process
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">
                    Active and flexible asset allocation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">
                    Capital preservation and income generation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">
                    Downside protection through market cycles
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300">
                    Diversified fixed income strategies
                  </span>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">
                  Key Objectives
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Capital Stability:</span>
                    <span className="text-white font-semibold ml-2">High</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Income Focus:</span>
                    <span className="text-white font-semibold ml-2">
                      Primary
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Research Methodology with Team Image */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="lg:col-span-2"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6">
                Research Methodology
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Through a combination of financial and market analysis, and site
                visits, we evaluate the business model, its competitive
                advantages, cashflows, sustainability, the quality of
                management, and the drivers of long term growth.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                We also assess non-financial considerations in order to
                understand the risks of the companies in which we operate
                because we believe returns are only sustainable if companies pay
                attention to good labour practices, giving back to community,
                environmental protection and strong governance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Financial Analysis
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300 text-sm">
                        Business model evaluation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300 text-sm">
                        Competitive advantages
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300 text-sm">
                        Cashflow analysis
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300 text-sm">
                        Management quality
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    ESG Considerations
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-gray-300 text-sm">
                        Labour practices
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-gray-300 text-sm">
                        Community impact
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-gray-300 text-sm">
                        Environmental protection
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-gray-300 text-sm">
                        Strong governance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src="22.jpg"
                alt="Investment team conducting research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <GlassCard className="text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="/21.jpg"
                alt="Professional meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to explore our investment strategies?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how our disciplined approach and rigorous methodology
                can help achieve your investment objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate("/strategies")}
                >
                  View Our Strategies
                </button>
                <button
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => navigate("/contact")}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export const StrategiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Investment{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Strategies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our well-experienced team provides a number of solutions for long
              term investors, led by our pioneer product the Worldwide Flexible
              Strategy and the Trade Finance Strategy.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-sm text-gray-400">Core strategies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Years experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  SADC
                </div>
                <div className="text-sm text-gray-400">Regional focus</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategy 1: Worldwide Flexible Strategy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-full bg-white rounded-lg shadow-lg p-8">
              <span className="text-blue-600 text-sm tracking-wider uppercase font-semibold mb-4 block">
                FLAGSHIP STRATEGY
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Worldwide Flexible Strategy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unconstrained and fully flexible, we combine equity and fixed
                income assets to maximise long-term total returns by shifting
                our exposure across various asset classes, in both local and
                foreign markets.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We strive for steady return in the fund with the full ability to
                avoid risk in asset classes where we perceive it to be too high
                at a point in time.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                <h4 className="text-gray-900 font-semibold mb-4">
                  Typical Asset Allocation
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">Equity</span>
                    </div>
                    <span className="text-gray-900 font-bold">62.82%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">Fixed Income</span>
                    </div>
                    <span className="text-gray-900 font-bold">29.50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                      <span className="text-gray-700">Cash & Equivalents</span>
                    </div>
                    <span className="text-gray-900 font-bold">7.68%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Multi-Asset
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                  Flexible
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Global
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-96">
              <img
                src="/18.jpg"
                alt="Global investment portfolio visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Strategy 2: Trade Finance Strategy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden h-96">
              <img
                src="africa.jpg"
                alt="Trade finance and international commerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent"></div>

              <div className="absolute top-6 left-6">
                <div className="bg-orange-600/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white text-sm font-semibold">
                    SADC Focus
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                  <h4 className="text-white font-semibold mb-2">
                    RMTFS Strategy
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Multicurrency trade finance solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:order-1"
          >
            <GlassCard className="h-full">
              <span className="text-orange-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
                SPECIALIZED STRATEGY
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Trade Finance Strategy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Rudiarius Multicurrency Trade Finance Strategy (RMTFS) is
                designed to generate stable, uncorrelated returns by financing
                high-quality corporates operating in SADC, who require working
                capital for import-related transactions denominated in USD or
                other hard currencies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                The fund seeks to bridge the liquidity gap in these countries
                characterised by nascent and often inflexible financing
                environments, by offering structured trade finance solutions
                that are asset-backed, short-duration, and self-liquidating.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 mb-6">
                <h4 className="text-white font-semibold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300 text-sm">
                        Asset-backed solutions
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300 text-sm">
                        Short-duration investments
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300 text-sm">
                        Self-liquidating structures
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300 text-sm">
                        SADC region focus
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full text-sm">
                  Trade Finance
                </span>
                <span className="px-4 py-2 bg-red-600/20 text-red-300 rounded-full text-sm">
                  Asset-Backed
                </span>
                <span className="px-4 py-2 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">
                  SADC
                </span>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Risk Profile & Returns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm tracking-wider uppercase font-semibold mb-4 block">
              PERFORMANCE METRICS
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Risk Profile & Expected Returns
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our investment strategies are designed to deliver attractive
              risk-adjusted returns appropriate for long-term investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2-5</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Appropriate Term
              </h4>
              <p className="text-blue-200 text-2xl font-bold mb-2">Years</p>
              <p className="text-gray-400 text-sm">
                Medium to long-term investment horizon for optimal results
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">+1%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Expected Return</h4>
              <p className="text-green-200 text-2xl font-bold mb-2">
                US Inflation +1%
              </p>
              <p className="text-gray-400 text-sm">
                Target returns above inflation with currency performance focus
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-sm">L-M</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Risk Level</h4>
              <p className="text-purple-200 text-2xl font-bold mb-2">
                Low-Moderate
              </p>
              <p className="text-gray-400 text-sm">
                Balanced approach with controlled volatility and downside
                protection
              </p>
            </GlassCard>
          </div>

          <GlassCard>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Portfolio Characteristics
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our strategies are designed for investors seeking diversified
                  exposure across asset types with a focus on real currency
                  performance and steady long-term growth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">
                      Diversified across asset types and geographies
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-300">
                      Aimed at real currency performance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-gray-300">
                      Exposure to currency and interest rate risks
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-gray-300">
                      Suitable for medium-term investment horizons
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden h-64">
                  <img
                    src="/20.jpg"
                    alt="Portfolio performance analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <GlassCard className="text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="/puzzle.jpg"
                alt="Professional meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to invest with confidence?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore how our investment strategies can help you achieve your
                long-term financial objectives with our experienced team and
                proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Journey
                </button>
                <button
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => navigate("/approach")}
                >
                  Learn Our Approach
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
