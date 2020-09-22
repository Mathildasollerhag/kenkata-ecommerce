<template>
    <div class="navbar navbar-dark green firstnavbar">
        <div class="container">
            <div class="d-flex">
                <div class="dropdown margintop">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ENG <i class="fas fa-chevron-down pill"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="green dropdown-item">ENG</a>
                    </div>
                </div>
                <div class="dropdown ml-2 margintop">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD <i class="fas fa-chevron-down pill"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="green dropdown-item">USD</a>
                    </div>
                </div> 
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
            </div>
            <div class="d-flex flex-right">
                <div class="margintop"><a href="">Newsletter</a></div>
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class="margintop ml-3"><router-link to="/contact">Contact us</router-link></div>
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class="margintop ml-3"><a href="">FAQs</a></div>
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class=" ml-4 margintop socialmedia">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram ml-2"></i>
                    <i class="fab fa-facebook ml-2"></i>
                    <i class="fas fa-envelope ml-2"></i>
                    <i class="fab fa-google-plus-g ml-2"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.socialmedia {
    color: white; 
}
.margintop{
    margin-top: 0.4rem;
}
.pill {
    font-weight: 500;
    font-size: 12px;
}
.firstnavbar{
    margin: 0;
    padding: 0;
}
.firstnavbar a {
    color: white !important; 
    text-decoration: none;
}
.green{
    background-color: #20D3C2;
}
@media(max-width: 1000px){
    .firstnavbar{
        display: none
    }
}

</style>