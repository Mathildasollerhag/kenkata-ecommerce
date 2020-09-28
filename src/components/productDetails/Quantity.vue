<template>
  <div class="text-center quantity-container d-flex">
      <span v-on:click="productDecrement(item)" class="decrement">-</span>
      <span class="quantity">{{item.quantity}}</span>
      <span v-on:click="productIncrement(item)" class="increment">+</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ["item"],
  methods: {
    ...mapActions(["productIncrement", "productDecrement"])
  } 
}
</script>

<style scoped>
.quantity-container {
  border: 1px solid var(--gray-theme);
  border-radius: 5px;
}
.quantity-container span {
  padding: 4px 10px;
  min-width: 30px;
}

.increment:hover, .decrement:hover {
  background-color: var(--theme);
  color: white;
  cursor: pointer;
}
.quantity {
  border-left: 1px solid var(--gray-theme);
  border-right: 1px solid var(--gray-theme);
}
</style>