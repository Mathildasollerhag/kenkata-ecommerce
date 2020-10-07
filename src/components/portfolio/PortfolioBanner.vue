<template>
    <div id="banner-bg">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Portfolio</h3>
                <div>
                    <div class="d-flex align-items-center">
                        <router-link to="/" id="home">Home</router-link>
                        <div id="slash" class="px-2">/</div>
                        <router-link active-class="active" to="/portfolio" id="compare">Portfolio</router-link>
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

.active {
    color: white;
}
    
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
#compare:hover {
    color: white!important;
}
#slash {
    color: white;
}
a {
    text-decoration: none;
}
</style>