<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>
<style>

/* Owl Carousel Style */
.carousel-height {
    height: 380px !important;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    transition: all 0.3s ease;
    background-color: #20D3C2 !important;
}
</style>
