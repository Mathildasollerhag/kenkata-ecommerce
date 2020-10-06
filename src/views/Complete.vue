<template>
  <div>
    <Toprow />
    <div class="container">
        <div class="text-center">
            <i class="fas fa-shipping-fast fa-7x theme-text"></i>
            <h2 class="mt-4">Thank you for your order!</h2>
            <h5 class="mt-3">Please check your e-mail for order confirmation</h5>
            <button class="btn theme-bg custom-radius mt-4 py-2 px-4">
            <router-link class="text-white" to="/shop">SHOP AGAIN</router-link>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import Toprow from '@/components/shoppingCart/Toprow';
export default {
    components: {
        Toprow,
    }

}
</script>

<style scoped>

.custom-radius {
    border-radius: 20px;
}

</style>