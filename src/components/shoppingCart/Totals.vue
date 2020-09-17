<template>
  <div id="cartTotals">
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
      <p class="subtotal font-weight-bold blue-theme-text">Subtotal</p>
      <p class="theme-text font-weight-bold">$910.00</p>
    </div>
    <div class="d-flex justify-content-between align-items-center border-bottom py-3">
      <p class="font-weight-bold blue-theme-text">Shipping</p>
      <div class="d-flex flex-column align-items-end">
        <!-- Flat rate -->
        <div class="mb-2">
          <p class="d-flex align-items-center">
            <label class="m-0 mr-1" for="flatrate">Flat rate: <span class="theme-text">$20.00</span></label>
            <input type="radio" id="flatrate">
          </p>
        </div>
        <!-- Free shipping -->
        <div class="mb-2">
          <p class="d-flex align-items-center">
            <label class="m-0 mr-1" for="freeshipping">Free shipping</label>
            <input type="radio" id="freeshipping">
          </p>
        </div>
        <!-- Local pickup -->
        <div class="mb-1">
          <p class="d-flex align-items-center">
            <label class="m-0 mr-1" for="localpickup">Local pickup: <span class="theme-text">$25.00</span></label>
            <input type="radio" id="localpickup">
          </p>
        </div>
        <!-- Shopping to AL. -->
        <div v-if="currentRoute === 'ShoppingCart'">
          <p>Shipping to <span class="text-muted">AL.</span></p>
        </div>
        <!-- Change address -->
        <div v-if="currentRoute === 'ShoppingCart'">
          <p>Change address</p>
        </div>
      </div>        
    </div>
    <!-- Total -->
    <div class="total d-flex justify-content-between align-items-center py-3">
      <p class="font-weight-bold blue-theme-text text-uppercase">Total</p>
      <p class="theme-text font-weight-bold">$930.00</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }  
}
</script>

<style scoped>

.cart-totals-border {
  border-bottom: 2px dotted var(--blue-theme);
  border-right: 2px dotted var(--blue-theme);
  border-left: 2px dotted var(--blue-theme);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.total p {
  font-size: 18px;
}
input[type=radio] {
  transform: scale(0.9);
}
a:hover {
  text-decoration: none;
}

#yourOrder .subtotal, #yourOrder .total p {
  color: var(--theme) !important;
}

</style>