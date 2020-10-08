<template>
  <div class="d-flex px-3 justify-content-center">
    <div class="mt-auto d-none d-xl-block">

      <div>
        <CompareSidebar v-if="compare != 0"/>
      </div>
      
    
      <div v-if="compare == 0">
        <h2>Add products to compare</h2>
      </div>
    </div>

    <div class="card-deck mt-5 pt-4">

      <CompareCard v-for="item in compare" :key="item.id" :item="item"/>
      
    </div>
  </div>
</template>

<script>
import CompareSidebar from '@/components/compare/CompareSidebar.vue';
import CompareCard from '@/components/compare/CompareCard.vue';
import { mapGetters } from 'vuex'
export default {
  components: {
    CompareSidebar,
    CompareCard,
  },
  props: ["item"],
  computed: {
        ...mapGetters(["compare"])
    },
    created() {
      console.log(this.compare)
    }
};
</script>

<style scoped>
.card-boxes {
  border: 1.5px solid #e3e3e3;
  margin-bottom: 10px;
  width: 257px;
  height: 69px;
  color: #0e153d;
}
.card-boxes-grey {
  margin-bottom: 10px;
  width: 257px;
  height: 69px;
  background-color: #f6f6f6;
  color: #0e153d;
}

.add-to-cart-btn {
  background-color: #20d3c2;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px 18px;
}
.add-to-cart-btn:hover {
  background-color: #0e153d;
  color: white;
  transition: 0.3s ease-in-out;
}

.price {
  color: #20d3c2;
}

.checkmark {
  font-size: 1.2em;
}

.remove-item {
  font-size: 1.1em;
}

.remove-btn {
  background-color: transparent;
  color: #aaaaaa;
  font-size: 1.5em;
  border: none;
}
.remove-btn:hover {
  color: red;
}

.custom-card {
  border: 1.5px solid #e3e3e3;
  border-radius: 6px;
  margin: 15px;
}

.rating {
  color: #20d3c2;
  bottom: 2em;
  right: 1.5em;
}
</style>