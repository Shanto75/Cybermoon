<script>
import { getPost } from '../api.js';
import { getCategories } from '../api.js';

window.scrollTo(0, 0);
export default {
  data() {
    return {
      post: [],
      categories: [],
      loading: true,
    };
  },
  async mounted() {
    this.post = await getPost(this.$route.params.id);
    this.categories = await getCategories();
    this.loading = false;
    // console.log(this.post);
  },
};
</script>

<template>
<main id="main">

<section class="single-post-content">
  <div class="container">
    <div class="row">
      <div class="col-md-9 post-content">

        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <!-- ======= Single Post Content ======= -->
        <div v-else class="single-post">
          <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
          <!-- <h1 class="mb-5">{{ post.title.rendered }}</h1> -->
          <h1 class="mb-5" :textContent="post.title.rendered"></h1>
          
          <img :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="" class="img-fluid mb-4">
          <p v-html="post.content.rendered"></p> 
        </div>

      </div>

      <div class="col-md-3">
        <div class="aside-block">
          <h3 class="aside-title">Categories</h3>

            <ul class="aside-links list-unstyled">
              <li v-for="category in categories" :key="category.id">
                <router-link :to="'/blogList/' + category.id"><i class="bi bi-chevron-right"></i> {{ category.name }}</router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</main>

</template>
