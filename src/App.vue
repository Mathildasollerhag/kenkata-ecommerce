<template>
  <div id="app">
    <Navigation/>
    
    <router-view/>


  <Brands/>
  <Footer/>


  <!-- Quickview Product Modal -->
  <div class="modal fade" id="quickviewModal" tabindex="-1" aria-labelledby="quickviewModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <Quickview />
      </div>
    </div>
  </div>
  
  </div>
</template>

<script>

import Navigation from '../src/components/global/Navigation'
import Brands from '@/components/global/Brands.vue'
import Footer from '@/components/global/Footer.vue'
import Quickview from '@/components/quickview/Quickview'

export default {
  name: "App",
  components:{
  Navigation,
  Brands,
  Footer,
  Quickview
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

html, body {
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

:root {
  --theme: #20D3C2;
  --light-cyan-theme: #EDFCFA;
  --blue-theme: #0E153D;
  --blue-theme-op: #0e153dc0;
  --gray-theme: #CCCCCC;
  --light-gray-theme: #EEEEEE;
  --lighter-gray-theme: #F6F6F6;

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

.light-gray-bg {
  background-color: var(--light-gray-theme);
}

.lighter-gray-bg {
  background-color: var(--lighter-gray-theme);
}

/* Owl Carousel Style */
.carousel-height {
    height: 380px !important;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    transition: all 0.3s ease;
    background-color: #20D3C2 !important;
}

/* Utilities */
.mb-custom {
    margin-bottom: 5em;
}
.c-pointer {
  cursor: pointer;
}

/* Buttons */
.btn-kenkata-blue {
    padding: 0.4em 1em;
    background-color: var(--theme);
    color: white;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid;
}
.btn-kenkata-dark {
    padding: 0.4em 1.5em;
    background-color: var(--blue-theme);
    color: white;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 0.9rem;
}
.btn-kenkata-blue:hover, .btn-kenkata-dark:hover {
    color: white;
}

.modal-backdrop {
  background-color: var(--blue-theme);
  opacity: 0.85 !important;
}

</style>


