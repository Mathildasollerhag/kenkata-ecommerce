<template>
   <div class="text-white">
       <router-link class="text-white" to="/">
        <div class="card-hover-body d-flex">
            <!-- Product name/price -->
            <div class="card-text-body">
                <p class="card-text my-2">{{ product.name }}</p>
                <small class="border py-1 px-2">Fashion</small>
                <!-- <p class="mt-2"><del>$220.00</del></p> -->
                <h5 class="text-kenkata-blue m-0 mt-2">{{product.price}} sek</h5>            
            </div>
            <!-- Star Rating -->
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
       </router-link>
       <CardHoverBar />
   </div>
</template>

<script>
import CardHoverBar from './CardHoverBar'
export default {
    components: {
        CardHoverBar
    },
    props: ['product']
}
</script>

<style scoped>

.card-hover-body {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
.card-text-body {
    position: absolute;
    bottom: 2em;
    left: 2em;
}
.rating {
    color: #20D3C2;
    position: absolute;
    bottom: 2em;
    right: 1.5em;
}
</style>