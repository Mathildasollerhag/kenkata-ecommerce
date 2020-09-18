<template>
  <div class="blue-theme-bg-op text-white py-4 mb-custom">
      <div class="container d-flex justify-content-center align-items-center py-3">
          <router-link active-class="active" to="/shoppingcart">Shopping Cart<i class="fas fa-chevron-right theme-text mx-3"></i></router-link>
          <router-link active-class="active" to="/checkout">Checkout<i class="fas fa-chevron-right theme-text mx-3"></i></router-link>
          <router-link active-class="active" to="/complete">Order Complete</router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
a {
    color: white !important;
    font-size: 19px;
}
a:hover {
  text-decoration: none;
  color: var(--theme) !important;
}
.active {
    color: var(--theme) !important;
}
</style>