<template>
    <div class="h-100" @mouseover="hover = true" @mouseleave="hover = false">
      <div v-if="product.image" class="product-card p-0 position-relative h-100">       
        <img :src="product.image" class="card-img-top">   

        <div v-if="!hover" class="bottom-row position-absolute card-body">
            <p class="text-white align-middle m-0">{{ product.name }}</p>
        </div>

        <!-- Mouseover Component -->
        <transition 
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster">
            <div v-if="hover" class="hover-card-body fadeIn">
              <ProductCardHover :product="product"/>
            </div>  
        </transition>      
      </div>
  </div>
</template>

<script>
import ProductCardHover from './ProductCardHover'
export default {
    data() {
        return {
            hover: false
        }
    }, 
    components: {
        ProductCardHover
    },
    props:["product"]
}
</script>

<style scoped>
  .product-card {
    cursor: pointer;
  }
  .card-body {
    background-color: #0E153D;
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0.7em 1.5em;
  }
  .card-body p {
    font-size: 1rem;
  }
  .badge {
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(0.7);
    z-index: 100;
  }
  .hover-card-body {
    background: #0e153dd8;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
  }
</style>