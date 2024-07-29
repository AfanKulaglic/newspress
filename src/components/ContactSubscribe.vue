<template>
  <div>
    <div v-if="isDesktop" class="contact-subscribe">
        <b-row>
          <b-col>
            <h4>About Us</h4>
            <hr />
            <hr id="red-hr" />
            <div class="about-us-section">
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident officia, quia neque non vero
                quisquam est unde fugit eligendi, nobis tempora. Modi voluptate voluptates ut sit. Soluta corporis
                dignissimos accusamus.
              </h6>
              <p>
                Address : 123 Gegrit, London, England<br />
                Call : +1234-222-3333<br />
                Email: <a href="info@newspress.com">info@newspress.com</a>
              </p>
            </div>
          </b-col>
          <b-col>
            <h4>Weekly NewsLetter</h4>
            <hr />
            <hr id="red-hr" />
            <div class="weekly-newsletter-section">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis iure distinctio doloribus.
                Ipsa vero libero minus suscipit perferendis, labore animi ad saepe rem, aut possimus? Quaerat nemo aut
                harum!</p>
              <input type="text" placeholder="Your email address"><br />
              <b-button id="btn">SUBSCRIBE</b-button>
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
