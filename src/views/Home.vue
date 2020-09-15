<template>
  <div class="home">
    <InfoCards />
    <ShopByCategory />
    <DiscountBanner />
    <FlashBanner />
  </div>
</template>

<script>
import InfoCards from '../components/home/InfoCards';
import ShopByCategory from '../components/home/ShopByCategory';
import DiscountBanner from '../components/home/DiscountBanner';
import FlashBanner from '../components/home/FlashBanner';

export default {
  name: 'Home',
  components: {
    InfoCards,
    ShopByCategory,
    DiscountBanner,
    FlashBanner
  }
}
</script>
