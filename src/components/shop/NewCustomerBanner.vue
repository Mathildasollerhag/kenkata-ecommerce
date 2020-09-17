<template>
    <section id="new-customer-bg" class="">
	<div class="centered container">
		<div class="row d-flex justify-content-between">
			<div class="mt-5 py-5 mb-5 col-12 col-sm-7 col-md-6 col-lg-5">
                <div class="centered">
                    <h2 id="new-customer" class="text-white">New Customer</h2>
                    <div class="centered d-flex">
                        <h2 id="can-get" class="pr-2 text-white">Can Get</h2>
                        <h2 id="thirty-off">30% Off</h2>
                    </div>
                </div>
                                
                    <div>
                        <button id="learn-more-btn" class="btn pl-4 pr-4 pt-2 pb-2 mt-4">LEARN MORE</button>
                    </div>
                </div>
            <div class="my-auto col-12 col-sm-5 col-md-6 col-lg-6">
                <img src="@/images/New-Customer-Shoes.svg" alt="">
            </div>
		</div>
	</div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

img {
    width: 100%;
}

#learn-more-btn {
  background-color: #fff;
  border-radius: 30px;
  color: #20D3C2;
  font-weight: 600;
  padding-top: 10px!important;
  padding-bottom: 10px!important;
}
#learn-more-btn:hover {
  background-color: #20D3C2;
  color: white;
  transition: .3s ease-in-out;
}

#new-customer {
    font-weight: bold;
    font-size: 2.2em;
    font-family: 'Play', sans-serif;
}

#can-get {
    font-weight: bold;
    font-size: 2.2em;
    font-family: 'Play', sans-serif;
}

#thirty-off {
    color: #20D3C2;
    font-weight: bold;
    font-size: 2.2em;
    font-family: 'Play', sans-serif;
}

#new-customer-bg {
    background-color: #0E153D;
    padding-bottom: 35px;
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

</style>