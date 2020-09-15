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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

:root {
  --theme: #20D3C2;
  --light-cyan-theme: #EDFCFA;
  --blue-theme: #0E153D;
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

.blue-theme-text {
  color: var(--blue-theme);
}

.gray-bg {
  background-color: var(--gray-theme);
}

</style>
