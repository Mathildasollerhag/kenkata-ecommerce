<template>
  <div class="blue-theme-bg-op text-white py-4 mb-custom">
      <div class="container d-flex justify-content-center align-items-center py-3">
          <span v-if="currentRoute === 'Complete'" active-class="active" to="/shoppingcart" class="text-white font">Shopping Cart<i class="fas fa-chevron-right theme-text mx-3"></i></span>
          <router-link v-else active-class="active" to="/shoppingcart">Shopping Cart<i class="fas fa-chevron-right theme-text mx-3"></i></router-link>
          
          <span v-if="currentRoute === 'Complete'" active-class="active" to="/checkout" class="text-white font">Checkout<i class="fas fa-chevron-right theme-text mx-3"></i></span>
          <router-link v-else active-class="active" to="/checkout">Checkout<i class="fas fa-chevron-right theme-text mx-3"></i></router-link>
          
          <span v-if="currentRoute === 'ShoppingCart' || currentRoute === 'Checkout'" class="text-white font">Order Complete</span>
          <span v-else class="theme-text font">Order Complete</span>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  created() {
    console.log(this.currentRoute)
  }
}
</script>

<style scoped>
a {
    color: white;
    font-size: 19px;
}
a:hover {
  text-decoration: none;
  color: var(--theme) !important;
}
.active {
    color: var(--theme) !important;
}

.font {
  font-size: 19px;
}
</style>