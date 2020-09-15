<template>
  <div>
    
    <ReviewCarousel/>
    <LatestBlog/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewCarousel from '@/components/home/ReviewCarousel.vue'
import LatestBlog from '@/components/home/LatestBlog.vue'
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'

export default {
  name: 'Home',
  components: {
    ReviewCarousel,
    LatestBlog,
    SubscribeBanner,
  }
}
</script>
