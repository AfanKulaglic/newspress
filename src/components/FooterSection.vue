<template>
    <div>
      <div v-if="isDesktop" class="footer">
        <div class="logo-section">
          <img src="../images/logo.png" />
        </div>
        <div class="footer-content">
          <div class="footer-category">
            <h6>HOME</h6>
            <h6>ABOUT US</h6>
            <h6>BUSINESS</h6>
            <h6>SPORTS</h6>
            <h6>TECHNOLOGY</h6>
            <h6>WORLD</h6>
            <h6>BLOG</h6>
            <h6>CONTACT</h6>
          </div>
          <hr/>
          <div class="footer-list">
            <b-container>
              <b-row class="row">
                <b-col class="col">
                  <h6>COMPANY</h6>
                  <div class="content">
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Register</p>
                    <p>Contact Us Two</p>
                    <p>Our Team</p>
                  </div>
                </b-col>
                <b-col class="col">
                  <h6>COMPANY</h6>
                  <div class="content">
                    <p>EBook</p>
                    <p>Baby Product</p>
                    <p>Magazine</p>
                    <p>Sports Elements</p>
                    <p>Technology</p>
                  </div>
                </b-col>
                <b-col class="col">
                  <h6>COMPANY</h6>
                  <div class="content">
                    <p>Contact</p>
                    <p>Support Form</p>
                    <p>Blog</p>
                    <p>Login</p>
                    <p>Register</p>
                  </div>
                </b-col>
                <b-col class="col">
                  <h6>COMPANY</h6>
                  <div class="content">
                    <b-row class="row">
                      <b-col>
                        <p>Business</p>
                        <p>Lifestyle</p>
                        <p>Technology</p>
                        <p>World</p>
                      </b-col>
                      <b-col>
                        <p>Health</p>
                        <p>Sports</p>
                        <p>Video</p>                 
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <div class="footer-bottom">
          <h6>NewsPress @ 2024. Developed by <a href="#">Afan Kulaglic</a></h6>
        </div>
      </div>
      <div v-else>
        <p>Mobile</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDesktop: true,
      };
    },
    mounted() {
      this.setDeviceType();
      window.addEventListener("resize", this.setDeviceType);
    },
    destroyed() {
      window.removeEventListener("resize", this.setDeviceType);
    },
    methods: {
      setDeviceType() {
        this.isDesktop = window.matchMedia("(min-width: 992px)").matches;
      },
    },
  };
  </script>
  
  <style>

  </style>
  