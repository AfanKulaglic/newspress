<template>
  <div>
    <DesktopNavbar v-if="isDesktop" 
                   :searchFocused="searchFocused" 
                   :formattedDate="formattedDate" 
                   @toggle-search="toggleSearch" />
    <MobileNavbar v-else :formattedDate="formattedDate" />
  </div>
</template>

<script>
import DesktopNavbar from './Desktop/NavbarDesktop.vue';
import MobileNavbar from './Mobile/NavbarMobile.vue';

export default {
  components: {
    DesktopNavbar,
    MobileNavbar
  },
  data() {
    return {
      searchFocused: false,
      formattedDate: '',
      isDesktop: true 
    };
  },
  mounted() {
    this.setFormattedDate();
    this.setDeviceType();
    window.addEventListener('resize', this.setDeviceType);
  },
  destroyed() {
    window.removeEventListener('resize', this.setDeviceType);
  },
  methods: {
    toggleSearch() {
      this.searchFocused = !this.searchFocused;
    },
    setFormattedDate() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.formattedDate = today.toLocaleDateString('en-US', options);
    },
    setDeviceType() {
      this.isDesktop = window.matchMedia('(min-width: 992px)').matches;
    }
  }
};
</script>
