<template>
    <div class="latest-news-cards-mobile">
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
        <div class="carousel-cards-inner" :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }">
          <div 
            class="carousel-cards-item" 
            v-for="(item, index) in items" 
            :key="item.title"
            @click="navigateTo(item.title)"
          >
            <div class="card">
              <div class="card-img-container">
                <img 
                  :src="item.urlToImage" 
                  class="card-img-top" 
                  alt="..." 
                  @error="handleImageError(index)"
                >
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
  </template>
  
  <script>
  import { fetchNews } from '../../services/newsService';  
  
  export default {
    props: {
      currentIndex: Number,
      items: Array,
      slideWidth: Number,
    },
    methods: {
      next() {
        const maxIndex = this.items.length - 1;
        if (this.currentIndex < maxIndex) {
          this.$emit('update:currentIndex', this.currentIndex + 1);
        } else {
          this.$emit('update:currentIndex', 0);
        }
      },
      prev() {
        if (this.currentIndex > 0) {
          this.$emit('update:currentIndex', this.currentIndex - 1);
        } else {
          this.$emit('update:currentIndex', this.items.length - 1);
        }
      },
      handleImageError(index) {
        this.$emit('handle-image-error', index);
      },
      navigateTo(title) {
        this.$router.push(`/${title}`);
      }
    }
  };
  </script>
  