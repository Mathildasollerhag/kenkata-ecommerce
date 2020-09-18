<template>
    <div id="banner-bg" class="">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex">
                    <img class="pr-3" src="@/images/Portfolio-Projects-Box.svg" alt="">
                    <div>
                        <h6><a class="theme-text" href=""><img class="pr-3" src="@/images/Portfolio-Arrow-Left.svg" alt="">Previous Project</a></h6>
                        <p class="text-white mb-0">Monica Creative and make us a <br> proud things</p>
                    </div>
                </div>
                
                <div><img class="d-none d-sm-block" src="@/images/Portfolio-Grid-Icon.svg" alt=""></div>
                
                <div class="d-flex">
                    <div>
                        <h6 class="text-right"><a class="theme-text" href="">Next Project<img class="pl-3" src="@/images/Portfolio-Arrow-Right.svg" alt=""></a></h6>
                        <p class="text-white text-right mb-0">The future fashion will be a easy <br> beauty of women</p>
                    </div>
                    <img class="pl-3" src="@/images/Portfolio-Projects-Box.svg" alt="">
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

h6 a:hover {
    color: white;
    transition: .1s ease-in-out;
}

a {
    text-decoration: none;
}

p {
    font-size: 14px;
}

#banner-bg {
    background-color: #0E153D;
    margin-top: 130px;
    padding-top: 45px;
    padding-bottom: 45px;
}

</style> 