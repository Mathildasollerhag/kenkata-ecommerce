<template>
    <div>
        <form v-on:submit.prevent="reviewSubmit" id="reviewForm" class="p-4 was-validated">
            <h5 class="theme-text">Add a review</h5>
            <p class="text-muted">Your email address will not be published. Required fields are marked *</p>
            <div class="mt-3 mb-2 d-flex position-relative">
                <p>Your rating<span class="theme-text mr-4">*</span></p>
                <StarRating @clicked="getRating" />
            </div>

          
            <div class="mb-3">
                <label for="review">Your review<span class="theme-text">*</span></label>
                <textarea v-model="review.text" class="form-control" id="review" autocomplete="off" rows="6" required></textarea>
            <!-- <div class="invalid-feedback">
                Please enter a message in the textarea.
            </div> -->
            </div>
            <div class="mb-3">
                <label for="name">Name<span class="theme-text">*</span></label>
                <input v-model="review.name" type="text" class="form-control" id="name" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <label for="email">Email<span class="theme-text">*</span></label>
                <input v-model="review.email" type="email" class="form-control" id="email" autocomplete="off" required>
            </div>
            <div class="form-check mb-3">
                <input v-model="review.check" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label" for="savedetails">
                    Save my name, email and website in this browser for the next time I comment.
                </label>
            </div>
            <button type="submit" class="btn btn-kenkata-blue mr-3">Submit</button>
            <small v-if="reviewSuccess">Thank you for your review!</small>
            <small class="text-danger" v-if="reviewFailed">Please leave a rating.</small>
        </form>
    </div>
</template>

<script>
import * as uuid from 'uuid/v4';
import { mapActions } from 'vuex'
import StarRating from './StarRating'
export default {
    props: ["id"],
    components: { StarRating },
    data() {
        return {
            review: {
                id: uuid(),
                rating: null,
                text: "",
                name: "",
                email: "",
                date: new Date()
            },
            reviewFailed: false,
            reviewSuccess: false,
            
        }
    },
    methods: {
        ...mapActions(["saveProductReview"]),

        // Gets rating from StarRating component
        getRating(rating) {
            rating = parseInt(rating)
            this.review.rating = rating
        },

        
        reviewSubmit() {

            if(this.review.rating) {
                this.saveProductReview({
                    productId: this.id,
                    review: this.review
                })
                this.reviewSuccess = true
                this.review.text = ""
                this.review.name = ""
                this.review.email = ""
                setTimeout(() => {
                    this.reviewSuccess = false
                }, 4000);
            }
            else {
                this.reviewFailed = true
                setTimeout(() => {
                    this.reviewFailed = false
                }, 2000);
                
            }

        }
    }
}
</script>

<style scoped>
#reviewForm{
    background: #F6F6F6;
}
form {
    border-radius: 5px;
}
form p, label, .form-control {
    font-size: 0.9rem;
    border: none;
    box-shadow: none;
}
.form-check-label {
    color: rgb(29, 29, 29) !important;
}
textarea {
    resize: none;
}
.form-control.is-invalid, .was-validated .form-control:invalid,
.form-control.is-valid, .was-validated .form-control:valid {
    border: none;
    background-image: none;
    box-shadow: none;
}
button {
    padding: 10px 20px;
}
</style>