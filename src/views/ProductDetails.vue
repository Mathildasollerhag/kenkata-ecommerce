<template>
  <div v-if="product">
    <div id="productDetails">
      <!-- Top Row -->
      <div class="mb-custom">
        <ProductTopRow :product="product" />
      </div>

      <!-- Product Details -->
      <Details :product="product" :id="id"/>
      


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
            >Reviews ({{product.reviews.length}})</a>
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
            >About {{product.brand}}</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade mt-2" id="desc" role="tabpanel" aria-labelledby="desc-tab">{{product.description}}</div>
          <div
            class="tab-pane fade mt-2"
            id="additional"
            role="tabpanel"
            aria-labelledby="additional-tab"
          >{{product.shortDescription}}</div>
          <div
            class="tab-pane fade show active"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <ProductReviews :product="product" :id="id" />
          </div>
          <div
            class="tab-pane fade mt-2"
            id="aboutbrand"
            role="tabpanel"
            aria-labelledby="aboutbrand-tab"
          >{{product.brand}} focus on high quality products. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam.</div>
        </div>
      </div>

      <!-- Features Row -->
      <div class="mb-custom">
        <InfoCards />
      </div>

      <!-- You May Also Like -->
      <div class="mb-custom">
        <YouMayAlsoLike :gender="product.gender"/>
      </div>


      <!-- Related Products -->
      <div class="mb-custom">
        <RelatedProducts :category="product.category"/>
      </div>

      <SubscribeBanner />

    </div>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductTopRow from "@/components/productDetails/ProductTopRow";
import Details from "@/components/productDetails/Details"
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
    Details,
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
    // console.log(this.product)
  },
  computed: {
    ...mapGetters(["product"])
  }
};
</script>

<style scoped>

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