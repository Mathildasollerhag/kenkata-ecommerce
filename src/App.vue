<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>


  <Brands/>
  <Footer/>

  </div>
</template>

<style>

</style>

<script>

import Brands from '@/components/global/Brands.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Brands,
    Footer,
  }
}
</script>
