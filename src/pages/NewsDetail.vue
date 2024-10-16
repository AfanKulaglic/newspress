<template>
    <div class="news-detail">
      <b-container>
        <Navbar ref="navbar" />
        <DetailContent :title="title" />
      </b-container>
      <FooterSection />
    </div>
  </template>
  
  <script>
  import FooterSection from '../components/FooterSection.vue';
  import Navbar from '../components/Navbar.vue';
  import DetailContent from '../components/NewsDetail/DetailContent.vue';
  
  export default {
    components: {
      FooterSection,
      Navbar,
      DetailContent
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  