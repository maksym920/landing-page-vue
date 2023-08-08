<template>
  <a  @click="loginClicked" class="signup-btn w-inline-block cursor-pointer w-[81px]">
    <div class="button__inner px-3 py-2 text-center">
      <div class="gradient" style="opacity: 0.1">
        <div
          style="
            transform: translate3d(18.909%, -100%, 0px) scale3d(1.5, 1.5, 1)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
            will-change: transform;
          "
          class="gradient__ball gradient__ball--1"
        ></div>
        <div class="gradient__ball gradient__ball--2"></div>
      </div>
      <div class="relative">{{ name }}</div>
    </div>
    <div class="gradient-glow">
      <div class="gradient__ball gradient__ball--1"></div>
      <div
        style="
          transform: translate3d(-17.519%, -100%, 0px) scale3d(1, 1, 1)
            rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
          will-change: transform;
        "
        class="gradient__ball gradient__ball--2"
      ></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "LoginBtn",
  props: ["name"],
  methods: {
    loginClicked() {
      this.$emit('login-click');
    },
  }
};
</script>

<style scoped>
.signup-btn {
  position: relative;
  box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.85);
  -webkit-transition: box-shadow 200ms ease, -webkit-transform 200ms ease;
  transition: box-shadow 200ms ease, -webkit-transform 200ms ease;
  transition: transform 200ms ease, box-shadow 200ms ease;
  transition: transform 200ms ease, box-shadow 200ms ease,
    -webkit-transform 200ms ease;
  border-radius: 24px;
}
.signup-btn:active {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  -webkit-transform: translate(0px, 2px);
  -ms-transform: translate(0px, 2px);
  transform: translate(0px, 2px);
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
.signup-btn:hover .gradient {
  opacity: 1 !important;
}
.button__inner {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: inset 0 0 7px 0 hsla(0, 0%, 100%, 0.28);
  -webkit-transition: box-shadow 200ms ease;
  transition: box-shadow 200ms ease;
}

.button__inner:hover {
  box-shadow: inset 0 0 7px 0 hsla(0, 0%, 100%, 0.6);
}

.gradient {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  border-radius: 12px;
}
.gradient__ball {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  mix-blend-mode: overlay;
}

.gradient__ball.gradient__ball--1 {
  position: absolute;
  bottom: 0px;
  background-color: #fd3846;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fd3846),
    to(#ffd000)
  );
  background-image: linear-gradient(90deg, #fd3846, #ffd000);
}

.gradient__ball.gradient__ball--2 {
  position: absolute;
  left: 50%;
  bottom: 0px;
  background-image: linear-gradient(78deg, #a600ff, #2bff00);
}

.gradient-glow {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  opacity: 0.25;
}
.gradient__ball.gradient__ball--1 {
  animation: gradient1 10s infinite;
}
.gradient__ball.gradient__ball--2 {
  animation: gradient2 10s infinite;
}
@keyframes gradient1 {
  0% {
    transform: translate3d(0%, -100%, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  25% {
    transform: translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  50% {
    transform: translate3d(100%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  75% {
    transform: translate3d(100%, -100%, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  100% {
    transform: translate3d(0%, -100%, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
}
@keyframes gradient2 {
  0% {
    transform: translate3d(-100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  25% {
    transform: translate3d(-100%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  50% {
    transform: translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  75% {
    transform: translate3d(0%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  100% {
    transform: translate3d(-100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
}
</style>
