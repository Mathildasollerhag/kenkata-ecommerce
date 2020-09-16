<template>

<div class="d-flex justify-content-center">
    
    <div class="mt-auto d-none d-xl-block"><div class="container text-center mt-auto">
      <div class="card-boxes-grey d-flex"><h4 class="mx-auto my-auto">AVAILABILITY</h4></div>
      <div class="card-boxes-grey d-flex"><h4 class="mx-auto my-auto">BRAND</h4></div>
      <div class="card-boxes-grey d-flex"><h4 class="mx-auto my-auto">COLOR</h4></div>
  </div>
</div>
    
    <div class="card-deck mt-5 pt-4">

    <div class="">

    <div class="custom-card">
    <div class="p-2 d-flex"><button class="remove-btn"><i class="fas fa-times px-2"></i></button><div class="my-auto remove-item">Remove item</div></div>
    <img class="card-img-top" src="@/images/Compare-Tshirt.svg" alt="Card image cap">
    <div class="card-body text-center">
      <p class="card-title">Circle pattern girls shirt</p>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <p class="mt-2 price">$190.00</p>
       <div class="pb-2">
          <button class="add-to-cart-btn"><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
      </div>
    </div>
  </div>

  <div class="container text-center">
      <div class="card-boxes d-flex"><p class="mx-auto my-auto"><i class="checkmark pr-2 fas fa-check"></i> In Stock</p></div>
      <div class="card-boxes d-flex"><img class="mx-auto my-auto" src="@/images/Bexim.svg" alt="Card image cap"></div>
      <div class="card-boxes d-flex"><p class="mx-auto my-auto">Brown, Black, White</p></div>
  </div>

</div>
  
<!-- CARD 2 START -->

  <div class="">

    <div class="custom-card">
    <div class="p-2 d-flex"><button class="remove-btn"><i class="fas fa-times px-2"></i></button><div class="my-auto remove-item">Remove item</div></div>
    <img class="card-img-top" src="@/images/Compare-Tshirt.svg" alt="Card image cap">
    <div class="card-body text-center">
      <p class="card-title">Circle pattern girls shirt</p>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <p class="mt-2 price">$190.00</p>
       <div class="pb-2">
          <button class="add-to-cart-btn"><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
      </div>
    </div>
  </div>

  <div class="container text-center">
      <div class="card-boxes d-flex"><p class="mx-auto my-auto"><i class="checkmark pr-2 fas fa-check"></i> In Stock</p></div>
      <div class="card-boxes d-flex"><img class="mx-auto my-auto" src="@/images/Lighton.svg" alt="Card image cap"></div>
      <div class="card-boxes d-flex"><p class="mx-auto my-auto">-</p></div>
  </div>

</div>

<!-- CARD 3 START -->

  <div class="">

    <div class="custom-card">
    <div class="p-2 d-flex"><button class="remove-btn"><i class="fas fa-times px-2"></i></button><div class="my-auto remove-item">Remove item</div></div>
    <img class="card-img-top" src="@/images/Compare-Tshirt.svg" alt="Card image cap">
    <div class="card-body text-center">
      <p class="card-title">Circle pattern girls shirt</p>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <p class="mt-2 price">$190.00</p>
       <div class="pb-2">
          <button class="add-to-cart-btn"><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
      </div>
    </div>
  </div>

  <div class="container text-center">
      <div class="card-boxes d-flex"><p class="mx-auto my-auto"><i class="checkmark pr-2 fas fa-check"></i> In Stock</p></div>
      <div class="card-boxes d-flex"><img class="mx-auto my-auto" src="@/images/Rosimo.svg" alt="Card image cap"></div>
      <div class="card-boxes d-flex"><p class="mx-auto my-auto">Red, Blue, Gray</p></div>
  </div>
    
</div>

<!-- CARD 1 START -->



</div>
</div>

</template>

<script>

import CompareSidebar from '@/components/compare/CompareSidebar.vue'

    export default {
        components: {
            CompareSidebar,
        }
    }
</script>

<style scoped>

.card-boxes {
    border: 1.5px solid #E3E3E3;
    margin-bottom: 10px;
    width: 257px;
    height: 69px;
    color: #0E153D;
}
.card-boxes-grey {
    margin-bottom: 10px;
    width: 257px;
    height: 69px;
    background-color: #F6F6F6;
    color: #0E153D;
}

.add-to-cart-btn {
    background-color: #20D3C2;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 7px 18px;
}
.add-to-cart-btn:hover {
    background-color: #0E153D;
    color: white;
    transition: .3s ease-in-out;
}

.price {
    color: #20D3C2;
}

.checkmark {
    font-size: 1.2em;
}

.remove-item {
    font-size: 1.1em;
}

.remove-btn {
    background-color: transparent;
    color: #AAAAAA;
    font-size: 1.5em;
    border: none;
}
.remove-btn:hover {
    color: red;
}

.custom-card {
    border: 1.5px solid #E3E3E3;
    border-radius: 6px;
    margin: 15px;
}

.rating {
    color: #20D3C2;
    bottom: 2em;
    right: 1.5em;
}

</style>