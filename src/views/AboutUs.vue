<template>
  <div>
    <OnlineStore />
    <VideoSection />
    <IconSection />
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {
    OnlineStore,
    VideoSection,
    IconSection,

  }
}

import OnlineStore from '../components/aboutUs/OnlineStore';
import VideoSection from '../components/aboutUs/VideoSection';
import IconSection from '../components/aboutUs/IconSection';
</script>


<style>

</style>
