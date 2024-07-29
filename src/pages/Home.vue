<template>
  <b-container>
    <Navbar ref="navbar" />
    <BreakingNewsTab ref="breakingNewsTab" />
    <BreakingNewsCards />
    <AdvertisementCard />
    <LatestNewsCards />
    <CategoriesCards />
    <ContactSubscribe />
  </b-container>
  <FooterSection />
</template>

<script>
import { ref, onMounted } from 'vue';
import BreakingNewsTab from '../components/Home/BreakingNewsTab.vue';
import BreakingNewsCards from '../components/Home/BreakingNewsCards.vue';
import Navbar from '../components/Navbar.vue';
import AdvertisementCard from '../components/Home/AdvertisementCard.vue';
import LatestNewsCards from '../components/Home/LatestNewsCards.vue';
import CategoriesCards from '../components/Home/CategoriesCards.vue';
import ContactSubscribe from '../components/ContactSubscribe.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
  components: {
    Navbar,
    BreakingNewsTab,
    BreakingNewsCards,
    AdvertisementCard,
    LatestNewsCards,
    CategoriesCards,
    ContactSubscribe,
    FooterSection
  },
  setup() {
    const navbar = ref(null);
    const breakingNewsTab = ref(null);

    onMounted(() => {
      const navbarHeight = navbar.value.$el.offsetHeight;
      breakingNewsTab.value.$el.style.marginTop = `${navbarHeight}px`;
    });

    return {
      navbar,
      breakingNewsTab
    };
  }
}
</script>
