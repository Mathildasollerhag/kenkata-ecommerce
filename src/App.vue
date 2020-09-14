<template>
  <div id="app">
    <Navigation/>
    <div id="nav">
      
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '../src/components/global/Navigation'

export default {
  name: "App",
  components:{
  Navigation
  }
}
</script>

<style>

</style>
