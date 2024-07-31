<template>
  <div>
    <DesktopBreakingNewsTab v-if="isDesktop" />
    <MobileBreakingNewsTab v-else />
  </div>
</template>

<script>
import DesktopBreakingNewsTab from '../Desktop/BreakingNewsTabDesktop.vue';
import MobileBreakingNewsTab from '../Mobile/BreakingNewsTabMobile.vue';

export default {
  components: {
    DesktopBreakingNewsTab,
    MobileBreakingNewsTab
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
  destroyed() {
    window.removeEventListener("resize", this.setDeviceType);
  },
  methods: {
    setDeviceType() {
      this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
    }
  }
};
</script>
