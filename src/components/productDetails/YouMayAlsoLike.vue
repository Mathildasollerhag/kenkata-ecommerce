<template>
  <div v-if="youMayAlsoLike.length > 0" id="mayAlsoLike" class="position-relative container my-5">
    <div class="text-center mb-4">
      <div class="d-flex flex-wrap justify-content-center text-uppercase">
        <h1 class="font-weight-bold">You may</h1>
        <h1 class="pl-2 font-weight-bold theme-text">Also like</h1>
      </div>
      <img src="@/images/ZigZag.svg" alt="">
    </div>

    <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:4,nav:false,dots:true}}">
      <div v-for="item in youMayAlsoLike" :key="item.id" >
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
import ProductCard from '@/components/products/ProductCard'
export default {
    name: 'YouMayAlsoLike',
    props: ["gender"],
    components: { carousel, ProductCard },
    created() {
      this.$store.dispatch("getProducts")
    },
    computed: {
      ...mapGetters(['productsCatalog']),

      youMayAlsoLike() {
        return this.productsCatalog.filter(item => item.product.gender == this.gender)        
      }
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