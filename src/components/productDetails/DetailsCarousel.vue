<template>
  <div id="detailsCarousel" class="position-relative col-xl-5 pl-0">
    <carousel :items="1" :dots="true" :nav="false">
        <img :src="product.images[0]" alt="">
        <img :src="product.images[1]" alt="">
        <img :src="product.images[2]" alt="">
        <img :src="product.images[3]" alt="">
    </carousel>

    <div @click="click" id="enlarge" class="position-absolute c-pointer">
        <div data-toggle="modal" data-target="#enlargeModal" id="tooltip-view" class="p-0" variant="transparent">
            <img src="@/images/icons/Enlarge.png" alt="">
        </div>
    </div>
    <Enlarge :image="this.currentImage" />
  </div>
</template>

<script>
import Enlarge from './Enlarge.vue'
import carousel from 'vue-owl-carousel'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            currentImage: ''
        }
    },
  props: ["product", "id"],
  components: { carousel, Enlarge }, 
  created() {
    this.carouselImages()
  },
  updated() {
    this.carouselImages()
  },
  methods: {
    carouselImages() {
        if (this.product) {
            $('#detailsCarousel .owl-theme .owl-dots .owl-dot span').css('background-image', 'url("' + this.product.images[0] + '")')
            $('#detailsCarousel .owl-theme .owl-dots .owl-dot ~ .owl-dot span').css('background-image', 'url("' + this.product.images[1] + '")')
            $('#detailsCarousel .owl-theme .owl-dots .owl-dot ~ .owl-dot ~ .owl-dot span').css('background-image', 'url("' + this.product.images[2] + '")')
            $('#detailsCarousel .owl-theme .owl-dots .owl-dot ~ .owl-dot ~ .owl-dot ~ .owl-dot span').css('background-image', 'url("' + this.product.images[3] + '")') 
        }       
    },
    click() {        
        this.currentImage=$('#detailsCarousel .owl-item.active')[0].children[0].currentSrc
    },
    ...mapActions(["getProductById"])
  }
}
</script>

<style>

#enlarge{
    z-index: 10;
    bottom: 1.8em;
    left: 1em;    
}
#detailsCarousel .owl-item img{
    max-height: 425px;
    max-width: 425px;
    background-position: center;
    background-size: contain;
    margin: 1em 0;
    border-radius: 5px;
    background-repeat: no-repeat;
    position: relative;
    background-color: #f5f5f5;
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
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot.active span, #detailsCarousel .owl-theme .owl-dots .owl-dot:hover span {
    transition: zoom 0.3s ease;
    border: 1px solid var(--theme);
    outline: none;
    box-shadow: none;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot span {
    background: #f5f5f5;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot.active span, #detailsCarousel .owl-theme .owl-dots .owl-dot:hover span {
    background-color: #f5f5f5 !important;
}
#detailsCarousel .owl-theme .owl-dots .owl-dot span {
    position: relative;
    height:95px;
    width:95px;
    margin: 7px 12px;
    border-radius: 5px;
    background-size: contain;
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

/* Quickview */
 #quickView #detailsCarousel .owl-theme .owl-dots {
    flex-direction: row;
    top: unset;
    bottom: -17%;
    left: -1%;
}

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