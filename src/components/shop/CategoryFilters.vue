<template>
<div class="list-group list-group-flush">
                <a href="#" class="list-group-item"  @click.prevent="getProductsByGender('men')">
                  Men's
                  <span class="float-right badge badge-light round">{{getMen.length}}</span>
                </a>
                <a href="#" class="list-group-item"   @click.prevent="getProductsByGender('women')">
                  Women's
                  <span class="float-right badge badge-light round">{{getWomen.length}} </span>
                </a>
                <a href="#" class="list-group-item ab"  @click.prevent="getProductsByCategory('kids')">
                  Kids
                  <span class="float-right badge badge-light round">{{getKids.length}}</span>
                </a>
                <a href="#" class="list-group-item"  @click.prevent="getProductsByCategory('hats')" >
                  Hats
                  <span class="float-right badge badge-light round">{{getHats.length}}</span>
                </a>
                <a href="#" class="list-group-item"  @click.prevent="getProductsByCategory('sunglasses')">
                  Sunglasses
                  <span class="float-right badge badge-light round">{{getSunglasses.length}}</span>
                </a>
                <a href="#" class="list-group-item"  @click.prevent="getProductsByCategory('shoes')" >
                  Shoes
                  <span class="float-right badge badge-light round">{{getShoes.length}}</span>
                </a>
                <a href="#" class="list-group-item"  @click.prevent="getProductsByCategory('watches')">
                  Watches
                  <span class="float-right badge badge-light round">{{getWatches.length}}</span>
                </a>
</div>
              <!-- list-group .// -->
</template>

<script>
import { mapActions , mapGetters} from "vuex";

export default {
  name: "CategoryFilters",
  methods: {
    ...mapActions(["getProductsByCategory", "getProductsByGender"])  
     
  },
  computed:{
      ...mapGetters(['productsCatalog']),
      
      ...mapGetters(['getShoes', 'getMen', 'getWomen', 'getKids', 'getHats', 'getSunglasses', 'getWatches', ])
    
    
  },
  created(){
      // console.log(this.productsCatalog)
  }

};
</script>

<style scoped>
.img-bg {
  background-color: #eeeeee;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 15px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 0;
  padding-bottom: 0;
}

.ratings {
  width: 50%;
}

img {
  width: 100%;
}

.img-div {
  height: 30px;
  width: 100px;
  border: 1.5px solid #20d3c2;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 12.5px;
}
.img-div:hover {
  background-color: #20d3c148;
}

#filter-btn {
  background-color: #20d3c2;
  border-radius: 20px;
  color: white;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 0;
  padding-bottom: 0;
}
#filter-btn:hover {
  background-color: #22b9aa;
  color: white;
}

.badge {
  font-weight: normal;
  background-color: #fff;
  border: 1px solid #20d3c2;
}
.badge:active {
  background-color: #20d3c2;
  color: white;
}
.badge:hover {
  background-color: #20d3c2;
  color: white;
}

.card {
  border: none;
}

.list-title {
  color: #20d3c2 !important;
  font-weight: 600;
  border: none;
  margin-bottom: 0;
}

.list-group-item {
  color: #0e153d;
  text-decoration: none;
  border-bottom: none;
  padding: 0;
  padding-bottom: 5px;
}
.list-group-item:active {
  color: #20d3c2;
}
.list-group-item:hover {
  color: #20d3c2;
}

.checkmark-grey {
  background-color: #20d3c156 !important;
  color: black !important;
  border: 1.5px solid #20d3c2;
}

#checkmark-black {
  background-color: black;
}
#checkmark-gray {
  background-color: #eeeeee;
}
#checkmark-red {
  background-color: #ff2d2d;
}
#checkmark-green {
  background-color: #64cb83;
}
#checkmark-orange {
  background-color: #ffaa00;
}
#checkmark-brown {
  background-color: #542323;
}

/* The customcheck */
.customcheck {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.customcheck input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 5px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.customcheck input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.customcheck .checkmark:after {
  left: 7px;
  top: 2px;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

#dropdownMenuButton {
  width: 100%;
  text-align: left;
}
.color {
  color: #20d3c2;
}

@media (max-width: 768px) {
  #product-cards-list {
    margin-top: 40px;
  }
}

#shop-p {
  color: #20d3c2 !important;
}
#shop-h3 {
  font-weight: 600;
  color: #20d3c2 !important;
}

.grid-icons {
  font-size: 32px;
  padding: 12px 10px;
}

#banner-bg {
  background-color: #f6f6f6;
}

.settings-bg {
  background-color: #0e153d;
  border-radius: 7px;
}

a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #20d3c2;
}
</style>