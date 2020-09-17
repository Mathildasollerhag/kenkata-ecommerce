<template>
  <div v-if="product" class="container d-flex align-items-center">
    <DetailsCarousel :product="product" />
    <div class="details">
      <h3 class="theme-text mb-3">{{product.name}}</h3>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
      <hr />

      <!-- Price Row -->
      <div class="d-flex align-items-center">
        <h4 class="m-0 theme-text mr-3 my-1">{{product.price}} SEK</h4>
        <p class="m-0">
          <del class="text-muted mr-4">$220.00</del>
        </p>
        <img class="icon mb-1 mr-1" src="@/images/icons/InStock.png" alt />
        <p class="m-0">In Stock</p>
      </div>

      <!-- Options -->
      <div class="d-flex align-items-center mt-3 mb-4">
        <Quantity />

        <!-- Add To Cart -->
        <button class="btn btn-kenkata-blue font-weight-normal mx-4">
          <img src="@/images/icons/Cart.png" alt /> Add to cart
        </button>

        <!-- Colors/Compare/Wishlist -->
        <div class="d-flex options-img">
          <img src="@/images/icons/ColorCircle.png" />
          <span class="c-pointer" v-b-tooltip.hover title="Compare">
            <img class="mx-2" src="@/images/icons/CompareCircle.png" />
          </span>
          <span class="c-pointer" v-b-tooltip.hover title="Add To Wishlist">
            <img src="@/images/icons/HeartCircle.png" />
          </span>
        </div>
      </div>

      <!-- Category -->
      <p>
        Category:
        <span class="theme-text">Shoes</span>
      </p>

      <!-- Tags -->
      <p class="tags d-block my-4">
        Tags:
        <span class="ml-2">Fashion</span>
        <span class="mx-1">Shoes</span>
        <span>Sneakers</span>
      </p>

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
import Quantity from "./Quantity";
export default {
    props: ["product"],
    components: {
        DetailsCarousel,
        DetailsSocials,
        ProductReviews,
        Quantity
    }
};
</script>

<style scoped>
.details {
  padding-left: 12%;
}
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
button:hover img {
  filter: unset;
}

.tags span {
  border: 1px solid var(--gray-theme);
  padding: 0 5px;
}
</style>