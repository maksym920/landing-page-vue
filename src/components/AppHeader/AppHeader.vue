<template>
  <nav
    :class="{ sticky_header: isSticky }"
    class="sticky z-10 top-0 bg-transparent px-[50px] text-white w-full"
  >
    <div class="flex items-center justify-between h-16">
      <div class="flex justify-between items-center w-full">
        <div
          class="flex flex-row flex-shrink-0 justify-between 2xl:gap-[121px] gap-0"
        >
          <div v-if="isSticky === true">
            <img src="../../assets/Logo-black.png" alt="Logo" />
          </div>
          <div v-else>
            <img src="../../assets/Logo.svg" alt="Logo" />
          </div>
          <div class="hidden md:flex items-center">
            <a
              href="/"
              class="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >Portfolio
              <div
                class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
              ></div
            ></a>
            <a
              href="/"
              class="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >Raise
              <div
                class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
              ></div
            ></a>
            <a
              href="/"
              class="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >Marketplace
              <div
                class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
              ></div
            ></a>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center">
        <div v-if="isLogin" class="hidden 2xl:flex flex-row items-center mr-10 w-[317px]">
          <a
            href="/"
            class="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
            >My Cryptool
            <div
              class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
            ></div
          ></a>
          <a
            href="/"
            class="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
            >My Calendar
            <div
              class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
            ></div
          ></a>
          <a
            href="/"
            class="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
            >My Group
            <div
              class="hoverEvent absolute bottom-[-24px] w-[78%] rounded-full h-6 left-[11%] bg-[#6fadfba1]"
            ></div
          ></a>
        </div>
        <div class="flex flex-row justify-center items-center">
          <div class="relative" v-if="isLogin">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="h-9 w-[333px] focus-visible:outline-none block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search"
              required
            />
          </div>
          <!-- <button
            type="button"
            class="rounded-3xl !cursor-pointer border-solid mr-3 ml-4 border-[1px] bg-transparent w-20 border-[#2F4644] px-3 py-2"
          >
            Log in
          </button> -->
          <div class="flex flex-row items-center ml-4 gap-3">
            <LoginBtn v-if="!isLogin" name="Log in" @login-click="isLogin = !isLogin" />
            <LoginBtn v-if="!isLogin" name="Sign up" />
          </div>
          <div  v-if="isLogin" class="flex flex-row items-center ml-4 gap-4">
            <a href="/" class="w-[20px]">
              <img src="../../assets/notifications.svg" />
            </a>
            <a href="/" class="w-[20px]">
              <img src="../../assets/help.svg" />
            </a>
            <a href="/" class="w-[20px]">
              <img src="../../assets/groups_2.svg" />
            </a>
            <a href="/" class="w-[40px]">
              <img src="../../assets/account_background.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import LoginBtn from "../LoginBtn/LoginBtn.vue";

export default {
  name: "AppHeader",
  components: {
    LoginBtn,
  },
  data() {
    return {
      isSticky: false,
      isLogin: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.scrollY > window.innerHeight - 64) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>

<style scoped>
.sticky_header {
  background-color: rgb(255, 255, 255);
  color: black;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 20px 40px #0000001a;
}
.sticky {
  transition: all ease-in-out 0.8s;
}
.navItem:hover .hoverEvent {
  animation: navItemHover 0.5s forwards;
  filter: blur(4px);
  -webkit-filter: blur(4px);
}
@keyframes navItemHover {
  0% {
    transform: translate3d(0px, 30%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  100% {
    transform: translate3d(0px, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
}
</style>
