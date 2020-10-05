<template>   
  <div class="bg py-1" >
      <div class="container py-4">
        <div class="d-flex  justify-content-between align-items-center py-4">
          <h3 class="color theme-text mb-0">My account</h3>
          <div>
            <router-link to="/" class="color text-white">Home</router-link>
            <span class="text-white"> / </span>
            <router-link active-class="active" to="/account" class="text-white">My account</router-link>
          </div>
        </div>
      </div>
    </div>   
</template>
<style scoped>
.bg{
  background-color: #7B7D8E;
}
.active {
  color: var(--theme) !important;
}
</style> 