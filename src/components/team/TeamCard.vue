<template>
  
  <div class="col mt-5">
    <div class="card h-100 full-border" id="team-card">
      <img src="@/images/Team.png" class="card-img-top" alt="...">
      <div class="card-body theme-bg text-center">
        <h6 class="card-title text-white text-uppercase">John Doe</h6>
        <p class="card-text text-white">Frontend developer</p>
        <div class="blue-theme-bg text-white custom-radius">
        <i class="fab fa-facebook-f mx-2 my-3"></i>
        <i class="fab fa-twitter mx-2 my-3"></i>
        <i class="fab fa-instagram mx-2 my-3"></i>
        <i class="fab fa-pinterest-p mx-2 my-3"></i>
        <i class="fab fa-youtube mx-2 my-3"></i>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {

}
</script>

<style scoped>

.full-border {
  border: 2px solid var(--theme);
}

.custom-radius {
    border-radius: 25px;
}

#team-card:hover {
  border: 2px solid var(--blue-theme);
}

#team-card:hover .theme-bg {
  background-color: var(--blue-theme);
}

#team-card:hover .blue-theme-bg {
  background-color: #FFFFFF;
}

#team-card:hover .fab {
  color: var(--blue-theme);
}

#team-card:hover .fab:hover {
  color: var(--theme);
}

</style>