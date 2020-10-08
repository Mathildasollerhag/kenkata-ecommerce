<template>
  <div class="modal fade" id="quickviewModal" tabindex="-1" aria-labelledby="quickviewModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content d-flex align-items-center bg-transparent">
        <!-- <Quickview /> -->
        <div id="quickView">
            <div class="close theme-bg rounded-circle text-white c-pointer" data-dismiss="modal" aria-label="Close">
                <i class="fas fa-times"></i>
            </div>
            <div v-if="product !== null" class="py-4 d-flex align-items-center position-relative">
                <Details :product="product"/>
            </div>
        </div>
      </div>
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
    created() {
        // console.log(id)
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
    margin-top: 4em;
    padding: 0 1em 1.7em 1em;
    width: 400px; 
}
.close {
    position: absolute;
    right: -1.5em;
    top: 1.5em;
    padding: 2px 12px;
}
i {
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 6px;
}
@media (min-width: 600px) {
    #quickView {
        width: 500px; 
    }
}
@media (min-width: 1200px) {
    #quickView {
        width: 950px; 
        margin-top: 12em;
    }
    .close {
        right: -10.8em;
        top: 6.8em;
    }
}
</style>