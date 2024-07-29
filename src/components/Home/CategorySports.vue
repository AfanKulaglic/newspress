<template>
    <h4>Sports</h4>
    <hr />
    <hr id="red-hr" />
    <div class="d-flex flex-column">
        <div v-if="sportsNews.length" class="card-content">
            <div class="card">
                <div class="card-img-container" v-if="sportsNews[0].urlToImage">
                    <img :src="sportsNews[0].urlToImage" class="card-img-top" alt="..." @error="skipArticle(0)">
                    <b-badge class="badge" variant="danger">{{ sportsNews[0].badgeText || 'New' }}</b-badge>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">{{ sportsNews[0].publishedAt }}</p>
                <h6 class="card-title">{{ sportsNews[0].title }}</h6>
                <p class="card-title">{{ sportsNews[0].description }}</p>
            </div>
        </div>
        <p class="advertisement-span">Advertisement</p>
        <div class="img-col-add-exclusive"
            style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add5.jpg);">
        </div>
        <div v-for="(item, index) in visibleSports.slice(1, 4)" :key="'more-sports-' + index" class="card-content">
            <div class="card">
                <div class="card-img-container" v-if="item.urlToImage">
                    <img :src="item.urlToImage" class="card-img-top" alt="..." @error="skipArticle(index + 1)">
                    <b-badge class="badge" variant="danger">{{ item.badgeText || 'New' }}</b-badge>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">{{ item.publishedAt }}</p>
                <h6 class="card-title">{{ item.title }}</h6>
                <p class="card-title">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';

export default {
    data() {
        return {
            sportsNews: [],
            visibleSports: []
        };
    },
    methods: {
        async loadSportsNews() {
            const params = {
                q: 'sport',
                sortBy: 'publishedAt',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                this.sportsNews = data.articles || [];
                this.loadValidSportsNews(); 
            } catch (error) {
                console.error('Error loading sports news:', error);
            }
        },
        loadValidSportsNews() {
            this.visibleSports = [];
            let index = 0;

            while (index < this.sportsNews.length && this.visibleSports.length < 4) {
                const article = this.sportsNews[index];

                if (article.urlToImage) {
                    this.visibleSports.push(article);
                }

                index++;
            }
        },
        skipArticle(index) {
            this.sportsNews.splice(index, 1);
            this.loadValidSportsNews(); 
        }
    },
    mounted() {
        this.loadSportsNews();
    }
};
</script>
