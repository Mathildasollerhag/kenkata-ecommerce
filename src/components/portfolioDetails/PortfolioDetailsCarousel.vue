<template>
  <div v-if="portfolioCatalog.length > 0" class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 d-none d-sm-block">
        <div class="text-center mt-5 mb-5 pt-5">
          <div class="d-flex justify-content-center">
            <h2 id="related">RELATED</h2>
            <h2 id="projects" class="pl-2">PROJECTS</h2>
          </div>
          <img src="@/images/ZigZag.svg" alt />
        </div>
        
            <carousel :margin="3" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:3,nav:false,dots:true}}">
              <CarouselOverlay v-for="item in portfolioCatalog" :key="item.id" :portfolio="item.portfolio" :id="item.id"/>
              <template slot="prev"><span class="d-none d-xl-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
              <template slot="next"><span class="d-none d-xl-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
            </carousel>

          </div>
        </div>
      </div>
</template>

<script>
import CarouselOverlay from "@/components/portfolioDetails/CarouselOverlay.vue";
import { mapGetters } from 'vuex'
import carousel from 'vue-owl-carousel'


export default {
  components: {
    CarouselOverlay,
    carousel
  },
  created() {
    this.$store.dispatch("getPortfolio")
    },

    computed: {
    ...mapGetters(['portfolioCatalog'])
    },
};
</script>

<style scoped>

.owl-prev, .owl-next {
  position: absolute;
  border: 2px solid #E3E3E3;
  background-color: white;
  height: 58px;
  width: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.owl-prev {  
  left: -5%;
  bottom: 30%;
}
.owl-next {
  right: -5%;
  bottom: 30%;
}

.owl-next i, .owl-prev i {
  font-size: 2rem ;
  font-weight: 200 !important;
  color: #E3E3E3 !important;
}
.owl-next:hover, .owl-prev:hover {
  background-color: #20D3C2;
  border-color: transparent;
  cursor: pointer;
}

.owl-next i{
    margin-left: 4px;
}
.owl-prev i {
    margin-right: 5px;
}

#related {
  font-family: "Play", sans-serif;
  font-weight: bold;
  color: #0e153d;
}

#projects {
  font-family: "Play", sans-serif;
  font-weight: bold;
  color: #20d3c2;
}
</style>