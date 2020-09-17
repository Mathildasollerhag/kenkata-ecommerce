<template>
  <div v-if="product" id="quickView">
      <div class="close theme-bg rounded-circle text-white c-pointer">
          X
      </div>
      <div class="py-5 d-flex align-items-center">
          <Toprow />
          <Details :product="product"/>
      </div>
  </div>
</template>

<script>
import Toprow from './Toprow'
import Details from '@/components/productDetails/Details'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Quickview",
    props: ["id"],
    components: {
        Toprow,
        Details
    },
    methods: {
        ...mapActions(["getProductById"])
    },
    created() {
        this.getProductById(this.id)
    },
    computed: {
        ...mapGetters(["product"])
    }
}
</script>

<style scoped>
#quickView {
    background-color: white;
    border-radius: 10px;
}
.close {
    position: absolute;
    right: -1.3em;
    top: -1.3em;
    padding: 4px 8px;
}
</style>