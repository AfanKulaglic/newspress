<template>
    <div class="categories-cards-mobile">
      <CategoryBusiness />
      <CategoryTechnology />
      <CatergorySports />
      
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
    </div>
  </template>
  
  <script>
  import CategoryBusiness from '../Home/CategoryBusiness.vue'; 
  import CategoryTechnology from '../Home/CategoryTechnology.vue';
  import CatergorySports from '../Home/CategorySports.vue';
  import CategoryPopularNews from '../Home/CategoryPopularNews.vue';
  
  export default {
    components: {
      CategoryBusiness,
      CategoryTechnology,
      CatergorySports,
      CategoryPopularNews
    }
  };
  </script>
  