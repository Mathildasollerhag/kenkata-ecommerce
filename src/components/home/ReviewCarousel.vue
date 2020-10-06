<template>
    <section class="testimonials-section">
	<div class="container">
		<div class="row">
		<div class=" testimonials">
			<div class="d-flex justify-content-center">
				<img src="@/images/Quote.svg" alt="">
			</div>			

		<div class="col-center m-auto">
			<div id="review-carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#review-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#review-carousel" data-slide-to="1"></li>
                <li data-target="#review-carousel" data-slide-to="2"></li>
            </ol>
 
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="img-box"><img class="img-border" src="@/images/pexels-johny.jpg" alt=""></div>
						<div><img class="mt-4" src="@/images/Rating-Stars.svg" alt=""></div>
                        <h6 class="carousel-title">JOHNY WESMULLAR</h6>
						<p class="text-white">CEO, Biotech Inc.</p>

						<p class="testimonial text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br> and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
					</div>

					<div class="item carousel-item">
						<div class="img-box"><img class="img-border" src="@/images/pexels-zack.jpg" alt=""></div>
						<div><img class="mt-4" src="@/images/Rating-Stars.svg" alt=""></div>
                        <h6 class="carousel-title">ZACK ANDERSON</h6>
						<p class="text-white">CEO, Biotech Inc.</p>

						<p class="testimonial text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br> and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
					</div>

					<div class="item carousel-item">
						<div class="img-box"><img class="img-border" src="@/images/pexels-men.jpg" alt=""></div>
						<div><img class="mt-4" src="@/images/Rating-Stars.svg" alt=""></div>
                        <h6 class="carousel-title">STEVE BROWNBEARD</h6>
						<p class="text-white">CEO, Biotech Inc.</p>

						<p class="testimonial text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br> and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
					</div>

				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#review-carousel" data-slide="prev">
					<i id="right-arrow" class="fas fa-2x fa-chevron-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#review-carousel" data-slide="next">
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
            'Testimonial'
        )
    }
</script>

<style scoped>

.img-border {
  border: 3px solid white;
  border-radius: 6px;
}

.carousel-indicators > li {
  border-radius: 40%;
  width: 10px;
  height: 10px;
  background-color: #20D3C2;
}

.carousel-indicators {
    margin-bottom: -20px;
}

#left-arrow, #right-arrow {
    background-color: white;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 12.5px;
    text-align: center;
}

i:hover {
    background-color: #20D3C2!important;
    color: white!important;
    transition: .2s ease-in-out;
}

/*=================================================== TESTIMONIALS SECTION ==========================================================*/

.testimonials-section{
  padding:0px 50px 80px;
  margin-top: 100px;
  background-color: #0E153D;
}


/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 50px auto;
  padding: 0 170px;
}
.carousel .item {
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    min-height: 290px;
}
.carousel .item .img-box {
  width: 170px;
  height: 170px;
  margin: 0 auto;
  padding: 5px;
}
.carousel .img-box img {
  width: 100%;
  height: 100%;
  display: block;
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
    font-size: 30px;
    line-height: 35px;
    position: absolute;
    display: inline-block;
}

@media (max-width: 768px) { 
    
    .carousel {
      padding: 0 0!important;
    }
}


</style>