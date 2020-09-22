<template>
  <div class="rounded-circle d-flex align-items-center justify-content-center">
      <h5 class="text-uppercase text-white m-0">{{discount}}</h5>
  </div>
</template>

<script>
export default {
    props: ['discount']
}


</script>

<style scoped>
    .rounded-circle {
        background-color: #64CB83;
        height: 70px !important;
        width: 70px !important;
    }
</style>