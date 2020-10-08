<template>
    <div class="container mt-5 pt-4">
        <div class="text-center">
                <div class="row d-flex justify-content-center d-block">
                    <h1 id="shop-by">SHOP BY</h1>
                    <h1 id="category" class="pl-2">CATEGORY</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3 pb-2">We always try to give you the best product within a fast and reliable way</p>
        </div>

        <div class="grid-container">
          
  <div class="card item1 pb-0">
    <div @click.prevent="getProductsByCategory('shoes')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="shoes = true" @mouseleave="shoes = false" class="card-p card-text p-y-1 text-left">Shoes <small class="hidden-text">ss</small><br> <small v-if="shoes">{{getShoes.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item2 pb-0">
    <div @click.prevent="getProductsByGender('men')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="men = true" @mouseleave="men = false" class="card-p card-text p-y-1 text-left">Men <small class="hidden-text">ssss</small><br> <small v-if="men">{{getMen.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item3 pb-0">
    <div @click.prevent="getProductsByGender('women')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="women = true" @mouseleave="women = false" class="card-p card-text p-y-1 text-left">Women <br> <small v-if="women">{{getWomen.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item4 pb-0">
    <div @click.prevent="getProductsByCategory('kids')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="kids = true" @mouseleave="kids = false" class="card-p card-text p-y-1 text-left">Kids <br> <small v-if="kids">{{getKids.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item5 pb-0">
    <div @click.prevent="getProductsByCategory('hats')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="hats = true" @mouseleave="hats = false" class="card-p card-text p-y-1 text-left">Hats <small class="hidden-text">ssss</small> <br> <small v-if="hats">{{getHats.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item6 pb-0">
    <div @click.prevent="getProductsByCategory('sunglasses')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="sunglasses = true" @mouseleave="sunglasses = false" class="card-p card-text p-y-1 text-left">Sunglasses <br> <small v-if="sunglasses">{{getSunglasses.length}} Products</small></button></router-link>
    </div>
  </div>

  <div class="card item7 pb-0">
    <div @click.prevent="getProductsByCategory('watches')" class="mt-auto">
        <router-link to="/shop"><button @mouseover="watches = true" @mouseleave="watches = false" class="card-p card-text p-y-1 text-left">Watches <br> <small v-if="watches">{{getWatches.length}} Products</small></button></router-link>
    </div>
  </div>

  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'CategoryCards',

    data() {
      return {
        shoes: false,
        men: false,
        women: false,
        kids: false,
        hats: false,
        sunglasses: false,
        watches: false
      };
    },

    created() {
      this.$store.dispatch('getProducts')
    },
    methods: {
      ...mapActions(["getProductsByGender", "getProductsByCategory"])
    },
    computed: {
      ...mapGetters(['getShoes', 'getMen', 'getWomen', 'getKids', 'getHats', 'getSunglasses', 'getWatches', ])
    },
}
</script>

<style scoped>

.hidden-text {
  visibility: hidden;
}

button {
  border: none;
}

a {
  text-decoration: none;
}

.card {
    background-color: #CCCCCC!important;
    border: none;
}

.card-p {
    font-size: 14px;
    font-weight: 600;
    background-color: #0e153dda;
    width: 50%;
    color: #20D3C2;
    padding: 7px;
    padding-left: 15px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 5px;
}
.card-p:hover {
    width: 50%;
    color: #fff;
    background-color: #1a276eda;
    transition: 0.3s ease;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  width: 100%;
}

.item1 {
  grid-area: 2 / 1 / span 2 / span 2;
  background-image: url("../../images/pexels-shoes.jpg");
  background-size: contain;
  height: 438px;
  width: 438px;
}
.item4 {
  grid-area: 1 / 4 / span 2 / span 2;
  background-image: url("../../images/pexels-kids.jpg");
  background-size: cover;
  height: 438px;
  width: 438px;
}
.item7 {
  grid-area: 3 / 5 / span 1 / span 1;
  background-image: url("../../images/pexels-watch.jpg");
  background-size: cover;
  height: 214px;
  width: 214px;
}
.item6 {
  grid-area: 3 / 3 / span 1 / span 2;
  background-image: url("../../images/pexels-sunglasses.jpg");
  background-size: cover;
  height: 214px;
  width: 438px;
}
.item2 {
  grid-area: 1 / 1 / span 1 / span 1;
  background-image: url("../../images/pexels-men.jpg");
  background-size: cover;
  height: 214px;
  width: 214px;
}
.item3 {
  grid-area: 1 / 2 / span 1 / span 2;
  background-image: url("../../images/pexels-women.jpg");
  background-size: cover;
  height: 214px;
  width: 438px;
}
.item5 {
  grid-area: 2 / 3 / span 1 / span 1;
  background-image: url("../../images/pexels-hats.jpg");
  background-size: cover;
  height: 214px;
  width: 214px;
}

#shop-by {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#category {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

@media (min-width: 300px) { 
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    padding: 10px;
  }
}

@media (min-width: 768px) { 

  .grid-container {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
  }

}

@media (max-width: 768px) { 

  .grid-container {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    padding: 10px;
    justify-content: center;
  }

  .grid-container > div {
  width: 225px;
  height: 225px;
}
}

</style>