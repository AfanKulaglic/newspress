<template>
  <div>
    <div v-if="isDesktop" class="latest-news-cards">
      <div class="title-and-controls">
        <h4>Latest News</h4>
        <div class="carousel-controls">
          <button @click="prev" class="carousel-cards-control-prev">‹</button>
          <button @click="next" class="carousel-cards-control-next">›</button>
        </div>
      </div>
      <hr />
      <hr id="red-hr" />
      <div class="carousel-cards">
        <div class="carousel-cards-inner" :style="{ transform: `translateX(-${currentIndex * 25}%)` }">
          <div class="carousel-cards-item" v-for="(item, index) in items" :key="item.title">
            <div class="card">
              <div class="card-img-container">
                <img :src="item.urlToImage" class="card-img-top" alt="..." @error="handleImageError(index)">
                <b-badge class="badge" variant="danger">New</b-badge>
              </div>
              <div class="card-body">
                <p class="card-text">{{ item.publishedAt }}</p>
                <h6 class="card-title">{{ item.title }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Mobile</p>
    </div>
  </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';  

export default {
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
    next() {
      if (this.currentIndex < this.totalSlides - 4) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.totalSlides - 4; 
      }
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
        console.log('Response data:', data);  
        this.items = (data.articles || [])
          .filter(article => article.urlToImage) 
          .slice(0, 15); 
      } catch (error) {
        console.error('Error loading news:', error);
      }
    },
    handleImageError(index) {
      this.items.splice(index, 1);  
    }
  },
};
</script>
