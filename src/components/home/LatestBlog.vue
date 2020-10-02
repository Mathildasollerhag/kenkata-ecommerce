<template>
    <section class="testimonials-section d-none d-xl-block">
	<div class="container">
		<div class="row">
		<div class="col-12">
			<div class="text-center mt-5 mb-5 pt-5">
                <div class="d-flex justify-content-center">
                    <h1 id="latest">LATEST</h1>
                    <h1 id="blog" class="pl-2">BLOG</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3">Read our latest posts about our events and trending news</p>
			</div>

		<div class="col-center m-auto">
			<div id="myCarousel4" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel4" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel4" data-slide-to="1"></li>
                <li data-target="#myCarousel4" data-slide-to="2"></li>
            </ol>
 
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="img-box d-flex">
                            <img class="blog-img" src="@/images/pexels-scenery.jpg" alt="">
                            <div class="blog-text-div-1 text-left">
                                <div class="pl-4 pr-5 mr-4">
                                  <div class="date text-center">
                                    <p class="mb-0" id="twenty-nine">29</p>
                                    <p class="mars">MAR</p>
                                  </div>
                                <div class="d-flex pr-4">
                                    <small class="pr-1">By</small>
                                    <small id="adam">Adam Moore</small>
                                </div>
                                <div>
                                    <p class="mt-2">A beautiful scenery in <br> the world we are missing</p>
                                </div>
                                <div class="d-flex">
                                    <div class="pr-2">
                                        <p class="badges">Travel</p>
                                    </div>
                                    <div>
                                        <p class="badges">Fashion</p>
                                    </div>
                                </div>
                                <div>
                                    <button id="read-more-btn" class="btn mb-4 mt-1 pl-3 pr-3 pt-1 pb-1">Read more</button>
                                </div>
                              </div>
                            </div>

                            <div class="img-box">
                            <img class="blog-img" src="@/images/pexels-people.jpg" alt="">
                            <div class="blog-text-div-2 text-left">
                                <div class="pl-4 pr-5">
                                  <div class="date text-center">
                                    <p class="mb-0" id="twenty-nine">18</p>
                                    <p class="mars">JUL</p>
                                  </div>
                                <div class="d-flex pr-4">
                                    <small class="pr-1">By</small>
                                    <small id="adam">Jonathon Doe</small>
                                </div>
                                <div>
                                    <p class="mt-2">We love our country, we love <br> our peoples like ourselves</p>
                                </div>
                                <div class="d-flex">
                                    <div class="pr-2">
                                        <p class="badges">Travel</p>
                                    </div>
                                    <div>
                                        <p class="badges">Fashion</p>
                                    </div>
                                </div>
                                <div>
                                    <button id="read-more-btn" class="btn mb-4 mt-1 pl-3 pr-3 pt-1 pb-1">Read more</button>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>

					</div>
                    <div class="item carousel-item">
						<div class="img-box d-flex">
                            <img class="blog-img" src="@/images/pexels-scenery2.jpg" alt="">
                            <div class="blog-text-div-1 text-left">
                                <div class="pl-4 pr-5 mr-4">
                                  <div class="date text-center">
                                    <p class="mb-0" id="twenty-nine">20</p>
                                    <p class="mars">DEC</p>
                                  </div>
                                <div class="d-flex pr-4">
                                    <small class="pr-1">By</small>
                                    <small id="adam">Mark Osgood</small>
                                </div>
                                <div>
                                    <p class="mt-2">A beautiful scenery in <br> the world we are missing</p>
                                </div>
                                <div class="d-flex">
                                    <div class="pr-2">
                                        <p class="badges">Travel</p>
                                    </div>
                                    <div>
                                        <p class="badges">Fashion</p>
                                    </div>
                                </div>
                                <div>
                                    <button id="read-more-btn" class="btn mb-4 mt-1 pl-3 pr-3 pt-1 pb-1">Read more</button>
                                </div>
                              </div>
                            </div>

                            <div class="img-box">
                            <img class="blog-img" src="@/images/pexels-people2.jpg" alt="">
                            <div class="blog-text-div-2 text-left">
                                <div class="pl-4 pr-5">
                                  <div class="date text-center">
                                    <p class="mb-0" id="twenty-nine">12</p>
                                    <p class="mars">APR</p>
                                  </div>
                                <div class="d-flex pr-4">
                                    <small class="pr-1">By</small>
                                    <small id="adam">Joe Fuller</small>
                                </div>
                                <div>
                                    <p class="mt-2">We love our country, we love <br> our peoples like ourselves</p>
                                </div>
                                <div class="d-flex">
                                    <div class="pr-2">
                                        <p class="badges">Travel</p>
                                    </div>
                                    <div>
                                        <p class="badges">Fashion</p>
                                    </div>
                                </div>
                                <div>
                                    <button id="read-more-btn" class="btn mb-4 mt-1 pl-3 pr-3 pt-1 pb-1">Read more</button>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                    </div>

				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel4" data-slide="prev">
					<i id="right-arrow" class="fas fa-2x fa-chevron-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel4" data-slide="next">
					<i id="right-arrow" class="fas fa-2x fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
  </div>
</div>
</section>
</template>

<script>
    export default {
        name: (
            'LatestBlog'
        )
    }
</script>

<style scoped>

.blog-img {
    border-radius: 6px;
    opacity: 85%;
}

#read-more-btn {
  background-color: #fff;
  border-radius: 20px;
  color: #20D3C2;
  font-weight: 600;
}
#read-more-btn:hover {
  background-color: #20D3C2;
  color: white;
  transition: .3s ease-in-out;
}

.badges {
    border: 1.5px solid white;
    padding-left: 8px;
    padding-right: 8px;
}

#adam {
    text-decoration: underline;
}

#img-box {
    position: relative;
}

#twenty-nine {
    font-size: 2.5em;
    font-family: 'Play', sans-serif;
    font-weight: bold;
}

.mars {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1em;
    margin-top: -10px!important;
    padding-bottom: 7.5px;
}
.date {
    background-color: #20D3C2;
    width: 33%;
}

.blog-text-div-1 {
    background-color: #0E153D;
    color: white;
    border-radius: 7px;
     position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
}

.blog-text-div-2 {
    background-color: #0E153D;
    color: white;
    border-radius: 7px;
     position: absolute;
    top: 50%;
    right: -10%;
    transform: translate(-50%, -50%);
}

#latest {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#blog {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

.carousel-indicators > li {
  border-radius: 40%;
  width: 10px;
  height: 10px;
  background-color: #20D3C2;
}

.carousel-indicators {
    margin-bottom: -40px;
}

#left-arrow, #right-arrow {
    background-color: white;
    border: 2px solid #20D3C2;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 8px;
    text-align: center;
}

#right-arrow {
    margin-left: -30px;
}

i:hover {
    background-color: #20D3C2!important;
    border: 2px solid #20D3C2;
    color: white!important;
}

/*=================================================== TESTIMONIALS SECTION ==========================================================*/

.testimonials-section{
  padding:0px 50px 80px;
}


/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}

.carousel {
  margin: 50px auto;
  padding: 0 50px;
}

.carousel .item {
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    min-height: 290px;
}

.carousel .item .img-box {
  margin: 0 auto;
  padding: 5px;
}

.carousel .testimonial {
  padding: 30px 0 10px;
}

.carousel-inner {
    text-align: center;
}

.carousel-title{
  margin-top: 20px;
  font-weight: 600;
  color: #20D3C2;
}

.carousel .overview { 
    font-size: 12px;
    margin-bottom: 5px;
}

.carousel .carousel-control {
    width: 0px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
    opacity: 100;
}
.carousel-control i {
    font-size: 25px;
    line-height: 42px;
    position: absolute;
    display: inline-block;
}

</style>