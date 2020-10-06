<template>
  <div class="container mt-5 pt-5">
    <div class="row">
        <div class="col-lg-6 d-none d-lg-block">
            <div class="video-ph">
                <img src="@/images/pexels-onlinestore2.jpg" alt="">
            </div>
        </div>
        <div class="col-lg-6 align-self-center">
            <h1 class="theme-text">We are a responsible <br> quality online store</h1>
            <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small></p>
            <p class="theme-text left-border pl-3"><small class="">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et.</small></p> 
            <p><small>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et, fermentum dolor. In hac habitasse platea dictumst. Nulla pulvinar, eros eget venenatis fermentum, lacus odio dapibus justo, sed semper quam purus quis lacus. Vestibulum vitae neque sed risus scelerisque ultricies.</small></p>
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
  border-radius: 6px;
}

.video-ph {
    height: 640px;
    width: 525px;
}

.left-border {
    border-left: 4px solid var(--blue-theme);
    margin-right: 6rem;
}

@media (max-width: 1200px) {

.border-text {
  text-align: center!important;
}

.left-border {
  margin-right: 0rem;
}

img {
  width: 85%;
}

}


</style>