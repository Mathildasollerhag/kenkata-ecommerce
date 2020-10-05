<template>
  <div>
    <form>

      <!-- First Name / Last Name -->
      <div class="row">
        <div class="form-group col-md-6">
          <label for="firstName">First name<span class="theme-text"> *</span></label>
          <input @blur="checkField()" type="text" class="form-control" id="firstName" required>
        </div>
        <div class="form-group col-md-6">
          <label for="lastName">Last name<span class="theme-text"> *</span></label>
          <input type="text" class="form-control" id="lastName" required>
        </div>
      </div>
      <!-- Company Name -->
      <div class="form-group">
        <label for="companyName">Company name (optional)</label>
        <input type="text" class="form-control" id="companyName">
      </div>
      <!-- Country / Region -->
      <div class="form-group">
        <label for="countryRegion">Country / Region<span class="theme-text"> *</span></label>
        <select id="countryRegion" class="form-control" required>
          <option selected>United States (US)</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <!-- Street Address -->
      <div class="form-group">
        <label for="streetAddress">Street address<span class="theme-text"> *</span></label>
        <input type="text" class="form-control mb-3" id="streetAddress" placeholder="House number and street name" required>
        <input type="text" class="form-control" id="apartment" placeholder="Apartment, suite, unit, etc. (optional)">
      </div>
      <!-- Town / City -->
      <div class="form-group">
        <label for="townCity">Town / City<span class="theme-text"> *</span></label>
        <input type="text" class="form-control" id="townCity" placeholder="" required>
      </div>
      <!-- State -->
      <div class="form-group">
        <label for="state">State<span class="theme-text"> *</span></label>
        <select id="state" class="form-control" required>
          <option selected>Alabama</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <!-- ZIP -->
      <div class="form-group">
        <label for="zip">ZIP<span class="theme-text"> *</span></label>
        <input type="number" class="form-control" id="zip" required>
      </div>
      <!-- Phone -->
      <div class="form-group">
        <label for="phone">Phone<span class="theme-text"> *</span></label>
        <input type="text" class="form-control" id="phone" required>
      </div>
      <!-- Email Adress -->
      <div class="form-group">
        <label for="inputAddress">Address<span class="theme-text"> *</span></label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
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
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
     billingDetails: {
       
     }
    }
  },
  created() {
    console.log(this.requiredFields)
  },
  methods: {
    checkField() {
      if(this.value = '') {
        console.log('required field')
      }
    }
  },
  computed: {
    // checkField() {
    //   if(this.value === '') {
    //     return console.log("required field")
    //   }
    //   return this.requiredFields.forEach(field => {
    //     return this.requiredFields.on('blur', function () {
    //     console.log("Required field")
    //     return console.log(field)
    //   })
    // });

      // const requiredFields = $('input, textarea, select').filter('[required]')
      
      
  }

}
</script>

<style scoped>
input, select, textarea, .border-bottom {
  border-color: #e3e3e3 !important;
  font-size: 14px;
}
</style>