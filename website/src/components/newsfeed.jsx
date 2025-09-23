// components/NewsFeed.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ExternalLink, 
  TrendingUp, 
  Filter, 
  RefreshCw,
  Eye,
  Calendar,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { fetchNews, setCategory, clearError, markAsRead  } from '../redux/slice/newsSlice';

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const WhiteCard = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className={`bg-white shadow-lg border border-gray-200 rounded-2xl p-6 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const NewsCard = ({ article, index, onMarkAsRead }) => {
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <WhiteCard className={`h-full hover:border-blue-400/50 transition-all duration-300 ${
        article.isRead ? 'opacity-75' : ''
      }`}>
        {/* Article Image 
        {article.image_url && !imageError && (
          <div className="relative overflow-hidden rounded-xl mb-4 h-48">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {article.insights && article.insights[0] && (
              <div className="absolute top-3 right-3">
                <div className={`px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium ${
                  getSentimentColor(article.insights[0].sentiment)
                }`}>
                  {article.insights[0].sentiment}
                </div>
              </div>
            )}
          </div>
        )}*/}

        {/* Publisher Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {article.publisher?.favicon_url && (
              <img
                src={article.publisher.favicon_url}
                alt={article.publisher.name}
                className="w-4 h-4 rounded"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <span className="gellix-font text-sm text-blue-600 font-medium">
              {article.publisher?.name || 'Unknown'}
            </span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            {formatDate(article.published_utc)}
          </div>
        </div>

        {/* Title */}
        <h3 className="gellix-font text-gray-900 font-semibold text-lg mb-3 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="gellix-font text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {article.description}
        </p>

        {/* Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article.keywords.slice(0, 3).map((keyword, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}

        {/* Tickers */}
        {article.tickers && article.tickers.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article.tickers.slice(0, 3).map((ticker, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-mono"
              >
                ${ticker}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={() => onMarkAsRead(article.id)}
            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Eye size={12} />
            <span>{article.isRead ? 'Read' : 'Mark as read'}</span>
          </button>
          
          <a
            href={article.article_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-600 text-xs rounded-full transition-colors group/link"
          >
            <span>Read More</span>
            <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </WhiteCard>
    </motion.div>
  );
};

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, lastUpdated, categories, selectedCategory } = useSelector(
    (state) => state.news
  );
  
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Initial fetch
    dispatch(fetchNews({ limit: 12, category: selectedCategory }));
    
    // Set up auto-refresh every 5 minutes
    let interval;
    if (autoRefresh) {
      interval = setInterval(() => {
        dispatch(fetchNews({ limit: 12, category: selectedCategory }));
      }, 5 * 60 * 1000); // 5 minutes
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [dispatch, selectedCategory, autoRefresh]);

  const handleRefresh = () => {
    dispatch(fetchNews({ limit: 12, category: selectedCategory }));
  };

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(fetchNews({ limit: 12, category }));
  };

  const handleMarkAsRead = (articleId) => {
    dispatch(markAsRead(articleId));
  };

  if (error && articles.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6">
        <GlassCard className="text-center">
          <div className="text-red-400 mb-4">
            <Globe size={48} className="mx-auto mb-2" />
            <h3 className="gellix-font text-xl font-semibold">Failed to Load News</h3>
            <p className="gellix-font text-gray-300 mt-2">{error}</p>
          </div>
          <button
            onClick={handleRefresh}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
          >
            Try Again
          </button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto rounded-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat rounded-md"
        style={{
          backgroundImage: `url('/news.jpg')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <TrendingUp className="text-blue-400 mr-4" size={48} />
            <h1 className="gellix-font text-5xl md:text-6xl font-bold text-white">
              Market Pulse
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gellix-font text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Your gateway to real-time financial intelligence. Stay ahead of market movements with instant access to breaking news, analysis, and insights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center">
              <Globe size={16} className="mr-2 text-blue-400" />
              <span>Global Markets</span>
            </div>
            <div className="flex items-center">
              <RefreshCw size={16} className="mr-2 text-green-400" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center">
              <TrendingUp size={16} className="mr-2 text-purple-400" />
              <span>Market Analysis</span>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </motion.div>

      <div className="px-6 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="gellix-font text-4xl font-bold text-white">Latest News</h2>
          </div>
          <p className="gellix-font text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Stay informed with real-time financial news and market insights
          </p>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
            
            {/* Auto-refresh Toggle */}
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded border-white/20"
              />
              <span>Auto-refresh</span>
            </label>
          </div>
          
          {/* Last Updated */}
          {lastUpdated && (
            <p className="gellix-font text-xs text-gray-400 mt-4 flex items-center justify-center">
              <Calendar size={12} className="mr-1" />
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </p>
          )}
        </motion.div>

        {/* Loading State */}
        {loading && articles.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-pulse">
                <div className="bg-white/10 h-48 rounded-xl mb-4" />
                <div className="bg-white/10 h-4 rounded mb-2" />
                <div className="bg-white/10 h-4 rounded w-3/4 mb-4" />
                <div className="bg-white/10 h-16 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* News Grid */}
        {articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {articles.map((article, index) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  index={index}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Error State (with existing articles) */}
        {error && articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-300 text-sm">
              Failed to refresh: {error}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;