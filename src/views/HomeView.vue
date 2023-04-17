<script>
import { getPosts, getPostsById, getCategories } from '../api.js';
import { reactive } from 'vue';

export default {

  setup() {
    const state = reactive({
      categories: [],
      categoryPosts: {}
    });

    async function fetchData() {
      state.categories = await getCategories();
      // console.log(state.categories);

      await Promise.all(
        state.categories.map(async (category) => {
          state.categoryPosts[category.name] = await getPostsById(category.id);
        })
      );

      // console.log(state.categoryPosts['Culture'].length);
    }
    fetchData();


    return {
      state
    };
  },
  data() {
    return {
      posts: [],
      // categoryPosts:[],
      categories: [],
      loading: true,
    };
  },
  async mounted() {
    // this.categories = await getCategories();
    // this.categories.forEach( async (category) =>{
    //   this.categoryPosts[category.name] = await getPostsById(category.id);
    // })
    
    this.posts = await getPosts();
    this.loading = false;

    // console.log(this.categoryPosts);

    // Object.entries( this.categoryPosts).forEach(([category, posts]) => {
    //   posts.forEach((post)=>{
    //       console.log(post.id);
    //   })
    // });
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

    <!-- <section class="posts">
      <div v-for="categoryPosts in state.categoryPosts" :key="categoryPosts" class="container" data-aos="fade-up">
        <div v-if="categoryPosts.length > 0 ">
          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>Latest Blogs</h2>
            <div><router-link to="" class="more">See All</router-link></div>
          </div>
  
          <div class="row row-cols-auto">
            <div v-for="catPost in categoryPosts" :key="catPost.id" class="col-lg-3 col-md-6 ">
              <div v-if="catPost" class="post-entry-1">
                <router-link :to="'/blog/' + catPost.id"><img :src="catPost?._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="" class="img-fluid"></router-link>
                <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>{{ catPost.date }}</span></div>
                <h2>
                  <router-link :to="'/blog/' + catPost.id" >{{ catPost.title.rendered }}</router-link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="posts">
      <div v-for="category in state.categories " :key="category" class="container" data-aos="fade-up">
        <div v-if="state.categoryPosts && state.categoryPosts[category.name] && state.categoryPosts[category.name].length > 0">
          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>{{ category.name }}</h2>
            <div><router-link :to="'/blogList/' + category.id" class="more">See All</router-link></div>
          </div>
  
          <div class="row row-cols-auto">
            <div v-for="catPost in state.categoryPosts[category.name]" :key="catPost.id" class="col-lg-3 col-md-6 ">
              <div v-if="catPost" class="post-entry-1">
                <router-link :to="'/blog/' + catPost.id"><img :src="catPost?._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="" class="img-fluid"></router-link>
                <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>{{ catPost.date }}</span></div>
                <h2>
                  <router-link :to="'/blog/' + catPost.id" >{{ catPost.title.rendered }}</router-link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main><!-- End #main -->
</template>
