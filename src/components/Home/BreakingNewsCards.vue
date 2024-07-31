<template>
    <div>
      <DesktopBreakingNewsCards 
        v-if="isDesktop" 
        :slides="slides" 
        :firstRowCols="firstRowCols" 
        :secondRowCols="secondRowCols" 
        :currentSlide="currentSlide" 
        @next-slide="nextSlide" 
        @prev-slide="prevSlide" 
        @go-to-slide="goToSlide"
      />
      <MobileBreakingNewsCards 
        v-else 
        :slides="slides" 
        :secondRowColsMobile="secondRowColsMobile" 
        :currentSlide="currentSlide" 
        @next-slide="nextSlide" 
        @prev-slide="prevSlide" 
        @go-to-slide="goToSlide"
      />
    </div>
  </template>
  
  <script>
  import DesktopBreakingNewsCards from '../Desktop/BreakingNewsCardsDesktop.vue';
  import MobileBreakingNewsCards from '../Mobile/BreakingNewsCardsMobile.vue';
  import { fetchNews } from '../../services/newsService';
  
  export default {
    components: {
      DesktopBreakingNewsCards,
      MobileBreakingNewsCards
    },
    data() {
      return {
        isDesktop: true,
        currentSlide: 0,
        slides: [],
        firstRowCols: [],
        secondRowCols: [],
        secondRowColsMobile: [],
        articles: []
      };
    },
    methods: {
      setDeviceType() {
        this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateCarousel();
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
      },
      goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
      },
      updateCarousel() {
        const carousel = this.$el.querySelector('.carousel');
        carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      },
      async loadNews() {
        const params = {
          q: 'world',
          sortBy: 'popularity',
          language: 'en',
        };
        try {
          const data = await fetchNews(params);
          console.log('Response data:', data); 
          this.articles = (data.articles || []).filter(article => article.urlToImage);
          this.processArticles();
        } catch (error) {
          console.error('Error loading news:', error);
        }
      },
      processArticles() {
        this.slides = this.articles.slice(0, 3).map(article => ({
          imgUrl: article.urlToImage,
          title: article.title,
          description: article.publishedAt
        }));
  
        this.firstRowCols = this.articles.slice(3, 5).map(article => ({
          cols: 4,
          imgUrl: article.urlToImage,
          details: article.publishedAt,
          description: article.title
        }));
  
        this.secondRowCols = this.articles.slice(5, 8).map(article => ({
          cols: 4,
          imgUrl: article.urlToImage,
          details: article.publishedAt,
          description: article.title
        }));
  
        this.secondRowColsMobile = this.articles.slice(3, 7).map(article => ({
          cols: 12,
          imgUrl: article.urlToImage,
          details: article.publishedAt,
          description: article.title
        }));
      }
    },
    mounted() {
      this.setDeviceType();
      window.addEventListener("resize", this.setDeviceType);
      this.updateCarousel();
      setInterval(this.nextSlide, 5000);  
      this.loadNews();
    },
    destroyed() {
      window.removeEventListener("resize", this.setDeviceType);
    }
  };
  </script>
  