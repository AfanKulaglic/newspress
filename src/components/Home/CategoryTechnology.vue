<template>    
    <h4>Technology</h4>
    <hr />
    <hr id="red-hr" />
    <div v-if="popularNews.length" class="card-content">
        <div class="card">
            <div class="card-img-container" v-if="popularNews[0].urlToImage && !imageError">
                <img :src="popularNews[0].urlToImage" class="card-img-top" alt="..." @error="imageError = true">
                <b-badge class="badge" variant="danger">New</b-badge>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">{{ popularNews[0].publishedAt }}</p>
            <h6 class="card-title">{{ popularNews[0].title }}</h6>
            <p class="card-title">{{ popularNews[0].description }}</p>
        </div>
        <b-list-group class="list-group">
            <b-list-group-item class="list-group-item" v-for="(listItem, i) in otherTitles.slice(0, 3)" :key="'list-item-' + i">
                {{ listItem }} <i class="bi bi-arrow-right-short"></i>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';

export default {
    data() {
        return {
            popularNews: [],
            otherTitles: [],
            imageError: false,
        };
    },
    methods: {
        async loadPopularNews() {
            const params = {
                q: 'electronic',
                sortBy: 'publishedAt',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                const articles = (data.articles || []).filter(article => article.urlToImage); 

                const validArticles = await Promise.all(articles.map(async article => {
                    try {
                        await this.checkImage(article.urlToImage);
                        return article;
                    } catch (e) {
                        return null;
                    }
                })).then(results => results.filter(article => article !== null));

                this.popularNews = validArticles.slice(0, 1); 

                this.otherTitles = validArticles.slice(1).map(article => article.title).slice(0, 3); 
            } catch (error) {
                console.error('Error loading popular news:', error);
            }
        },
        checkImage(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => reject(false);
                img.src = url;
            });
        }
    },
    mounted() {
        this.loadPopularNews();
    }
};
</script>
