<template>
  <div id="couponBox">
      <p>If you have a coupon code, please apply it below</p>
        <form class="form-inline position-relative mt-3 mb-2">
            <input class="form-control bg-transparent" type="text" placeholder="Coupon code">
            <button class="btn theme-bg position-absolute text-white px-3" type="submit">Apply Coupon</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

button:hover {
    background-color: var(--blue-theme) !important;
}
#couponBox {
    border: 2px dotted #e3e3e3;
    padding: 1em;
    text-align: center;
    border-radius: 5px;
}
form{
    background-color: white;
    border-radius: 40px;
    border: 1px solid #e3e3e3;
    padding-left: 10px;
}
input::placeholder {
    font-size: 0.8rem;
    color: var(--gray-theme)
}
input:focus, input:active {
    outline: none;
    box-shadow: none;
}
.form-control {
    outline: none ;
    border: none;
}
form button {
    top: 7%;
    right: 0.5%;
    border-radius: 18px;
    font-size: 0.8rem;
}
</style>