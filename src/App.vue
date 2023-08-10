<template>
  <div class="flex justify-center">
    <div class="max-w-[1920px] w-full">
      <AppHeader />
      <router-view></router-view>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppFooter from "./components/AppFooter/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
