<template>
    <div class="d-flex justify-content-center mt-5 py-5 px-5">
  <div class="row" >

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
      <div class="card">
          <div class="d-flex card-body">
              <div class="my-auto">
              <img class="pr-3" src="@/images/Shipping-Icon.svg" alt="">
          </div>
          <div class="pb-2">
              <strong class="card-title mt-3 mb-3">Free shipping</strong>
              <p class="card-text mt-2">For a local customer, we provide <br> free shipping facility</p>
          </div>
        </div>

  </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
      <div class="card ">
          <div class="d-flex card-body">
              <div class="my-auto">
              <img class="pr-3" src="@/images/Clock-Icon.svg" alt="">
          </div>
          <div class="pb-2">
              <strong class="card-title mt-3 mb-3">24/7 support</strong>
              <p class="card-text mt-2">For any inquiry, we are available 24 <br> hours every day</p>
          </div>
        </div>  
  </div>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
      <div class="card">
          <div class="d-flex card-body">
              <div class="my-auto">
              <img class="pr-3" src="@/images/Payment-Icon.svg" alt="">
          </div>
          <div class="pb-2">
              <strong class="card-title mt-3 mb-3">Online payment</strong>
              <p class="card-text mt-2">You can pay quickly and easily with <br> our online payment system</p>
          </div>
        </div> 
  </div>
    </div>
    
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
      <div class="card">
          <div class="d-flex card-body">
              <div class="my-auto">
              <img class="pr-3" src="@/images/Delivery-Icon.svg" alt="">
          </div>
          <div class="pb-2">
              <strong class="card-title mt-3 mb-3">Fast delivery</strong>
              <p class="card-text mt-2">We understand your urgency and we deliver in a fast way</p>
          </div>
        </div> 
      </div>
    </div>    
  </div>
</div>

</template>

<script>
    export default {
        name: (
            'InfoBoxes'
        )
    }
</script>

<style scoped>

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

.card {
    background-color: #e3e3e370;
    border: none;
    border-radius: 8px;
    animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.card:hover {
    background-color: #20D3C2;
    transition: .5s ease;
}

.card-body:hover {
  filter: brightness(0) invert(1);
}

.card-title {
    color: #20D3C2;
}


</style>