<template>
    <div class="overlay">
        <div class="plus-icon">
          <router-link :to="{name: 'PortfolioDetails', params: {id: id}}"><img src="@/images/Plus-Icon.svg" alt=""></router-link>
        </div>
        <div class="text">
            <p class="mb-2">{{ portfolio.name }}</p>
            <small>{{ portfolio.tag }}</small>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

    export default {

    props: ['portfolio', 'id'],

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
    bottom: 65%;
    left: 65%;
}

p {
    color: #20D3C2;
}

.one {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
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

</style>