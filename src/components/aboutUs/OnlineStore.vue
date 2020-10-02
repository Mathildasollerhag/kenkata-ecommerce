<template>
  <div class="blue-theme-bg-op">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-6 my-5 py-5">
                <h1 class="text-white font-weight-light h1-size mt-5">
                    We are an
                </h1>
                <h1 class="theme-text font-weight-bold h2-size mb-3">
                    ONLINE STORE
                </h1>
                <p class="text-white mb-4 mr-5">
                    Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed
                </p>
                <button class="mb-5 btn bg-white theme-text custom-radius px-4 py-2 font-weight-bold">LEARN MORE</button>
            </div>
        <div class="col-lg-6 pl-45">
            <div class="h-75">
              <img src="@/images/pexels-onlinestore.jpg" alt="">
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

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.custom-radius {
  border-radius: 20px;
}

.h1-size {
  font-size: 3rem;
  font-weight: bold;
}

.h2-size {
  font-size: 4rem;
  font-weight: bold;
}

.h-75 {
    height: 75%;
}

.pl-45 {
    padding-left: 4.5rem;
}



</style>