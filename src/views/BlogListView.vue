<script>
import { getPostsById } from "../api.js";
import { getCategories } from "../api.js";
window.scrollTo(0, 0);
export default {
  data() {
    return {
      posts: [],
      categories: [],
      categoryId: null,
      loading: true,
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      async (toParams, previousParams) => {
        this.fetchPosts();
      }
    );
  },
  async mounted() {
    this.fetchPosts();
    this.categories = await getCategories();
  },
  methods: {
    async fetchPosts() {
      try {
        this.posts = await getPostsById(this.$route.params.categoryId);
        this.categoryId = this.$route.params.categoryId;
        this.loading = false;
        // console.log(this.posts);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <main id="main">
    <section id="posts" class="posts">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-9">
            <div
              class="section-header d-flex justify-content-between align-items-center mb-5"
            >
              <h2>Latest Blogs</h2>
              <!-- <div><a href="category.html" class="more">See All Lifestyle</a></div> -->
            </div>
            <div class="row row-cols-auto">
              <div v-for="post in posts" :key="post.id" class="col-lg-3 col-md-6">
                <div class="post-entry-1">
                  <router-link :to="'/blog/' + post.id"
                    ><img
                      :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url"
                      alt=""
                      class="img-fluid"
                  /></router-link>
                  <div class="post-meta">
                    <span class="date">Sport</span>
                    <span class="mx-1">&bullet;</span> <span>{{ post.date }}</span>
                  </div>
                  <h2>
                    <router-link :to="'/blog/' + post.id">{{
                      post.title.rendered
                    }}</router-link>
                  </h2>
                </div>
              </div>
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
