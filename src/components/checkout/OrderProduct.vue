<template>
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <p>{{ title }}</p>
        <p>{{ subtotal }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtotal']
}
</script>

<style>

</style>