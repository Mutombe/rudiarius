// store/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// WARNING: In production, never expose API keys in client-side code!
// Move this to environment variables and proxy through your backend
const API_KEY = "l8TQKKpACZBUho4kUWgAdOp_jZfuhWgz";

// Async thunk for fetching news
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ limit = 3, category = 'finance' } = {}, { rejectWithValue }) => {
    try {
      // Using direct API call since we can't use the client library in browser
      const params = new URLSearchParams({
        'limit': limit.toString(),
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
      
      return data.results || [];
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