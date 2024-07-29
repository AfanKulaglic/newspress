<template>
    <div class="breaking-news-cards">
        <div v-if="isDesktop">
            <p class="advertisement-span">Advertisement</p>
            <b-row class="text-center row">
                <b-col class="col" cols="9">
                    <b-row class="text-center row">
                        <b-col class="col" cols="8">
                            <div class="carousel-container">
                                <div class="carousel">
                                    <div class="carousel-slide" v-for="(slide, index) in slides" :key="index" :style="{ backgroundImage: 'url(' + slide.imgUrl + ')' }">
                                        <div class="carousel-content">
                                            <b-badge class="badge" variant="danger">New</b-badge><br/>
                                            <span class="details">{{ slide.description }}</span>
                                            <h6>{{ slide.title }}</h6>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
                                <button class="carousel-button next" @click="nextSlide">&#10095;</button>
                                <div class="indicators">
                                    <span 
                                        v-for="(slide, index) in slides" 
                                        :key="index" 
                                        :class="['indicator', { active: index === currentSlide }]" 
                                        @click="goToSlide(index)">
                                    </span>
                                </div>
                            </div>
                        </b-col>
                        <template v-for="(col, index) in firstRowCols.slice(1)" :key="'firstRow-' + index">
                            <b-col class="col" :cols="col.cols">
                                <div class="img-col" :style="{ backgroundImage: 'url(' + col.imgUrl + ')' }">
                                    <div class="context">
                                        <b-badge class="badge" variant="danger">New</b-badge><br/>
                                        <span class="details">{{ col.details }}</span>
                                        <h6>{{ col.description }}</h6>
                                    </div>
                                </div>
                            </b-col>
                        </template>
                    </b-row>
                    <b-row class="text-center row">
                        <template v-for="(col, index) in secondRowCols" :key="'secondRow-' + index">
                            <b-col class="col" :cols="col.cols">
                                <div class="img-col" :style="{ backgroundImage: 'url(' + col.imgUrl + ')' }">
                                    <div class="context">
                                        <b-badge class="badge" variant="danger">New</b-badge><br/>
                                        <span class="details">{{ col.details }}</span>
                                        <h6>{{ col.description }}</h6>
                                    </div>
                                </div>
                            </b-col>
                        </template>
                    </b-row>
                </b-col>
                <b-col class="col add" cols="3">
                    <div class="img-col-add" style="background-image: url('https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add1.jpg')">
                        
                    </div>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <p>Mobile</p>
        </div>
    </div>
</template>

<script>
import { fetchNews } from '../../services/newsService';

export default {
    data() {
        return {
            isDesktop: true,
            currentSlide: 0,
            slides: [],
            firstRowCols: [],
            secondRowCols: [],
            articles: []
        };
    },
    methods: {
        setDeviceType() {
            this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.updateCarousel();
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.updateCarousel();
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.updateCarousel();
        },
        updateCarousel() {
            const carousel = this.$el.querySelector('.carousel');
            carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        },
        async loadNews() {
            const params = {
                q: 'world',
                sortBy: 'popularity',
                language: 'en',
            };
            try {
                const data = await fetchNews(params);
                console.log('Response data:', data); 
                this.articles = (data.articles || []).filter(article => article.urlToImage);
                this.processArticles();
            } catch (error) {
                console.error('Error loading news:', error);
            }
        },
        processArticles() {
            this.slides = this.articles.slice(0, 3).map(article => ({
                imgUrl: article.urlToImage,
                title: article.title,
                description: article.publishedAt
            }));

            this.firstRowCols = this.articles.slice(3, 5).map(article => ({
                cols: 4,
                imgUrl: article.urlToImage,
                details: article.publishedAt,
                description: article.title
            }));

            this.secondRowCols = this.articles.slice(5, 8).map(article => ({
                cols: 4,
                imgUrl: article.urlToImage,
                details: article.publishedAt,
                description: article.title
            }));
        }
    },
    mounted() {
        this.setDeviceType();
        window.addEventListener("resize", this.setDeviceType);
        this.updateCarousel();
        setInterval(this.nextSlide, 5000);  
        this.loadNews();
    },
    destroyed() {
        window.removeEventListener("resize", this.setDeviceType);
    }
};
</script>
