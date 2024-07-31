<template>
      <CategoryContentDesktop v-if="isDesktop" :category="category" :popularNews="popularNews" />
      <CategoryContentMobile v-else :category="category" :popularNews="popularNews" />
  </template>
  
  <script>
  import CategoryContentDesktop from '../Desktop/CategoryContentDesktop.vue';
  import CategoryContentMobile from '../Mobile/CategoryContentMobile.vue';
  import { fetchNews } from '../../services/newsService';
  
  export default {
    components: {
      CategoryContentDesktop,
      CategoryContentMobile
    },
    props: {
      category: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isDesktop: true,
        popularNews: [],
        imageError: false
      };
    },
    async mounted() {
      await this.loadPopularNews();
      this.setDeviceType();
      window.addEventListener("resize", this.setDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.setDeviceType);
    },
    methods: {
      async loadPopularNews() {
        const params = {
          q: this.category,
          sortBy: 'publishedAt',
          language: 'en'
        };
        try {
          const data = await fetchNews(params);
          const articles = (data.articles || []).filter(article => article.urlToImage);
  
          const validArticles = await Promise.all(articles.map(async article => {
            try {
              await this.checkImage(article.urlToImage);
              return article;
            } catch (e) {
              return null;
            }
          })).then(results => results.filter(article => article !== null));
  
          this.popularNews = validArticles.slice(0, 10);
        } catch (error) {
          console.error('Error loading popular news:', error);
        }
      },
      checkImage(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => reject(false);
          img.src = url;
        });
      },
      setDeviceType() {
        this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
      }
    }
  };
  </script>
  