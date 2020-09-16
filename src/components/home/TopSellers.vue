<template>
    <div class="container text-center mt-5 mb-5 pt-5">
                <div class="d-flex justify-content-center">
                    <h1 id="top">TOP</h1>
                    <h1 id="sellers" class="pl-2">SELLERS</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3">Check out our weekly top sellers in all category</p>
            <div class="row justify-content-center pt-4">
                <div class="container-overlay">
                         <div class="overlay">
                            <div class="text-big d-flex">
                                <div class="text-white mt-auto">
                                    <p class="mb-1">New look men's coat</p>
                                    <small id="fashion" class="mb-1">Fashion</small>
                                    <p id="price1" class="mb-1 mt-2 small">$220.00</p>
                                    <h5 id="price2" class="mb-1">$190.00</h5>
                                </div>
                                <div class="mt-auto pb-2 pr-2">
                                        <div id="tooltip-div-big" class="flex-column">
                                            <div><button class="pb-2" content=
                                            '<div>
                                                <span>
                                                    <a href="#" style="color:#82D8C6;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                                                    <a href="#" style="color:#CA82D8;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                                                    <a href="#" style="color:#FE6C6C;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                                                    <a href="#" style="color:#333333;font-size:16px;" class=""><i class="fas fa-circle"></i></a>
                                                </span>
                                            </div>'  v-tippy="{ placement : 'left', interactive : true, arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Color-Circle-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to favorites" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Heart-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Compare" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Compare-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Take a closer look" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Search-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to cart" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Cart-Grey-Icon.svg" alt=""></button></div>
                                        </div>
                                    <img class="pl-3 rating-stars" src="@/images/Rating-Stars.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <img class="img-box" src="@/images/Mens-Denim.svg" alt="">
                        <div class="card-p-div mx-auto">
                            <p class="card-p mt-auto mr-auto mb-0">Men's denim shirts full</p>
                        </div>
                     </div>
                <div id="right-side-boxes" class="pl-2">
                    
                    <div class="pb-2 container-overlay">
                         <div class="overlay">
                            <div class="text d-flex">
                                <div class="text-white mt-auto">
                                    <p class="mb-1">New look men's coat</p>
                                    <small id="fashion" class="mb-1">Fashion</small>
                                    <p id="price1" class="mb-1 mt-2 small">$220.00</p>
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
                                            </div>'  v-tippy="{ placement : 'left', interactive : true, arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Color-Circle-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to favorites" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Heart-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Compare" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Compare-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Take a closer look" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Search-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to cart" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Cart-Grey-Icon.svg" alt=""></button></div>
                                        </div>
                                    <img class="pl-3 rating-stars" src="@/images/Rating-Stars.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <img class="img-box" src="@/images/Womens-Leather-Bag.svg" alt="">
                        <div class="card-p-div mx-auto">
                            <p class="card-p mt-auto mr-auto mb-0">Women's leather bag and shoe</p>
                        </div>
                     </div>

                    <div class="container-overlay">
                         <div class="overlay">
                            <div class="text d-flex">
                                <div class="text-white mt-auto">
                                    <p class="mb-1">New look men's coat</p>
                                    <small id="fashion" class="mb-1">Fashion</small>
                                    <p id="price1" class="mb-1 mt-2 small">$220.00</p>
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
                                            </div>'  v-tippy="{ placement : 'left', interactive : true, arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Color-Circle-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to favorites" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Heart-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Compare" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Compare-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Take a closer look" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Search-Grey-Icon.svg" alt=""></button></div>
                                            <div><button class="pb-2" content="Add to cart" v-tippy="{ placement : 'left', arrow : true, arrowType : 'round', theme : 'light' }"><img src="@/images/Cart-Grey-Icon.svg" alt=""></button></div>
                                        </div>
                                    <img class="pl-3 rating-stars" src="@/images/Rating-Stars.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <img class="img-box" src="@/images/Mens-Sneakers.svg" alt="">
                        <div class="card-p-div mx-auto">
                            <p class="card-p mt-auto mr-auto mb-0">New look men's sneakers</p>
                        </div>
                     </div>
                </div>
            </div>
    </div>
</template>

<script>

import "tippy.js/themes/light.css";

    export default {
        name: (
            'TopSellers'
        )
    }
</script>

<style scoped>

.rating-stars {
    position: absolute;
    left: 250%;
    top: 80%;
}

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
    bottom: 110%;
    left: 300%;
    border-radius: 40px;
    padding: 15px 5px!important;
    background-color: #FFFFFF;
    color: yellow;
}

.text {
  position: absolute;
  top: 65%;
  left: 3%;
  text-align: left;
}

.container-overlay {
  position: relative;
}
.container-overlay:hover .overlay {
  height: 100%;
  width: 100%;
}
.container-overlay:hover .card-p {
  background-color: lightgrey;
  color: lightgrey;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  background-color: #0e153def;
  overflow: hidden;
  width: 100%;
  transition: .3s ease;
  border-radius: 6px;
}

#tooltip-div-big {
    position: absolute;
    bottom: 420%;
    left: 300%;
    border-radius: 40px;
    padding: 15px 5px!important;
    background-color: #FFFFFF;
    color: yellow;
}

.text-big {
  position: absolute;
  top: 82%;
  left: 3%;
  text-align: left;
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

#top {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#sellers {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

.clothes-img {
    width: 100%;
}

.img-box {
    width: 100%;
}

@media (max-width: 1200px) {

    #right-side-boxes {
        padding-left: 0!important;
    }

    .container-overlay {
        padding-bottom: 10px!important;
    }
}

@media (max-width: 576px) { 
    
    .img-box {
        width: 85%;
    }

    .card-p-div {
        width: 85%;
    }
}

</style>