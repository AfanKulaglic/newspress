<template>
    <div class="category-content-mobile">
        <h4>{{ category }}</h4>
        <hr />
        <hr id="red-hr" />
        <div v-if="popularNews.length">
            <div v-for="(newsItem, index) in popularNews" :key="index" class="card-content" @click="navigateTo(newsItem.title)">
                <div class="card">
                    <div class="card-img-container" v-if="newsItem.urlToImage && !imageError">
                        <img :src="newsItem.urlToImage" class="card-img-top" alt="..." @error="imageError = true">
                        <b-badge class="badge" variant="danger">New</b-badge>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ newsItem.publishedAt }}</p>
                        <h6 class="card-title">{{ newsItem.title }}</h6>
                        <p class="card-text">{{ newsItem.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="d-flex flex-column justify-content-center align-items-center mt-5">
                <b-spinner label="Loading..."></b-spinner>
                <p>Loading content...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';

export default {
    props: {
        category: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            popularNews: [],
            imageError: false
        };
    },
    methods: {
        async loadPopularNews() {
            const params = {
                q: this.category,
                sortBy: 'publishedAt',
                language: 'en'
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

                this.popularNews = validArticles.slice(0, 10);
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
        },
        navigateTo(title) {
            this.$router.push(`/${encodeURIComponent(title)}`);
        }
    },
    mounted() {
        this.loadPopularNews();
    }
};
</script>

