<template>
  <div class="gray-bg">
            <div class="container">
                <div class="row d-flex justify-content-center">
                     <div class="col-lg-6 discount-div">
                        <div class="col-lg-6 theme-bg text-center py-5">
                            <div class="my-5 background-div">
                                <div class="text-white">
                                    <span class="h1-size">30%</span>
                                    <span class="h3-size">OFF</span>
                                    <p>FOR NEW CUSTOMER</p>
                                </div>
                                    <router-link to="/shop"><button class="btn-hover btn blue-theme-bg text-white custom-radius px-4">SHOP NOW</button></router-link>
                            </div>
                                
                        </div>
                     </div>
                     <div class="discount-div col-lg-6 text-white py-5 text-center text-lg-left my-auto">
                        <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
                        <button class="learn-more-btn btn bg-white custom-radius theme-text px-4 mt-4">LEARN MORE</button>
                     </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.btn-hover:hover {
  background-color: white;
  color: var(--theme) !important;
}

.learn-more-btn:hover {
  color: white;
  background-color: #0E153D !important;
  transition: .2s ease-in-out;
}

.h1-size {
  font-size: 4rem;
  font-weight: bold;
}

.h3-size {
  font-size: 2rem;
  margin-left: 1rem;
  font-weight: bold;
}

.custom-radius {
  border-radius: 20px;
}

@media (max-width: 576px) { 

.discount-div {
  width: 85%;
}

.background-div {
  margin-top: 0!important;
  margin-bottom: 0!important;
}

}

</style>