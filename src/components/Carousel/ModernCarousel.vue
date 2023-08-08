<template>
  <swiper
    class="swiper !mt-11 pb-11"
    :modules="modules"
    :parallax="true"
    :slides-per-view="3"
    :slides-per-group="1"
    :loop="true"
    :navigation="true"
  >
    <swiper-slide>
      <div>
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
        <img class="rounded-3xl" src="../../assets/Fund.jpeg" />
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
import { Navigation, EffectCreative } from "swiper/modules";
import { defineComponent } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./style.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, EffectCreative],
    };
  },
  // Rest of your component options...
});
</script>
