<template>
    <div class="detail-content">
      <DesktopVersion v-if="isDesktop" :news="filteredNews" @navigate="navigateTo" />
      <MobileVersion v-else :news="filteredNews.slice(0, 1)" @navigate="navigateTo" />
    </div>
  </template>
  
  <script>
  import { fetchNews } from '../../services/newsService';
  import DesktopVersion from '../Desktop/DetailContentDesktop.vue'; 
  import MobileVersion from '../Mobile/DetailContentMobile.vue';
  
  export default {
    components: {
      DesktopVersion,
      MobileVersion
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        news: [],
        filteredNews: [],
        isDesktop: true
      };
    },
    methods: {
      async loadNews() {
        const params = {
          q: this.title,
          sortBy: 'publishedAt',
          language: 'en',
          searchIn: 'title'
        };
        try {
          const data = await fetchNews(params);
          this.news = data.articles || [];
          this.filterNews();
        } catch (error) {
          console.error('Error loading news:', error);
        }
      },
      filterNews() {
        this.filteredNews = this.news.filter(article => article.urlToImage).slice(0, 2);
      },
      navigateTo(title) {
        console.log('Navigating to:', title);
      },
      setDeviceType() {
        this.isDesktop = window.innerWidth >= 992; 
      }
    },
    mounted() {
      this.loadNews();
      this.setDeviceType();
      window.addEventListener('resize', this.setDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setDeviceType);
    }
  };
  </script>
  