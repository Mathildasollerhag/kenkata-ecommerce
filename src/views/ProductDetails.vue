<template>
  <div v-if="product">
    <div id="productDetails">
      <!-- Top Row -->
      <div class="mb-custom">
        <ProductTopRow :product="product" />
      </div>

      <!-- Product Details -->
      <div class="container d-flex align-items-center">
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
            <img class="icon mb-1 mr-1" src="@/images/icons/InStock.png" alt="">
            <p class="m-0">In Stock</p>
          </div>

          <!-- Options -->
          <div class="d-flex align-items-center mt-3 mb-4">
            <Quantity />

            <!-- Add To Cart -->
            <button class="btn btn-kenkata-blue font-weight-normal mx-4">
              <img src="@/images/icons/Cart.png" alt=""> Add to cart
            </button>

            <!-- Colors/Compare/Wishlist -->
            <div class="d-flex options-img">
              <img src="@/images/icons/ColorCircle.png">
              <span class="c-pointer" v-b-tooltip.hover title="Compare">
              <img class="mx-2" src="@/images/icons/CompareCircle.png">
              </span>
              <span class="c-pointer" v-b-tooltip.hover title="Add To Wishlist">
                <img src="@/images/icons/HeartCircle.png">
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

      <!-- Details Nav -->
      <div class="container mb-custom mt-5">
        <ul class="details-nav nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link ml-0"
              id="desc-tab"
              data-toggle="tab"
              href="#desc"
              role="tab"
              aria-controls="desc"
              aria-selected="true"
            >Description</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="additional-tab"
              data-toggle="tab"
              href="#additional"
              role="tab"
              aria-controls="additional"
              aria-selected="false"
            >Additional Information</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="reviews-tab"
              data-toggle="tab"
              href="#reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >Reviews</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="aboutbrand-tab"
              data-toggle="tab"
              href="#aboutbrand"
              role="tab"
              aria-controls="aboutbrand"
              aria-selected="false"
            >About Brand</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade" id="desc" role="tabpanel" aria-labelledby="desc-tab">desc</div>
          <div
            class="tab-pane fade"
            id="additional"
            role="tabpanel"
            aria-labelledby="additional-tab"
          >additional</div>
          <div
            class="tab-pane fade show active"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <ProductReviews />
          </div>
          <div
            class="tab-pane fade"
            id="aboutbrand"
            role="tabpanel"
            aria-labelledby="aboutbrand-tab"
          >about brand</div>
        </div>
      </div>

      <!-- Features Row -->
      <div class="mb-custom">
        <InfoCards />
      </div>

      <!-- You May Also Like -->
      <div class="mb-custom">
        <YouMayAlsoLike />
      </div>


      <!-- Related Products -->
      <div class="mb-custom">
        <RelatedProducts />
      </div>

      <SubscribeBanner />

    </div>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductTopRow from "@/components/productDetails/ProductTopRow";
import DetailsCarousel from "@/components/productDetails/DetailsCarousel";
import DetailsSocials from "@/components/productDetails/DetailsSocials";
import ProductReviews from "@/components/productDetails/ProductReviews";
import Quantity from "@/components/productDetails/Quantity";
import InfoCards from "@/components/home/InfoCards";
import YouMayAlsoLike from "@/components/productDetails/YouMayAlsoLike"
import RelatedProducts from "@/components/productDetails/RelatedProducts"
import SubscribeBanner from "@/components/home/SubscribeBanner"
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductDetails",
  props: ["id"],
  components: {
    ProductTopRow,
    DetailsCarousel,
    DetailsSocials,
    ProductReviews,
    Quantity,
    InfoCards,
    YouMayAlsoLike,
    RelatedProducts,
    SubscribeBanner
  },
  methods: {
    ...mapActions(["getProductById"]),
  },
  created() {
    this.getProductById(this.id)
  },
  computed: {
    ...mapGetters(["product"]),
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

.details-nav .nav-link {
  margin: 0 2px;
  color: white;
  background-color: var(--blue-theme);
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  font-size: 0.9rem;
  padding: 0.5rem 1.3rem;
}
.nav-tabs {
  border-bottom: 2px solid var(--theme);
  padding-bottom: 0 !important;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  background-color: var(--theme);
  border-color: var(--theme);
}
.nav-tabs .nav-link:hover {
  background-color: var(--theme) !important;
  border-color: var(--theme);
}


</style>

<style>
/* Info Cards on Product Details */
#productDetails #card-hover {
  background-color: white !important;
  padding: 0;
}
#productDetails #card-hover:hover {
  background-color: var(--theme) !important;
}
#productDetails #infoCards {
  background: var(--blue-theme);
  margin: 0 !important;
  padding: 6em 4em !important;
}
</style>