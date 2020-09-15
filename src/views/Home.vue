<template>
  <div>
  
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'

export default {
  name: 'Home',
  components: {
    SubscribeBanner,
  }
}
</script>
