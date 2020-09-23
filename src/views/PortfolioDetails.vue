<template>
    <div>
        <PortfolioDetailsBanner/>
        <PortfolioDetailsText/>
        <ProjectsBanner/>
        <PortfolioDetailsCarousel/>
    </div>
</template>

<script>

import PortfolioDetailsBanner from '@/components/portfolioDetails/PortfolioDetailsBanner.vue'
import PortfolioDetailsText from '@/components/portfolioDetails/PortfolioDetailsText.vue'
import ProjectsBanner from '@/components/portfolioDetails/ProjectsBanner.vue'
import PortfolioDetailsCarousel from '@/components/portfolioDetails/PortfolioDetailsCarousel.vue'

    export default {
         components: {
            PortfolioDetailsBanner,
            PortfolioDetailsText,
            ProjectsBanner,
            PortfolioDetailsCarousel,
        }
    }
</script>

<style scoped>

</style>