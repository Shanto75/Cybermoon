<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <!-- <header>
    <ul class="nav justify-content-end p-2 bg-dark">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/blogs">Blogs</RouterLink>
      </li>
    </ul>
  </header> -->

  <RouterView />

  <Footer />
</template>

<style scoped></style>
