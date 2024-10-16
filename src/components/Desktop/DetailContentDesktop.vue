<template>
    <div class="">
        <b-row>
            <b-col>
                <div v-for="(item, index) in news" :key="'desktop-news-' + index" class="card-content"
                    @click="navigate(item.title)">
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
            </b-col>
            <b-col cols="3">
                <h4>Follow Us</h4>
                <hr />
                <hr id="red-hr" />
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-google"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
                <p class="advertisement-span">Advertisement</p>
                <div class="img-col-add-elite"
                    style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add3.jpg);">
                </div>
                <div class="col-weather">
                    <h5>Sarajevo</h5>
                    <img src="https://openweathermap.org/img/w/04d.png" />
                    <p>26°</p>
                    <div class="d-flex justify-content-center">
                        <i class="bi bi-droplet-fill"></i>
                        <p>50%</p>
                        <i class="bi bi-wind"></i>
                        <p>5 MPH</p>
                    </div>
                </div>
                <div class="category-popular-news">
                    <CategoryPopularNews />
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CategoryPopularNews from '../Home/CategoryPopularNews.vue';

export default {
    components: {
        CategoryPopularNews
    },
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
