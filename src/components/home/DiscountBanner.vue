<template>
  <div class="gray-bg">
            <div class="container">
                <div class="row d-flex justify-content-center">
                     <div class="col-lg-6">
                        <div class="col-lg-6 theme-bg text-center py-5">
                            <div class="my-5">
                                <div class="text-white">
                                    <span class="h1-size">30%</span>
                                    <span class="h3-size">OFF</span>
                                    <p>FOR NEW CUSTOMER</p>
                                </div>
                                    <router-link to="/shop"><button class="btn blue-theme-bg text-white custom-radius px-4">SHOP NOW</button></router-link>
                            </div>
                                
                        </div>
                     </div>
                     <div class="col-lg-6 text-white py-5 text-lg-left text-sm-center my-5">
                        <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
                        <button class="btn bg-white custom-radius theme-text px-4 mt-4">LEARN MORE</button>
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

</style>