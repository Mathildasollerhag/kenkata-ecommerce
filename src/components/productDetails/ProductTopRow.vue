<template>
    <div class="blue-theme-bg text-white py-4">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <div>
            <span class="d-flex align-items-center">             
                <router-link class="theme-text" to="/">Home</router-link><span class="mx-2">/</span>
                <router-link class="theme-text" to="/shop">Shop</router-link><span class="mx-2">/</span>
                <router-link class="theme-text text-capitalize" to="">{{product.category}}</router-link><span class="mx-2">/</span> 
                <span>{{product.name}}</span> 
            </span>            
        </div>
        <div class="d-flex py-2">
            <div class="filter-brand">
                <h5 class="text-uppercase font-weight-light m-0">{{product.brand}}</h5>
            </div>
            <div class="d-flex align-items-center ml-3">
                <i class="fas fa-chevron-left font-weight-light"></i>
                <span class="c-pointer" v-b-tooltip.hover title="Back to shop">
                    <router-link to="/shop"><img class="grid-img mx-3 c-pointer" src="@/images/icons/Grid.png" alt=""></router-link>
                </span>                    
                <i class="fas fa-chevron-right font-weight-light"></i>
            </div>       
        </div>
      </div>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    props: ["product"]
}
</script>

<style scoped>
a:hover {
    color: var(--theme);
}
i {
    font-size: 1.4rem;
}
.filter-brand {
    border-radius: 6px;
    letter-spacing: 1.5px;
}
.filter-brand img {
    width: 140px;
    padding: 8px 20px;
}
.grid-img {
    filter: brightness(0) invert(1);
}
</style>