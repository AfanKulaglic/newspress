<template>
    <div>
        <div v-if="isDesktop" class="categories-cards">
            <b-row>
                <!-- Business Column -->
                <b-col cols="6">
                    <CategoryBusiness />
                    <CategoryTechnology />
                    <!-- Technology Section -->
                    <p class="advertisement-span">Advertisement</p>
                    <div class="img-col-add-prime"
                        style="background-image: url(https://themes.themeregion.com/newspress/wp-content/uploads/2016/03/add4.jpg);">
                    </div>
                    <div class="category-popular-news">
                        <CategoryLifestyle />
                    </div>
                </b-col>
                <!-- Sports Column -->
                <b-col cols="3">
                    <div class="category-popular-news">
                    <CatergorySports />
                </div>
                </b-col>
                <!-- Follow Us Column -->
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
                        <img src="http://openweathermap.org/img/w/04d.png" />
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
        <div v-else>
            <p>Mobile</p>
        </div>
    </div>
</template>

<script>
import CategoryBusiness from './CategoryBusiness.vue'; 
import CategoryTechnology from './CategoryTechnology.vue';
import CatergorySports from './CategorySports.vue';
import CategoryPopularNews from './CategoryPopularNews.vue';
import CategoryLifestyle from './CategoryLifestyle.vue';

export default {
    components: {
        CategoryBusiness,
        CategoryTechnology,
        CatergorySports,
        CategoryPopularNews,
        CategoryLifestyle
    },
    data() {
        return {
            isDesktop: true,
        }
    }
}
</script>