<template>
  <div class="home">
    <featuredProducts/>
  </div>
</template>

<script>
import featuredProducts from '../components/global/featuredProducts'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    featuredProducts
  }
}
</script>
