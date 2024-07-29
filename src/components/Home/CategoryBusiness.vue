<template>    
    <h4>Business</h4>
    <hr />
    <hr id="red-hr" />
    <div v-if="businessNews.length" class="card-content">
        <div class="card">
            <div class="card-img-container" v-if="businessNews[0].urlToImage">
                <img :src="businessNews[0].urlToImage" class="card-img-top" alt="...">
                <b-badge class="badge" variant="danger">New</b-badge>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">{{ businessNews[0].publishedAt }}</p>
            <h6 class="card-title">{{ businessNews[0].title }}</h6>
            <p class="card-title">{{ businessNews[0].description }}</p>
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
            businessNews: [],
            otherTitles: []
        };
    },
    methods: {
        async loadBusinessNews() {
            const params = {
                q: 'economy',
                sortBy: 'publishedAt',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                const articles = (data.articles || []).filter(article => article.urlToImage); 

                this.businessNews = articles.slice(0, 1); 

                this.otherTitles = articles.slice(1).map(article => article.title).slice(0, 3); 
            } catch (error) {
                console.error('Error loading business news:', error);
            }
        }
    },
    mounted() {
        this.loadBusinessNews();
    }
};
</script>
