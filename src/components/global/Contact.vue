<template>
    <div>
      <div id="banner-bg">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Contact</h3>
                <div>
                    <div class="d-flex align-items-center"><router-link id="home" to="/">Home</router-link>
                        <div id="slash" class="px-2">/</div>
                        <router-link id="compare" to="/contact">Contact</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!--<img class="googleMap" src="../../images/Maps-Gray.png" alt="">-->

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Chhagalnaiya%20%20city%20center%2C%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
             frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe><a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>

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
              <a href="#"><p>vanilla@website.com</p></a>
              <a href="#"><p>info@website.com</p></a>
            </span>
          </span>
        </div>
        <hr class="greenline">
        <div class="row formclass3">
          <div class="col-12 col-md-6">
            <h3 class="text-size-24 green mb-4">Get in Touch</h3>
            <p>We have world-class, flexible support via live chat, email <br> and phone. We guarantee that you’ll be able to have any <br> issue resolved within 24 hours. You can contact support <br> immediately here.</p>
            <div class="mt-4 mb-4 mb-md-0">
              <span class="font-weight-bold">Follow us</span>
              <hr class="formclass4">
              <div class="text-theme-color mt-2">
                <a href="#"><i class="green fab fa-facebook-f pr-2"></i></a>
                <a href="#"><i class="green fab fa-twitter px-2"></i></a>
                <a href="#"><i class="green fab fa-instagram px-2"></i></a>
                <a href="#"><i class="fab fa-pinterest-p px-2"></i></a>
                <a href="#"><i class="fab green fa-google-plus-g px-2"></i></a>
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
    
};
</script>

<style scoped>

#banner-bg {
  background-color: #0E153D;
  opacity: 65%;
  padding-top: 35px;
  padding-bottom: 35px;
}
h3 {
    color: #25ac9e;
}
#home {
    color: #25ac9e!important;
}
#home:hover {
    color: white!important;
}
#slash {
    color: white;
}
a {
    text-decoration: none;
}

.mapouter {
  position:relative;text-align:right;height:500px; width:100%;
 }
 
.gmap_canvas {
overflow:hidden;background:none!important;height:500px; width: 100%;
}

a {
  color: white;
}

.fa-pinterest-p {
  color: white;
}

.fab:hover {
  color: white!important;
}

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
  border-radius: 6px;
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