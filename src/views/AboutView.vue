<script>
import { getAboutPage } from '../api.js';
export default {
  data() {
    return {
      about: [],
      loading: true,
    };
  },
  async mounted() {
    this.about = await getAboutPage();
    this.loading = false;
    console.log(this.about);
  },
};
</script>

<template>
  <main id="main">
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="container py-4">
      <h1 class="text-center" :textContent="about.title.rendered"></h1>
      <div v-html="about.content.rendered" class="my-4">

      </div>
    </div>
  </main>
</template>

