<template>
<div class="border-top">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><button id="mybutton2" class="btn nav-item dropdown green"><a class="nav-link myclass10" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" fas fa-bars myclass10 mr-1"></i>{{ $t('translated.browseCategories') }} <i class="fas fa-chevron-down myclass8 myclass10"></i></a><div class="dropdown-menu pl-2" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a></div></button>

                <li class="nav-item active myclass7"><router-link class="nav-link" to="/">{{ $t('translated.home') }}</router-link></li>
                <li class="nav-item dropdown myclass7"><router-link class="nav-link" to="/shop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.shop') }}<i class="fas fa-chevron-down pl-2"></i></router-link><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">{{ $t('translated.clothes') }}</a><a class="dropdown-item" href="#">{{ $t('translated.accessories') }}</a></div></li>
                <li class="nav-item myclass7"><a class="" href="/Products"><div class="dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.products') }} <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7"><a class="" href="/Categories"><div class=" dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('translated.categories') }} <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7">
                    <a class="" href="#">
                    <div class=" dropdown nav-link">
                        <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ $t('translated.pages') }} <i class="fas fa-chevron-down myclass9"></i>
                        </a>

                        <div class="dropdown-menu pl-2" aria-labelledby="dropdownMenuButton">
                            <router-link to="/shop" class="dropdown-item">Shop</router-link>
                            <router-link to="/wishlist" class="dropdown-item">{{ $t('translated.whislist') }}</router-link>
                            <router-link to="/contact" class="dropdown-item">{{ $t('translated.contactUs') }}</router-link>
                            <router-link to="/about" class="dropdown-item">{{ $t('translated.aboutUs') }}</router-link>
                            <router-link to="/team" class="dropdown-item">Team</router-link>
                            <router-link to="/portfolio" class="dropdown-item">{{ $t('translated.portfolio') }}</router-link>
                        </div>
                    </div>
                    </a>
                </li>

                 

                

                <li class="nav-item myclass7"><router-link class=" nav-link" to="/">Blog</router-link></li></ul>
            </div>
            <div class=""><button class="btn green specialoffer" type="submit">{{ $t('translated.specialOffer') }}</button></div>
        </nav>
    </div>
</div>
    
</template>

<script>
</script>

<style scoped>

.green{
    background-color: #20D3C2;
}
.specialoffer {
    color: white;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    padding-left: 18px;
    padding-right: 18px;
}
.specialoffer:hover {
    color:  #20D3C2 !important;
    background-color: white;
}
a {
    text-decoration: none !important;
}
i {
    color:  #20D3C2;
}
.nav-link {
    padding-bottom: 5px;
    color: #313131 !important;
    font-weight: 500;
}
.nav-link:hover {
    color: #20D3C2 !important;
}
#mybutton2 {
    padding: 0.1rem;
    border-radius: 0;
} a {
    padding-left: 0rem !important;
} i {
    padding-left: 1.2px;
}
#mybutton2:hover {
    background-color:  #20D3C2 !important;
}
.margin {
    margin-left: 0rem !important;
}
.myclass8 {
    margin-left: 3rem !important;
}
.myclass9 {
    margin-left: 0.2rem !important;
}
.myclass10 {
    color: white !important; 
}
.myclass10:hover {     
    color: white !important;
}
.nav-item:hover {
    text-decoration: none;
}
.active {
    position: relative;
}
.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 0px;
    height: 4px;
    width: 45px;
    background-color: #20D3C2;
}
@media (min-width: 992px) { 
    .myclass7 {
        margin-left: 1rem;
    }
    .active::after {
        left: 0px;
        height: 4px;
        width: 85%;
    }
}
</style>