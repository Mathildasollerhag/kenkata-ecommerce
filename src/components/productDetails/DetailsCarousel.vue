<template>
  <div id="detailsCarousel" class="position-relative col-lg-5 pl-0">
    <carousel :items="1" :dots="true" :nav="false">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">

    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  props: ["product"],
  components: { carousel },
  created() {
    console.log(this.product)
  }
}
</script>

<style>
#detailsCarousel img{
    background-color: var(--gray-theme);
    max-height: 425px;
    background-position: center;
    background-size: contain;
    margin: 1em 0;
    border-radius: 5px;
    background-repeat: no-repeat;
}
#detailsCarousel .owl-theme .owl-dots {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: -28%
}
#detailsCarousel .owl-theme .owl-dots .owl-dot {
    display: block;
}
.owl-theme .owl-dots .owl-dot:focus {
    outline: none;
    box-shadow: none;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:focus span {
    transition: zoom 0.3s ease;
    background: none !important;
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    transition: zoom 0.3s ease;
    background: none !important;
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot span {
    position: relative;
    width: 95px;
    height:95px;
    margin: 7px 12px;
    background: none;
    border-radius: 5px;
}


#detailsCarousel .owl-theme .owl-dots .owl-dot span::after,
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot span::after,
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot + .owl-dot span::after,
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot + .owl-dot + .owl-dot span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    z-index: -1;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot span::after {
    /* background-image: url('../../assets/images/products/shoes/shoe1.png'); */
    background-image: url('../../images/featuredProducts1.png');
}
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot span::after {
    /* background-image: url('../../assets/images/products/shoes/shoe2.png'); */
    background-image: url('../../images/featuredProducts1.png')
}
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot + .owl-dot span::after {
    /* background-image: url('../../assets/images/products/shoes/shoe3.png'); */
    background-image: url('../../images/featuredProducts1.png')
}
#detailsCarousel .owl-theme .owl-dots .owl-dot + .owl-dot + .owl-dot + .owl-dot span::after {
    /* background-image: url('../../assets/images/products/shoes/shoe4.png'); */
    background-image: url('../../images/featuredProducts1.png')
}



#detailsCarousel .owl-theme .owl-dots .owl-dot span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: var(--gray-theme); */
    background: #F6F6F6;
    z-index: -2;
    border-radius: 5px;
}
</style>