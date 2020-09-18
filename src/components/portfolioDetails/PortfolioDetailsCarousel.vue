<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 d-none d-sm-block">
        <div class="text-center mt-5 mb-5 pt-5">
          <div class="d-flex justify-content-center">
            <h2 id="related">RELATED</h2>
            <h2 id="projects" class="pl-2">PROJECTS</h2>
          </div>
          <img src="@/images/ZigZag.svg" alt />
        </div>

        <div class="col-center m-auto">
          <div id="myCarousel2" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel2" data-slide-to="1"></li>
              <li data-target="#myCarousel2" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="d-flex">
                  <div class="pr-1 container-overlay">
                    <CarouselOverlay />
                  </div>
                  <div class="pr-1 container-overlay">
                    <CarouselOverlay />
                  </div>
                  <div class="container-overlay">
                    <CarouselOverlay />
                  </div>
                </div>
              </div>
              
              <div class="item carousel-item">
                <div class="d-flex">
                  <div class="pr-1 container-overlay">
                    <CarouselOverlay />
                  </div>
                  <div class="pr-1 container-overlay">
                    <CarouselOverlay />
                  </div>
                  <div class="container-overlay">
                    <CarouselOverlay />
                  </div>
                </div>
              </div>
            </div>

            <!-- Carousel controls -->
            <a class="carousel-control left carousel-control-prev" href="#myCarousel2" data-slide="prev">
              <i id="left-arrow" class="fas fa-2x fa-chevron-left"></i>
            </a>
            <a class="carousel-control right carousel-control-next" href="#myCarousel2" data-slide="next">
              <i id="right-arrow" class="fas fa-2x fa-chevron-right"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselOverlay from "@/components/portfolioDetails/CarouselOverlay.vue";


export default {
  name: "NewArrivals",
  components: {
    CarouselOverlay,
  },
};
</script>

<style scoped>

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

.carousel-indicators > li {
  border-radius: 40%;
  width: 10px;
  height: 10px;
  background-color: #20d3c2;
}

.carousel-indicators {
  margin-bottom: -40px;
}

#left-arrow,
#right-arrow {
  background-color: white;
  border: 2px solid #20d3c2;
  color: #20d3c2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding-top: 8px;
  text-align: center;
}

#right-arrow {
  margin-left: 90px;
}
#left-arrow {
  margin-right: 90px;
}

i:hover {
  background-color: #20d3c2 !important;
  border: 2px solid #20d3c2;
  color: white !important;
  transition: 0.2s ease-in-out;
}

/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin-bottom: 50px;
}

.carousel .carousel-control {
  width: 0px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  opacity: 100;
}
.carousel-control i {
  font-size: 25px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
}
</style>