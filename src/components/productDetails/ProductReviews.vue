<template>
  <div class="d-flex py-4">
      <div>
        <h6 class="font-weight-normal"><span class="theme-text mr-1">2 reviews for</span>Gents Blue Lightweight Trainers</h6>
        <ReviewCard name="John Doe" date="24 July, 2020" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim." />
        <ReviewCard name="Willium Cary" date="16 June, 2020" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." />
      </div>
      <div class="col-lg-6">
          <ReviewForm />
      </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
export default {
    components: {
        ReviewCard, ReviewForm
    }
}
</script>

<style>

</style>