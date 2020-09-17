<template>
    <div>
        <PortfolioBanner/>
        <PortfolioHeading/>
        <PortfolioGrid/>
    </div>
</template>

<script>

import PortfolioBanner from '@/components/portfolio/PortfolioBanner.vue'
import PortfolioHeading from '@/components/portfolio/PortfolioHeading.vue'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid.vue'

    export default {
        components: {
            PortfolioBanner,
            PortfolioHeading,
            PortfolioGrid,
        }
    }
</script>

<style scoped>

</style>