<template>
  <div>
    <CompareBanner/>
    <CompareCards/>
  </div>
</template>

<script>
// @ is an alias to /src
import CompareBanner from '@/components/compare/CompareBanner.vue'
import CompareCards from '@/components/compare/CompareCards.vue'

export default {
  components: {
      CompareBanner,
      CompareCards,
  }
}
</script>

<style scoped>

</style>