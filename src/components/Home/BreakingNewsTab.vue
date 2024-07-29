<template>
  <div>
    <div class="breaking-news-tab bg-light" v-if="isDesktop">
      <div id="title">
        <h6>BREAKING NEWS</h6>
      </div>
      <div id="context">
        <transition name="slide-up">
          <span ref="newsSpan" :key="currentIndex" class="slide-up-enter-active">
            {{ currentNews }}
          </span>
        </transition>
      </div>
    </div>

    <div v-else>
      <p>Mobile</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { fetchNews } from '../../services/newsService';

export default {
  data() {
    return {
      isDesktop: true,
      newsList: [],
      currentIndex: 0,
      currentNews: ""
    };
  },
  mounted() {
    this.setDeviceType();
    this.loadNews(); 
    this.interval = setInterval(this.changeNews, 5000);
    window.addEventListener("resize", this.setDeviceType);
    this.changeNews();
  },
  destroyed() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.setDeviceType);
  },
  methods: {
    setDeviceType() {
      this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
    },
    async loadNews() {
      const params = {
        q: 'world',
        sortBy: 'publishedAt',
        language: 'en',
      };
      try {
        const data = await fetchNews(params);
        const articles = (data.articles || []).map(article => article.title); 

        this.newsList = articles;
        this.currentNews = this.newsList[this.currentIndex];
      } catch (error) {
        console.error('Error loading news:', error);
      }
    },
    changeNews() {
      const newsSpan = this.$refs.newsSpan;

      gsap.to(newsSpan, {
        duration: 0.5,
        translateY: '-100%',
        opacity: 1,
        ease: 'power2.out',
        onComplete: () => {
          this.currentNews = this.newsList[this.currentIndex];
          this.currentIndex = (this.currentIndex + 1) % this.newsList.length;
          gsap.fromTo(newsSpan, { translateY: '100%'}, { translateY: '0%', duration: 0.5, ease: 'power2.out' });
        }
      });
    }
  }
};
</script>
