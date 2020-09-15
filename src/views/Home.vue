<template>
  <div>
    
    <LatestBlog/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestBlog from '@/components/home/LatestBlog.vue'
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'

export default {
  name: 'Home',
  components: {
    LatestBlog,
    SubscribeBanner,
  }
}
</script>
