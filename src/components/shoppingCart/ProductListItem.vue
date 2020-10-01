<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center col-lg-7 pl-0">
        <span v-on:click="deleteProductFromCart(item.id)" class="delete d-flex align-items-center justify-content-center c-pointer">
            <i class="fas fa-times font-weight-light p-0 m-0"></i>
        </span>
        <div class="d-none d-lg-block">
          <span class="img-box d-flex justify-content-center align-items-center ml-3 mr-2">
              <img class="img-fluid" :src="item.product.images[0]" alt="">
          </span>
        </div>
        <p class="ml-3 ml-lg-0">{{item.product.name}}</p>                
    </div>

    <div class="d-flex align-items-center col-lg-5">
        <p>${{item.product.price}}.00</p>
        <Quantity :item="item" class="ml-4 mr-4"/>
        <p class="d-none d-xl-block theme-text font-weight-bold">${{item.product.price * item.quantity}}.00</p>
    </div>          
  </li>
</template>

<script>
import Quantity from '@/components/productDetails/Quantity'
import { mapActions } from 'vuex'
export default {
  components: {
    Quantity
  },
  props: ["item"],
  methods: {
    ...mapActions(['deleteProductFromCart'])
  }
}
</script>

<style scoped>
p {
  margin: 0;
}
.delete {
    background: var(--gray-theme);
    border-radius: 50%;
    height: 25px;
    width: 25px;
    min-width: 25px;
}
i {
    font-size: 1.2rem;
    color: white;  
    vertical-align: middle !important;   
}
.img-box {
    height: 60px !important;
    width: 60px !important;
    background: #e3e3e3;
    border-radius: 5px;
}
.quantity-container {
    transform: scale(0.85);
}
</style>