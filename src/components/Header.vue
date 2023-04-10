<script>
import { getCategories } from '../api.js';
export default {
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    this.categories = await getCategories();
  },
};
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl d-flex align-items-center justify-content-between"
    >
      <router-link to="/" class="logo d-flex align-items-center">
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>CyberMoon</h1>
      </router-link>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li class="dropdown">
            <a>
              <span>Blogs</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i>
            </a>
            <ul>
              <li v-for="category in categories" :key="category.id">
                <router-link :to="'/blogList/' + category.id">{{ category.name }}</router-link>
              </li>
            </ul>
          </li>

          <li><router-link to="/contacts">Contact</router-link></li>
        </ul>
      </nav>
      <!-- .navbar -->

      <div class="position-relative">
        <a href="#" class="mx-2"><span class="bi-facebook"></span></a>
        <a href="#" class="mx-2"><span class="bi-twitter"></span></a>
        <a href="#" class="mx-2"><span class="bi-instagram"></span></a>

        <a href="#" class="mx-2 js-search-open"
          ><span class="bi-search"></span
        ></a>
        <i class="bi bi-list mobile-nav-toggle"></i>

        <!-- ======= Search Form ======= -->
        <div class="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" class="search-form">
            <span class="icon bi-search"></span>
            <input type="text" placeholder="Search" class="form-control" />
            <button class="btn js-search-close">
              <span class="bi-x"></span>
            </button>
          </form>
        </div>
        <!-- End Search Form -->
      </div>
    </div>
  </header>
</template>
