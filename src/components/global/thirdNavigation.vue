<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class=" collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><button id="mybutton2" class="btn nav-item dropdown green"><a class="nav-link myclass10" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" fas fa-bars myclass10 mr-1"></i>Browse Categories <i class="fas fa-chevron-down myclass8 myclass10"></i></a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a></div></button>

                <li class="nav-item active myclass7"><router-link class=" nav-link" to="/">Home</router-link></li>
                <li class="nav-item myclass7"><a class="" href="/Shop"><div class=" dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7"><a class="" href="/Products"><div class="dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7"><a class="" href="/Categories"><div class=" dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories <i class="fas fa-chevron-down myclass9"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item myclass7">
                    <a class="" href="#">
                    <div class=" dropdown nav-link">
                        <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages <i class="fas fa-chevron-down myclass9"></i>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="/wishlist" class="dropdown-item ml-1">Wishlist</a>
                            <a class="dropdown-item ml-1" href="/error">404 Error</a>
                            <a class="dropdown-item ml-1" href="/contact">Contact Us</a>
                            <router-link class="dropdown-item" to="/about">About us</router-link><router-link class="dropdown-item" to="/team">Team</router-link>
                        </div>
                    </div>
                    </a>
                </li>

                 

                

                <li class="nav-item myclass7"><router-link class=" nav-link" to="/">Blog</router-link></li></ul>
            </div>
            <div class=""><button class="btn green specialoffer" type="submit">SPECIAL OFFER</button></div>
        </nav>
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