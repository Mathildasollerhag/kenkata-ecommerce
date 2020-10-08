<template>
    <section id="subscribe-bg">
	<div class="centered container">
		<div class="row d-flex justify-content-between">
			<div class="mt-5 mb-5 col-12 col-sm-12 col-md-6 col-lg-5">
                <div class="centered d-flex">
                    <h2 id="subscribe">SUBSCRIBE</h2>
                    <h2 id="now" class="pl-2">NOW</h2>
                </div>
                <p class="pt-2">Signup for awesome news about our new products and <br> know our special discounts on products.</p>
                
                <div class="buttonInside pt-3">
                    <div>
                        <input class="form-control" type="email" placeholder="Enter email address">
                        <button id="read-more-btn" class="btn pl-3 pr-3 pt-1 pb-1">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="my-auto col-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-block">
                <img id="subscribe-img" src="@/images/pexels-subscribe-img.jpg" alt="">
            </div>
		</div>
	</div>
    </section>
</template>

<script>
    export default {
        name: (
            'SubscribeBanner'
        )
    }
</script>

<style scoped>

img {
    width: 100%;
}

.buttonInside{
  position:relative;
}

input{
  padding: 23px;
  border-radius: 50px;
  border: 1.5px solid #20d3c14f;
}

input::placeholder {
    color: #AAAAAA;
}

button{
  position:absolute;
  right: 4px;
  top: 20px;
  padding-top: 7px!important;
  padding-bottom: 7px!important;
  text-align:center;
  background-color: #20D3C2;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}
button:hover {
  background-color: var(--blue-theme);
  color: white;
}

#subscribe-bg {
    background-color: #F6F6F6;
}

#subscribe {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#now {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

@media (min-width: 300px) { 
    
    .centered {
        text-align: center!important;
        justify-content: center;
    }
}

@media (min-width: 768px) { 
    
    .centered {
        text-align: left!important;
        justify-content: start;
    }
}

@media (max-width: 768px) { 
    
    #subscribe-img {
        margin-bottom: 50px;
    }
}

</style>