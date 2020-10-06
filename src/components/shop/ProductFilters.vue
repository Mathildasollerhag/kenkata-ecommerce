<template>
  <div class="container mt-5 mb-5 pb-5">

    <div class="flex-row d-md-flex">
        <aside class="pr-2">

        <div class="card">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2">Product Categories</p>
            <div class="filter-content">

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
                <a href="#" class="dropdown-item" >
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
              </div>

              <div class="list-group list-group-flush d-none d-lg-block">
                <a href="#" class="list-group-item" @click="filteredProducts(props)">
                  Men's
                  <span class="float-right badge badge-light round">18</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)">
                  Women's
                  <span class="float-right badge badge-light round">23</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)">
                  Kids
                  <span class="float-right badge badge-light round">32</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)" >
                  Hats
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)" >
                  Sunglasses
                  <span class="float-right badge badge-light round">15</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)" >
                  Shoes
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="list-group-item" @click="filteredProducts(props)">
                  Watches
                  <span class="float-right badge badge-light round">20</span>
                </a>
              </div>
              <!-- list-group .// -->
            </div>
          </article>
          <section class="mb-4 d-none d-lg-block">

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
          <!-- card-group-item.// -->

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
              </div>

          <article class="card-group-item d-none d-lg-block ">
              <p class="list-title" >Filter by Color</p>
            <div class="filter-content">
              <div class="card-body pl-0 pr-0">
                <label class="customcheck">
                    <span id="checkmark-black" class="checkmark"></span>
                    <span class="float-right badge badge-light round">12</span>
                </label>
                <label class="customcheck" >Gray
                    <input type="checkbox">
                    <span id="checkmark-gray" class="checkmark"></span>
                    <span class="float-right badge badge-light round">20</span>
                </label>
                <label class="customcheck" >Red
                    <input type="checkbox">
                    <span id="checkmark-red" class="checkmark"></span>
                    <span class="float-right badge badge-light round">18</span>
                </label>
                <label class="customcheck" >Green
                    <input type="checkbox">
                     <span id="checkmark-green" class="checkmark"></span>
                     <span class="float-right badge badge-light round">25</span>
                </label>
                <label class="customcheck">Orange
                    <input type="checkbox">
                     <span id="checkmark-orange" class="checkmark"></span>
                     <span class="float-right badge badge-light round">9</span>
                </label>
                <label class="customcheck" >Brown
                    <input type="checkbox">
                     <span id="checkmark-brown" class="checkmark"></span>
                     <span class="float-right badge badge-light round">7</span>
                </label>
              </div>
              <!-- card-body.// -->
            </div>
          </article>
          <!-- card-group-item.// -->
        </div>
        <!-- card.// -->

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
        
        <div class="card d-none d-lg-block">
          <article class="card-group-item">
              <p class="list-title list-group-item mb-2 mt-2">Filter by Size</p>
            <div class="filter-content">
              <div class="list-group list-group-flush">
                <a href="#" class="list-group-item">
                  XS
                  <span class="float-right badge badge-light round">18</span>
                </a>
                <a href="#" class="list-group-item">
                  S
                  <span class="float-right badge badge-light round">23</span>
                </a>
                <a href="#" class="list-group-item">
                  M
                  <span class="float-right badge badge-light round">32</span>
                </a>
                <a href="#" class="list-group-item">
                  L
                  <span class="float-right badge badge-light round">12</span>
                </a>
                <a href="#" class="list-group-item">
                  XL
                  <span class="float-right badge badge-light round">15</span>
                </a>
                <a href="#" class="list-group-item" >
                  XXL
                  <span class="float-right badge badge-light round">12</span>
                </a>
              </div>
              <!-- list-group .// -->
            </div>
          </article>
        </div>

        <div class="dropdown d-lg-none mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Brand
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a href="#" class="dropdown-item">
                          <div class="img-div">
                              <img src="@/images/Bexim.svg" alt="">
                          </div>
                        </a>
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
                      <a href="#" class="">
                          <div class="img-div mr-4">
                              <img src="@/images/Bexim.svg" alt="">
                          </div>
                        </a>
                        <a href="#" class="">
                            <div class="img-div">
                              <img src="@/images/Dismis.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Dallas.svg" alt="">
                          </div>
                      </a>
                  </div>
                  <div class="">
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Lighton.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Rosimo.svg" alt="">
                          </div>
                        </a>
                      <a href="#" class="">
                          <div class="img-div">
                              <img src="@/images/Concord.svg" alt="">
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

        <section class="mb-4 d-lg-none">

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
        <ProductCardsList :category="category" :gender="gender" :mainCategory="mainCategory"/>
    </div>
    </div>
    <!-- row.// -->
  </div>
  <!--container end.//-->
</template>

<script>
import ProductCardsList from '@/components/shop/ProductCardsList.vue'


export default {
 components: {
      ProductCardsList
  },
  props: ["category", "gender", "mainCategory"]
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

@media (max-width: 768px) {

  #product-cards-list {
    margin-top: 40px;
  }

 }

</style>