<template>
  <div id="detailsCarousel" class="position-relative col-xl-5 pl-0">
    <carousel :items="1" :dots="true" :nav="false">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">
        <img :src="product.image" alt="">
    </carousel>

    <div id="enlarge" class="position-absolute c-pointer">
        <img src="@/images/icons/Enlarge.png" alt="">
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapGetters } from 'vuex'
export default {
  props: ["product"],
  components: { carousel },
}
</script>

<style>
#enlarge{
    z-index: 10;
    bottom: 1em;
    left: 1em;    
}
#detailsCarousel img{
    max-height: 425px;
    max-width: 425px;
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
    left: 27em
}

#detailsCarousel .owl-theme .owl-dots .owl-dot {
    display: block;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot:focus {
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot.active span, #detailsCarousel .owl-theme .owl-dots .owl-dot:focus span {
    transition: zoom 0.3s ease;

    background: none !important;
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot.active span, #detailsCarousel .owl-theme .owl-dots .owl-dot:hover span {
    transition: zoom 0.3s ease;
    background: none !important;
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot span {
    position: relative;
    height:95px;
    width:95px;
    margin: 7px 12px;
    background: none;
    border-radius: 5px;
}

@media (min-width: 1200px) {
    #detailsCarousel .owl-theme .owl-dots .owl-dot span {
        width: 95px;
        height:95px;
    }
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


/* Quickview */
#quickView #detailsCarousel .owl-theme .owl-dots {
    flex-direction: row;
    top: unset;
    bottom: -17%;
    left: -1%;
}
#quickView #detailsCarousel img {
    /* margin-left: auto; */
}
/* #quickView #detailsCarousel  {
    margin-top: -10em;
} */
#quickView #detailsCarousel .owl-theme .owl-dots .owl-dot span {
    width: 70px;
    height: 70px;
    margin: 0 5px;
}
@media (min-width: 1200px) {
    #quickView #detailsCarousel  {
    margin-top: -3.5em;
}
}
</style>