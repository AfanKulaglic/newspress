<template>
  <div>
    <FooterDesktop v-if="isDesktop" />
    <FooterMobile v-else />
  </div>
</template>

<script>
import FooterDesktop from './Desktop/FooterDesktop.vue';
import FooterMobile from './Mobile/FooterMobile.vue';

export default {
  components: {
    FooterDesktop,
    FooterMobile
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

