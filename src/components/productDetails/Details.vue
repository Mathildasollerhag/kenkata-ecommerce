<template>
  <div class="container d-xl-flex align-items-center justify-content-around">
    <DetailsCarousel :product="product" />    
    
    <div class="details">
      <!-- Quickview Top Row -->
      <div v-if="currentRoute != 'ProductDetails'" class="quickview-row d-md-flex justify-content-between mb-4">
        <span class="d-flex align-items-center">
            <i class="fas fa-star theme-text"></i>
            <i class="fas fa-star theme-text"></i>
            <i class="fas fa-star theme-text"></i>
            <i class="fas fa-star theme-text"></i>
            <i class="far fa-star theme-text"></i>
            <p class="mb-0 ml-2">({{product.reviews.length}} customer reviews)</p>
        </span>
        <!-- <img src="@/images/Bexim.png" alt=""> -->
        <h5 class="text-uppercase blue-theme-text m-0">{{product.brand}}</h5>
      </div>

      <h3 class="theme-text mb-3">{{product.name}}</h3>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
      <hr />

      <!-- Price Row -->
      <div class="d-flex align-items-center">
        <h4 v-if="product.discount !== ''" class="m-0 theme-text mr-3 my-1">${{product.price * 0.8}}.00</h4>
        <h4 v-else class="m-0 theme-text mr-3 my-1">${{product.price}}.00</h4>
        <p class="m-0">
          <del v-if="product.discount !== ''" class="text-muted mr-4">${{product.price}}.00</del>
        </p>
        <img class="icon mb-1 mr-1" src="@/images/icons/InStock.png" alt />
        <p v-if="product.inStock" class="m-0">In Stock</p>
        <p v-else class="m-0">Out Of Stock</p>
      </div>

      <!-- Options -->
      <div class="d-flex align-items-center mt-3 mb-4">
    

      <!-- Quantity -->
      <div class="text-center quantity-container d-flex">
        <span v-on:click="productDecrement(item); itemQuantityCount()" class="decrement">-</span>
        <span class="quantity">{{item.quantity}}</span>
        <span v-on:click="productIncrement({product, quantity:0, id}); itemQuantityCount()" class="increment">+</span>
      </div>
      

        <!-- Add To Cart -->
        <button v-on:click="addProductToCart({product, quantity:1, id}); itemQuantityCount();" class="btn btn-kenkata-blue font-weight-normal mx-4">
          <img src="@/images/icons/Cart.png" alt /> Add to cart
        </button>

        <!-- Colors/Compare/Wishlist -->
        <div class="d-flex options-img">
          <img src="@/images/icons/ColorCircle.png" />
          <span v-on:click="addProductToCompare({product, quantity: 1, id})" class="c-pointer" v-b-tooltip.hover title="Compare">
            <img class="mx-2" src="@/images/icons/CompareCircle.png" />
          </span>
          
          <span v-on:click="addProductToWishlist({currentUserId, product, id})" class="c-pointer" v-b-tooltip.hover title="Add To Wishlist">
            <img src="@/images/icons/HeartCircle.png" />
          </span>
        </div>
      </div>

      <!-- Category -->
      <p>
        Category:
        <span class="theme-text text-capitalize">{{product.category}}</span>
      </p>

      <!-- Tags -->
      <span class="tags d-flex my-4">
        Tags:
        <div><span class="ml-2">Fashion</span></div>
        <div><span class="mx-1 text-capitalize">{{product.brand}}</span></div>
        <div><span class="text-capitalize">{{product.category}}</span></div>      
      </span>

      <!-- Share -->
      <div class="details-socials d-flex">
        <span class="mr-3">
          <p>Share:</p>
        </span>
        <DetailsSocials />
      </div>
    </div>
  </div>
</template>

<script>
import DetailsCarousel from "./DetailsCarousel";
import DetailsSocials from "./DetailsSocials";
import ProductReviews from "./ProductReviews";
import Quantity from './Quantity'
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      item: {
        id: this.id,
        product: this.product,
        quantity: 0
      }
    }
  },
  props: ["product", "id"],
  components: {
    DetailsCarousel,
    DetailsSocials,
    ProductReviews,
    Quantity
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    currentUserId() {
      return sessionStorage.getItem('userId')
    },
    ...mapGetters(["shoppingCart"]),
  }, 
  methods: {
    ...mapActions(["getProductById", "addProductToCart", "productIncrement", "productDecrement", "addProductToCompare", "addProductToWishlist"]),
    
    itemQuantityCount() {
      let item = this.shoppingCart.find(item => item.id == this.id)
      if(item) {
        this.item = item
      }           
    }
  },
  created() {
    this.itemQuantityCount()
  }
  
};
</script>

<style scoped>

.icon {
  transform: scale(0.9);
}
.options-img img {
  transform: scale(0.9);
}
.btn-kenkata-blue {
  text-transform: unset;
}
button img {
  filter: brightness(0) invert(1);
}

.tags span {
  border: 1px solid var(--gray-theme);
  padding: 0 5px;
}

#quickView .details {
  padding-top: 6em;
  padding-left: 1em;
  margin-bottom: -2em;
}
.quickview-row img {
  width: 105px;
}

.quantity-container {
  border: 1px solid var(--gray-theme);
  border-radius: 5px;
}
.quantity-container span {
  padding: 4px 10px;
  min-width: 30px;
}

.increment:hover, .decrement:hover {
  background-color: var(--theme);
  color: white;
  cursor: pointer;
}
.quantity {
  border-left: 1px solid var(--gray-theme);
  border-right: 1px solid var(--gray-theme);
}

@media(min-width: 1200px) {
  .details {
    padding-left: 7em;
  }
  #quickView .details {
    padding-top: 0;
  }
}
</style>