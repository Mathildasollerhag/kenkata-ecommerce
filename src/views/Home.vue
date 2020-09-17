<template>

  <div>
    <Shopping />
    <TopSellers/>
    <ReviewCarousel/>
    <LatestBlog/>
    <SubscribeBanner/>

    <div class="home">

    <!-- New Arrivals -->
    <div class="my-5 container">
            <div class="text-center">
              <div class="d-flex justify-content-center text-uppercase">
               <h2 class="text-kenkata-darkblue font-weight-bold">New</h2>
               <h2 class="text-kenkata-blue font-weight-bold ml-2">Arrivals</h2>
             </div>
          <p class="my-3">Check out our latest products from top fashion designers</p>
        </div>
      <NewArrivals />
    </div>
</div>

    <featuredProducts/>
    <InfoCards />
    <ShopByCategory />
    <DiscountBanner />
    <FlashBanner />



  
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
import featuredProducts from '../components/global/featuredProducts';
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
    featuredProducts,
    InfoCards,
    ShopByCategory,
    DiscountBanner,
    FlashBanner

  }
}
</script>

<style scoped>

</style>
