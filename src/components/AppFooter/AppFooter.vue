<template>
  <div
    class="flex flex-wrap justify-between pt-8 pb-12 pr-64 pl-44 border-solid border-t-[1px] border-[#F0F0F0] footer-gradient"
  >
    <div>
      <img src="../../assets/Logo-black.png" />
      <div class="flex flex-col mt-16">
        <div class="flex flex-row space-x-2">
          <div
            class="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
          >
            <img src="../../assets/mail.svg" />
          </div>
          <div
            class="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
          >
            <img src="../../assets/Vector.svg" />
          </div>
          <div
            class="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
          >
            <img src="../../assets/Linkedin.svg" />
          </div>
          <div
            class="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
          >
            <img src="../../assets/fa-brands_telegram-plane.svg" />
          </div>
        </div>
        <div class="mt-2 text-[#54716F] text-base font-normal">
          © 2023 Cryptool. All rights reserved
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-around">
      <FooterItem
        title="Cryptool"
        :menuItems="['Documentation', 'Tokenomics', 'Partners']"
      />
      <FooterItem
        title="Company"
        :menuItems="[
          'About Us',
          'Terms of Use',
          'Legal & Privacy',
          'Disclaimer',
        ]"
      />
      <FooterItem
        title="Support"
        :menuItems="['Contact Support', 'Servieces & Pricing', 'FAQ']"
      />
    </div>
  </div>
</template>

<script>
import FooterItem from "../FooterItem/FooterItem.vue";

export default {
  name: "AppFooter",
  components: {
    FooterItem,
  },
};
</script>
<style scoped>
.footer-gradient {
  background: linear-gradient(119deg, #10726b 8.33%, #00f2de 100%);
}
</style>
