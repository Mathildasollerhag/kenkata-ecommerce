<template>
<div id="order" class="mx-4">

    <!-- Order Product List -->
    <div class="font-weight-bold theme-text d-flex justify-content-between pt-3 pb-2 text-uppercase border-bottom">
        <p>Product</p>
        <p>Subtotal</p>
    </div>
    <div class="order-list">
      <OrderProduct v-for="item in shoppingCart" :key="item.id" :item="item"/>
    </div>

    <!-- Order Totals -->
    <Totals />
    
    <div class="py-4 border-top">
      <!-- Payments -->
      <div class="border-bottom">
          <Payments />
      </div>
      <div class="border-bottom py-3">
          <span>
              <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span class="theme-text">privacy policy.</span></p>
          </span>
      </div>

      <!-- Terms and conditions  -->
      <div class="custom-control custom-checkbox py-3">
          <input type="checkbox" class="custom-control-input" id="agreeCheck">
          <label class="custom-control-label" for="agreeCheck">I have read and agree to the website <span class="theme-text">terms and conditions *</span></label>
      </div>

      <!-- Place Order -->
      <button v-if="!billingDetails" disabled class="btn btn-block btn-kenkata-blue mx-4 m-auto">Place Order</button>
      <button v-else class="btn btn-block btn-kenkata-blue mx-4 m-auto">Place Order</button>
    </div>    
</div>
</template>

<script>
import Totals from '@/components/shoppingCart/Totals'
import OrderProduct from '@/components/checkout/OrderProduct'
import Payments from '@/components/checkout/Payments'
import { mapGetters } from 'vuex'
export default {
    components: {
        Totals,
        OrderProduct,
        Payments
    },
    computed: {
      ...mapGetters(["shoppingCart"])
    }
}
</script>

<style scoped>
p {
  margin: 0.4em 0;
}
.cart-totals-border {
  border-bottom: 2px dotted var(--blue-theme-bg);
  border-right: 2px dotted var(--blue-theme-bg);
  border-left: 2px dotted var(--blue-theme-bg);
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
button {
  font-size: 17px;
  padding-top: 0.65em;
  padding-bottom: 0.65em;
}
</style>