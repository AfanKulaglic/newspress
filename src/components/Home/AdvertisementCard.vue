<template>
    <div>
      <div v-if="isDesktop" class="advertisement-card">
        <p class="advertisement-span">Advertisement</p>
        <div class="card" style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add2.jpg);">
        </div>
      </div>
      <div v-else class="advertisement-card-mobile">
        <p class="advertisement-span">Advertisement</p>
        <div class="card" style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add2.jpg);">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDesktop: true,
      };
    },
    mounted() {
      this.setDeviceType();
      window.addEventListener("resize", this.setDeviceType);
    },
    destroyed() {
      window.removeEventListener("resize", this.setDeviceType);
    },
    methods: {
      setDeviceType() {
        this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
      },
    },
  };
  </script>
  
  