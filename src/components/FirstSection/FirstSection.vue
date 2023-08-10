<template>
  <div class="mt-[-64px]">
    <div class="bg-firstSection relative" :style="{ height: screenHeight + 'px' }">
      <img
        class="absolute top-[20%] left-[5%] w-[650px]"
        src="../../assets/Logo.svg"
      />
      <button
        type="button"
        class="absolute top-[60%] left-[14%] rounded-3xl text-[#2F4644] bg-[#00f2de] flex justify-center items-center flex-shrink-0 w-[324px] py-2 px-6 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
      >
        Start Managing Today
      </button>
      <div
        class="absolute top-[75%] left-[5%] text-white opacity-[.8] text-4xl tracking-wide"
      >
        Automated tool to easily manage, raise,<br />invest, and trade
        cryptocurrency assets
      </div>
    </div>
    <OurPlatform />
  </div>
</template>

<script>
import OurPlatform from "../OurPlatform/OurPlatform.vue";
import { ref, onMounted } from "vue";
export default {
  name: "LandingPage",
  components: {
    OurPlatform,
  },
  setup() {
    const screenHeight = ref(window.innerHeight);

    onMounted(() => {
      screenHeight.value = window.innerHeight;
    });

    return {
      screenHeight,
    };
  },
};
</script>

<style scoped>
.bg-firstSection {
  background: linear-gradient(109.6deg, rgb(5, 85, 84) 11.2%, rgb(64, 224, 208) 91.1%);
}
</style>
