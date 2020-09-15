<template>
  <div class="home">

    <featuredProducts/>
    <InfoCards />
    <ShopByCategory />
    <DiscountBanner />
    <FlashBanner />

  </div>
</template>

<script>

import featuredProducts from '../components/global/featuredProducts';
import InfoCards from '../components/home/InfoCards';
import ShopByCategory from '../components/home/ShopByCategory';
import DiscountBanner from '../components/home/DiscountBanner';
import FlashBanner from '../components/home/FlashBanner';


export default {
  name: 'Home',
  components: {

    featuredProducts,
    InfoCards,
    ShopByCategory,
    DiscountBanner,
    FlashBanner

  }
}
</script>
