<template>
  <div class="border-top">
    <div class="container">
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
                ><i class="fas fa-bars myclass10 px-2"></i>{{ $t('translated.browseCategories') }}
                <i class="fas fa-chevron-down myclass8 myclass10"></i
              ></a>
              <div class="dropdown-menu pl-2" aria-labelledby="navbarDropdown">

                <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">{{ $t('translated.all') }}</router-link></div>
                <div @click="getProductsByMainCategory('clothes')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.clothes') }}</router-link></div>
                <div @click="getProductsByMainCategory('accessories')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.accessories') }}</router-link></div>
                <div @click="getProductsByCategory('hats')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.hats') }}</router-link></div>
                <div @click="getProductsByCategory('sunglasses')" ><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.sunglasses') }}</router-link></div>
                <div @click="getProductsByCategory('shoes')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.shoes') }}</router-link></div>
                <div @click="getProductsByCategory('watches')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.watches') }}</router-link></div>
              </div>
            </button>
            <li class="nav-item myclass7">
              <router-link active-class="active" exact class="nav-link" to="/">{{ $t('translated.home') }}</router-link>

            </li>

            <li class="nav-item dropdown myclass7">
              <div class="dropdown nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop<i class="fas fa-chevron-down pl-2"></i>
                <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">

                  <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">{{ $t('translated.all') }}</router-link></div>
                  <div @click="getProductsByGender('men')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.men') }}</router-link></div>
                  <div @click="getProductsByGender('women')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.women') }}</router-link></div>
                  <div @click="getProductsByCategory('kids')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.kid') }}</router-link></div>

                </div>
              </div>
            </li>

            <li class="nav-item dropdown myclass7">

              <div class="dropdown nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.products') }}<i class="fas fa-chevron-down pl-2"></i>
                <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                  <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">{{ $t('translated.all') }}</router-link></div>
                  <div @click="getProductsByMainCategory('clothes')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.clothes') }}</router-link></div>
                  <div @click="getProductsByMainCategory('accessories')"><router-link to="/shop" class="dropdown-item">{{ $t('translated.accessories') }}</router-link></div>

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
                    >{{ $t('translated.categories') }} <i class="fas fa-chevron-down myclass9"></i
                  ></a>
                  <div
                    class="dropdown-menu pl-2"
                    aria-labelledby="dropdownMenuButton"

                  > <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">{{ $t('translated.all') }}</router-link></div>
                      <div @click="getProductsByCategory('hats')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.hats') }}</router-link></div>
                      <div @click="getProductsByCategory('sunglasses')" ><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.sunglasses') }}</router-link></div>
                      <div @click="getProductsByCategory('shoes')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.shoes') }}</router-link></div>
                      <div @click="getProductsByCategory('watches')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.watches') }}</router-link></div>

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
                    {{ $t('translated.pages') }} <i class="fas fa-chevron-down myclass9"></i>
                  </a>
                  <div
                    class="dropdown-menu pl-2"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <router-link to="/shop" class="dropdown-item"
                      >Shop</router-link
                    >
                    <router-link to="/wishlist" class="dropdown-item"
                      >{{ $t('translated.wishlist') }}</router-link
                    >
                    <router-link to="/contact" class="dropdown-item"
                      >{{ $t('translated.contactUs') }}</router-link
                    >
                    <router-link to="/about" class="dropdown-item"
                      >{{ $t('translated.aboutUs') }}</router-link
                    >
                    <router-link to="/team" class="dropdown-item"
                      >Team</router-link
                    >
                    <router-link to="/portfolio" class="dropdown-item"
                      >{{ $t('translated.portfolio') }}</router-link
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
          <button class="btn green specialoffer" type="submit">

            <router-link class="text-white" to="/shop">{{ $t('translated.specialOffer') }}</router-link>

          </button>
        </div>
      </nav>
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
  color: #313131 !important;
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
  background-color: #1db4a5 !important;
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
.active {
  position: relative;
}
.active::after {
  content: "";
  display: block;
  position: absolute;
  height: 4px;
  bottom: -4px;
  width: 45px;
  background-color: #20d3c2;
}
@media (min-width: 992px) {
  .myclass7 {
    margin-left: 1rem;
  }
  .active::after {
    left: 0px;
    height: 4px;
    width: 85%;
  }
}

@media (max-width: 992px) {
  .specialoffer {
    margin-top: 5px;
    margin-bottom: 10px;
}
}
</style>