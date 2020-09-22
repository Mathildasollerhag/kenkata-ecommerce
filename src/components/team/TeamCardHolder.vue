<template>
   <div class="row row-cols-1 row-cols-md-4">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
     
  </div>
</template>

<script>
export default {
    name: 'TeamCardHolder',
    components: {
        TeamCard,
    }
}
import TeamCard from '../team/TeamCard';
</script>

<style>

</style>