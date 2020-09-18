<template>
  <div>
    <OnlineStore />
    <VideoSection />
    <IconSection />
    <ThemeSection />
    <CollaborationSection />
    <SubscribeBanner/>
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
    CollaborationSection,
    SubscribeBanner

  }
}

import OnlineStore from '../components/aboutUs/OnlineStore';
import VideoSection from '../components/aboutUs/VideoSection';
import IconSection from '../components/aboutUs/IconSection';
import ThemeSection from '../components/aboutUs/ThemeSection';
import CollaborationSection from '../components/aboutUs/CollaborationSection';
import SubscribeBanner from '../components/home/SubscribeBanner';
</script>


<style>

</style>
