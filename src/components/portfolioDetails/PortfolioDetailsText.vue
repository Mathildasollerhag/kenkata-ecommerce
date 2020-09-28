<template>
  <div class="container">

    <div class="d-flex pt-5 mt-5">
        <div class="row">
            <div class=" col-lg-6">
            <h2 class="mb-3 grey">{{portfolio.title}}</h2>
            <span class="pt-2">
                <small>Date: </small>
                <small class="grey">30 July 2020</small>
                <small>, Category: </small>
                <small class="grey">Fashion</small>
            </span>
            <p class="pt-3 pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p class="left-border pl-3 grey">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et.</p>
            <p class="pt-3">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et, fermentum dolor. In hac habitasse platea dictumst.</p>
        </div>
        <div class="col-lg-6 d-flex flex-wrap">
            <img class="mx-auto mb-auto" src="@/images/Portfolio-Img.svg" alt="">
        </div>
      </div>
    </div>

    <div class="d-flex pt-4">
        <div class="row">
            <div class="col-12 col-xl-6 d-flex flex-wrap">
                <div class="grid-container mx-auto pb-4">
                    <div class="one"><img class="" src="@/images/Portfolio-Details-Small-Img.svg" alt=""></div>
                    <div class="two"><img class="" src="@/images/Portfolio-Details-Small-Img.svg" alt=""></div>
                    <div class="three"><img class="" src="@/images/Portfolio-Details-Long-Img.svg" alt=""></div>
                </div>
            </div>
            <div class="col-12 col-xl-6">
                <p class=" pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p class="left-border pl-3 grey">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et.</p>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet ullamcorper congue. Nam lobortis eros in risus rhoncus gravida. Pellentesque enim lectus, laoreet sit amet rhoncus in, semper vitae odio. Proin congue malesuada posuere. Aenean dapibus et magna non dictum. Praesent ut lacinia dui, ac malesuada nisi. Nullam pharetra, dui ac tincidunt pellentesque, diam elit dapibus augue, vel lobortis tortor neque eu velit.</p>
            </div>
        </div>
        </div>

         <div class="list-group list-group-horizontal mt-3 flex-wrap">
            <div id="share" href="#" class="list-group-item">SHARE ON:</div>
            <a id="facebook" href="#" class="list-group-item">Facebook</a>
            <a id="twitter" href="#" class="list-group-item">Twitter</a>
            <a id="pinterest" href="#" class="list-group-item">Pinterest</a>
            <a id="instagram" href="#" class="list-group-item">Instagram</a>
        </div>

        <div class="mt-5">
            <span class="blue-theme-text mr-4">Tags:</span>
            <span class="badges mr-2">Fashion</span>
            <span class="badges mr-2">Shoes</span>
            <span class="badges">Sneakers</span>
        </div>

</div>
</template>

<script>

// import { mapActions, mapGetters } from 'vuex'

export default {

    props: ['portfolio'],

    // methods: {
    //   ...mapActions(["getPortfolioById"])
    // },

    created() {
    // console.log(this.portfolio)
    },

    // computed: {
    //     ...mapGetters(["getPortfolio"])
    // }
}
</script>

<style scoped>

.badges {
    border: 1.5px solid #AAAAAA;
    padding: 2px 10px;
    color: #0E153D;
}

a {
    text-decoration: none;
}
a:hover {
    color: #20D3C2!important;
    transition: .1s ease-in-out;
}

.list-group-item {
    border: none;
}

#share {
    background-color: #20D3C2;
    color: white;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 9px 20px;
    font-weight: 500;
}
#facebook {
    background-color: #3B5999;
    color: white;
    padding: 10px 20px;
}
#twitter {
    background-color: #55ACEE;
    color: white;
    padding: 10px 20px;
}
#pinterest {
    background-color: #BD081C;
    color: white;
    padding: 10px 20px;
}
#instagram {
    background-color: #E4405F;
    color: white;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px 20px;
}

.two {
    padding-top: 13px;
}

.three {
    padding-left: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "one three"
    "two three";
}

.one { grid-area: one; }

.two { grid-area: two; }

.three { grid-area: three; }


.grey {
    color: #20D3C2;
}

.left-border {
    border-left: 6px solid #0E153D;
}

p {
    line-height: 1.80;
}

@media (max-width: 576px) { 
    div img {
    width: 90%;
    }
}

</style>