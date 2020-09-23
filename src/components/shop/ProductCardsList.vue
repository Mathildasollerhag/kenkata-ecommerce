<template>
<div class="product-page">

  <div class="d-flex flex-wrap">
    <div v-for="item in productsCatalog" :key="item.id">
      <ProductCard class="productcard" :item="item"/>
    </div>
  </div>

  <ul class="pagination justify-content-center pt-4">
    <li class="page-item"><a class="" href="javascript:void(0);"><i id="left-arrow" class="fas fa-2x fa-chevron-left"></i></a></li>
    <div class="d-flex my-auto">
      <li class="page-item"><a class="p-2 pl-3 mt-1" href="javascript:void(0);">8</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">9</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">10</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">...</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">24</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">25</a></li>
      <li class="page-item"><a class="p-2 pr-3 mt-1" href="javascript:void(0);">26</a></li>
    </div>
    <li class="page-item"><a class="" href="javascript:void(0);"><i id="right-arrow" class="fas fa-2x fa-chevron-right"></i></a></li>
  </ul>

</div>

</template>

<script>

import { mapGetters } from 'vuex'
import ProductCard from '../products/ProductCard'

export default {
    name: 'ProductsCatalog',
    components: { ProductCard },
    created() {
      this.$store.dispatch("getProducts")
    },
    computed: {
      ...mapGetters(['productsCatalog'])
    }
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
::v-deep .card-text-body {
    position: absolute;
    bottom: 1em;
    left: 1em;
}
::v-deep .rating {
    color: #20D3C2;
    position: absolute;
    bottom: 1em;
    right: 1em;
}

.productcard {
  width: 290px;
  padding-bottom: 20px;
  padding-left: 20px;
}

a {
  color: #0E153D;
  text-decoration: none;
}
a:hover {
  color: #20D3C2;
}

#left-arrow, #right-arrow {
   background-color: white;
    border: 2px solid #20D3C2;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 12px;
    text-align: center;
}

i:hover {
    background-color: #20D3C2!important;
    border: 2px solid #20D3C2;
    color: white!important;
    transition: .2s ease-in-out;
}

@media (max-width: 768px) {

  .product-page {
  margin-right: 0px;
}

}

</style>