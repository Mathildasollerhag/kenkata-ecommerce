<template>
    <div>
        <firstNavigation/>
        <secondNavigation />
        <thirdNavigation />
    </div>
</template>

<script>
import firstNavigation from '../global/firstNavigation'
import secondNavigation from '../global/secondNavigation'
import thirdNavigation from '../global/thirdNavigation'
export default {
    name: 'Navigation',
    components: {
        firstNavigation,
        secondNavigation,
        thirdNavigation
    }
}
</script>


<style scoped>

</style>