<template>
    <div id="banner-bg">
        <div class="container py-4">
            <div class="flex-row d-lg-flex justify-content-between">
                <div>
                    <h3 id="shop-h3">Shop</h3>
                    <div class="d-flex">
                        <a href="/"><router-link class="text-dark" to="/">Home</router-link></a>
                        <p class="px-2">/</p>
                        <a class="pl-1" href="/shop"><router-link id="shop-p" to="/shop">Shop</router-link></a>
                    </div>
                </div>

                <div class="flex-row d-none d-md-flex">
                    <div class="settings-bg text-white my-auto pl-4 pr-4 pt-3 pb-3 mr-4">
                        <span>Show: </span>
                        <a href="#">9 / </a>
                        <a href="#">12 / </a>
                        <a href="#">18 / </a>
                        <a href="#">24</a>
                    </div>

                    <div class="settings-bg text-white my-auto mr-4">
                        <a href="#"><i class="grid-icons fas fa-2x fa-list pl-4"></i></a>
                        <a href="#"><i class="grid-icons fas fa-2x fa-th-large"></i></a>
                        <a href="#"><i class="grid-icons fas fa-2x fa-th pr-4"></i></a>
                    </div>

                    <div class="dropdown show settings-bg my-auto pl-4 pr-4 pt-3 pb-3">
                        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Default sorting <i class="pl-5 fas fa-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#">Men's</a>
                            <a class="dropdown-item text-dark" href="#">Women's</a>
                            <a class="dropdown-item text-dark" href="#">Kids</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: (
            'ShopSettingsBanner'
        )
    }
</script>

<style scoped>

#shop-p {
    color: #20D3C2!important;
}
#shop-h3 {
    font-weight: 600;
    color: #20D3C2!important;
}

.grid-icons {
    font-size: 32px;
    padding: 12px 10px;
}

#banner-bg {
    background-color: #F6F6F6;
}

.settings-bg {
    background-color: #0E153D;
    border-radius: 7px;
}

a {
    color: white;
    text-decoration: none;
}
a:hover {
    color: #20D3C2;
}

</style>