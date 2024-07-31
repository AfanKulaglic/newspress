<template>
  <div>
    <LatestNewsCardsDesktop 
      v-if="isDesktop" 
      :currentIndex="currentIndex" 
      :items="items" 
      :slideWidth="slideWidth" 
      @update:currentIndex="updateIndex" 
      @handle-image-error="handleImageError"
    />
    <LatestNewsCardsMobile 
      v-else 
      :currentIndex="currentIndex" 
      :items="items" 
      :slideWidth="slideWidth" 
      @update:currentIndex="updateIndex" 
      @handle-image-error="handleImageError"
    />
  </div>
</template>

<script>
import LatestNewsCardsDesktop from '../Desktop/LatestNewsCardsDesktop.vue';
import LatestNewsCardsMobile from '../Mobile/LatestNewsCardsMobile.vue';
import { fetchNews } from '../../services/newsService';  

export default {
  components: {
    LatestNewsCardsDesktop,
    LatestNewsCardsMobile
  },
  data() {
    return {
      isDesktop: true,
      currentIndex: 0,
      items: [],
      intervalId: null, 
    };
  },
  computed: {
    totalSlides() {
      return this.items.length;
    },
    slideWidth() {
      return this.isDesktop ? 25 : 100;
    }
  },
  mounted() {
    this.setDeviceType();
    window.addEventListener("resize", this.setDeviceType);
    this.loadNews();
    this.startCarousel();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setDeviceType);
    this.stopCarousel();
  },
  methods: {
    setDeviceType() {
      this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
    },
    updateIndex(newIndex) {
      this.currentIndex = newIndex;
    },
    handleImageError(index) {
      this.items.splice(index, 1);  
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 3000); 
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
    async loadNews() {
      const params = {
        q: 'politics',
        sortBy: 'publishedAt',
        language: 'en',
      };
      try {
        const data = await fetchNews(params);
        this.items = (data.articles || [])
          .filter(article => article.urlToImage) 
          .slice(0, 15); 
      } catch (error) {
        console.error('Error loading news:', error);
      }
    },
    next() {
      const maxIndex = this.isDesktop ? this.totalSlides - 4 : this.totalSlides - 1;
      if (this.currentIndex < maxIndex) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.isDesktop ? this.totalSlides - 4 : this.totalSlides - 1;
      }
    }
  }
};
</script>
