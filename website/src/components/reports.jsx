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

const Reports = () => {
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

          {/* Recent Newsletters */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="gellix-font text-4xl font-bold text-white mb-4">Recent Publications</h2>
              <p className="gellix-font text-gray-400 max-w-2xl mx-auto">
                Explore our latest market insights and investment analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {recentNewsletters.map((newsletter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-blue-400" size={16} />
                        <span className="gellix-font text-gray-400 text-sm">{newsletter.date}</span>
                      </div>
                      <span className="gellix-font text-gray-500 text-xs">{newsletter.readTime}</span>
                    </div>
                    
                    <h3 className="gellix-font text-xl font-bold text-white mb-3">{newsletter.title}</h3>
                    <p className="gellix-font text-gray-300 mb-4">{newsletter.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {newsletter.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors duration-300">
                        <Eye size={16} />
                        <span className="gellix-font text-sm">Preview</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/30 transition-colors duration-300">
                        <Download size={16} />
                        <span className="gellix-font text-sm">Download</span>
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

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

export default Reports;