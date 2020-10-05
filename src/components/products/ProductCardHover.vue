<template>
   <div class="text-white">
       <router-link class="text-white" :to="{name: 'ProductDetails', params: {id: id}}">
        <div class="card-hover-body">
            <div class="position-relative h-100 p-3 px-4 d-flex justify-content-between align-items-end">
                <!-- Product name/price -->
                <div class="card-text-body">
                    <p class="card-text my-2">{{ product.name }}</p>
                    <div class="mb-2"><small class="border py-1 px-2">Fashion</small></div>
                    <p v-if="product.discount !== ''" class="my-0"><del>${{product.price}}.00</del></p>
                    
                    <h5 v-if="product.discount !== ''" class="theme-text m-0">${{product.price * 0.8}}.00</h5>            
                    <h5 v-else class="theme-text m-0">${{product.price}}.00</h5>            
                </div>
                <!-- Star Rating -->
                <div class="ratings position-absolute">
                    <div class="d-flex position-absolute">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div v-if="rating" class="d-flex position-absolute">
                        <i v-if="rating1" class="fas fa-star"></i>
                        <i v-if="rating2" class="fas fa-star"></i>
                        <i v-if="rating3" class="fas fa-star"></i>
                        <i v-if="rating4" class="fas fa-star"></i>
                        <i v-if="rating5" class="fas fa-star"></i>
                    </div>
                </div>
            </div>


        </div>
       </router-link>
       <CardHoverBar :product="product" :id="id"/>
   </div>
</template>

<script>
import CardHoverBar from './CardHoverBar'
export default {
    data() {
        return {         
            rating1: false,
            rating2: false,
            rating3: false,
            rating4: false,
            rating5: false,         
        }
    },
    methods: {
        setRating() {
            switch (this.rating) {
                case 1: this.rating1 = true                  
                    break;
                case 2: this.rating1 = true, this.rating2 = true
                    break;
                case 3: this.rating1 = true, this.rating2 = true, this.rating3 = true
                    break;
                case 4: this.rating1 = true, this.rating2 = true, this.rating3 = true, this.rating4 = true
                    break;
                case 5: this.rating1 = true, this.rating2 = true, this.rating3 = true, this.rating4 = true, this.rating5 = true
                    break;
                default:
                    break;
            }
        }
    },
    created() {
        this.setRating()
    },
    components: {
        CardHoverBar
    },
    props: ['product', 'id', 'rating']
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
.ratings {
    color: #20D3C2;
    margin-bottom: 1.2em;
    right: 7em;
}
</style>