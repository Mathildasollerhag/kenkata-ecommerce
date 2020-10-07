<template>
<div>
    <footer class="footer py-5">
      <div class="row d-flex mr-auto pr-5 justify-content-end">
          <button @click="scrollToTop" id="scroll-up-btn" class="btn btn-primary d-none d-lg-block"><img src="@/images/Arrow-Up.svg" alt=""></button>
      </div>
  <div id="centered" class="container">
    <div class="row d-flex justify-content-between">
      <div class="col-sm-3">
        <div>
          <img class="pb-4 mt-1" src="@/images/Logo-White.svg" alt="">
          <div>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
            <div>
            <div class="text-white">
              <div id="follow-centered" class="d-flex pt-3">
                <p class="mb-0 pb-1">Follow Us</p>
                <div id="follow-border" class="ml-4 mt-1 d-none d-md-block"></div>
              </div>
                <a href=""><i class="pr-2 pl-0 fab fa-facebook-f"></i></a>
                <a href=""><i class="p-2 fab fa-twitter"></i></a>
                <a href=""><i class="p-2 fab fa-instagram"></i></a>
                <a href=""><i class="p-2 fab fa-pinterest-p"></i></a>
                <a href=""><i class="p-2 fab fa-youtube"></i></a>
            </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
      <div id="contact-info">
        <strong>CONTACT INFO</strong>
        <p id="address" class="mb-0 pt-4 pb-1">Address:</p>
        <p class="text-white">Solna Business Park <br> Feni-2500, Stockholm</p>
        <p class="mb-0  pb-1">Phone:</p>
        <p class="text-white">+08-123456789 <br> +08-123456789</p>
        <p class="mb-0  pb-1">Email:</p>
        <a href=""><p class="text-white mb-0">support@website.com</p></a>
        <a href=""><p class="text-white">info@website.com</p></a>
        </div>
      </div>

      <div class="col-sm-3">
      <div id="useful-links">
        <strong>USEFUL LINKS</strong>
        <div>
        <div>
          <div class="nav-item d-flex flex-column">
            <a id="privacy-policy" class="useful-links pt-4" href="">Privacy Policy</a>
            <a class="terms pt-1 pb-1" href="">Terms &amp; Conditions</a>
            <router-link to="/contact" class="useful-links pt-1 pb-1" href="">Contact Us</router-link>
            <a class="useful-links pt-1 pb-1" href="">Our Sitemap</a>
            <a class="useful-links pt-1 pb-1" href="">Latest News</a>
            <a class="useful-links pt-1 pb-1" href="">Returns</a>
          </div>
           </div>
        </div>
        </div></div>
      
      <div class="col-sm-3 d-none d-xl-block">
      <div>
        <strong>RECENT INSTAGRAM</strong>
        <div>
          <div class="images-gallery">
            <ul>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel4.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel8.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel5.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel7.jpg" alt=""></a></li>
              <li><a href="#"><img src="@/images/Grey-Instagram-Box.svg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel2.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel10.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel11.jpg" alt=""></a></li>
              <li><a href="#"><img class="w-78 rounded" src="@/images/carousel9.jpg" alt=""></a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<div id="copyright">
        <div class="container d-flex flex-wrap justify-content-md-between justify-content-center py-3">
            <div class="my-auto">
                <small id="copyright-text">© Copyright 2020 KenKata</small>
            </div>
            <div class="d-none d-md-block">
                <img class="pr-2" src="@/images/Mastercard.svg" alt="">
                <img class="pr-2" src="@/images/PayPal.svg" alt="">
                <img class="pr-2" src="@/images/Visa.svg" alt="">
                <img class="pr-2" src="@/images/Payoneer.svg" alt="">
                <img class="pr-0" src="@/images/Discover.svg" alt="">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
     scrollToTop: function() { 
            window.scrollTo(0, 0); 
        } 
    } 
  }
</script>

<style scoped>

.w-78 {
  width: 78px;
  height: 78px;
  object-fit: cover;
}

#copyright {
    background-color: #080C24;
    color: white;
    border-top: 0.5px solid #20d3c142;
}

#follow-border {
  border-bottom: 2px solid #20D3C2;
  height: 10px;
  width: 45px;
}

#scroll-up-btn {
  background-color: #20D3C2;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  border: none;
}
#scroll-up-btn:hover {
  background-color: #27b1a3;
}

.footer {
    background-color: #0E153D;
    color: #20D3C2;
    border-top: 6px solid #20D3C2;
}

a i {
    color: #20D3C2;
}
a i:hover {
    color: white;
}
a:hover {
  color: #24afa1;
  text-decoration: underline;
}
a p:hover {
  color: #24afa1!important;
}

.useful-links {
    color: white;
}

.terms {
    color: white;
}

.images-gallery ul{
      padding-left: 0;
}

.images-gallery li{
    list-style: none;
    float: left;
    margin: 0 3% 2% 0;
    width: 31%;
    position: relative;
    padding-top: 7px;
}

li:nth-child(3n) {
    margin: 0 0 2%;
}

@media (min-width: 300px) { 
    
    #centered {
        text-align: center;
    }
}

@media (max-width: 567px) { 
    
    #address {
        padding-top: 5px!important;
    }

    #contact-info {
        padding-top: 15px!important;
    }

    #useful-links {
        padding-top: 15px!important;
    }

    #privacy-policy {
        padding-top: 5px!important;
    }
}

#follow-centered {
  justify-content: center;
}

@media (min-width: 768px) { 
    
    #centered {
        text-align: left;
    }

    #follow-centered {
  justify-content: start;
}
}

@media (min-width: 576px) { 
    
    #centered {
        text-align: left;
    }

    #follow-centered {
  justify-content: start;
}
}

</style>