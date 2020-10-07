<template>
  <div id="hoverbar">
 
      <div class="h-100 d-flex flex-column align-items-center justify-content-center"> 
        <!-- Colors Tooltip -->
        <b-button id="tooltip-colors" class="p-0" variant="transparent"><i class="fas fa-circle"></i></b-button>
        <b-tooltip class="colors" target="tooltip-colors" triggers="hover" placement="left" custom-class="tooltip-class colors" offset="6">    
            <i v-for="(color, index) in product.colors" :key="index" :class="'bg-' + color" class="fas fa-circle ml-1"></i>
        </b-tooltip>
        
        <!-- Heart -->
        <b-button v-if="currentUserId" v-on:click="addProductToWishlist({ currentUserId, product, id })" class="p-0" variant="transparent" id="tooltip-wish">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                <path class="hoverbar-svg" id="Heart_icon" data-name="Heart icon" d="M295.565,309.457a5,5,0,0,1,10,0v2.753c0,4.509-10,12.247-10,12.247s-10-7.738-10-12.247v-2.753a5,5,0,0,1,10,0" transform="translate(-284.815 -303.707)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
        </b-button>
        <b-button v-else class="p-0" variant="transparent" id="tooltip-wish">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                <path class="hoverbar-svg" id="Heart_icon" data-name="Heart icon" d="M295.565,309.457a5,5,0,0,1,10,0v2.753c0,4.509-10,12.247-10,12.247s-10-7.738-10-12.247v-2.753a5,5,0,0,1,10,0" transform="translate(-284.815 -303.707)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
        </b-button>
        <b-tooltip v-if="currentUserId" target="tooltip-wish" triggers="hover" placement="left" custom-class="tooltip-class">Add to wishlist</b-tooltip>
        <b-tooltip v-else target="tooltip-wish" triggers="hover" placement="left" custom-class="tooltip-class">Login to add to wishlist</b-tooltip>

        <!-- Compare -->
        <b-button v-on:click="addProductToCompare({product, quantity: 1, id})" class="p-0" variant="transparent" id="tooltip-compare">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="20.049" viewBox="0 0 21.5 20.049">
                <g id="Compare_icon" data-name="Compare icon" transform="translate(-246.185 -304.952)">
                    <g id="Group_23" data-name="Group 23" transform="translate(246.935 306.012)">
                    <path class="hoverbar-svg" id="Path_48" data-name="Path 48" d="M266.935,309.9h-4.022a2.452,2.452,0,0,0-2.027,1.071l-6.363,9.335a2.451,2.451,0,0,1-2.027,1.071h-5.561" transform="translate(-246.935 -307.31)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path class="hoverbar-svg" id="Path_49" data-name="Path 49" d="M273.043,306.012l2.594,2.594-2.594,2.594" transform="translate(-255.638 -306.012)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                    <g id="Group_24" data-name="Group 24" transform="translate(246.935 309.867)">
                    <path class="hoverbar-svg" id="Path_50" data-name="Path 50" d="M266.935,323.274h-4.022a2.454,2.454,0,0,1-2.027-1.071l-6.363-9.336A2.453,2.453,0,0,0,252.5,311.8h-5.561" transform="translate(-246.935 -311.795)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path class="hoverbar-svg" id="Path_51" data-name="Path 51" d="M273.043,325.121l2.594,2.594-2.594,2.594" transform="translate(-255.638 -316.237)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                </g>
            </svg>
        </b-button>
        <b-tooltip target="tooltip-compare" triggers="hover" placement="left" custom-class="tooltip-class">Add to compare</b-tooltip>        

        <!-- Quick view Tooltip -->
        <b-button v-on:click="getProductById(id)" data-toggle="modal" data-target="#quickviewModal" id="tooltip-view" class="p-0" variant="transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.061" height="21.061" viewBox="0 0 21.061 21.061">
                <g id="Search_icon" data-name="Search icon" transform="translate(-15.152 -304.457)">
                    <g class="hoverbar-svg" id="Ellipse_10" data-name="Ellipse 10" transform="translate(15.152 304.457)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <circle cx="8.493" cy="8.493" r="8.493" stroke="none"/>
                    <circle cx="8.493" cy="8.493" r="7.743" fill="none"/>
                    </g>
                    <line class="hoverbar-svg" id="Line_12" data-name="Line 12" x1="5.502" y1="5.502" transform="translate(29.65 318.955)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </g>
            </svg>
        </b-button>
        <b-tooltip target="tooltip-view" triggers="hover" placement="left" custom-class="tooltip-class">Quick view</b-tooltip>
        
        <!-- Add to cart Tooltip -->
        <b-button v-on:click="addProductToCart({product, quantity: 1, id})" id="tooltip-cart" class="p-0" variant="transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="18.861" viewBox="0 0 21.5 18.861">
                <g id="Cart_icon" data-name="Cart icon" transform="translate(-91.663 -412.982)">
                    <path class="hoverbar-svg" id="Path_52" data-name="Path 52" d="M92.413,413.733h2.61l5.083,11.643h9.941l2.366-7.651H100.106" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <g id="Group_26" data-name="Group 26" transform="translate(97.856 427.641)">
                    <circle class="hoverbar-svg" id="Ellipse_11" data-name="Ellipse 11" cx="1.726" cy="1.726" r="1.726" transform="translate(10.969)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <circle class="hoverbar-svg" id="Ellipse_12" data-name="Ellipse 12" cx="1.726" cy="1.726" r="1.726" fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                </g>
            </svg>
        </b-button>
      
       
        <b-tooltip target="tooltip-cart" triggers="hover" placement="left" custom-class="tooltip-class">Add to cart</b-tooltip>        
         
      </div>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Quickview from '@/components/quickview/Quickview'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ["product", "id"],
    components: {
        Quickview
    },
    methods: {
        ...mapActions(["getProductById", "addProductToCart", "addProductToCompare", "addProductToWishlist"])
    },
    computed: {
        currentUserId() {
            return sessionStorage.getItem('userId')
        }
    }
}
</script>

<style scoped>
svg:hover .hoverbar-svg {
    stroke: #20D3C2;
}
#hoverbar {
    position: absolute;
    top: 1em;
    right: 1em;
    min-height: 170px;
    width: 40px;
    background: white;
    border-radius: 20px;
    z-index: 50;
}
#tooltip-colors i {
    height: 18px;
    width: 18px;
}
#hoverbar svg {
    width: 18px;
    height: 18px;
    margin: 0.3em 0;
}
#hoverbar i {
    font-size: 1.2rem;
    background-color: #FE4545;
    color: transparent;
    border-radius: 50%;
    margin-top: 1em;
    margin-bottom: 0.3em;
}

.tooltip-class {
    left: -10px !important;
}

.bg-blue { background: #20D3C2; color: #20D3C2; border-radius: 50%; }
.bg-purple { background: plum; color: plum; border-radius: 50%; }
.bg-red { background: #FE4545; color: #FE4545; border-radius: 50%; }
.bg-black { background: black; color: black; border-radius: 50%; }
.bg-gray { background: gray; color: gray; border-radius: 50%; }
.bg-brown { background: #68532b; color: #68532b; border-radius: 50%; }
.bg-yellow { background: #ad943f; color:#ad943f; border-radius: 50%; }
.bg-navy { background: #16236e; color: #16236e; border-radius: 50%; }
.bg-white { background: #ffffff; color: #ffffff; border-radius: 50%; }

</style>

<style>
/* Colors Tooltip */
.colors {
    display: flex;
    align-items: center;
}
.colors i {
    margin-top: -2px;
}
.colors .tooltip-inner {
    background-color: rgb(211, 211, 211) !important;
    padding-top: 3px;
    padding-bottom: 3px;
}
.colors .arrow::before {
    border-left-color: rgb(211, 211, 211) !important;
    top: 3px;
}




/* Other Tooltips */
#hoverbar .tooltip-inner {
    background-color: #20D3C2;
}
#hoverbar .arrow::before {
    border-left-color: #20D3C2 !important;
}


</style>

