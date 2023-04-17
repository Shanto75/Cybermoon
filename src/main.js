import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const loadScript = (url) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement('script');
//       script.src = url;
//       script.onload = resolve;
//       script.onerror = reject;
//       document.head.appendChild(script);
//     });
//   };
  
//   loadScript('/src/assets/vendor/aos/aos.js').then(() => {
//   }).catch(() => {
//   });
// Add the Vue.js CDN
const script = document.createElement('script');
script.src = 'https://unpkg.com/aos@next/dist/aos.js';
document.head.appendChild(script);

//importing css from assets 

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/aos/aos.css";
import './assets/css/variables.css';
import './assets/css/main.css';

//importing js from assets 
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
// import "./assets/vendor/aos/aos.js";
import './assets/js/main.js'

//importing from node modules 
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js'
// import './assets/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
