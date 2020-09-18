<template>
    <div id="banner-bg">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Portfolio</h3>
                <div>
                    <div class="d-flex align-items-center">
                        <a href="/"><router-link id="home" to="/">Home</router-link></a>
                        <div id="slash" class="px-2">/</div>
                        <a href="/portfolio"><router-link class="portfolio" to="/portfolio">Portfolio</router-link></a>
                        <div id="slash" class="px-2">/</div>
                        <div class="portfolio-page">Women's fashion choice</div>
                    </div>
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
    
    #banner-bg {
        background-color: #0E153D;
        opacity: 65%;
        padding-top: 35px;
        padding-bottom: 35px;
    }
    
    h3 {
        color: #25ac9e;
    }

    #home {
        color: #25ac9e!important;
    }
    #home:hover {
        color: white!important;
    }

    .portfolio {
        color: white;
    }
    .portfolio:hover {
        color: #25ac9e!important;
    }

    .portfolio-page {
        color: white;
    }

    #slash {
        color: white;
    }
    a {
        text-decoration: none;
    }
</style>