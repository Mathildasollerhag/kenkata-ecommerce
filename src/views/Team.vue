<template>
  <div>
    <AwesomeTeam />
    <Business />
    <MomentSection />
    <SubscribeBanner />
  </div>
</template>

<script>
export default {
    name: 'Team',
    components: {
        AwesomeTeam,
        Business,
        MomentSection,
        SubscribeBanner,

    }
}
import AwesomeTeam from '../components/team/AwesomeTeam';
import Business from '../components/team/Business';
import MomentSection from '../components/team/MomentSection';
import SubscribeBanner from '../components/home/SubscribeBanner';
</script>

<style>

</style>