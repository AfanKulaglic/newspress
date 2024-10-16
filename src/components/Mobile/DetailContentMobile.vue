<template>
    <div>
      <div v-for="(item, index) in news" :key="'mobile-news-' + index" class="card-content" @click="navigate(item.title)">
        <div class="card">
          <div class="card-img-container" v-if="item.urlToImage">
            <img :src="item.urlToImage" class="card-img-top" alt="..." @error="skipArticle(index)">
            <b-badge class="badge" variant="danger">New</b-badge>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">{{ item.publishedAt }}</p>
          <h6 class="card-title">{{ item.title }}</h6>
          <p class="card-title">{{ item.content }}</p>
          <a :href="item.url">See more</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      news: {
        type: Array,
        required: true
      }
    },
    methods: {
      skipArticle(index) {
        this.news.splice(index, 1);
      },
      navigate(title) {
        this.$emit('navigate', title);
      }
    }
  };
  </script>