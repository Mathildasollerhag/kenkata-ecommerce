<template>
  <div class="pt-5">
            <div class="blue-theme-bg pb-5">
                <div class="container">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="col-lg-6 theme-bg text-center pt-5">
                                    <div class="text-white">
                                        <div class="h1-size1">FLASH</div>
                                        <div class="h1-size1">SALE</div>
                                        <div class="h3-size1 pb-5 mt-3 font-weight-light">UP TO 50% OFF</div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-6 text-white py-5 text-lg-left text-sm-center my-5 d-none d-lg-block">
                            <div class="text-center">
                                <div class="d-flex justify-content-around text-center theme-text">
                                    <div class="bg-white time-circle1">
                                        <h2 class="font-weight-bold">7</h2><div class="text-dark">Days</div>
                                    </div>
                                    <div class="bg-white time-circle1">
                                        <h2 class="font-weight-bold">23</h2><div class="text-dark">Hours</div>
                                    </div>
                                    <div class="bg-white time-circle2">
                                        <h2 class="font-weight-bold">46</h2><div class="text-dark">Minutes</div>
                                    </div>
                                    <div class="bg-white time-circle2">
                                        <h2 class="font-weight-bold">12</h2><div class="text-dark">Seconds</div>
                                    </div>
                                </div>
                                <router-link to="/shop"><button class="btn bg-white custom-radius theme-text px-4 mt-4 py-2 font-weight-bold">SHOP NOW</button></router-link>
                            </div>
                        </div>
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

button:hover {
    color: white;
    background-color: var(--theme) !important;
    transition: .2s ease-in-out;
}

.container {
    width: 85%;
}

.custom-radius {
  border-radius: 20px;
}

.time-circle1 {
  padding: 15px 32px 15px 32px;
  border-style: dashed;
  border-radius: 50%;
}

.time-circle2 {
  padding: 15px 22px 15px 22px;
  border-style: dashed;
  border-radius: 50%;
}

.h1-size1 {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
}

.h3-size1 {
  font-size: 2rem;
  margin-left: 1rem;
  font-weight: bold;
  line-height: 1.2;
}


</style>