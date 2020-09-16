<template>
    <div class="d-flex review py-3">
        <div class="review-img gray-bg"></div>
        <div class="px-3">
            <small class="text-muted d-flex align-items-center">
                <p class="theme-text mr-1">{{ name }}</p>
                - {{ date }}
            </small>
            <div>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'date', 'text']
}
</script>

<style scoped>
.review-img {
    height: 50px;
    width: 50px;
    min-width: 50px;
    border-radius: 5px;
}
.review {
    /* border-bottom: 1px solid var(--kenkata-gray-lightest); */
}
small{
    font-size: 0.7rem;
}
</style>