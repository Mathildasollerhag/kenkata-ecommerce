<template>
    <div class="overlay">
        <div class="text">
            <div class="plus-icon"><router-link to="/portfolio/portfolio-details"><img src="@/images/Plus-Icon.svg" alt=""></router-link></div>
            <p class="mb-2">Women's fashion</p>
            <small>Fashion</small>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.plus-icon {
    position: absolute;
    font-size: 20px;
    position: absolute;
    bottom: 495%;
    left: 220%;
}

p {
    color: #20D3C2;
}

.one {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.one:hover .overlay {
  opacity: 85%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 82.5%;
  left: 5%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #0E153D;
  border-radius: 6px;
}

</style>