<template>
    <div class="d-flex justify-content-center mt-5 pt-5 pb-0 px-5">
  <div class="row" >

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
      <div class="card">
          <div class="d-flex card-body">
              <div class="my-auto">
              <img class="pr-3" src="@/images/Shipping-Icon.svg" alt="">
          </div>
          <div class="pb-2">
              <strong class="card-title mt-3 mb-3">{{ $t('translated.freeShipping') }}</strong>
              <p class="card-text mt-2">{{ $t('translated.1') }} <br> {{ $t('translated.2') }} </p>
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
              <strong class="card-title mt-3 mb-3">{{ $t('translated.24/7') }} </strong>
              <p class="card-text mt-2"> {{ $t('translated.3') }}<br> {{ $t('translated.4') }}</p>
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
              <strong class="card-title mt-3 mb-3">{{ $t('translated.onlinePayment') }}</strong>
              <p class="card-text mt-2">{{ $t('translated.5') }} <br> {{ $t('translated.6') }}</p>
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
              <strong class="card-title mt-3 mb-3">{{ $t('translated.fastDelivery') }}</strong>
              <p class="card-text mt-2">{{ $t('translated.7') }}</p>
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