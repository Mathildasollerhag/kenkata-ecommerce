<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="text-center theme-text font-weight-bold">
                Behind in every successful business, <br> there is a strong qualified person
            </h2>
            <p class="text-center mt-4">
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br> standard dummy text ever since the 1500s, when an unknown printer took.</small>
            </p>
        </div>
    </div>
    <TeamCardHolder />
  </div>
</template>

<script>
export default {
    name: 'Business',
    components: {
        TeamCardHolder,
    }
}
import TeamCardHolder from '../team/TeamCardHolder';
</script>

<style scoped>

</style>