<template>
    <div>
        <firstNavigation/>
        <secondNavigation />
        <hr>
        <thirdNavigation />
    </div>
</template>

<script>
import firstNavigation from '@/components/global/firstNavigation.vue'
import secondNavigation from '@/components/global/secondNavigation.vue'
import thirdNavigation from '@/components/global/thirdNavigation.vue'
export default {
    name: 'Navbar',
    components: {
        firstNavigation,
        secondNavigation,
        thirdNavigation
    }
}
</script>


<style scoped>

</style>