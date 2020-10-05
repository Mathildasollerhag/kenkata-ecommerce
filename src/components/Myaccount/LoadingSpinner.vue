<template>
  <div class="spinner-1"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spinner-1 {
  content: "";
  position: absolute;
  left: 61%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.582);
  border-top-color: rgb(255, 255, 255);
  animation: spinner 0.7s linear infinite;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>