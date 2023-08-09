<template>
  <swiper
    class="!pt-11 pb-11"
    :modules="modules"
    :parallax="true"
    :slides-per-view="3"
    :loop="true"
    :navigation="true"
    :effect="'coverflow'"
    :coverflowEffect="{
      slideShadows: true,
      rotate: 0,
      stretch: 0,
      depth: -80,
      scale: .8,
      modifier: 1,
    }"
  >
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/5.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/6.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/1.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/2.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/3.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="rounded-[44px]" src="../../assets/4.jpg" />
        <div class="absolute top-[20%] left-[20%] text-white text-base">
          Hedge Fund-<br />in-a-box
        </div>
        <div
          class="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm"
        >
          Learn more
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { defineComponent } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import "./style.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, EffectCoverflow],
    };
  },
  // Rest of your component options...
});
</script>
