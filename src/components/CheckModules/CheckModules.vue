<template>
  <div class="lg:mx-40 mx-0">
    <div
      class="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]"
    >
      Implement
    </div>
    <div
      class="text-[#2F4644] text-center not-italic font-normal text-[52px] !leading-[120%] tracking-[-2px]"
    >
      Check out all the integrated the modules
    </div>
    <div
      class="text-[#2F4644] text-center text-2xl not-italic font-light !leading-[120%] tracking-[-2px]"
    >
      Use the modules to make crypto easy
    </div>
    <ModernCarousel />
    <CryptoMarketplace />
  </div>
</template>
<script>
import ModernCarousel from "../Carousel/ModernCarousel.vue";
import CryptoMarketplace from "../CryptoMarketplace/CryptoMarketplace.vue";

export default {
  name: "CheckModules",
  components: {
    ModernCarousel,
    CryptoMarketplace,
  },
};
</script>
