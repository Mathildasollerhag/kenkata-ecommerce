<template>
  <div class="d-lg-flex py-4">
      <div class="col-12 col-lg-6">
        <h6 class="font-weight-normal"><span class="theme-text mr-1">{{product.reviews.length}} reviews for</span>{{product.name}}</h6>
        <div v-if="productReviews.length > 0">
          <ReviewCard v-for="review in productReviews" :key="review.id" :review="review"/>
        </div>

      </div>
      <div class="col-12 col-lg-6">
          <ReviewForm :id="id" />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
export default {
  props: ["product", "id"],
  components: {
      ReviewCard, ReviewForm
  },
  computed: {
    ...mapGetters(["productReviews"])
    // productReviews() {
    //   return this.product.reviews.reverse()
    // }
  }
}
</script>

<style>

</style>