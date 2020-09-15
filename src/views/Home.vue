<template>
  <div class="home">
    <!-- New Arrivals -->
    <div class="my-5 container">
        <div class="text-center">
          <div class="d-flex justify-content-center text-uppercase">
            <h2 class="text-kenkata-darkblue font-weight-bold">New</h2>
            <h2 class="text-kenkata-blue font-weight-bold ml-2">Arrivals</h2>
          </div>
          <p class="my-3">Check out our latest products from top fashion designers</p>
        </div>
      <NewArrivals />
    </div>
  </div>
</template>

<script>
import NewArrivals from '@/components/home/NewArrivals'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    NewArrivals
  }
}
</script>

<style scoped>

</style>
