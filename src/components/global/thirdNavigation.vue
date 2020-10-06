<template>
  <div class="border-top">
    <div class="container">
<<<<<<< HEAD
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><button id="mybutton2" class="btn nav-item dropdown green"><a class="nav-link myclass10" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" fas fa-bars myclass10 mr-1"></i>{{ $t('translated.browseCategories') }} <i class="fas fa-chevron-down myclass8 myclass10"></i></a><div class="dropdown-menu pl-2" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a></div></button>

                <li class="nav-item active myclass7"><router-link class="nav-link" to="/">{{ $t('translated.home') }}</router-link></li>
                <li class="nav-item dropdown myclass7"><router-link class="nav-link" to="/shop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.shop') }}<i class="fas fa-chevron-down pl-2"></i></router-link><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">{{ $t('translated.clothes') }}</a><a class="dropdown-item" href="#">{{ $t('translated.accessories') }}</a></div></li>
                <li class="nav-item myclass7"><a class="" href="/Products"><div class="dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.products') }} <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7"><a class="" href="/Categories"><div class=" dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.categories') }} <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7">
                    <a class="" href="#">
                    <div class=" dropdown nav-link">
                        <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ $t('translated.pages') }} <i class="fas fa-chevron-down myclass9"></i>
                        </a>

                        <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                            <router-link to="/shop" class="dropdown-item">Shop</router-link>
                            <router-link to="/wishlist" class="dropdown-item">{{ $t('translated.whislist') }}</router-link>
                            <router-link to="/contact" class="dropdown-item">{{ $t('translated.contactUs') }}</router-link>
                            <router-link to="/about" class="dropdown-item">{{ $t('translated.aboutUs') }}</router-link>
                            <router-link to="/team" class="dropdown-item">Team</router-link>
                            <router-link to="/portfolio" class="dropdown-item">{{ $t('translated.portfolio') }}</router-link>
                        </div>
                    </div>
                    </a>
                </li>

                 

                

                <li class="nav-item myclass7"><router-link class=" nav-link" to="/">Blog</router-link></li></ul>
            </div>
            <div class=""><button class="btn green specialoffer" type="submit">{{ $t('translated.specialOffer') }}</button></div>
        </nav>
=======
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <button
          class="navbar-toggler my-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <button id="mybutton2" class="btn nav-item dropdown green text-left">
              <a
                class="nav-link myclass10"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="fas fa-bars myclass10 px-2"></i>Browse Categories
                <i class="fas fa-chevron-down myclass8 myclass10"></i
              ></a>
              <div class="dropdown-menu pl-2" aria-labelledby="navbarDropdown">
                <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">All</router-link></div>
                <div @click="getProductsByMainCategory('clothes')"><router-link to="/shop" class="dropdown-item">Clothes</router-link></div>
                <div @click="getProductsByMainCategory('accessories')"><router-link to="/shop" class="dropdown-item">Accessories</router-link></div>
                <div @click="getProductsByCategory('hats')"><router-link to="/shop" class="dropdown-item" href="#">Hats</router-link></div>
                <div @click="getProductsByCategory('sunglasses')" ><router-link to="/shop" class="dropdown-item" href="#">Sunglasses</router-link></div>
                <div @click="getProductsByCategory('shoes')"><router-link to="/shop" class="dropdown-item" href="#">Shoes</router-link></div>
                <div @click="getProductsByCategory('watches')"><router-link to="/shop" class="dropdown-item" href="#">Watches</router-link></div>
              </div>
            </button>
            <li class="nav-item myclass7">
              <router-link active-class="active" exact class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item dropdown myclass7">
              <div class="dropdown nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop<i class="fas fa-chevron-down pl-2"></i>

              <div  class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                <router-link to="/shop" class="dropdown-item">All</router-link>
                <router-link :to="{name: 'ShopByGender', params: {gender: 'men'}}" class="dropdown-item">Men's</router-link>
                <router-link :to="{name: 'ShopByGender', params: {gender: 'women'}}" class="dropdown-item">Women's</router-link>
                <router-link :to="{name: 'ShopByCategory', params: {category: 'kids'}}" class="dropdown-item">Kid's</router-link>

              <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">All</router-link></div>
                <div @click="getProductsByGender('men')"><router-link to="/shop" class="dropdown-item">Men's</router-link></div>
                <div @click="getProductsByGender('women')"><router-link to="/shop" class="dropdown-item">Women's</router-link></div>
                <div @click="getProductsByCategory('kids')"><router-link to="/shop" class="dropdown-item">Kids's</router-link></div>

              </div>
            </li>

            <li class="nav-item dropdown myclass7">
              <div class="dropdown nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products<i class="fas fa-chevron-down pl-2"></i>
              <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                    <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">All</router-link></div>
                    <div @click="getProductsByMainCategory('clothes')"><router-link to="/shop" class="dropdown-item">Clothes</router-link></div>
                    <div @click="getProductsByMainCategory('accessories')"><router-link to="/shop" class="dropdown-item">Accessories</router-link></div>
                  </div>
              </div>
            </li>

            <li class="nav-item myclass7">
              <a class="" href="#/"
                ><div class="dropdown nav-link">
                  <a
                    id="categoriesDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Categories <i class="fas fa-chevron-down myclass9"></i
                  ></a>
                  <div
                    class="dropdown-menu pl-2"
                    aria-labelledby="dropdownMenuButton"
                  > <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">All</router-link></div>
                      <div @click="getProductsByCategory('hats')"><router-link to="/shop" class="dropdown-item" href="#">Hats</router-link></div>
                      <div @click="getProductsByCategory('sunglasses')" ><router-link to="/shop" class="dropdown-item" href="#">Sunglasses</router-link></div>
                      <div @click="getProductsByCategory('shoes')"><router-link to="/shop" class="dropdown-item" href="#">Shoes</router-link></div>
                      <div @click="getProductsByCategory('watches')"><router-link to="/shop" class="dropdown-item" href="#">Watches</router-link></div>
                  </div>
                </div></a
              >
            </li>
            <li class="nav-item myclass7">
              <a class="" href="#">
                <div class="dropdown nav-link">
                  <a
                    id="categoriesDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages <i class="fas fa-chevron-down myclass9"></i>
                  </a>
                  <div
                    class="dropdown-menu pl-2"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <router-link to="/shop" class="dropdown-item"
                      >Shop</router-link
                    >
                    <router-link to="/wishlist" class="dropdown-item"
                      >Wishlist</router-link
                    >
                    <router-link to="/contact" class="dropdown-item"
                      >Contact Us</router-link
                    >
                    <router-link to="/about" class="dropdown-item"
                      >About Us</router-link
                    >
                    <router-link to="/team" class="dropdown-item"
                      >Team</router-link
                    >
                    <router-link to="/portfolio" class="dropdown-item"
                      >Portfolio</router-link
                    >
                  </div>
                </div>
              </a>
            </li>
            <li class="nav-item myclass7">
              <router-link class="nav-link" to="/*">Blog</router-link>
            </li>
          </ul>
        </div>

        <div>
          <button class="btn green specialoffer">
            <router-link class="text-white" to="/shop">SPECIAL OFFER</router-link>
          </button>
        </div>
      </nav>
>>>>>>> 399ff2d611b36366c9c8cddb919ee48314acd669
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(["getProducts", "getProductsByMainCategory", "getProductsByGender", "getProductsByCategory"])
    }
  }
</script>

<style scoped>

.active {
  position: relative;
}
.active::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -4px;
  height: 4px;
  width: 85%;
  background-color: #20d3c2;
}

.green {
  background-color: #20d3c2;
}
.specialoffer {
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 18px;
  padding-right: 18px;
}
.specialoffer:hover {
  color: white !important;
  background-color: #0E153D;
  transition: .2s ease-in-out;
}
a {
  text-decoration: none !important;
}
i {
  color: #20d3c2;
}
.nav-link {
  padding-bottom: 5px;
  color: #0E153D !important;
  font-weight: 400;
}
.nav-link:hover {
  color: #20d3c2 !important;
}
#mybutton2 {
  padding: 0.1rem;
  border-radius: 0;
}
a {
  padding-left: 0rem !important;
}
i {
  padding-left: 1.2px;
}
#mybutton2:hover {
  background-color: #20d3c2 !important;
}
.margin {
  margin-left: 0rem !important;
}
.myclass8 {
  margin-left: 3rem !important;
}
.myclass9 {
  margin-left: 0.2rem !important;
}
.myclass10 {
  color: white !important;
}
.myclass10:hover {
  color: white !important;
}
.nav-item:hover {
  text-decoration: none;
}

@media (min-width: 992px) {
  .myclass7 {
    margin-left: 1rem;
  }
}

@media (max-width: 992px) {
  .specialoffer {
    margin-bottom: 10px;
    margin-top: 10px;
}
}
</style>