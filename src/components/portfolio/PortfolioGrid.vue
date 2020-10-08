<template>
    <div class="pt-5">

        <ul id="ul-border" class="navbar-nav mx-auto">
            <div class="d-flex flex-wrap justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href=""><router-link to="/portfolio/all">All</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><router-link to="/portfolio">Graphic Design</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><router-link to="/portfolio/branding">Branding</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><router-link to="/portfolio/web-design">Web Design</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><router-link to="/portfolio/web-development">Web Development</router-link></a>
                </li>
            </div>
        </ul>

    <div class="grid-container d-flex flex-wrap justify-content-center pt-5">
        <div v-for="item in portfolioCatalog" :key="item.id" class="one"><img :src="item.portfolio.images[0]"><PortfolioCardHover :portfolio="item.portfolio" :id="item.id"/></div>
    </div>

    <div class="text-center pt-5">
        <button id="load-more-btn">LOAD MORE</button>
    </div>

    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import PortfolioCardHover from '@/components/portfolio/PortfolioCardHover.vue'

export default {
    components: {
        PortfolioCardHover,
    },

    created() {
    this.$store.dispatch("getPortfolio")
    },

    computed: {
    ...mapGetters(['portfolioCatalog'])
    },
}
</script>

<style scoped>

.plus-icon {
    position: absolute;
    font-size: 20px;
    position: absolute;
    bottom: 495%;
    left: 220%;
}

p {
    color: #20D3C2;
}

.one {
  position: relative;
}
.one img {
  position: relative;
  width: 538px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #0E153D;
  border-radius: 6px;
}

.one:hover .overlay {
  opacity: 85%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 82.5%;
  left: 5%;
}

#load-more-btn {
    background-color: #20D3C2;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 12.5px 30px;
    font-weight: 500;
}
#load-more-btn:hover {
    background-color: var(--blue-theme);
    color: white;
    transition: .1s ease-in-out;
}

.grid-container {
  display: grid;
  grid-template-columns: 0fr 0fr 0fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3px 3px;
  grid-template-areas:
    "one one one"
    "one one one"
    "one one one";
}


#ul-border {
    border-bottom: 1.5px solid #EEEEEE;
    width: 84.5%;
}

.router-link-active {
    border-bottom: 2.5px solid #20D3C2;
    padding-bottom: 9px;
}

li a {
    color: #0E153D!important;
}

a {
  text-decoration: none;
}
a:hover {
  color: #26b9ab!important;
}

.nav-item {
    padding-left: 25px;
    padding-right: 25px;
}

@media (max-width: 576px) { 
    .grid-container img {
        width: 80%;
    }

    .one {
        text-align: center;
    }
    
    .overlay {
        display: none;
    }
}

</style>