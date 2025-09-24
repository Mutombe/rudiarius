// components/NewsFeed.jsx - Updated limit calls
// Also update in your NewsFeed component, change these lines:
// dispatch(fetchNews({ limit: 12, category: selectedCategory })); 
// to:
// dispatch(fetchNews({ limit: 6, category: selectedCategory }));

// And in the interval:
// dispatch(fetchNews({ limit: 12, category: selectedCategory }));
// to: 
// dispatch(fetchNews({ limit: 6, category: selectedCategory }));

// And in handleCategoryChange:
// dispatch(fetchNews({ limit: 12, category }));
// to:
// dispatch(fetchNews({ limit: 6, category }));

// store/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// WARNING: In production, never expose API keys in client-side code!
// Move this to environment variables and proxy through your backend
const API_KEY = "l8TQKKpACZBUho4kUWgAdOp_jZfuhWgz";

// Async thunk for fetching news
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ limit = 6, category = 'finance' } = {}, { rejectWithValue }) => {
    try {
      // Fetch more articles initially to allow for filtering
      const params = new URLSearchParams({
        'limit': '100', // Fetch more to allow filtering for unique sources and Africa content
        'sort': 'published_utc',
        'order': 'desc',
        'apikey': API_KEY
      });

      // Add category filter if specified
      if (category !== 'all') {
        params.append('category', category);
      }

      const response = await fetch(`https://api.polygon.io/v2/reference/news?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(data.error || 'Failed to fetch news');
      }
      
      const articles = data.results || [];
      
      // Africa-related keywords for filtering
      const africaKeywords = [
        'africa', 'african', 'south africa', 'nigeria', 'kenya', 'ghana', 'egypt', 
        'morocco', 'zimbabwe', 'botswana', 'zambia', 'tanzania', 'uganda', 'rwanda', 
        'ethiopia', 'senegal', 'mali', 'burkina faso', 'ivory coast', 'cameroon', 
        'angola', 'mozambique', 'madagascar', 'malawi', 'namibia', 'swaziland', 
        'lesotho', 'gambia', 'sierra leone', 'liberia', 'guinea', 'chad', 
        'central african republic', 'democratic republic of congo', 'republic of congo', 
        'gabon', 'equatorial guinea', 'djibouti', 'eritrea', 'somalia', 'sudan', 
        'south sudan', 'tunisia', 'algeria', 'libya', 'johannesburg', 'cape town', 
        'lagos', 'nairobi', 'cairo', 'casablanca', 'harare', 'dar es salaam', 
        'kampala', 'kigali', 'addis ababa', 'dakar', 'bamako', 'ouagadougou', 
        'abidjan', 'yaounde', 'luanda', 'maputo', 'antananarivo', 'lilongwe', 
        'windhoek', 'mbabane', 'maseru', 'banjul', 'freetown', 'monrovia', 'conakry', 
        'ndjamena', 'bangui', 'kinshasa', 'brazzaville', 'libreville', 'malabo', 
        'djibouti', 'asmara', 'mogadishu', 'khartoum', 'juba', 'tunis', 'algiers', 
        'tripoli', 'african union', 'ecowas', 'sadc', 'east africa', 'west africa', 
        'southern africa', 'north africa', 'sub-saharan'
      ];
      
      // Filter for Africa-related content
      const africaRelatedArticles = articles.filter(article => {
        const searchText = (
          (article.title || '') + ' ' + 
          (article.description || '') + ' ' + 
          (article.keywords?.join(' ') || '') + ' ' +
          (article.author || '') + ' ' +
          (article.publisher?.name || '')
        ).toLowerCase();
        
        return africaKeywords.some(keyword => searchText.includes(keyword));
      });
      
      // If we have Africa-related articles, prioritize them, otherwise use all articles
      const articlesToProcess = africaRelatedArticles.length > 0 ? africaRelatedArticles : articles;
      
      // Filter for unique sources (publishers) and limit to 6
      const uniqueSourceArticles = [];
      const seenPublishers = new Set();
      
      // First pass: get articles from unique publishers
      for (const article of articlesToProcess) {
        const publisherName = article.publisher?.name;
        if (publisherName && !seenPublishers.has(publisherName) && uniqueSourceArticles.length < 6) {
          seenPublishers.add(publisherName);
          uniqueSourceArticles.push(article);
        }
      }
      
      // Second pass: if we still don't have 6 articles, add more but try to maintain diversity
      if (uniqueSourceArticles.length < 6) {
        for (const article of articlesToProcess) {
          if (uniqueSourceArticles.length >= 6) break;
          
          // Check if this article is already included
          const alreadyIncluded = uniqueSourceArticles.some(ua => ua.id === article.id);
          if (!alreadyIncluded) {
            uniqueSourceArticles.push(article);
          }
        }
      }
      
      // Ensure we return exactly 6 articles (or fewer if not available)
      const finalArticles = uniqueSourceArticles.slice(0, 6);
      
      console.log(`Found ${africaRelatedArticles.length} Africa-related articles out of ${articles.length} total`);
      console.log(`Returning ${finalArticles.length} articles from unique sources`);
      
      return finalArticles;
      
    } catch (error) {
      console.error('News fetch error:', error);
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    lastUpdated: null,
    categories: ['all', 'business', 'technology', 'markets', 'economics'],
    selectedCategory: 'all',
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    markAsRead: (state, action) => {
      const articleId = action.payload;
      const article = state.articles.find(a => a.id === articleId);
      if (article) {
        article.isRead = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.map(article => ({
          ...article,
          isRead: false,
        }));
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch news';
      });
  },
});

export const { setCategory, clearError, markAsRead } = newsSlice.actions;
export default newsSlice.reducer;