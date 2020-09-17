<template>
    <div class="product-page">

    <div class="card-deck pb-4">
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
</div>

<div class="card-deck pb-4">
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
</div>

<div class="card-deck pb-4">
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
</div>

<div class="card-deck">
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
  <div class="card">
      <div class=" container-overlay">
        <ShopOverlay />
    </div>
  </div>
</div>
<ul class="pagination justify-content-center pt-4">
    <li class="page-item"><a class="" href="javascript:void(0);"><i id="left-arrow" class="fas fa-2x fa-chevron-left"></i></a></li>
    <div class="d-flex my-auto">
      <li class="page-item"><a class="p-2 pl-3 mt-1" href="javascript:void(0);">8</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">9</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">10</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">...</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">24</a></li>
      <li class="page-item"><a class="p-2 mt-1" href="javascript:void(0);">25</a></li>
      <li class="page-item"><a class="p-2 pr-3 mt-1" href="javascript:void(0);">26</a></li>
    </div>
    <li class="page-item"><a class="" href="javascript:void(0);"><i id="right-arrow" class="fas fa-2x fa-chevron-right"></i></a></li>
  </ul>

</div>

</template>

<script>

  import ShopOverlay from "@/components/shop/ShopOverlay.vue";

    export default {
        components: {
          ShopOverlay
        }
    }
</script>

<style scoped>

.product-page {
  margin-right: -35px;
}

a {
  color: #0E153D;
  text-decoration: none;
}
a:hover {
  color: #20D3C2;
}

#left-arrow, #right-arrow {
   background-color: white;
    border: 2px solid #20D3C2;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 12px;
    text-align: center;
}

i:hover {
    background-color: #20D3C2!important;
    border: 2px solid #20D3C2;
    color: white!important;
    transition: .2s ease-in-out;
}

.card-footer {
    padding: 0;
}

.card-p {
    background-color: #0e153d;
    width: 100%;
    color: white;
    padding: 10px 0;
    padding-left: 18px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    text-align: left;
    font-size: 13.5px;
}

@media (max-width: 768px) {

  .product-page {
  margin-right: 0px;
}

 }

</style>