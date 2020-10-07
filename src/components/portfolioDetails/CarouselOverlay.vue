<template>
<div class="container-overlay">
<div class="overlay">
        <div class="text">
            <p class="mb-2">{{ portfolio.name }}</p>
            <small>{{ portfolio.tag }}</small>
        </div>
        <div class="plus-icon"><a :href="$router.resolve({name: 'PortfolioDetails', params: {id: id}}).href"><img src="@/images/Plus-Icon-Small.svg" alt=""></a></div>
    </div>
    <img class="img-box" :src="portfolio.images[0]" alt="">
</div>
</template>

<script>
    export default {
        props: ['portfolio', 'id'],
    }
</script>

<style scoped>

.plus-icon {
    position: absolute;
    font-size: 20px;
    bottom: 65%;
    left: 65%;
}

p {
    color: #20D3C2;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 75%;
  left: 7.5%;
}

.container-overlay {
  position: relative;
}
.container-overlay:hover .overlay {
  height: 100%;
  width: 100%;
}
.container-overlay:hover .card-p {
  visibility: hidden;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0e153def;
  overflow: hidden;
  width: 93%;
  height: 0;
  transition: .3s ease;
  border-radius: 6px;
}

.img-box {
    width: 100%;
    border-radius: 6px;
}

#new {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#arrivals {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

.carousel-indicators > li {
  border-radius: 40%;
  width: 10px;
  height: 10px;
  background-color: #20D3C2;
}

.carousel-indicators {
    margin-bottom: -40px;
}

#left-arrow, #right-arrow {
    background-color: white;
    border: 2px solid #20D3C2;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 8px;
    text-align: center;
}

#right-arrow {
    margin-left: -30px;
}

i:hover {
    background-color: #20D3C2!important;
    border: 2px solid #20D3C2;
    color: white!important;
}

/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 50px auto;
  padding: 0 50px;
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