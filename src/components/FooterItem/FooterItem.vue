<template>
  <div class="flex flex-col w-44">
    <div class="text-[#2f4644] text-base font-semibold mb-6">{{ title }}</div>
    <div
      v-for="item in menuItems"
      class="pb-4 text-[#54716F] font-normal"
      :key="item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  props: ["title", "menuItems"],
};
</script>
