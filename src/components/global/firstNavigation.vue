<template>
    <div class="navbar navbar-dark green firstnavbar">
        <div class="container">
            <div class="d-flex">

                <div class="dropdown margintop language">
                    <select class="green language" id="" v-model="$i18n.locale">
                        <option class="green" value="en" id="dropdownMenuButton" 
                            data-toggle="dropdown" aria-haspopup="true"
                            >ENG <i class="fas fa-chevron-down pill"></i></option>
                        <option value="se" class="green dropdown-item">SWE</option>
                    </select>

                </div>
                <div class="dropdown ml-2 margintop">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="#/">USD</a> <i class="fas fa-chevron-down pill"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a href="#/" class="currency p-2">SEK</a>
                    </div>
                </div> 
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
            </div>
            <div class="d-flex flex-right">

                <div class="margintop"><a href="/*">{{ $t('translated.newsletter') }}</a></div>

                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class="margintop ml-3"><router-link to="/contact">{{ $t('translated.contactUs') }}</router-link></div>
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class="margintop ml-3"><a href="/*">FAQs</a></div>
                <div><img class="ml-3" src="../../images/line.png" alt=""></div>
                <div class=" ml-4 margintop socialmedia">
                    <a href="#/"><i class="fab fa-twitter"></i></a>
                    <a href="#/"><i class="fab fa-instagram ml-2"></i></a>
                    <a href="#/"><i class="fab fa-facebook ml-2"></i></a>
                    <a href="#/"><i class="fab fa-pinterest-p ml-2"></i></a>
                    <a href="#/"><i class="fab fa-google-plus-g ml-2"></i></a>
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

.language{
    color: white;
    border: 1px solid transparent;
}

.currency {
    color: #0E153D;
}
.currency:hover {
    color: #20D3C2!important;
}
a {
    color: white;
    text-decoration: none;
}
a:hover {
    color: #0e153d!important;
    transition: 0.2s ease-in-out;
}
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
.firstnavbar {
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