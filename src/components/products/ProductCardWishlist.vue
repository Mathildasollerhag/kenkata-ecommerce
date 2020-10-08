<template>
    <div class="h-100" @mouseover="hover = true" @mouseleave="hover = false">
      <div v-if="item.images" class="product-card p-0 position-relative h-100">       
        <img :src="item.images[0]" class="card-img-top">   

        <!-- Product Badges -->
        <div v-if="!hover" class="badges">
          <span v-if="item.newArrival === true"><New class="new"/></span>
          <span v-if="item.discount != ''"><Discount class="discount" :discount="item.discount"/></span>
          <span v-if="item.status === 'hot'"><Hot class="hot"/></span>
        </div>
        
        <!-- Product Name -->
        <div v-if="!hover" class="bottom-row position-absolute card-body">
            <p class="text-white align-middle m-0">{{ item.name }}</p>
        </div>

        <!-- Mouseover Component -->
        <transition 
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster">
            <div v-if="hover" class="hover-card-body fadeIn">
              <ProductCardHover :product="item" :rating="ratingOverall"/>
            </div>  
        </transition>      
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCardHover from './ProductCardHover'
import New from './badges/New'
import Hot from './badges/Hot'
import Discount from './badges/Discount'
export default {
    data() {
      return {
        hover: false,
        ratingOverall: 0
      }
    }, 
    components: {
        ProductCardHover,
        New, Hot, Discount
    },
    props:["item"],
    methods: {
      countOverallRating() {
        const reviews = this.item.reviews        
        let ratings = []
        let total = 0

        // Pushar alla betyg till arrayen ratings
        reviews.forEach(review => {
          ratings.push(review.rating)

          // ratings = ratings.map(Number)
        });
        // Räknar ut det genomsnittliga betyget
        for (let index = 0; index < ratings.length; index++) {
          total += ratings[index]
        }
        // Sätter ratingOverall till det genomsnittliga betyget
        this.ratingOverall = Math.round(total / ratings.length)
      }
    },
    created() {
        this.countOverallRating()
    }
}
</script>

<style scoped>


  .product-card {
    cursor: pointer;
  }
  .card-img-top {
    /* background-color: #f0f0f0; */
    background-color: #f5f5f5;
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
  .badges {
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 100;
  }
  .new, .discount, .hot {
    transform: scale(0.7);
    margin: 0 0 -12px 0;
  }
  .hover-card-body {
    background: #0e153dd8;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* border-radius: 5px; */
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>