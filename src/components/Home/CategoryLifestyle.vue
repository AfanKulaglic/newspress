<template>    
    <h4>Lifestyle</h4>
    <hr />
    <hr id="red-hr" />
    <b-row>
        <b-col v-for="(item, index) in lifestyle" :key="'lifestyle-item-' + index">
            <div class="card-content">
                <div class="card">
                    <div class="card-img-container" v-if="item.imgSrc">
                        <img :src="item.imgSrc" class="card-img-top" alt="..." @error="handleImageError(item, index)">
                        <b-badge class="badge" variant="danger">{{ item.badgeText }}</b-badge>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ item.details }}</p>
                    <h6 class="card-title">{{ item.title }}</h6>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import { fetchNews } from '../../services/newsService'; 

export default {
    data() {
        return {
            lifestyle: [],
            allArticles: [],
        };
    },
    methods: {
        async loadLifestyleNews() {
            const params = {
                q: 'lifestyle',
                sortBy: 'publishedAt',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                const articles = (data.articles || []);
                
                this.allArticles = articles;

                this.updateLifestyleList();
            } catch (error) {
                console.error('Error loading lifestyle news:', error);
            }
        },
        updateLifestyleList() {
            const validArticles = [];

            for (const article of this.allArticles) {
                if (article.urlToImage) {
                    validArticles.push({
                        imgSrc: article.urlToImage,
                        badgeText: 'New',
                        details: article.publishedAt,
                        title: article.title
                    });
                }
                if (validArticles.length >= 2) break;
            }

            this.lifestyle = validArticles; 
        },
        handleImageError(item, index) {
            this.allArticles.splice(index, 1);
            this.updateLifestyleList();
        }
    },
    mounted() {
        this.loadLifestyleNews();
    }
};
</script>
