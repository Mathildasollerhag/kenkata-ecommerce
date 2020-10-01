<template>
  <div>
      <div>
             <Sec1 />
             <div class="container sec2 ">
                  <div class="row ml-4">
                      <div class=" col-lg-6 col-md-6 col-ms-12 bg-light py-4 px-4 sec1 rounded">
                                <LoggIn />
                      </div>
                       <div class=" col-lg-5 ml-2 col-md-5  col-ms-12  bg-light py-4 px-5 ml-4 rounded ">
                           <Register />
                       </div>

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
  height:522px;
}

</style>