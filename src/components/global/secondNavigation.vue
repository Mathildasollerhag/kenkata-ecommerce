<template>
    <div>
        <div class="container pt-4 pb-4">
            <div class="row">
                <div class="col-12 col-xl-2"><router-link class="navbar-brand" id="brand" to="/"><img src="../../images/logo.png" alt=""></router-link></div>
                <div class="col-12 col-xl-6">
                    <div class="input-group class1">
                        <div class="col-5 col-md-6 col-xl-7 pr-0 pl-0"><input id="myclass5" type="text" class="form-control" placeholder="Search products..." aria-label="Search products..." aria-describedby="basic-addon2"></div>
                        <a class="form-control myclass6 col-5 col-md-5 col-xl-5" href="#">
                            <div class="dropdown myclass1">
                                <a id="downmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p>Categories <i class="fas fa-chevron-down smaller margin"></i></p></a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </a>
                        <div class="input-group-append green btnextra2 "><button class="btn pr-3 pt-2" type="button"><i class="fas fa-search white btnextra"></i></button></div>
                    </div>
                </div>
                <div class=" col-xl-4 d-flex"><div class="iconsextra class2 classmargin"><router-link to="/account"><i class="far fa-user icon-size mr-1"></i>My account</router-link></div>
                    <div class=" iconsextra ml-4"><i class="far fa-heart icon-size"></i></div>
                    <div class=" iconsextra ml-4"><router-link to="/compare"><i class="fas fa-random mr-3 icon-size myclass2"></i></router-link><span class="badge badge-pill green white myclass3">0</span></div>
                    <div class=" iconsextra ml-4 my-width"><router-link class="text-dark" to="/shoppingcart"><i class="fas fa-shopping-bag icon-size "></i></router-link> $0.00<span class="badge badge-pill green white cart2">0</span></div>
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
.green{
    background-color: #20D3C2;
}
.class2 {
    font-size: 14px;
}
.class1 {
    padding-top: 1rem;; 
}
router-link {
    color: black !important;
}
a {
    text-decoration: none !important;
    color: black;
}
.nav-link {
    padding-bottom: 5px;
    color: black !important;
}

.margin-link {
    margin-left: 0.2rem !important;
}
.myclass2 {
    position: absolute;
}
.myclass3 {
    position: relative;
    top: -15px;
    left: 10px;
    font-size: 10px;
}

.cart2 {
    position: relative;
    top: -15.9px;
    left: -58px;
    font-size: 10px;
}
.btnextra {
    font-weight: 400;
    font-size: 18px;
    margin-left: -0.01rem;
}
.icon-size {
    font-weight: 400;
    font-size: 22px;
}
.btnextra2 {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
#myclass5 {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 14px;
    padding-left: 1.4rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
}::placeholder {
    color: rgb(153, 153, 153) !important;
}
#downmenu {
    color: black;
} 
#downmenu i {
    margin-left: 1rem;
    color: var(--green);
}
.myclass1 {
    margin-top: -0.7rem !important;
}
.iconsextra {
    padding-top: 1rem !important;
}

.myclass6 {   
    padding-left: 0.5rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
    padding-right: 0;
}
.white {
    color: white !important; 
}
.nav-item:hover {
    text-decoration: none;
}
.navbar-brand {
    padding: 0;
    padding-top: 0.3rem;
}
#navbarSupportedContent {
    padding-right: 0;
}
.active {
    position: relative;
}
.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 9px;
    height: 4px;
    width: 70%;
    background-color: #20D3C2;
}


@media (min-width: 1200px) { 
    .classmargin {
        margin-left: 3.5rem;
    }
    .margin {
        margin-left: 0.75rem !important;
    }
    .class1 {
        padding-top: 0rem;; 
    }
}
</style>