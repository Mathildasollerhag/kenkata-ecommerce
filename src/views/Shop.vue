<template>
  <div>
    <NewCustomerBanner/>
    <ShopSettingsBanner/>
    <ProductFilters :category="category" :gender="gender" :mainCategory="mainCategory"/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'
import NewCustomerBanner from '@/components/shop/NewCustomerBanner.vue'

import ShopSettingsBanner from '@/components/shop/ShopSettingsBanner.vue'

export default {
  components: {
    SubscribeBanner,
    NewCustomerBanner,
   
    ShopSettingsBanner,
  },
  props: ["category", "gender", "mainCategory"]
}
</script>

<style scoped>

</style>