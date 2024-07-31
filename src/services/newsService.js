// src/services/newsService.js
import axios from 'axios';

const API_KEY = 'd80a2ded1978473999d39e37942ea8eb';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchNews = async (params) => {
  const endpoint = 'everything';
  const requestParams = {
    ...params,
    apiKey: API_KEY,
  };

  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await axios.get(url, { params: requestParams });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
