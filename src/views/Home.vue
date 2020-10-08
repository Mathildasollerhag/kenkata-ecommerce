<template>

  <div>
    <Shopping />
    <InfoCards />
    <ShopByCategory />

    <NewArrivals />
  
    <DiscountBanner />
    <FeaturedProducts/>
    <FlashBanner />
    <TopSellers/>
    <ReviewCarousel/>
    <LatestBlog/>
    <SubscribeBanner/>    
    



  
  </div>
</template>

<script>

// @ is an alias to /src
import TopSellers from '@/components/home/TopSellers.vue'
import ReviewCarousel from '@/components/home/ReviewCarousel.vue'
import LatestBlog from '@/components/home/LatestBlog.vue'
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'
import Shopping from '@/components/home/Shopping.vue'


import NewArrivals from '@/components/home/NewArrivals';
import FeaturedProducts from '../components/home/FeaturedProducts';
import InfoCards from '../components/home/InfoCards';
import ShopByCategory from '../components/home/ShopByCategory';
import DiscountBanner from '../components/home/DiscountBanner';
import FlashBanner from '../components/home/FlashBanner';


export default {
  name: 'Home',
  components: {

    TopSellers,
    ReviewCarousel,
    LatestBlog,
    SubscribeBanner,
    Shopping,


    NewArrivals,
    FeaturedProducts,
    InfoCards,
    ShopByCategory,
    DiscountBanner,
    FlashBanner

  },
  created() {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>

</style>
