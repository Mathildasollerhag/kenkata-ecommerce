<template>
  <div id="" class="d-flex">
    <a class="fb nav-link p-0" href="#"><i class="nav-link fab fa-facebook-f"></i></a>
    <a class="twitter nav-link p-0 mx-2" href="#"><i class="nav-link fab fa-twitter"></i></a>
    <a class="pint nav-link p-0" href="#"><i class="fab fa-pinterest-p"></i></a>
    <a class="linkedin nav-link p-0 mx-2" href="#"><i class="fab fa-linkedin-in"></i></a>
    <a class="message nav-link p-0" href="#"><i class="fas fa-envelope"></i></a>     
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.details-socials .nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 27px;
  height: 27px;
}
.details-socials i {
  font-size: 0.9rem;
  padding: 0 0.5em !important;
  color: white;
}
.details-socials .fb{ background: #3B5999; }
.details-socials .twitter{ background: #55ACEE; }
.details-socials .pint{ background: #BD081C; }
.details-socials .linkedin{ background: #0077B5; }
.details-socials .message{ background: #20D3C2; }
</style>