<template>
    <div v-if="portfolio">
        <PortfolioDetailsBanner :portfolio="portfolio"/>
        <PortfolioDetailsText :portfolio="portfolio"/>
        <ProjectsBanner/>
        <PortfolioDetailsCarousel :portfolio="portfolio"/>
    </div>
</template>

<script>

import PortfolioDetailsBanner from '@/components/portfolioDetails/PortfolioDetailsBanner.vue'
import PortfolioDetailsText from '@/components/portfolioDetails/PortfolioDetailsText.vue'
import ProjectsBanner from '@/components/portfolioDetails/ProjectsBanner.vue'
import PortfolioDetailsCarousel from '@/components/portfolioDetails/PortfolioDetailsCarousel.vue'
import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'PortfolioDetails',
         components: {
            PortfolioDetailsBanner,
            PortfolioDetailsText,
            ProjectsBanner,
            PortfolioDetailsCarousel,
        },

    props: ['id'],

    methods: {
      ...mapActions(["getPortfolioById"])
    },

    created() {
    this.getPortfolioById(this.id)
    if (this.portfolio !== null){
        // console.log(this.portfolio)
    }
    },

    computed: {
        ...mapGetters(["portfolio"])
    }
}
</script>

<style scoped>

</style>