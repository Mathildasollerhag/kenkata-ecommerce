<template>
  <div>
    <div class="container pt-5 mt-5 mb-5">
      <div class="text-center">
        <h1 class="font-weight-bold">
          SHOP BY
          <span class="theme-text">CATEGORY</span>
        </h1>
        <img src="" alt="Icon" />
        <p class="mt-3">We always try to give you the best product within a fast and reliable way</p>
      </div>
      <div class="container d-none d-sm-block">
        <div class="grid-layout">
          <div class="grid-item d-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Men</p>
            </div>
          </div>
          <div class="grid-item span-4 d-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Women</p>
            </div>
          </div>
          <div class="grid-item span-2 d-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Kids</p>
            </div>
          </div>
          <div class="grid-item span-2 d-none d-lg-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Shoes</p>
            </div>
          </div>
          <div class="grid-item d-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Hats</p>
            </div>
          </div>
          <div class="grid-item span-4 d-none d-lg-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Sunglasses</p>
              <p class="my-auto text-white font-weight-light">18 products</p>
            </div>
          </div>
          <div class="grid-item d-flex">
            <div class="blue-theme-bg align-self-end col-6 py-2 inline_radius">
              <p class="my-auto">Watches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.inline_radius {
    border-radius: 0px 8px 0px 8px;
}

.grid-item {
    font-size: 14px;
    font-weight: bold;
    color: var(--theme);
    background-color: var(--gray-theme);
    border-radius: 5px;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(180px, auto);
    grid-auto-flow: row dense;
}

.span-2 {
    grid-column-end: span 2;
    grid-row-end: span 2;
}

.span-4 {
    grid-column-end: span 2;
    grid-row-end: span 1;
}

</style>