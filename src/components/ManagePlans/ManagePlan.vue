<template>
  <div class="flex flex-col col-auto w-[410px] h-[489px]">
    <div
      class="text-[#2F4644] text-[22px] font-medium not-italic leading-[100%] mb-6"
    >
      {{ title }}
    </div>
    <div
      class="text-[#54716F] text-[52px] not-italic font-normal leading-[120%] tracking-[-2px]"
    >
      {{ price }}
    </div>
    <div class="text-[#54716F] text-base not-italic font-normal mb-20">
      {{ label }}
    </div>
    <div class="flex flex-col items-start gap-4 mb-20">
      <div
        class="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4"
      >
        Wallet acces per account
        <div class="text-black">{{ walletAccessCount }}</div>
      </div>
      <div
        class="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4"
      >
        Asset & Allocation Entires
        <div class="text-black">{{ entires }}</div>
      </div>
      <div
        class="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4"
      >
        Max Group size (# User Accounts)
        <div class="text-black">{{ maxGroupSize }}</div>
      </div>
      <div
        class="text-[#2F4644] font-light text-2xl leading-[120%] tracking-[-2px] underline underline-offset-1"
      >
        Learn more
      </div>
    </div>
    <button
      type="button"
      class="inline-block rounded-3xl text-[#2F4644] bg-[#00f2de] py-2 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ManagePlan",
  props: [
    "title",
    "price",
    "label",
    "walletAccessCount",
    "entires",
    "maxGroupSize",
    "buttonLabel",
  ],
};
</script>
