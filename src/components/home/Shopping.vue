<template>
       <div class="light-gray-bg">
          <div class="container center">
            <div class="row">
                  <div class="col-lg-5 col-md-5 col-ms-12 align-self-center">
                     <div class="size1"> <span>Shopping is </span> <br > <span class="color"> MORE FUN </span></div>
                     <p class="viv "> vivamus digissiim a ex eu ornare. Ut fermentum orci <br > vel diam ultricies fauibus. quise quis erat sed</p>
                     <router-link to="/shop"><button class="btn bg-white rounded-pill color bb px-5 mt-2 py-3" type="submit">SHOP NOW</button></router-link>
                  </div>
                  <div class="col-lg-6 col-md-6 offset-md-1 col-ms-12 ">
                       <img class="changesize" src="@/images/Banner-thumb.png" >
                  </div>

          
             </div>
         </div>
       </div>
         
        


 
   
</template>



<style scoped>

.size1{
  font-size: 60px;
}
.color{
  color: #20D3C2;
}

.viv{
  margin-top: 10px;
    margin-bottom: 20px;
}
@media (max-width: 750px) { 
    
    .center {
        text-align: center!important;
        justify-content: center;
    }
    .changesize{
      height: 80%;
      width: 80%;
      margin-top: 20px;
    }
}


</style>
