<template>
  <div v-if="isDesktop" class="nav">
    <b-container>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <img src="../images/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <div style="margin-left: auto;">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="EN">
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <div class="vertical-line"></div>

            <b-navbar-nav>
              <b-nav-item href="#" class="">{{ weather }}</b-nav-item>
            </b-navbar-nav>

            <div class="vertical-line"></div>

            <b-navbar-nav>
              <b-nav-item href="#" class="">{{ formattedDate }}</b-nav-item>
            </b-navbar-nav>

            <div class="vertical-line"></div>

            <b-navbar-nav class="ml-auto">

              <transition name="search-form">
                <b-nav-form v-if="searchFocused">
                  <b-form-input size="sm" class="mr-sm-2 focused" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
              </transition>

              <b-button size="sm" @click="toggleSearch" class="my-2 my-sm-0">
                <b-icon icon="search"><i class="bi bi-search"></i></b-icon>
              </b-button>

              <b-nav-item-dropdown right>
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <b-navbar toggleable="lg" type="light" variant="light" class='subnavbar'>
        <div>
          <b-collapse id="nav-collapse" is-nav>
            <div class="d-flex subnavbar-links">
              <a href="/" id="home-link" class="navbar-link mr-3">Home</a>
              <a href="/category/Business" id="business-link" class="navbar-link">Business</a>
              <a href="/category/Politics" id="politics-link" class="navbar-link">Politics</a>
              <a href="/category/Environment" id="environment-link" class="navbar-link">Environment</a>
              <a href="/category/World" id="world-link" class="navbar-link">World</a>
              <a href="/category/Technology" id="technology-link" class="navbar-link">Technology</a>
              <a href="/category/Sports" id="sports-link" class="navbar-link">Sports</a>
              <a href="/category/Health" id="health-link" class="navbar-link">Health</a>
              <a href="/category/Entertainment" id="entertainment-link" class="navbar-link">Entertainment</a>
              <a href="/category/Lifestyle" id="lifestyle-link" class="navbar-link">Lifestyle</a>
            </div>
          </b-collapse>
        </div>
      </b-navbar>
    </b-container>
  </div>

  <div toggleable="lg" type="light" variant="light" v-else>
    <p>jashdjhsadj</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFocused: false,
      formattedDate: '',
      isDesktop: true 
    };
  },
  mounted() {
    this.setFormattedDate();
    this.setDeviceType();
    window.addEventListener('resize', this.setDeviceType);
  },
  destroyed() {
    window.removeEventListener('resize', this.setDeviceType);
  },
  methods: {
    toggleSearch() {
      this.searchFocused = !this.searchFocused;
    },
    setFormattedDate() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.formattedDate = today.toLocaleDateString('en-US', options);
    },
    setDeviceType() {
      this.isDesktop = window.matchMedia('(min-width: 992px)').matches;
    }
  }
};
</script>
