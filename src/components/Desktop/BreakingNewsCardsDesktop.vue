<template>
  <div class="breaking-news-cards">
    <p class="advertisement-span">Advertisement</p>
    <b-row class="text-center row">
      <b-col class="col" cols="9">
        <b-row class="text-center row">
          <b-col class="col" cols="8">
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
          </b-col>
          <template v-for="(col, index) in firstRowCols.slice(1)" :key="'firstRow-' + index">
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
        <b-row class="text-center row">
          <template v-for="(col, index) in secondRowCols" :key="'secondRow-' + index">
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
      </b-col>
      <b-col class="col add" cols="3">
        <div class="img-col-add" style="background-image: url('https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add1.jpg')"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['slides', 'firstRowCols', 'secondRowCols', 'currentSlide'],
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
