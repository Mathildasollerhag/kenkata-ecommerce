<template>
    <div>
        <div class="arxafon">
        <div class="container">
          <div class="row ">
            <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                <h3 class="big-text green font-weight-bold pt-5 pb-5">Wishlist</h3>                
            </div>
            <div class="col-12 col-lg-9 d-flex justify-content-center flex-column ">
              <div class="text-center ml-lg-auto">
                <div class="d-flex justify-content-lg-end justify-content-center flex-wrap">
                  <div class="arxayox d-flex  flex-row justify-content-center round bg-white align-items-center">
                    
                    <router-link to="/" class="mr-1 text-white arxayox">Home</router-link><span class="text-white"> / </span><router-link to="/wishlist" active-class="active" class="ml-1 arxayox ag">Wishlist</router-link>
                  </div>                 
                </div>       
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-5 container pb-5">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex flex-row justify-content-center text-center">
                        <h1 class="pr-2 font-weight-bold">YOUR PRODUCTS <span class="green">WISHLIST</span></h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="../images/line1.png" alt="">
                    </div> 
                </div>
            </div>  
            
            <div v-if="currentUserWishlist.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col mt-5" v-for="(item, index) in currentUserWishlist" :key="index">
                    <div class="card">
                        <p class="mb-0 p-2"><span v-on:click="removeFromWishlist({currentUserId, item})" class="pr-1 pl-2 c-pointer"><i class="fas fa-times"></i></span> Remove item</p>
                        <ProductCard class="productcard" :item="item"/>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import ProductCard from '@/components/products/ProductCard'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            currentUserId: firebase.auth().currentUser.uid
        }
    },
    components: {
        ProductCard
    },
    created() {
        this.getCurrentUser(firebase.auth().currentUser.uid)
    },
    methods: {
        ...mapActions(["getCurrentUser", "removeFromWishlist"])
    },
    computed: {
        ...mapGetters(["currentUserWishlist"])
    }
}

</script>

<style scoped>

    .active {
        color: var(--theme) !important;
    }

    .arxafon{
        background-color: #585f7c;
    }
    .arxayox{
        background-color: transparent !important;
    }
    .ag{
        color: white;
    }
    .whislist{
        display: flex;
        justify-content: space-between;
    }
    .green{
        color: #20D3C2 !important;
        background-color: transparent;
    }
    .mynewclass1 {
        margin-top: -1.7rem;
    }
    .mynewclass10 {
        padding: 1rem;
        border-radius: 50px;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .myredclass  {
        background-color: red;
    }
    .mygreenclass  {
        background-color: rgb(14, 163, 14);
    }
    .mynewclass4 {
    padding-top: 5px;
    }
    .white{
        color: white;
    }
    .mynewclass2 {
    background-color: white;
    border-radius: 25px;
    padding: 10px;
    height: 48%;
    }
    .mynewclass2 i:hover {
    color: #20D3C2;
    }
    .grey {
    color: #8f8f8f;
    }
    .mynewclass6 {
    font-size: 22px;
    font-weight: 100;
    }
    .mynewclass3 {
    font-size: 22px;
    color: rgb(248, 47, 47);
    }
    .line-through {
    text-decoration: line-through;
    font-size: 15px;
    }
    .mynewclass7 {
    width: 75px;
    }
    .item {
    position: relative;
    }
    .mynewclass8 {
    margin-top: 14rem;
    }
    .mynewclass9 {
    background-color: #0e153de5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
    position: absolute;
    top: 0;
    height: 112% !important;
    width: 100%;
    }
      
    .mynewclass5:hover + .mynewclass9 {display: block;} .mynewclass5:hover + .mynewclass10 {display: none;}
    .mynewclass5:hover + .mynewclass10 + .mynewclass9 {display: block;} .mynewclass5:hover + .mynewclass10 + .mynewclass9 + p {display: none;}
    .newclass12 {
    background-color: #eeeeee;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }
    .mynewclass11{
    background-color: #0e153d;
    padding: 0.5rem;
    padding-left: 1rem;
    color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    }
    .menim{
    background-color: white;

    border: 1px solid rgb(224, 222, 222);
    margin-bottom: -1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }
    
</style>