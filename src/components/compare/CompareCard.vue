<template>
  <div>
        <div class="custom-card">
          <div class="p-2 d-flex">
            <button v-on:click="deleteProductFromCompare(item.id)" class="remove-btn">
              <i class="fas fa-times px-2"></i>
            </button>
            <div class="my-auto remove-item">Remove item</div>
          </div>
          <img
            class="card-img-top"
            :src="item.product.images[0]"
            alt="Card image cap"
          />
          <div class="card-body text-center">
            <p class="card-title">{{item.product.name}}</p>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p class="mt-2 price">${{item.product.price}}</p>
            <div class="pb-2">
              <button class="add-to-cart-btn">
                <i class="fas fa-shopping-cart pr-2"></i>Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div v-if="item.product.inStock == true" class="card-boxes d-flex">
            <p  class="mx-auto my-auto">
              <i class="checkmark pr-2 fas fa-check"></i>In Stock
            </p>
          </div>
          <div v-if="item.product.inStock == false" class="card-boxes d-flex">
            <p  class="mx-auto my-auto">
              <i class="checkmark pr-2 fas fa-exclamation"></i>Sold Out
            </p>
          </div>
          
          
          <div class="card-boxes d-flex">
            <h2 class="blue-theme-text m-auto px-2">{{item.product.brand}}<i class="far fa-registered fa-xs align-top mt-2"></i></h2>
          </div>
          <div class="card-boxes d-flex">
            <p v-for="(color, index) in item.product.colors" :key="index" class="mx-auto my-auto">{{color}}</p>
          </div>
        </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ["item"],
    methods: {
    ...mapActions(['deleteProductFromCompare'])
  }

}
</script>

<style scoped>

.fa-xs {
    font-size: 0.7rem;
}

.card-img-top {
    max-width: 15rem;
}
    
.card-boxes {
  border: 1.5px solid #e3e3e3;
  margin-bottom: 10px;
  width: 257px;
  height: 69px;
  color: #0e153d;
}
.card-boxes-grey {
  margin-bottom: 10px;
  width: 257px;
  height: 69px;
  background-color: #f6f6f6;
  color: #0e153d;
}

.add-to-cart-btn {
  background-color: #20d3c2;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px 18px;
}
.add-to-cart-btn:hover {
  background-color: #0e153d;
  color: white;
  transition: 0.3s ease-in-out;
}

.price {
  color: #20d3c2;
}

.checkmark {
  font-size: 1.2em;
}

.remove-item {
  font-size: 1.1em;
}

.remove-btn {
  background-color: transparent;
  color: #aaaaaa;
  font-size: 1.5em;
  border: none;
}
.remove-btn:hover {
  color: red;
}

.custom-card {
  border: 1.5px solid #e3e3e3;
  border-radius: 6px;
  margin: 15px;
}

.rating {
  color: #20d3c2;
  bottom: 2em;
  right: 1.5em;
}
</style>