<template>
  <div>
      <div>
        <Sec1 />
        <div class="container sec2 d-md-flex">
          <div class="col-lg-6 mr-lg-2 col-12 bg-light py-4 px-4 sec1 rounded">
            <LoggIn />
          </div>
          <div class="col-lg-6 ml-lg-2 col-12 bg-light py-4 px-5 rounded mt-4 mt-lg-0">
            <Register />
          </div>
        </div>  
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from'@/components/Myaccount/Register.vue'
import LoggIn from'@/components/Myaccount/LoggIn.vue'
import Sec1 from'@/components/Myaccount/Sec1.vue'



export default {
  components: {
    Register,
    LoggIn,
    Sec1
  }
}
</script>

<style scoped>
.sec1{
  height:552px;
}
.sec2{
  margin-top: 6em;
}


</style>