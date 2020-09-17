<template>
  <div v-if="product" id="quickView">
      <div class="close theme-bg rounded-circle text-white c-pointer">
          X
      </div>
      <div class="py-4 d-flex align-items-center position-relative">
          <Details :product="product"/>
      </div>
  </div>
</template>

<script>
import Details from '@/components/productDetails/Details'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Quickview",
    props: ["id"],
    components: {
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
    position: absolute;
    right: -50%;
    top: 13em;
    padding: 0 1em 1.7em 1em;
    width: 950px;
}
.close {
    position: absolute;
    right: -1.3em;
    top: -1.3em;
    padding: 4px 8px;
}
</style>