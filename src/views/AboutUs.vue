<template>
  <div>
    <OnlineStore />
    <VideoSection />
    <IconSection />
    <ThemeSection />
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {
    OnlineStore,
    VideoSection,
    IconSection,
    ThemeSection,

  }
}

import OnlineStore from '../components/aboutUs/OnlineStore';
import VideoSection from '../components/aboutUs/VideoSection';
import IconSection from '../components/aboutUs/IconSection';
import ThemeSection from '../components/aboutUs/ThemeSection';
</script>


<style>

</style>
