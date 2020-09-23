<template>
  <div class="rating d-flex flex-row-reverse">
     <input type="radio" name="star" id="star5"><label for="star5"></label> 
     <input type="radio" name="star" id="star4"><label for="star4"></label> 
     <input type="radio" name="star" id="star3"><label for="star3"></label> 
     <input type="radio" name="star" id="star2"><label for="star2"></label> 
     <input type="radio" name="star" id="star1"><label for="star1"></label> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rating {
    position: absolute;
    left: 20%;
    bottom: 19%;
    /* flex-direction: row-reverse; */
}
.rating label{
    display: block;
    cursor: pointer;
}
.rating input {
    display: none;
}
.rating label:before {
    content: '\f005';
    font-family: fontAwesome;
    position: relative;
    display: block;
    color: var(--theme);
    opacity: 0.3;
}
.rating label:after {
    content: '\f005';
    font-family: fontAwesome;
    position: absolute;
    display: block;
    color: var(--theme);
    top: 0;
    opacity: 0;
    transition: .5s;
}
.rating label:hover:after,
.rating label:hover ~ label:after,
.rating input:checked ~ label:after {
    opacity: 1;
}
</style>