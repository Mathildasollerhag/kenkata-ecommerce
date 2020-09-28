<template>
<div class="container-overlay">
<div class="overlay">
    <div class="text d-flex">
        <div class="text-white mt-auto">
            <p class="mb-1">New look men's coat</p>
            <small id="fashion" class="mb-1">Fashion</small>
            <p id="price1" class="mb-1 mt-2">$220.00</p>
            <h5 id="price2" class="mb-1">$190.00</h5>
        </div>
        <div class="mt-auto pb-2 pr-2">
                <div id="tooltip-div" class="flex-column">
                    <div><button class="pb-2" content=
                    '<div>
                        <span>
                            <a href="#" style="color:#82D8C6;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                            <a href="#" style="color:#CA82D8;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                            <a href="#" style="color:#FE6C6C;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                            <a href="#" style="color:#333333;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                        </span>
                    </div>' v-tippy="{ placement : 'left', interactive : true, arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Color-Circle-Icon.svg" alt=""></button></div>
                    <div><button class="pb-2" content="Add to favorites" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Heart-Grey-Icon.svg" alt=""></button></div>
                    <div><button class="pb-2" content="Compare" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Compare-Grey-Icon.svg" alt=""></button></div>
                    <div><button class="pb-2" content="Take a closer look" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Search-Grey-Icon.svg" alt=""></button></div>
                    <div><button class="pb-2" content="Add to cart" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Cart-Grey-Icon.svg" alt=""></button></div>
                </div>
            <img class="pl-3" src="@/images/Rating-Stars.svg" alt="">
        </div>
    </div>
</div>
    <img class="img-box" src="@/images/Womens-Dress.svg" alt="">
    <p class="card-p mt-auto mr-auto mb-0">Blue silk flare sleeved top</p>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#price1 {
     text-decoration: line-through;
}
#price2 {
    color: #20D3C2;
    font-weight: 600;
    letter-spacing: 0.5px;
}

#fashion {
    border: 1.5px solid white;
    padding: 1px 6px;
}

#color-circle {
    color: #FE6C6C;
    font-size: 20px;
}

button {
    background-color: transparent!important;
    border: none;
}

#tooltip-div {
    position: absolute;
    bottom: 84%;
    left: 75%;
    border-radius: 40px;
    padding: 15px 5px!important;
    background-color: #FFFFFF;
    color: yellow;
}

.text {
  position: absolute;
  top: 54%;
  left: 6%;
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
}

.card-p {
    background-color: #0e153d;
    width: 100%;
    color: white;
    padding: 7px;
    padding-left: 18px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    text-align: left;
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