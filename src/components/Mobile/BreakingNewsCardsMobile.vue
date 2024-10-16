<template>
  <div class="breaking-news-cards-mobile">
    <div class="carousel-container">
      <div class="carousel">
        <div 
          class="carousel-slide" 
          v-for="(slide, index) in slides" 
          :key="index" 
          :style="{ backgroundImage: 'url(' + slide.imgUrl + ')' }"
          @click="navigateTo(slide.title)"
        >
          <div class="carousel-content">
            <b-badge class="badge" variant="danger">New</b-badge><br/>
            <span class="details">{{ slide.description }}</span>
            <h6>{{ slide.title }}</h6>
          </div>
        </div>
      </div>
      <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-button next" @click="nextSlide">&#10095;</button>
      <div class="indicators">
        <span 
          v-for="(slide, index) in slides" 
          :key="index" 
          :class="['indicator', { active: index === currentSlide }]" 
          @click="goToSlide(index)">
        </span>
      </div>
    </div>
    <b-row class="text-center row">
      <template v-for="(col, index) in secondRowColsMobile" :key="'secondRow-' + index">
        <b-col class="col" :cols="col.cols">
          <div 
            class="img-col" 
            :style="{ backgroundImage: 'url(' + col.imgUrl + ')' }"
            @click="navigateTo(col.description)"
          >
            <div class="context">
              <b-badge class="badge" variant="danger">New</b-badge><br/>
              <span class="details">{{ col.details }}</span>
              <h6>{{ col.description }}</h6>
            </div>
          </div>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['slides', 'secondRowColsMobile', 'currentSlide'],
  methods: {
    nextSlide() {
      this.$emit('next-slide');
    },
    prevSlide() {
      this.$emit('prev-slide');
    },
    goToSlide(index) {
      this.$emit('go-to-slide', index);
    },
    updateCarousel() {
      const carousel = this.$el.querySelector('.carousel');
      carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    },
    navigateTo(title) {
      this.$router.push(`/${title}`);
    }
  },
  watch: {
    currentSlide(newSlide, oldSlide) {
      this.updateCarousel();
    }
  },
  mounted() {
    this.updateCarousel();
  }
};
</script>
