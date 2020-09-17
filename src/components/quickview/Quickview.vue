<template>
  <div id="quickView">
      <div class="close theme-bg rounded-circle text-white c-pointer">
          <i class="fas fa-times"></i>
      </div>
      <div v-if="product !== null" class="py-4 d-flex align-items-center position-relative">
          <Details :product="product"/>
      </div>
  </div>
</template>

<script>
import Details from '@/components/productDetails/Details'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Quickview",
    components: {
        Details
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
    margin-top: 12em;
    padding: 0 1em 1.7em 1em;
    width: 950px;
}
.close {
    position: absolute;
    right: -10.8em;
    top: 6.8em;
    padding: 2px 12px;
}
i {
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 6px;
}
</style>