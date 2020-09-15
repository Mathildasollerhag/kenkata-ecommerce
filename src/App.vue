<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>


  <Footer/>

  </div>
</template>

<style>

</style>

<script>

import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Footer,
  }
}
</script>
