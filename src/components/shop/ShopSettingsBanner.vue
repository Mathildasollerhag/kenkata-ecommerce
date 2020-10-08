<template>
<div>
     <div id="banner-bg">
        <div class="container py-4">
            <div class="flex-row d-lg-flex justify-content-between">
                <div>
                    <h3 id="shop-h3">Shop</h3>
                    <div class="d-flex">
                        <a href="/"><router-link class="text-dark" to="/">Home</router-link></a>
                        <p class="px-2">/</p>
                        <a class="pl-1" href="/shop"><router-link id="shop-p" to="/shop">Shop</router-link></a>
                    </div>
                </div>

                <div class="flex-row d-none d-md-flex">
                    <div class="settings-bg text-white my-auto pl-4 pr-4 pt-3 pb-3 mr-4">
                        <span>Show: </span>
                        <a href="#">9 / </a>
                        <a href="#">12 / </a>
                        <a href="#">18 / </a>
                        <a href="#">24</a>
                    </div>

                    <div class="settings-bg text-white my-auto mr-4">
                        <a v-on:click.stop="toggleVIfVisible"><i class="grid-icons fas fa-2x fa-list pl-4"></i></a>
                        <a v-on:click.prevent="toggleVShowVisible" href="#"  ><i class="grid-icons fas fa-2x fa-th-large"></i></a>
                        <a v-on:click.prevent="toggleGridVisible" href="#"  ><i class="grid-icons fas fa-2x fa-th pr-4"></i></a>
                    </div>
                     

                    <div class="dropdown show settings-bg my-auto pl-4 pr-4 pt-3 pb-3">
                        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Default sorting <i class="pl-5 fas fa-chevron-down"></i>
                        </a>
                        <div  class="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#" @click.prevent="getProductsByGender('men')">Men's</a>
                            <a class="dropdown-item text-dark" href="#" @click.prevent="getProductsByGender('women')">Women's</a>
                            <a class="dropdown-item text-dark" href="#" @click.prevent="getProductsByCategory('kids')">Kids</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
     

  <div class="container mt-5 mb-5 pb-5">

      <div class="flex-row d-md-flex">
        <aside class="pr-2">

        <div class="card">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2">Product Categories</p>
            <div class="filter-content">
<!-- 
           <div class="dropdown d-lg-none mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  Product Categories
                </button>
                <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                  <a href="#" class="dropdown-item" >
                  Men's
                  <span class="float-right badge badge-light round">18</span>
                </a>
                <a href="#" class="dropdown-item" >
                  Women's
                  <span class="float-right badge badge-light round">23</span>
                </a>
                <a href="#" class="dropdown-item">
                  Kids
                  <span class="float-right badge badge-light round">32</span>
                </a>
                <a href="#" class="dropdown-item" >
                  Hats
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="dropdown-item" >
                  Sunglasses
                  <span class="float-right badge badge-light round">15</span>
                </a>
                <a href="#" class="dropdown-item">
                  Shoes
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="dropdown-item" >
                  Watches
                  <span class="float-right badge badge-light round">20</span>
                </a>
                </div>
              </div> -->
<CategoryFilters/>
<priceFilter />
                         
            </div> 
          </article>
   <!--      <section class="mb-4 d-none d-lg-block">

            <p class="list-title mt-4">Filter by Price</p>

            <div class=" align-items-center my-4">
                <div class="form-group">
                    <input type="range" class="form-control-range">
                </div>
                <div class="d-flex justify-content-between">
                    <p class="my-auto">Price: $0 - $10,000</p>
                    <button id="filter-btn" class="btn">Filter</button>
                </div>
            </div>

            </section>
          <div class="dropdown d-lg-none">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Color
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <label class="customcheck dropdown-item">Black
                    <input type="checkbox">
                    <span id="checkmark-black" class="ml-2 checkmark"></span>
                    <span class="float-right badge badge-light round">12</span>
                </label>
                <label class="customcheck dropdown-item">Gray
                    <input type="checkbox">
                    <span id="checkmark-gray" class="ml-2 checkmark"></span>
                    <span class="float-right badge badge-light round">20</span>
                </label>
                <label class="customcheck dropdown-item">Red
                    <input type="checkbox">
                    <span id="checkmark-red" class="ml-2 checkmark"></span>
                    <span class="float-right badge badge-light round">18</span>
                </label>
                <label class="customcheck dropdown-item">Green
                    <input type="checkbox">
                     <span id="checkmark-green" class="ml-2 checkmark"></span>
                     <span class="float-right badge badge-light round">25</span>
                </label>
                <label class="customcheck dropdown-item">Orange
                    <input type="checkbox">
                     <span id="checkmark-orange" class="ml-2 checkmark"></span>
                     <span class="float-right badge badge-light round">9</span>
                </label>
                <label class="customcheck dropdown-item">Brown
                    <input type="checkbox">
                     <span id="checkmark-brown" class="ml-2 checkmark"></span>
                     <span class="float-right badge badge-light round">7</span>
                </label>
                </div>
              </div>-->

         <colorFilter />
          <!-- card-group-item.// -->
        </div>
      

          <!-- card-group-item.// -->

          
          <!-- card-group-item.// -->
       
        <!-- card.// -->
        <!--
            <div class="dropdown d-lg-none mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Size
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a href="#" class="dropdown-item">
                  XS
                  <span class="float-right badge badge-light round">18</span>
                </a>
                <a href="#" class="dropdown-item">
                  S
                  <span class="float-right badge badge-light round">23</span>
                </a>
                <a href="#" class="dropdown-item">
                  M
                  <span class="float-right badge badge-light round">32</span>
                </a>
                <a href="#" class="dropdown-item">
                  L
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="dropdown-item">
                  XL
                  <span class="float-right badge badge-light round">15</span>
                </a>
                <a href="#" class="dropdown-item">
                  XXL
                  <span class="float-right badge badge-light round">12</span>
                </a>
                </div>
              </div>
        -->
 <sizeFilter />

        <div class="dropdown d-lg-none mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Brand
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 
                          <div class="img-div">
                              <img src="@/images/Bexim.svg"  alt="" @click.stop="getProductsByBrand('Bexim')" >
                          </div>
                     
                        <a href="#" class="dropdown-item">
                            <div class="img-div">
                              <img src="@/images/Dismis.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="dropdown-item">
                          <div class="img-div">
                              <img src="@/images/Dallas.svg" alt="">
                          </div>
                      </a>
                      <a href="#" class="dropdown-item">
                          <div class="img-div">
                              <img src="@/images/Lighton.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="dropdown-item">
                          <div class="img-div">
                              <img src="@/images/Rosimo.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="dropdown-item">
                          <div class="img-div">
                              <img src="@/images/Concord.svg" alt="">
                          </div>
                        </a>
                </div>
              </div>

        <div class="card d-none d-lg-block">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2 mt-4">Filter by Brand</p>
            <div class="filter-content">
              <div class="list-group list-group-flush">
                  <div class="d-flex">
                      <div class="">
                
                          <div class="img-div mr-4">
                              <img src="@/images/Bexim.svg" alt="" @click.stop="getProductsByBrand('Bexim')">
                          </div>
                      
                        <a href="#" class="">
                            <div class="img-div">
                              <img src="@/images/Dismis.svg" alt="" @click.stop="getProductsByBrand('Enkalda')" >
                          </div>
                        </a>
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Dallas.svg" alt="" @click.stop="getProductsByBrand('Apparis')">
                          </div>
                      </a>
                  </div>
                  <div class="">
                    
                          <div class="img-div">
                              <img src="@/images/Lighton.svg" alt="" @click.stop="getProductsByBrand('Kenkata')" >
                          </div>
                       
                     
                          <div class="img-div">
                              <img src="@/images/Rosimo.svg" alt="" @click.stop="getProductsByBrand('Throne')">
                          </div>
                       
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Concord.svg" alt=""  @click.stop="getProductsByBrand('Ghost') ">
                          </div>
                        </a>
                  </div>
                  </div>
              </div>
              <!-- list-group .// -->
            </div>
          </article>
        </div>

        <div class="card">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2 mt-4">Product Status</p>
            <div class="filter-content">
              <div class="list-group list-group-flush">
                  <label class="customcheck">On Sale
                    <input type="checkbox">
                    <span class="checkmark-grey checkmark"></span>
                </label>
                <label class="customcheck">In Stock
                    <input type="checkbox">
                    <span class="checkmark-grey checkmark"></span>
                </label>
              </div>
              <!-- list-group .// -->
            </div>
          </article>
        </div>

       

        <div class="card">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2 mt-4">Top Rated Products</p>
            <div class="filter-content">
              <div class="list-group list-group-flush">
                <div class="d-flex">
                    <div class="img-bg mb-auto py-3">
                        <img class="" src="@/images/Top-Rated-Shirt.svg" alt="">
                    </div>
                    <div>
                        <p class="mb-0">Circle pattern girls...</p>
                        <img class="ratings" src="@/images/Rating-Stars.svg" alt="">
                        <p>$190</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="img-bg mb-auto py-3">
                        <img class="" src="@/images/Top-Rated-Shoes.svg" alt="">
                    </div>
                    <div>
                        <p class="mb-0">Circle pattern girls...</p>
                        <img class="ratings" src="@/images/Rating-Stars.svg" alt="">
                        <p>$190</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="img-bg mb-auto py-3">
                        <img class="" src="@/images/Top-Rated-Clock.svg" alt="">
                    </div>
                    <div>
                        <p class="mb-0">Circle pattern girls...</p>
                        <img class="ratings" src="@/images/Rating-Stars.svg" alt="">
                        <p>$190</p>
                    </div>
                </div>
              </div>
              <!-- list-group .// -->
            </div>
          </article>
        </div>
      </aside>
      <!-- col.// -->

        <div id="product-cards-list" class="d-flex justify-content-center mx-auto">
            <div v-show="isVIfVisible()"> 
                 <div class="card mb-3 bg-light" style="max-width: 540px;">
                    <div class="row no-gutters ml-2" v-for="item in productsCatalog" :key="item.id"  >
                        <div class="col-md-6">
                            <div >
                                               <ProductCard class="productcard" :item="item" />
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class="card-body">
                                   <h5 class="card-title text-center color">{{item.product.name}}</h5>
                                   <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, inventore?</p>
                                   <p class="card-text text-center color">${{item.product.price}}</p>
                            </div>
                        </div>
                   </div>
            </div>

            </div>
             <div  v-show="isVShowVisible()"> 
                  <div class="row"  v-for="item in productsCatalog" :key="item.id">
                    <div  class="col-6">
                         <ProductCard class="productcard" :item="item" />
                    </div>
                    <div  class="col-6">
                         <ProductCard class="productcard" :item="item" />
                    </div>
                   
                  </div>
            </div>
             <div  v-show="isshowGrid()"> 
                    <div class="d-flex justify-content-center mx-auto"> <ProductCardsList /></div>
          
             </div>
           
        </div>
      </div>
       <!-- row.// -->
  </div>
  <!--container end.//-->
   
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '../products/ProductCard'
import ProductCardsList from '@/components/shop/ProductCardsList.vue'
import CategoryFilters from '@/components/shop/CategoryFilters.vue'
import sizeFilter from '@/components/shop/sizeFilter.vue'
import colorFilter from '@/components/shop/colorFilter.vue'
import priceFilter from '@/components/shop/priceFilter.vue'
export default {
        name: (
            'ShopSettingsBanner'
        ),
       
       components: {
      ProductCardsList,
      ProductCard,
      CategoryFilters,
      sizeFilter,
      colorFilter,
     priceFilter
       },
    
    computed: {
      ...mapGetters(['productsCatalog']),
      ...mapGetters(['productsBrand']),
      ...mapGetters(['productsCatalog' , ' getProductsByColor']),
      
      ...mapGetters(['getShoes', 'getMen', 'getWomen', 'getKids', 'getHats', 'getSunglasses', 'getWatches', ]),
     
    
     
      },
    
        data :function()  {
            return {
            local:{
                isVIfVisible:false,
                isVShowVisible:false,
                isshowGrid:false,
               
            },
   
}  
        },
         methods: {
            ...mapActions(["getProductsByCategory", "getProductsByGender" , "getProductsByBrand"]),  
     
            toggleVIfVisible(){
                this.$data.local.isVIfVisible = !(this.$data.local.isVIfVisible);
                this.$data.local.isVShowVisible = null;
                this.$data.local.isshowGrid = null;
            },
            toggleVShowVisible(){
                this.$data.local.isVShowVisible = !(this.$data.local.isVShowVisible);
                this.$data.local.isVIfVisible = null;
                this.$data.local.isshowGrid = null;

            },
            toggleGridVisible(){
                this.$data.local.isshowGrid = !(this.$data.local.isshowGrid);
                this.$data.local.isVIfVisible = null;
                 this.$data.local.isVShowVisible = null;
            },
            isVIfVisible(){
                return this.$data.local.isVIfVisible;
            },
            isVShowVisible(){
                return this.$data.local.isVShowVisible;
            },
            isshowGrid(){
                return this.$data.local.isshowGrid ;

            },
         
           
         },
          created() {
      this.$store.dispatch("getProducts")
      this.$data.local.isshowGrid = !(this.$data.local.isshowGrid);
    },

    
    }
</script>

<style scoped>
.img-bg {
    background-color:#EEEEEE;
    border-radius: 8px;
    margin-bottom: 20px;
    margin-right: 15px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 0;
    padding-bottom: 0;
}

.ratings {
    width: 50%;
}

img {
    width: 100%;
}

.img-div {
    height: 30px;
    width: 100px;
    border: 1.5px solid #20D3C2;
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 12.5px;
}
.img-div:hover {
    background-color: #20d3c148;
}

#filter-btn {
  background-color: #20D3C2;
  border-radius: 20px;
  color: white;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 0;
  padding-bottom: 0;
}
#filter-btn:hover {
  background-color: #22b9aa;
  color: white;
}

.badge {
    font-weight: normal;
    background-color: #fff;
    border: 1px solid #20D3C2;
}
.badge:active {
    background-color: #20D3C2;
    color: white;
}
.badge:hover {
    background-color: #20D3C2;
    color: white;
}

.card {
    border: none;
}

.list-title {
    color: #20D3C2!important;
    font-weight: 600;
    border: none;
    margin-bottom: 0;
}

.list-group-item {
    color: #0E153D;
    text-decoration: none;
    border-bottom: none;
    padding: 0;
    padding-bottom: 5px;
}
.list-group-item:active {
    color: #20D3C2;
}
.list-group-item:hover {
    color: #20D3C2;
}

.checkmark-grey {
    background-color: #20d3c156!important;
    color: black!important;
    border: 1.5px solid #20D3C2;
}

#checkmark-black {
    background-color: black;
}
#checkmark-gray {
    background-color: #EEEEEE;
}
#checkmark-red {
    background-color: #FF2D2D;
}
#checkmark-green {
    background-color: #64CB83;
}
#checkmark-orange {
    background-color: #FFAA00;
}
#checkmark-brown {
    background-color: #542323;
}

/* The customcheck */
.customcheck {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 8px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.customcheck input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 5px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.customcheck input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.customcheck .checkmark:after {
    left: 7px;
    top: 2px;
    width: 7px;
    height: 13px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

#dropdownMenuButton {
    width: 100%;
    text-align: left;
  }
  .color{
      color:#20D3C2;
  }

@media (max-width: 768px) {

  #product-cards-list {
    margin-top: 40px;
  }

 }


#shop-p {
    color: #20D3C2!important;
}
#shop-h3 {
    font-weight: 600;
    color: #20D3C2!important;
}

.grid-icons {
    font-size: 32px;
    padding: 12px 10px;
}

#banner-bg {
    background-color: #F6F6F6;
}

.settings-bg {
    background-color: #0E153D;
    border-radius: 7px;
}

a {
    color: white;
    text-decoration: none;
}
a:hover {
    color: #20D3C2;
}

</style>