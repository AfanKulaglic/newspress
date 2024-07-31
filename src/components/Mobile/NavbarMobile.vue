<template>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand href="#">
        <img src="../../images/logo.png" />
      </b-navbar-brand>
  
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <span v-if="expanded" class="navbar-toggler-icon">
            <i class="fas fa-times"></i>
          </span>
          <span v-else class="navbar-toggler-icon">
            <i class="fas fa-bars"></i>
          </span>
        </template>
      </b-navbar-toggle>
  
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home </b-nav-item>
          <b-nav-item href="/category/Business">Business </b-nav-item>
          <b-nav-item href="/category/Politics">Politics</b-nav-item>
          <b-nav-item href="/category/Environment">Environment</b-nav-item>
          <b-nav-item href="/category/World">World</b-nav-item>
          <b-nav-item href="/category/Technology">Technology</b-nav-item>
          <b-nav-item href="/category/Sports">Sports</b-nav-item>
          <b-nav-item href="/category/Health">Health</b-nav-item>
          <b-nav-item href="/category/Entertainment">Entertainment</b-nav-item>
          <b-nav-item href="/category/Lifestyle">Lifestyle</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>
  
  <script>
  export default {
    props: ['formattedDate']
  };
  </script>
  