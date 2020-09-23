<template>
  <div class="rating d-flex flex-row-reverse">
     <input @click="setRating" type="radio" name="star" id="5"><label for="5"></label> 
     <input @click="setRating" type="radio" name="star" id="4"><label for="4"></label> 
     <input @click="setRating" type="radio" name="star" id="3"><label for="3"></label> 
     <input @click="setRating" type="radio" name="star" id="2"><label for="2"></label> 
     <input @click="setRating" type="radio" name="star" id="1"><label for="1"></label>
  </div>
</template>

<script>
export default {
    methods: {
        setRating(e) {
            this.$emit('clicked', e.target.id)
        }
    }
}
</script>

<style scoped>
.rating {
    margin-top: -2px;
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
    font-size: 18px;
}
.rating label:after {
    content: '\f005';
    font-family: fontAwesome;
    position: absolute;
    display: block;
    color: var(--theme);
    top: -2px;
    opacity: 0;
    transition: .5s;
    font-size: 18px;
}
.rating label:hover:after,
.rating label:hover ~ label:after,
.rating input:checked ~ label:after {
    opacity: 1;
}
</style>