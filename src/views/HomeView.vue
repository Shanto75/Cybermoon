<script>
import { getPosts } from '../api.js';
import { getPostsById } from '../api.js';
import { getCategories } from "../api.js";

export default {
  data() {
    return {
      posts: [],
      categoryPosts: {},
      categories: [],
      loading: true,
    };
  },
  async mounted() {
    this.categories = await getCategories();
    this.categories.forEach( async (category) =>{
      let item = {}
      this.categoryPosts[category.name] = JSON.stringify( await getPostsById(category.id));
      // this.categoryPosts.push(item);
    })
    
    
    this.posts = await getPosts();
    // console.log(JSON.stringify(this.categoryPosts));
    Object.entries( this.categoryPosts).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
    this.loading = false;
    // console.log(this.posts);
  },
};
</script>

<template>
  <main id="main">

    <div id="carouselExampleFade" class="container-md carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div v-for="(post, index) in posts" :key="post.id" class="carousel-item" :class="index === 0 ? 'active' : ''">
          <img :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url" class="d-block w-100" alt="{{ post.title.rendered }}">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ post.title.rendered }}</h5>
            <!-- <p v-html="post.excerpt.rendered"></p> -->
          </div>
        </div>
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- ======= Post Grid Section ======= -->
    <section id="posts" class="posts">
      <div class="container" data-aos="fade-up">
        <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Latest Blogs</h2>
          <!-- <div><a href="category.html" class="more">See All Lifestyle</a></div> -->
        </div>

        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="row row-cols-auto">
          <div v-for="post in posts" :key="post.id" class="col-lg-3 col-md-6 ">
            <div class="post-entry-1">
              <router-link :to="'/blog/' + post.id"><img :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="" class="img-fluid"></router-link>
              <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>{{ post.date }}</span></div>
              <h2>
                <router-link :to="'/blog/' + post.id" >{{ post.title.rendered }}</router-link>
              </h2>
            </div>
          </div>

        </div>

      </div>
    </section> <!-- End Post Grid Section -->

    
    <!-- ======= Post Grid Section ======= -->
    <section id="posts" class="posts">
      <div class="container" data-aos="fade-up">
        <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Latest Blogs</h2>
          <div><a href="category.html" class="more">See All Lifestyle</a></div>
        </div>

        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="row row-cols-auto">
          <div v-for="post in posts" :key="post.id" class="col-lg-3 col-md-6 ">
            <div class="post-entry-1">
              <router-link :to="'/blog/' + post.id"><img :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="" class="img-fluid"></router-link>
              <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>{{ post.date }}</span></div>
              <h2>
                <router-link :to="'/blog/' + post.id" >{{ post.title.rendered }}</router-link>
              </h2>
            </div>
          </div>

        </div>

      </div>
    </section> <!-- End Post Grid Section -->

  </main><!-- End #main -->
</template>
