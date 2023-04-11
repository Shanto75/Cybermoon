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
    // console.log(this.categories);
  },
};
</script>

<template>
  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <h3 class="footer-heading">About ZenBlog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ab, perspiciatis beatae autem deleniti voluptate nulla a dolores,
              exercitationem eveniet libero laudantium recusandae officiis qui
              aliquid blanditiis omnis quae. Explicabo?
            </p>
            <p><a href="about.html" class="footer-link-more">Learn More</a></p>
          </div>
          <div class="col-6 col-lg-4">
            <h3 class="footer-heading">Navigation</h3>
            <ul class="footer-links list-unstyled">
              <li>
                <router-link to="/"
                  ><i class="bi bi-chevron-right"></i> Home</router-link
                >
              </li>
              <li>
                <router-link to="/about"
                  ><i class="bi bi-chevron-right"></i> About us</router-link
                >
              </li>
              <li>
                <router-link to="/contacts"
                  ><i class="bi bi-chevron-right"></i> Contact</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-4">
            <h3 class="footer-heading">Categories</h3>
            <ul class="footer-links list-unstyled">
              
              <li v-for="category in categories" :key="category.id">
                <router-link :to="'/blogList/' + category.id"><i class="bi bi-chevron-right"></i>{{ category.name }}</router-link>
              </li>
              
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div class="copyright">
              © Copyright <strong><span>CyberMoon</span></strong
              >. All Rights Reserved
            </div>

            <div class="credits">
              Developed & Designed by <a href="#">Moinruzzaman Shanto</a>
            </div>
          </div>

          <div class="col-md-6">
            <div class="social-links mb-3 mb-lg-0 text-center text-md-end">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <a
    href="#"
    class="scroll-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>
