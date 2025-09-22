import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, TrendingUp, Globe, Users, Calendar, ArrowRight, Check, X, Download, Eye } from 'lucide-react';

// Color palette from the existing design
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

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('monthly');
  const [selectedTopics, setSelectedTopics] = useState(['market-insights']);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const frequencies = [
    { id: 'weekly', label: 'Weekly', description: 'Latest market updates and analysis' },
    { id: 'monthly', label: 'Monthly', description: 'In-depth market review and outlook' },
    { id: 'quarterly', label: 'Quarterly', description: 'Comprehensive strategy updates' }
  ];

  const topics = [
    { id: 'market-insights', label: 'Market Insights', icon: TrendingUp },
    { id: 'strategy-updates', label: 'Strategy Updates', icon: Globe },
    { id: 'africa-focus', label: 'Africa Focus', icon: Users },
    { id: 'trade-finance', label: 'Trade Finance', icon: Mail }
  ];

  const recentNewsletters = [
    {
      title: 'African Markets Quarterly Review',
      date: 'December 2024',
      description: 'Comprehensive analysis of African equity and fixed income markets, including key developments in SADC region.',
      topics: ['Market Analysis', 'SADC', 'Quarterly Review'],
      readTime: '12 min read'
    },
    {
      title: 'Trade Finance Opportunities in Emerging Markets',
      date: 'November 2024',
      description: 'Exploring the growing opportunities in trade finance across emerging African markets and their impact on portfolio diversification.',
      topics: ['Trade Finance', 'Emerging Markets', 'Portfolio Strategy'],
      readTime: '8 min read'
    },
    {
      title: 'Multi-Asset Strategy Performance Update',
      date: 'November 2024',
      description: 'Monthly performance review of our flagship Africa Focused Strategy and market positioning adjustments.',
      topics: ['Performance', 'Multi-Asset', 'Strategy Update'],
      readTime: '6 min read'
    },
    {
      title: 'Currency Trends and Investment Implications',
      date: 'October 2024',
      description: 'Analysis of major currency movements affecting African markets and their implications for international investors.',
      topics: ['Currency Analysis', 'Risk Management', 'Global Markets'],
      readTime: '10 min read'
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      setShowSuccess(true);
      setIsSubscribed(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const toggleTopic = (topicId) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.tertiary} 100%)` }}>
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="gellix-font text-sm text-blue-300 tracking-[0.3em] uppercase font-medium">
                Stay Informed
              </span>
            </div>
            
            <h1 className="gellix-font text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Investment{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            
            <p className="gellix-font text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Receive our expert analysis on African markets, multi-asset investing strategies, 
              and global economic trends directly in your inbox.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2,500+</div>
                <div className="text-sm text-gray-400">Active subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Years publishing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Countries reached</div>
              </div>
            </div>
          </motion.div>

          {/* Subscription Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="gellix-font text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
                    <p className="gellix-font text-gray-300 text-sm">Join our community of informed investors</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="gellix-font block text-white font-semibold mb-3">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="gellix-font block text-white font-semibold mb-3">Frequency</label>
                    <div className="space-y-3">
                      {frequencies.map((freq) => (
                        <div
                          key={freq.id}
                          onClick={() => setSelectedFrequency(freq.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                            selectedFrequency === freq.id
                              ? 'bg-blue-600/30 border-blue-400'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="gellix-font text-white font-semibold">{freq.label}</h4>
                              <p className="gellix-font text-gray-300 text-sm">{freq.description}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedFrequency === freq.id ? 'border-blue-400 bg-blue-400' : 'border-gray-400'
                            }`}>
                              {selectedFrequency === freq.id && <Check className="text-white" size={12} />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="gellix-font block text-white font-semibold mb-3">Topics of Interest</label>
                    <div className="grid grid-cols-2 gap-3">
                      {topics.map((topic) => {
                        const Icon = topic.icon;
                        return (
                          <div
                            key={topic.id}
                            onClick={() => toggleTopic(topic.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                              selectedTopics.includes(topic.id)
                                ? 'bg-blue-600/30 border-blue-400'
                                : 'bg-white/5 border-white/20 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className="text-blue-400" size={20} />
                              <span className="gellix-font text-white text-sm">{topic.label}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    <span className="gellix-font flex items-center justify-center">
                      {isSubscribed ? (
                        <>
                          <Check className="mr-2" size={20} />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <ArrowRight className="ml-2" size={20} />
                        </>
                      )}
                    </span>
                  </button>
                </div>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 bg-green-600/20 border border-green-400 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <Check className="text-green-400" size={20} />
                        <span className="gellix-font text-green-300">
                          Welcome aboard! Check your email for confirmation.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <GlassCard>
                <h3 className="gellix-font text-xl font-bold text-white mb-4">Why Subscribe?</h3>
                <div className="space-y-4">
                  {[
                    'Expert analysis on African and global markets',
                    'Exclusive insights on our investment strategies', 
                    'Early access to research reports and market updates',
                    'Educational content on multi-asset investing',
                    'Updates on regulatory changes affecting investments'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                      <span className="gellix-font text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="gellix-font text-xl font-bold text-white mb-4">Newsletter Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">94%</div>
                    <div className="text-xs text-gray-400">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">87%</div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">2x</div>
                    <div className="text-xs text-gray-400">Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">10+</div>
                    <div className="text-xs text-gray-400">Languages</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Archive Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <GlassCard className="text-center">
              <h3 className="gellix-font text-2xl font-bold text-white mb-4">
                Explore Our Newsletter Archive
              </h3>
              <p className="gellix-font text-gray-300 mb-8 max-w-2xl mx-auto">
                Access our complete collection of investment insights, market analyses, 
                and strategy updates from the past years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                  <span className="gellix-font">Browse Archive</span>
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300">
                  <span className="gellix-font">Contact Us</span>
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;