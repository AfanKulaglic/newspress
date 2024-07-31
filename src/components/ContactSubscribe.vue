<template>
  <div>
    <ContactSubscribeDesktop v-if="isDesktop" />
    <ContactSubscribeMobile v-else />
  </div>
</template>

<script>
import ContactSubscribeDesktop from './Desktop/ContactSubscribeDesktop.vue';
import ContactSubscribeMobile from './Mobile/ContactSubscribeMobile.vue';

export default {
  components: {
    ContactSubscribeDesktop,
    ContactSubscribeMobile
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
