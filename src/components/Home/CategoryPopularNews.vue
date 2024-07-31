<template>
    <h4>Popular News</h4>
    <hr />
    <hr id="red-hr" />
    <div v-if="popularNews.length" class="card-content" @click="navigateTo(popularNews[0].title)">
        <div class="card">
            <div class="card-img-container" v-if="popularNews[0].urlToImage">
                <img :src="popularNews[0].urlToImage" class="card-img-top" alt="..." @error="skipArticle(0)">
                <b-badge class="badge" variant="danger">New</b-badge>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">{{ popularNews[0].publishedAt }}</p>
            <h6 class="card-title">{{ popularNews[0].title }}</h6>
            <p class="card-title">{{ popularNews[0].description }}</p>
        </div>
    </div>
    <p class="advertisement-span">Advertisement</p>
    <div class="img-col-add-elite"
        style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add6.jpg);">
    </div>
    <div v-for="(item, index) in popularNews.slice(1, 2)" :key="'more-popular-news-' + index" class="card-content" @click="navigateTo(item.title)">
        <div class="card">
            <div class="card-img-container" v-if="item.urlToImage">
                <img :src="item.urlToImage" class="card-img-top" alt="..." @error="skipArticle(index + 1)">
                <b-badge class="badge" variant="danger">New</b-badge>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">{{ item.publishedAt }}</p>
            <h6 class="card-title">{{ item.title }}</h6>
            <p class="card-title">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';

export default {
    data() {
        return {
            popularNews: [],
            otherPopularTitles: []
        };
    },
    methods: {
        async loadPopularNews() {
            const params = {
                q: 'politics',
                sortBy: 'publishedAt',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                const articles = (data.articles || []).filter(article => article.urlToImage); 

                this.popularNews = articles.slice(0, 4); 

                this.otherPopularTitles = articles.slice(4).map(article => article.title).slice(0, 3);
            } catch (error) {
                console.error('Error loading popular news:', error);
            }
        },
        skipArticle(index) {
            this.popularNews.splice(index, 1);
        },
        navigateTo(title) {
            this.$router.push(`/${title}`);
        }
    },
    mounted() {
        this.loadPopularNews();
    }
};
</script>
