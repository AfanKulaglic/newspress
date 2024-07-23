<template>
  <b-container>
    <Navbar />
    <BreakingNewsTab />
    <BreakingNewsCards />
    <AdvertisementCard />
    <LatestNewsCards />
    <CategoriesCards />
  </b-container>
</template>

<script>
import BreakingNewsTab from '../components/BreakingNewsTab.vue';
import BreakingNewsCards from '../components/BreakingNewsCards.vue';
import Navbar from '../components/Navbar.vue';
import AdvertisementCard from '../components/AdvertisementCard.vue';
import LatestNewsCards from '../components/LatestNewsCards.vue';
import CategoriesCards from '../components/CategoriesCards.vue';

export default {
  components: {
    Navbar,
    BreakingNewsTab,
    BreakingNewsCards,
    AdvertisementCard,
    LatestNewsCards,
    CategoriesCards
  }
}
</script>