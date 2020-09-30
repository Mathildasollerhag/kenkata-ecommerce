<template>
    <div class="d-flex justify-content-between review py-3">
        <div class="d-flex">
            <div class="review-img gray-bg"></div>
            <div class="px-3">
                <span class="text-muted d-flex align-items-center">
                    <p class="theme-text mr-1 m-0 font-weight-bold text-capitalize">{{ review.name }}</p>
                    <small>- {{this.review.date.toDate().getDate()}}/{{this.review.date.toDate().getMonth()}} - {{this.review.date.toDate().getFullYear()}}</small>
                    <!-- <small>{{reviewDate}}</small> -->
                </span>
                <div>
                    <p>{{ review.text }}</p>
                </div>
            </div>
        </div>

        <!-- Star Rating -->
        <div class="ratings position-relative mt-1">
            <div class="d-flex position-absolute">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <div class="d-flex position-absolute">
                <i v-if="rating1" class="fas fa-star"></i>
                <i v-if="rating2" class="fas fa-star"></i>
                <i v-if="rating3" class="fas fa-star"></i>
                <i v-if="rating4" class="fas fa-star"></i>
                <i v-if="rating5" class="fas fa-star"></i>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {         
            rating1: false,
            rating2: false,
            rating3: false,
            rating4: false,
            rating5: false,         
        }
    },
    props: ["review"],
    methods: {
        setRating() {
            switch (this.review.rating) {
                case 1: this.rating1 = true                  
                    break;
                case 2: this.rating1 = true, this.rating2 = true
                    break;
                case 3: this.rating1 = true, this.rating2 = true, this.rating3 = true
                    break;
                case 4: this.rating1 = true, this.rating2 = true, this.rating3 = true, this.rating4 = true
                    break;
                case 5: this.rating1 = true, this.rating2 = true, this.rating3 = true, this.rating4 = true, this.rating5 = true
                    break;
                default:
                    break;
            }
        }
    },
    created() {
        this.setRating()
    }
}
</script>

<style scoped>
.review-img {
    height: 60px;
    width: 60px;
    min-width: 60px;
    border-radius: 5px;
}
.review {
    border-bottom: 1px solid #f6f6f6;
}
small{
    font-size: 0.8rem;
}
.ratings {
    color: #20D3C2;
    right: 5em;
}
</style>