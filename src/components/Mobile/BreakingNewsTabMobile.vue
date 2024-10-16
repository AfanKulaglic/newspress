<template>
    <div class="breaking-news-tab-mobile">
      <div id="title">
        <h6>BREAKING NEWS</h6>
      </div>
      <div id="context">
        <transition name="slide-up">
          <span ref="newsSpan" :key="currentIndex" class="slide-up-enter-active">
            {{ currentNews }}
          </span>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  import { fetchNews } from '../../services/newsService';
  
  export default {
    data() {
      return {
        newsList: [],
        currentIndex: 0,
        currentNews: "",
        interval: null
      };
    },
    mounted() {
      this.loadNews();
      this.interval = setInterval(this.changeNews, 5000);
    },
    destroyed() {
      clearInterval(this.interval);
    },
    methods: {
      async loadNews() {
        const params = {
          q: 'world',
          sortBy: 'publishedAt',
          language: 'en',
        };
        try {
          const data = await fetchNews(params);
          const articles = (data.articles || []).map(article => article.title);
  
          this.newsList = articles;
          this.currentNews = this.newsList[this.currentIndex];
        } catch (error) {
          console.error('Error loading news:', error);
        }
      },
      changeNews() {
        const newsSpan = this.$refs.newsSpan;
  
        gsap.to(newsSpan, {
          duration: 0.5,
          translateY: '-100%',
          opacity: 1,
          ease: 'power2.out',
          onComplete: () => {
            this.currentNews = this.newsList[this.currentIndex];
            this.currentIndex = (this.currentIndex + 1) % this.newsList.length;
            gsap.fromTo(newsSpan, { translateY: '100%'}, { translateY: '0%', duration: 0.5, ease: 'power2.out' });
          }
        });
      }
    }
  };
  </script>
  