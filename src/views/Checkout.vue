<template>
  <div>
    <Toprow />
    <div class="container d-flex mb-custom">
      <!-- Billing Details -->
      <div class="checkout-left col-lg-6">
        <div class="mb-3"><span>Returning customer?<router-link to="/account" class="ml-2 theme-text">Click here to login</router-link></span></div>
        <div class="mb-3"><span>Have a coupon?<a href="#couponCollapse" data-toggle="collapse" role="button" class="ml-2 theme-text" aria-expanded="false" aria-controls="couponCode">Click here to enter your code</a></span></div>
        <div class="col-10 pl-0 collapse" id="couponCollapse">
          <CouponCode />
        </div>
        <!-- Form -->
        <h6 class="text-uppercase font-weight-bold mt-5">Billing Details</h6>
        <BillingDetails />
      </div>

      <!-- Your Order -->
      <div class="checkout-right col-lg-6">
        <div class="cart-heading blue-theme-bg text-center py-3">
          <h4 class="theme-text text-uppercase my-1">Your Order</h4>
        </div>
        <div id="yourOrder">
          <Order />          

        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import Toprow from '@/components/shoppingCart/Toprow'
import CouponCode from '@/components/shoppingCart/CouponCode'
export default {
  components: {
    Toprow,
    CouponCode
  }
}
</script>

<style>

</style>