<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]"
    >
      Get going
    </div>
    <div
      class="text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px]"
    >
      Learn about our account proposals
    </div>
    <div
      class="text-[#2F4644] text-2xl font-light !leading-[120%] tracking-[-2px] mb-10"
    >
      Get the most out of cryptool
    </div>
  </div>
  <div
    class="flex flex-wrap justify-center items-center gap-6 mb-24 mt-16 lg:mx-40 mx-0"
  >
    <ManagePlan
      title="Free"
      price="0"
      label="Use Cryptool free"
      walletAccessCount="1"
      entires="5"
      maxGroupSize="10"
      buttonLabel="Try Now"
    />
    <ManagePlan
      title="Premium"
      price="2.99"
      label="Starting from per account"
      walletAccessCount="5"
      entires="unlimited"
      maxGroupSize="50"
      buttonLabel="Sign Up"
    />
    <ManagePlan
      title="Manager"
      price="119.99"
      label="Starting from per account"
      walletAccessCount="unlimited"
      entires="unlimited"
      maxGroupSize="unlimited"
      buttonLabel="Sign Up"
    />
  </div>
</template>
<script>
import ManagePlan from "./ManagePlan";

export default {
  name: "ManagePlans",
  components: {
    ManagePlan,
  },
};
</script>
