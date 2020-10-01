<template>
  <div>
    <NewCustomerBanner/>
    <ShopSettingsBanner/>
    <ProductFilters :category="category" :gender="gender"/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'
import NewCustomerBanner from '@/components/shop/NewCustomerBanner.vue'
import ProductFilters from '@/components/shop/ProductFilters.vue'
import ShopSettingsBanner from '@/components/shop/ShopSettingsBanner.vue'

export default {
  components: {
    SubscribeBanner,
    NewCustomerBanner,
    ProductFilters,
    ShopSettingsBanner,
  },
  props: ["category", "gender"]
}
</script>

<style scoped>

</style>