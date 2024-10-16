import { fetchNews } from '../../services/newsService';

const state = {
  articles: [],
};

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },
};

const actions = {
  async loadNews({ commit }) {
    const params = {
      q: 'world',
      sortBy: 'popularity',
      language: 'en',
    };
    try {
      const data = await fetchNews(params);
      const articles = (data.articles || []).filter(article => article.urlToImage);
      commit('SET_ARTICLES', articles);
    } catch (error) {
      console.error('Error loading news:', error);
    }
  },
};

const getters = {
  articles: state => state.articles,
  slides: state => state.articles.slice(0, 3).map(article => ({
    imgUrl: article.urlToImage,
    title: article.title,
    description: article.publishedAt
  })),
  firstRowCols: state => state.articles.slice(3, 5).map(article => ({
    cols: 4,
    imgUrl: article.urlToImage,
    details: article.publishedAt,
    description: article.title
  })),
  secondRowCols: state => state.articles.slice(5, 8).map(article => ({
    cols: 4,
    imgUrl: article.urlToImage,
    details: article.publishedAt,
    description: article.title
  })),
  secondRowColsMobile: state => state.articles.slice(3, 7).map(article => ({
    cols: 12,
    imgUrl: article.urlToImage,
    details: article.publishedAt,
    description: article.title
  })),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
