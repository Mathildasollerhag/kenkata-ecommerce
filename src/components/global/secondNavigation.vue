<template>
    <div>
        <div class="container pt-4 pb-4">
            <div class="row">
                <div class="col-12 col-xl-2 text-center"><router-link class="navbar-brand" id="brand" to="/"><img src="../../images/Logo.svg" alt=""></router-link></div>
                <div class="col-12 col-xl-6">
                    <div class="input-group class1">
                        <div class="col-5 col-md-6 col-xl-7 pr-0 pl-0">
                            <form id="searchForm">
                                <input id="myclass5" type="text" v-model="search" class="form-control" placeholder="Search products..." aria-label="Search products..." aria-describedby="basic-addon2" autocomplete="off">
                                <div v-if="this.search !== ''" class="search-results pb-2">
                                    <div v-for="item in filteredProducts" :key="item.id">
                                        <div @click="clearInput">
                                            <router-link :to="{name: 'ProductDetails', params: {id: item.id}}" class="d-flex align-items-center py-1">
                                                <img class="mr-2" :src="item.product.images[0]" alt="">
                                                <p class="mb-0">{{item.product.name}}</p>
                                            </router-link>    
                                        </div>                                
                                    </div>                                
                                </div>
                            </form>
                        </div>
                        
                        <a class="form-control myclass6 col-5 col-md-5 col-xl-5" href="#">
                            <div class="dropdown myclass1">
                                <div class="d-flex hover-green" id="downmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div>
                                        {{ $t('translated.categories') }}
                                    </div>
                                    <div class="ml-auto">
                                        <i class="fas fa-chevron-down pr-2"></i>
                                    </div>
                                </div>                               
                                
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div @click="getProducts()"><router-link to="/shop" class="dropdown-item">{{ $t('translated.all') }}</router-link></div>
                                    <div @click="getProductsByCategory('hats')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.hats') }}</router-link></div>
                                    <div @click="getProductsByCategory('sunglasses')" ><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.sunglasses') }}</router-link></div>
                                    <div @click="getProductsByCategory('shoes')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.shoes') }}</router-link></div>
                                    <div @click="getProductsByCategory('watches')"><router-link to="/shop" class="dropdown-item" href="#">{{ $t('translated.watches') }}</router-link></div>                                  
                                </div>
                            </div>
                        </a>
                        <div class="input-group-append green btnextra2 "><button class="btn pr-3 pt-2" type="button"><i class="fas fa-search white btnextra"></i></button></div>
                    </div>
                </div>
                <div class="col-xl-4 d-flex justify-content-center justify-content-xl-end"><div class="iconsextra class2 classmargin">
                    <router-link v-if="currentUser" to="/myaccount" class="my-account"><i class="far fa-user icon-size mr-1"></i>{{ $t('translated.myAccount') }}</router-link>
                    <router-link v-else to="/account" class="my-account"><i class="far fa-user icon-size mr-1"></i>{{ $t('translated.myAccount') }}</router-link>

                </div>
                    <div class=" iconsextra ml-4"><router-link to="/wishlist"><i class="far fa-heart icon-size"></i></router-link></div>

                    <div class=" iconsextra ml-4"><router-link to="/compare"><i class="fas fa-random mr-3 icon-size myclass2"></i></router-link><span class="badge badge-pill green white myclass3">{{compareCount}}</span></div>
                    <div class=" iconsextra ml-4 my-width position-relative"><router-link class="text-dark" to="/shoppingcart"><i class="fas fa-shopping-bag icon-size"></i></router-link> ${{shoppingCartTotal}}<span class="badge badge-pill green white cart2 position-absolute">{{shoppingCartItemCount}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters(['shoppingCartItemCount', 'shoppingCartTotal', 'compareCount', 'currentUser', 'productsCatalog']),
        currentUser() {
            return firebase.auth().currentUser
        },

        filteredProducts() {
            return this.productsCatalog.filter((item) => {
                return item.product.name.toLowerCase().match(this.search.toLowerCase())
            })
        }
    },
    methods: {
        ...mapActions(['getProducts', 'getProductsByCategory']),
        clearInput() {
            document.getElementById('searchForm').reset()
        }
    }
}
</script>

<style scoped>

.search-results {
    z-index: 100;
    position: absolute;
    top: 3.5em;
    background: white;
    border-radius: 5px;
    width: 100%;
}
.search-results img {
    height: 35px;
    width: 35px;
}
.search-results a{
    padding: 0.5em 1em;
    border-radius: 5px;
}
.search-results a:hover {
    background: #f5f5f5;
}

i:hover {
    color: #20D3C2;
}

.my-account:hover {
    color: #20D3C2!important;
}

.fa-chevron-down {
    color: #20D3C2!important;
}
.hover-green:hover {
 color: #20D3C2!important;
 transition: .1s ease-in-out;
}
.green{
    background-color: #20D3C2;
}
.class2 {
    font-size: 14px;
}
.class1 {
    padding-top: 1rem;; 
}
a {
    text-decoration: none !important;
    color: black;
}
.nav-link {
    padding-bottom: 5px;
    color: black !important;
}
.margin-link {
    margin-left: 0.2rem !important;
}
.myclass2 {
    position: absolute;
}
.myclass3 {
    position: relative;
    top: -15px;
    left: 10px;
    font-size: 10px;
}
.cart2 {
    /* position: relative; */
    /* top: -15.9px; */
    /* left: -58px; */
    font-size: 10px;
    top: 8px;
    left: 5px;
}
.btnextra {
    font-weight: 400;
    font-size: 18px;
    margin-left: -0.01rem;
}
.icon-size {
    font-weight: 400;
    font-size: 22px;
}
.btnextra2 {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
#myclass5 {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 14px;
    padding-left: 1.4rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
}::placeholder {
    color: rgb(153, 153, 153) !important;
}
#downmenu {
    color: black;
} 
#downmenu i {
    margin-left: 1rem;
    color: var(--green);
}
.myclass1 {
    margin-top: -0.7rem !important;
}
.iconsextra {
    padding-top: 1rem !important;
}
.myclass6 {   
    padding-left: 0.5rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
    padding-right: 0;
}
.white {
    color: white !important; 
}
.nav-item:hover {
    text-decoration: none;
}
.navbar-brand {
    padding: 0;
    padding-top: 0.3rem;
}
#navbarSupportedContent {
    padding-right: 0;
}
.active {
    position: relative;
}
.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 9px;
    height: 4px;
    width: 70%;
    background-color: #20D3C2;
}
input:focus, input:active, .form-control {
  border-color: #cccccc !important;
}
@media (min-width: 1200px) { 
    .classmargin {
        margin-left: 3.5rem;
    }
    .margin {
        margin-left: 0.75rem !important;
    }
    .class1 {
        padding-top: 0rem;; 
    }
}
</style>