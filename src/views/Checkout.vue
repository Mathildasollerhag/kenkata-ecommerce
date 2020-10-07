<template>
  <div>
    <Toprow />

        <!-- Form -->
        <form v-on:submit.prevent="orderSubmit" class="container d-flex flex-column flex-lg-row align-items-center align-items-lg-start mb-custom">

          <!-- Left Column -->
          <div class="col-lg-6">

            <!-- Returning customer and Coupon -->
            <div class="mb-3"><span>Returning customer?<router-link to="/account" class="ml-2 theme-text">Click here to login</router-link></span></div>
              <div class="mb-3"><span>Have a coupon?<a href="#couponCollapse" data-toggle="collapse" role="button" class="ml-2 theme-text" aria-expanded="false" aria-controls="couponCode">Click here to enter your code</a></span></div>
              <div class="col-md-10 pl-0 collapse" id="couponCollapse">
              <CouponCode />
            </div>

            <!-- Billing Details -->
            <h6 class="text-uppercase font-weight-bold mt-5 mb-3">Billing Details</h6>
            <!-- First Name / Last Name -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="firstName">First name<span class="theme-text"> *</span></label>
                <input v-model="order.details.firstname" type="text" class="form-control" id="firstName" required>
              </div>
              <div class="form-group col-md-6">
                <label for="lastName">Last name<span class="theme-text"> *</span></label>
                <input v-model="order.details.lastname" type="text" class="form-control" id="lastName" required>
              </div>
            </div>
            <!-- Company Name -->
            <div class="form-group">
              <label for="companyName">Company name (optional)</label>
              <input v-model="order.details.company" type="text" class="form-control" id="companyName">
            </div>
            <!-- Country / Region -->
            <div class="form-group">
              <label for="countryRegion">Country / Region<span class="theme-text"> *</span></label>
              <select v-model="order.details.country" id="countryRegion" class="form-control" required>
                <option selected>United States (US)</option>
                <option>Sweden</option>
                <option>Country 3</option>
                <option>Country 4</option>
              </select>
            </div>
            <!-- Street Address -->
            <div class="form-group">
              <label for="streetAddress">Street address<span class="theme-text"> *</span></label>
              <input v-model="order.details.streetAddress" type="text" class="form-control mb-3" id="streetAddress" placeholder="House number and street name" required>
              <input v-model="order.details.apartment" type="text" class="form-control" id="apartment" placeholder="Apartment, suite, unit, etc. (optional)">
            </div>
            <!-- Town / City -->
            <div class="form-group">
              <label for="townCity">Town / City<span class="theme-text"> *</span></label>
              <input v-model="order.details.city" type="text" class="form-control" id="townCity" placeholder="" required>
            </div>
            <!-- State -->
            <div class="form-group">
              <label for="state">State<span class="theme-text"> *</span></label>
              <select v-model="order.details.state" id="state" class="form-control" required>
                <option selected>Alabama</option>
                <option>State 2</option>
                <option>State 3</option>
                <option>State 4</option>
              </select>
            </div>
            <!-- ZIP -->
            <div class="form-group">
              <label for="zip">ZIP<span class="theme-text"> *</span></label>
              <input v-model="order.details.zip" type="number" class="form-control" id="zip" required>
            </div>
            <!-- Phone -->
            <div class="form-group">
              <label for="phone">Phone<span class="theme-text"> *</span></label>
              <input v-model="order.details.phone" type="text" class="form-control" id="phone" required>
            </div>
            <!-- Email Adress -->
            <div class="form-group">
              <label for="inputAddress">Address<span class="theme-text"> *</span></label>
              <input v-model="order.details.address" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
            </div>
            <!-- Create an account? -->
            <div class="form-group py-4 border-bottom">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="createAccount">
                <label class="form-check-label" for="createAccount">
                  Create an account?
                </label>
              </div>
            </div>
            <!-- Ship To A Different Address? -->
            <div class="form-group py-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="shipDifferent">
                <label class="form-check-label text-uppercase font-weight-bold" for="shipDifferent">
                  Ship to a different address?
                </label>
              </div>
            </div>
            <!-- Order notes -->
            <div class="form-group form-textarea">
              <label for="orderNotes">Order notes (optional)</label>
              <textarea class="form-control" id="orderNotes" rows="6" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
            </div>
          </div>     
        

          <!-- Right Column -->          
          <div class="checkout-right col-lg-6">
            <div class="cart-heading blue-theme-bg text-center py-3">
              <h4 class="theme-text text-uppercase my-1">Your Order</h4>
            </div>

            <!-- Your Order -->
            <div id="yourOrder" class="px-4">
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
                      <!-- <Payments /> -->
                    <div>
                      <!-- Direct Bank Transfer -->
                      <div class="custom-control custom-radio mb-3">
                          <input v-model="order.payment" value="direct bank transfer" type="radio" id="customRadio1" name="payment" class="custom-control-input" required>
                          <label class="custom-control-label" for="customRadio1">Direct bank transfer</label>
                      </div>
                      <!-- Direct Bank Transfer -->
                      <div class="custom-control custom-radio mb-3">
                          <input v-model="order.payment" value="check payment" type="radio" id="customRadio2" name="payment" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio2">Check Payment</label>
                      </div>
                          <!-- Direct Bank Transfer -->
                      <div class="custom-control custom-radio mb-3">
                          <input v-model="order.payment" value="cash on delivery" type="radio" id="customRadio3" name="payment" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio3">Cash on delivery</label>
                      </div>
                          <!-- Direct Bank Transfer -->
                      <div class="custom-control custom-radio mb-3">
                          <input v-model="order.payment" value="paypal" type="radio" id="customRadio4" name="payment" class="custom-control-input">
                          <label class="custom-control-label" for="customRadio4">PayPal</label>
                          <span><img class="mx-3" src="@/images/PayPal.png"><span class="text-muted">What is PayPal?</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom py-3">
                      <span>
                          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span class="theme-text">privacy policy.</span></p>
                      </span>
                  </div>

                  <!-- Terms and conditions  -->
                  <div class="custom-control custom-checkbox py-3">
                      <input type="checkbox" class="custom-control-input" id="agreeCheck" required>
                      <label class="custom-control-label" for="agreeCheck">I have read and agree to the website <span class="theme-text">terms and conditions *</span></label>
                  </div>
                  <!-- Place Order -->
                  <!-- <button v-if="!billingDetails" disabled class="btn btn-block btn-kenkata-blue mx-4 m-auto">Place Order</button> -->
                  <button @click="clearCart()" type="submit" class="btn btn-block btn-kenkata-blue mx-4 m-auto">
                    <span class="text-white">PLACE ORDER</span>
                  </button>
                </div>
            </div>        
          </div>
        </form>
  </div>
</template>

<script>
import Toprow from '@/components/shoppingCart/Toprow'
import CouponCode from '@/components/shoppingCart/CouponCode'
import BillingDetails from '@/components/checkout/BillingDetails'
import Order from '@/components/checkout/Order'
import Totals from '@/components/shoppingCart/Totals'
import OrderProduct from '@/components/checkout/OrderProduct'
import Payments from '@/components/checkout/Payments'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      order: {
        details: {
          firstname: "",
          lastname: "",
          company: "",
          country: "",
          streetAddress: "",
          apartment: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          address: ""
        },
        payment: ""
      }
    }
  },
  components: {
    Toprow,
    CouponCode,
    BillingDetails,
    Order,
    Totals,
    OrderProduct,
    Payments
  },
  methods: {
    ...mapActions(["placeOrder", "clearCart"]),
    orderSubmit() {
      this.placeOrder({
        details: this.order.details,
        products: this.shoppingCart,
        shipping: this.getShipping,
        subtotal: this.shoppingCartTotal,
        total: this.shoppingCartTotal + this.getShipping,
        payment: this.order.payment
      })
    }
  },
  computed: {
    ...mapGetters(["shoppingCart", "getShipping", "shoppingCartTotal"])
  }
}
</script>

<style scoped>
.cart-heading {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
#yourOrder {
  border-bottom: 2px dotted var(--blue-theme);
  border-right: 2px dotted var(--blue-theme);
  border-left: 2px dotted var(--blue-theme);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
#yourOrder .border-top  {
  border-color: var(--theme) !important;
}
a:hover {
  color: var(--theme) !important;
}
button {
  font-size: 17px;
  padding-top: 0.65em;
  padding-bottom: 0.65em;
}
a:hover {
  text-decoration: none;
}
</style>