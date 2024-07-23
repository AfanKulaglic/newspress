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
            <div class="carousel-cards-item" v-for="(item, index) in items" :key="index">
              <div class="card">
                <div class="card-img-container">
                  <img :src="item.image" class="card-img-top" alt="...">
                  <b-badge class="badge" variant="danger">New</b-badge>
                </div>
                <div class="card-body">
                  <p class="card-text">{{ item.description }}</p>
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
  export default {
    data() {
      return {
        isDesktop: true,
        currentIndex: 0,
        items: [
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 1', description: 'Description 1' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 2', description: 'Description 2' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 3', description: 'Description 3' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 4', description: 'Description 4' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 5', description: 'Description 5' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 6', description: 'Description 6' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 7', description: 'Description 7' },
          { image: 'https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/32-1024x586.jpg', title: 'Card 8', description: 'Description 8' },
        ],
        intervalId: null, // To store the interval ID
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
          this.currentIndex = 0; // Reset to the beginning for infinite loop effect
        }
      },
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.totalSlides - 4; // Move to the end for infinite loop effect
        }
      },
      startCarousel() {
        this.intervalId = setInterval(() => {
          this.next();
        }, 3000); // Rotate every 3 seconds (3000 milliseconds)
      },
      stopCarousel() {
        clearInterval(this.intervalId);
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  