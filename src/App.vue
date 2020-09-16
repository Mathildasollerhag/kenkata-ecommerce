<template>
  <div id="app">
    <Navigation/>
    
    <router-view/>


  <Brands/>
  <Footer/>

  </div>
</template>

<script>

import Navigation from '../src/components/global/Navigation'
import Brands from '@/components/global/Brands.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  name: "App",
  components:{
  Navigation,
  Brands,
  Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

:root {
  --theme: #20D3C2;
  --light-cyan-theme: #EDFCFA;
  --blue-theme: #0E153D;
  --blue-theme-op: #0e153db4;
  --gray-theme: #CCCCCC;

}

.theme-bg {
  background-color: var(--theme);
}

.theme-text {
  color: var(--theme);
}

.light-cyan-bg {
  background-color: var(--light-cyan-theme);
}

.blue-theme-bg {
  background-color: var(--blue-theme);
}

.blue-theme-bg-op {
  background-color: var(--blue-theme-op);
}

.blue-theme-text {
  color: var(--blue-theme);
}

.gray-bg {
  background-color: var(--gray-theme);
}

/* Owl Carousel Style */
.carousel-height {
    height: 380px !important;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    transition: all 0.3s ease;
    background-color: #20D3C2 !important;
}
</style>


