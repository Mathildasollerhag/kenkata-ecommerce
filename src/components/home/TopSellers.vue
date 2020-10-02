<template>
    <div class="container text-center mt-5 mb-5 pt-5">
                <div class="d-flex justify-content-center">
                    <h1 id="top">TOP</h1>
                    <h1 id="sellers" class="pl-2">SELLERS</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3">Check out our weekly top sellers in all category</p>
            <div id="test" class="d-lg-flex justify-content-center pt-4">

                <div class="pt-2" v-for="item in topSellers.slice(0, 1)" :key="item.id">
                    <ProductCard :item="item"/>
                </div>

            <div id="right-side-boxes" class="pl-2 pt-2">
                <div class="side-box mx-auto" v-for="item in topSellers.slice(1, 2)" :key="item.id">
                    <ProductCard :item="item"/>
                </div>

                <div class="pt-2 side-box mx-auto" v-for="item in topSellers.slice(2, 3)" :key="item.id">
                    <ProductCard :item="item"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import ProductCard from '../products/ProductCard'
import { mapGetters } from 'vuex'

    export default {

        components: {
            ProductCard,
        },

        computed: {
        ...mapGetters(['topSellers'])
        },

    }
</script>

<style scoped>

::v-deep .card-img-top {
    height: 100%;
    object-fit: cover;
}

.side-box {
    width: 550px;
    height: 350px;
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

@media (max-width: 1200px) {

    #right-side-boxes {
        padding-left: 0!important;
    }
}

@media (max-width: 992px) {

    .side-box {
    width: 100%;
    height: 100%;
}
}

@media (min-width: 992px) {

    #right-side-boxes {
        padding-left: 8px!important;
    }
}

</style>