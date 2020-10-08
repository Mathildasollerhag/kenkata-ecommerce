<template>
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <p>{{ item.product.name }}</p>
        <p>${{ item.product.price * item.quantity }}.00</p>
    </div>
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style scoped>
p {
  margin: 0.4em 0;
}
</style>