<template>
  <div>
    <Toprow v-if="shoppingCart.length > 0" />
    <div class="container-fluid container-md d-flex flex-column flex-xl-row align-items-start mb-custom">
      <!-- Product List -->
      <div class="cart-left col-xl-8">
        <ProductList v-if="shoppingCart.length > 0"/>        
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="col-md-8 order-1 order-md-0 pl-0">
            <CouponCode v-if="shoppingCart.length > 0"/>
          </div>
          <div v-if="shoppingCart.length > 0">
            <button class="btn btn-kenkata-dark update-cart order-0 order-md-1 mb-4 mb-md-0">Update Cart</button>
          </div>
        </div>
      </div>

      <!-- Cart Totals -->
      <div v-if="shoppingCart.length > 0" class="cart-right col-xl-4 mt-4 mt-xl-0">
        <div class="cart-heading blue-theme-bg text-center py-2">
          <h4 class="theme-text text-uppercase my-1">Cart Totals</h4>
        </div>
        <div class="cart-totals-border">
          
          <div class="mx-4 pt-2 pb-4">
            <Totals />
            <router-link to="/checkout"><button class="btn btn-block btn-kenkata-blue mx-4 m-auto">Proceed to checkout</button></router-link>
          </div>
        </div>
      </div>      
    </div>
    <div v-if="shoppingCart.length === 0" class="text-center">
      <h2>Your shoppingcart is empty</h2>
      <router-link to="/shop"><button class="btn theme-bg text-white custom-radius mt-3 font-weight-bold px-4">SHOP NOW</button></router-link>
    </div>

    <!-- You May Also Like -->
    <div v-if="shoppingCart.length > 0" class="container mb-custom">
      <div class="mt-5">
        <YouMayAlsoLike :gender="shoppingCart[0].product.gender"/>
      </div>
    </div>
  </div>
</template>

<script>
import YouMayAlsoLike from '@/components/productDetails/YouMayAlsoLike'
import Totals from '@/components/shoppingCart/Totals'
import Toprow from '@/components/shoppingCart/Toprow'
import CouponCode from '@/components/shoppingCart/CouponCode'
import ProductList from '@/components/shoppingCart/ProductList'
import { mapGetters } from 'vuex'
export default {
  components: {
    YouMayAlsoLike,
    Totals,
    Toprow,
    CouponCode,
    ProductList
  },
  computed: {
    ...mapGetters(["shoppingCart"])
  }
}
</script>

<style scoped>

button:hover {
  background-color: var(--blue-theme) !important;
}
.cart-heading {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.cart-totals-border {
  border-bottom: 2px dotted var(--blue-theme);
  border-right: 2px dotted var(--blue-theme);
  border-left: 2px dotted var(--blue-theme);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
button {
  font-size: 17px;
  padding-top: 0.65em;
  padding-bottom: 0.65em;
}
a:hover {
  text-decoration: none;
}

.custom-radius {
  border-radius: 30px;
}
</style>