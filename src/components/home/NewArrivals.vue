<template>
  <div v-if="newArrivals.length > 0" id="newArrivals" class="position-relative container my-5">
    <div class="text-center">
      <div class="d-flex justify-content-center text-uppercase">
        <h1 class="font-weight-bold">New</h1>
        <h1 class="pl-2 font-weight-bold theme-text">Arrivals</h1>
      </div>
      <img src="@/images/ZigZag.svg" alt="">
      <p class="pt-3 mb-4">Check out our latest products from top fashion designers</p>
    </div>

    <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:3,nav:false,dots:true}}">
      <div v-for="item in newArrivals" :key="item.id">
        <ProductCard :item="item"/>
      </div>
      <template slot="prev"><span class="d-none d-xl-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
      <template slot="next"><span class="d-none d-xl-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
    </carousel> 
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapGetters } from 'vuex'
import ProductCard from '../products/ProductCard'
export default {
    name: 'NewArrivals',
    components: { carousel, ProductCard },
    computed: {
      ...mapGetters(['newArrivals'])
    }
}
</script>

<style scoped>
/* Next and Prev Buttons */
.owl-prev, .owl-next {
  position: absolute;
  border: 2px solid #E3E3E3;
  background-color: white;
  height: 58px;
  width: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.owl-prev {  
  left: -7%;
  bottom: 37%;
}
.owl-next {
  right: -7%;
  bottom: 37%;
}

.owl-next i, .owl-prev i {
  font-size: 2rem ;
  font-weight: 200 !important;
  color: #E3E3E3 !important;
}
.owl-next:hover, .owl-prev:hover {
  background-color: #20D3C2;
  border-color: transparent;
  cursor: pointer;
}

.owl-next i{
    margin-left: 4px;
}
.owl-prev i {
    margin-right: 5px;
}

</style>