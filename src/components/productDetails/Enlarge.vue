<template>
<div class="modal fade" id="enlargeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img :src="image" alt="" class="w-200" >
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["product", "id", "image"],
  methods: {
    ...mapActions(["getProductById"])
  },

}
</script>

<style scoped>

.modal-lg {
  width: 1000px;
  height: auto;
}

.w-200 {
  max-width: 750px;
}
</style>