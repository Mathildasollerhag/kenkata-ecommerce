<template>
  <div class="d-lg-flex py-4">
      <div class="col-12 col-lg-6">
        <h6 class="font-weight-normal"><span class="theme-text mr-1">2 reviews for</span>{{product.name}}</h6>
          <ReviewCard v-for="review in product.reviews" :key="review.id" :review="review"/>
      </div>
      <div class="col-12 col-lg-6">
          <ReviewForm :id="id" />
      </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
export default {
  props: ["product", "id"],
  components: {
      ReviewCard, ReviewForm
  }
}
</script>

<style>

</style>