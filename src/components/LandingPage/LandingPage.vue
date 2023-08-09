<template>
  <div class="flex flex-col justify-center">
    <FirstSection />
    <div class="lg:mx-40 mx-0">
      <img src="../../assets/image_platform.png" />
    </div>
    <CheckModules />
    <ManagePlans />
    <div class="relative">
      <img
        alt="request demo"
        class="absolute right-[0px] top-[-170px]"
        src="../../assets/Request_a_demo.png"
      />
    </div>
  </div>
</template>

<script>
import CheckModules from "../CheckModules/CheckModules.vue";
import ManagePlans from "../ManagePlans/ManagePlans";
import FirstSection from "../FirstSection/FirstSection.vue";
export default {
  name: "LandingPage",
  components: {
    CheckModules,
    ManagePlans,
    FirstSection,
  },
};
</script>
