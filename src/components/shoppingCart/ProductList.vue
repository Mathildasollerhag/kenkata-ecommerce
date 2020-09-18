<template>
<div>
    <div class="heading-row d-flex justify-content-between">
        <div class="col-lg-7">
            <h6 class="ml-5">Product</h6>
        </div>
        <div class="d-flex col-lg-5">
            <h6>Price</h6>
            <h6 class="mx-5">Quantity</h6>
            <h6>Subtotal</h6>
        </div>
    </div>
    <ul class="list-group-flush pl-0">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
    </ul>
</div>
</template>

<script>
import ProductListItem from '@/components/shoppingCart/ProductListItem'
export default {
    components: {
        ProductListItem
    }
}
</script>

<style scoped>
.heading-row {
    border-bottom: 2px solid var(--theme)
}

</style>