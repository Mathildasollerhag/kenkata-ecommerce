<template>
    <div class="d-flex review py-3">
        <div class="review-img gray-bg"></div>
        <div class="px-3">
            <span class="text-muted d-flex align-items-center mb-2">
                <p class="theme-text mr-1 m-0 font-weight-bold">{{ name }}</p>
                <small>- {{ date }}</small>
            </span>
            <div>
                <p>{{ text }}</p>
            </div>
        </div>
        <i class="fas fa-star theme-text"></i>
        <i class="fas fa-star theme-text"></i>
        <i class="fas fa-star theme-text"></i>
        <i class="fas fa-star theme-text"></i>
        <i class="far fa-star theme-text"></i>      
    </div>
</template>

<script>
export default {
    props: ['name', 'date', 'text']
}
</script>

<style scoped>
.review-img {
    height: 60px;
    width: 60px;
    min-width: 60px;
    border-radius: 5px;
}
.review {
    border-bottom: 1px solid #f6f6f6;
}
small{
    font-size: 0.8rem;
}
</style>