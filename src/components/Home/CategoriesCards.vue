<template>
    <div>
      <CategoriesCardsDesktop v-if="isDesktop" />
      <CategoriesCardsMobile v-else />
    </div>
  </template>
  
  <script>
  import CategoriesCardsDesktop from '../Desktop/CategoriesCardsDesktop.vue';
  import CategoriesCardsMobile from '../Mobile/CategoriesCardsMobile.vue';
  
  export default {
    components: {
      CategoriesCardsDesktop,
      CategoriesCardsMobile
    },
    data() {
      return {
        isDesktop: true
      };
    },
    mounted() {
      this.setDeviceType();
      window.addEventListener("resize", this.setDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.setDeviceType);
    },
    methods: {
      setDeviceType() {
        this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
      }
    }
  };
  </script>
  