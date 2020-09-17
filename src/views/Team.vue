<template>
  <div>
    <AwesomeTeam />
    <Business />
  </div>
</template>

<script>
export default {
    name: 'Team',
    components: {
        AwesomeTeam,
        Business,

    }
}
import AwesomeTeam from '../components/team/AwesomeTeam';
import Business from '../components/team/Business';
</script>

<style>

</style>