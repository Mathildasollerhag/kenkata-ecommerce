<template>
  <div class="container-fluid lighter-gray-bg">
            <div class="container">
                <div class="row mx-auto my-auto">
                    <div id="shoppingCarousel" class="carousel slide w-100" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="active carousel-item">
                                <div class="row">
                                    <div class="col-lg-5 align-self-center mb-5">
                                        <h1 class="size1 mt-5 font-weight-normal">{{ $t('translated.shoppingIs') }}</h1>
                                        <h1 class="theme-text size1 font-weight-bold">{{ $t('translated.moreFun') }}</h1>
                                        <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed.</p>
                                        <router-link to="/shop"><button class="btn-hover mt-4 btn bg-white py-2 px-4 _radius theme-text font-weight-bold">{{ $t('translated.shopNow') }}</button></router-link>
                                    </div>
                                    <div class="col-lg-7">
                                        <img class="img-fluid w-100 rounded" src="@/images/carousel1.jpg" alt="Shopping" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-lg-5 align-self-center mb-5">
                                        <h1 class="size1 mt-5 font-weight-normal">{{ $t('translated.newIn') }}</h1>
                                        <h1 class="theme-text size1 font-weight-bold">{{ $t('translated.forKids') }}</h1>
                                        <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed.</p>
                                        <router-link to="/shop"><button class="btn-hover mt-4 btn bg-white py-2 px-4 _radius theme-text font-weight-bold">{{ $t('translated.shopNow') }}</button></router-link>
                                    </div>
                                    <div class="col-lg-7">
                                        <img class="img-fluid w-100 rounded" src="@/images/carousel5.jpg" alt="Shopping" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-lg-5 align-self-center mb-5">
                                        <h1 class="size1 mt-5 font-weight-normal">{{ $t('translated.latest') }}</h1>
                                        <h1 class="theme-text size1 font-weight-bold">{{ $t('translated.mensFashion') }}</h1>
                                        <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed.</p>
                                        <router-link to="/shop"><button class="btn-hover mt-4 btn bg-white py-2 px-4 _radius theme-text font-weight-bold">{{ $t('translated.shopNow') }}</button></router-link>
                                    </div>
                                    <div class="col-lg-7">
                                        <img class="img-fluid w-100 rounded" src="@/images/carousel3.jpg" alt="Shopping" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>



<style scoped>

.btn-hover:hover {
    background-color: var(--blue-theme) !important;
    color: white;
}

.size1 {
  font-size: 3.7rem;
}
._radius {
  border-radius: 20px;
}

@media (max-width: 750px) {
  .center {
    text-align: center !important;
    justify-content: center;
  }
  .changesize {
    height: 80%;
    width: 80%;
    margin-top: 20px;
  }
}

@media (max-width: 992px) {
  #myCarousel {
      margin-bottom: 50px;
  }
}
</style>
