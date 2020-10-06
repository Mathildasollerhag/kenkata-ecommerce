<template>
    <div id="banner-bg">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
                <h3>Portfolio</h3>
                <div>
                    <div class="d-flex align-items-center">
                        <router-link id="home" to="/">Home</router-link>
                        <div id="slash" class="px-2">/</div>
                        <router-link class="portfolio" to="/portfolio">Portfolio</router-link>
                        <div id="slash" class="px-2">/</div>
                        <div class="active portfolio-page">{{ portfolio.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['portfolio']
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
    color: #25ac9e!important;
}
.portfolio:hover {
    color: white!important;
}

.portfolio-page {
    color: white!important;
}

#slash {
    color: white;
}
a {
    text-decoration: none;
}
</style>