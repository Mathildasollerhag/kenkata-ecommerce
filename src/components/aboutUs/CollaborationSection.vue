<template>
  <div class="row mt-5 pt-3 h-150 mb-15">
    <div class="div-img-1 col-lg-4 gray-bg d-flex align-items-end">
        <div class="blue-theme-bg col-8 p-3">
            <p class="font-weight-bold m-0 theme-text">Always try to get the perfect <br> collaboration</p>
            <small class="text-white">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus</small>
        </div>
    </div>
    <div class="div-img-2 col-lg-4 blue-theme-bg-op d-flex align-items-end">
        <div class="col-8 pt-2">
            <p class="font-weight-bold m-0 mb-2 theme-text">Always try to get the perfect <br> collaboration</p>
            <small class="text-white">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus</small>
            <br>
            <button class="mb-4 mt-3 btn bg-white theme-text font-weight-bold custom-radius px-4 py-2">LEARN MORE</button>
        </div>
    </div>
    <div class="div-img-3 col-lg-4 gray-bg d-flex align-items-end">
        <div class="blue-theme-bg col-8 p-3">
            <p class="font-weight-bold m-0 theme-text">Always try to get the perfect <br> collaboration</p>
            <small class="text-white">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus</small>
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
    background-color: var(--theme) !important;
    color: white;
}

.row {
    margin-right: 0!important;
}

.div-img-1 {
    background-image: url(https://s1.gifyu.com/images/pexels-the-th-179909.jpg);
    background-size: cover;
}
.div-img-2 {
    background-image: url(https://s1.gifyu.com/images/pexels-collaboration.png);
    background-size: cover;
}
.div-img-3 {
    background-image: url(https://s1.gifyu.com/images/pexels-ali-naaz-4301252bd1635e92a5d8119.jpg);
    background-size: cover;
}

.h-150 {
    height: 35rem;
}

.custom-radius {
    border-radius: 20px;
}

.mb-15 {
    margin-bottom: 5rem;
}
</style>