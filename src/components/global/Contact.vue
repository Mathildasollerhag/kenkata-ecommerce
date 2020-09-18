<template>
    <div>
        <div class="arxafon">
        <div class="container">
          <div class="row ">
            <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                <h3 class="big-text green font-weight-bold pt-5 pb-5">Contact</h3>                
            </div>
            <div class="col-12 col-lg-9 d-flex justify-content-center flex-column ">
              <div class="text-center ml-lg-auto">
                <div class="d-flex justify-content-lg-end justify-content-center flex-wrap">
                  <div class="arxayox d-flex  flex-row justify-content-center round bg-white align-items-center">
                    
                    <a class="mr-1 green arxayox" href="">Home </a>/<a class="ml-1 arxayox ag" href="">Contact</a>
                  </div>                 
                </div>       
              </div>
            </div>
          </div>
        </div>
        </div>
        <img class="googleMap" src="../../images/Maps-Gray.png" alt="">
        <div class="container">
      <form class="formclass">
        <div class="formclass1 d-flex flex-column py-4 flex-md-row justify-content-between">
          <span class="d-flex align-items-center ">
            <i class="fas fa-map-marker-alt formclass2 green"></i>
            <span>
              <p>252, Chagalnaiya</p>
              <p>Feni-2500, Bangladesh</p>
            </span>
          </span>
          <span class="d-flex align-items-center ">
            <i class="fas fa-phone-alt formclass2 green"></i>
            <span>
              <p>+880-123456789</p>
              <p>+880-123456789</p>
            </span>
          </span>
          <span class="d-flex align-items-center">
            <i class="fas fa-envelope formclass2 green"></i>
            <span>
              <p>vanilla@website.com</p>
              <p>info@website.com</p>
            </span>
          </span>
        </div>
        <hr class="greenline">
        <div class="row formclass3">
          <div class="col-12 col-md-6">
            <h3 class="text-size-24 green mb-4">Get in Touch</h3>
            <p>We have world-class, flexible support via live chat, email <br> and phone. We guarantee that you’ll be able to have any <br> issue resolved within 24 hours. You can contact support <br> immediately here.</p>
            <div class="mt-4 mb-4 mb-md-0">
              <span class="weight-bold">Follow us</span>
              <hr class="formclass4">
              <div class="text-theme-color mt-2">
                <i class="green fab fa-facebook-f pr-2"></i>
                <i class="green fab fa-twitter px-2"></i>
                <i class="green fab fa-instagram px-2"></i>
                <i class="fas fa-envelope px-2"></i>
                <i class="fab green fa-google-plus-g px-2"></i>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <form>
            <input type="text" class="form-control formclass5" id="1" placeholder="Name">
            <input type="email" class="form-control formclass5" id="1" placeholder="Email">
            <input type="text" class="form-control formclass5" id="1" placeholder="Subject">
            <textarea class="form-control" id="" rows="7" placeholder="Message"></textarea>
            <button class="btn contactButton">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.arxafon{
    background-color: #585f7c;
}
.arxayox{
    background-color: transparent !important;
}
.ag{
    color: white;
}

.green{
    color: #20D3C2 !important;
    background-color: transparent;
}
.googleMap{
width: 100%;
}
.formclass{
  position: relative;
  background-color: #0E153D;
  color: white;
}
.formclass2{
  font-size: 1.3rem;
  margin-bottom: 3rem;
  margin-right: 0.5rem;
}
.formclass1 {
  padding: 5rem;
}
.greenline{
  background-color: #20D3C2;
  margin: 0;
}
.formclass3{
  padding: 3rem;
}
.formclass4{
  background-color: #20D3C2;
  width: 2rem;
  margin: 0;
  margin-bottom: 0.2rem;
  margin-left: 1.5rem;
  display: inline-block;
}
.formclass5{
  margin-bottom: 1rem;
}
.contactButton{
  margin-top: 2rem;
  padding: 0.5rem 1.7rem;
  border-radius: 25px;
  background-color: #20D3C2;
  color: white
}
.contactButton:hover{
  
  color: #20D3C2;
  background-color: white
}
@media(min-width: 768px){
  .formclass{
    margin-top: -8rem;
  }
}
</style>