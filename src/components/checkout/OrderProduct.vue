<template>
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <p>{{ item.product.name }}</p>
        <p>{{ subtotal }}</p>
    </div>
</template>

<script>
export default {
    // props: ['title', 'subtotal']
}
</script>

<style scoped>
p {
  margin: 0.4em 0;
}
</style>