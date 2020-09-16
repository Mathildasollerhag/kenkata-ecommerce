<template>
  <div id="infoCards" class="row mx-5 pt-5 mt-5 media-lg-block">
            <div class="light-cyan-bg rounded col-11 col-lg ml-4" id="card-hover">
                <div class="card-body d-flex mt-2">
                    <i class="theme-text fa-3x fas fa-box-open col-3 my-auto"></i>
                    <div class="col-8">
                        <h6 class="theme-text">Free shipping</h6>
                        <p>For a local customer, we provide free shipping facility</p>
                    </div>
                </div>
            </div>
            <div class="light-cyan-bg rounded col-11 col-lg ml-4" id="card-hover">
                <div class="card-body d-flex mt-2">
                    <i class="theme-text fa-3x col-3 my-auto far fa-clock"></i>
                    <div class="col-8">
                        <h6 class="theme-text">24/7 support</h6>
                        <p>For any inquiry, we are available 24 hours every day</p>
                    </div>
                </div>
            </div>
            <div class="light-cyan-bg rounded col-11 col-lg ml-4" id="card-hover">
                <div class="card-body d-flex mt-2">
                    <i class="theme-text fa-3x col-3 my-auto fas fa-money-check-alt"></i>
                    <div class="col-8">
                        <h6 class="theme-text">Online payment</h6>
                        <p>You can pay quickly and easily with our online system</p>
                    </div>
                </div>
            </div>
            <div class="light-cyan-bg rounded col-11 col-lg ml-4" id="card-hover">
                <div class="card-body d-flex mt-2">
                    <i class="theme-text fa-3x col-3 my-auto fas fa-shipping-fast"></i>
                    <div class="col-8">
                        <h6 class="theme-text">Fast delivery</h6>
                        <p>We understand your urgency and we deliver in a fast way</p>
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

#card-hover:hover {
  background-color: var(--theme);
  color: #FFFFFF;
}

#card-hover:hover h6 {
color: #FFFFFF;
}

#card-hover:hover .fas {
color: #FFFFFF;
}

#card-hover:hover .far {
color: #FFFFFF;
}

#card-hover:hover small {
color: #FFFFFF;
}

@media (max-width: 1600px) {
  .media-lg-block {
    display: block;
  }
}

@media (max-width: 500px) {
  .media-lg-block {
    display: table-cell;
  }
}

</style>