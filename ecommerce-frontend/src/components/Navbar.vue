<template>
  <nav id="navbar" class="absolute  z-50 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <h1 class="text-4xl cursor-pointer font-bold text-textColor">Power</h1>
      <div
        class="flex flex-col lg:flex-row items-center space-x-6 xl:space-x-8">
        <ul
          class="w-full font-semibold h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-6 space-y-8 lg:space-y-0">
          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/"
              class="text-sm text-textColor hover:border-lightYellow hover:border-b-2 py-2 hover:text-mainColor"
              >Home</router-link>
          </li>

          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/ProductList"
              class="text-sm text-textColor hover:border-lightYellow hover:border-b-2 py-2 hover:text-mainColor">Product List</router-link>
          </li>

          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/about"
              class="text-sm text-textColor hover:border-lightYellow hover:border-b-2 py-2 hover:text-mainColor"
              >About Us</router-link
            >
          </li>
        </ul>
      </div>
      <ul class="flex space-x-4">
        <li v-if="isLoggedIn" class="relative">
          <router-link to="/basket" class="relative">
            <font-awesome-icon class="w-10 flex justify-center align-middle h-7 text-subColor" :icon="['fas', 'cart-arrow-down']" />
            <span v-if="basketItemCount > 0" class="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{{ basketItemCount }}</span>
          </router-link>
        </li>
        <li v-if="!isLoggedIn" class="relative">
          <router-link
            to="/login"
            class="px-6 xl:px-9 py-2 mt-2 bg-inherit text-gradient font-semibold rounded-2xl text-slate-600 border border-textColor"
            >Login</router-link>
        </li>
        <li v-if="!isLoggedIn" class="relative">
          <router-link
            to="/register"
            class="px-6 xl:px-9 py-2 mt-2 bg-gradient-to-r font-semibold rounded-2xl from-[#468ef9] to-textColor text-white"
            >Register</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="relative">
          <a
            href="#"
            @click="logout"
            class="px-6 xl:px-9 py-2 mt-2 bg-inherit text-gradient text-white hover:bg-lightYellow hover:border-lightYellow hover:text-gradientColor font-semibold rounded-xl border border-textColor bg-textColor transition duration-[300ms]">
            Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
    ...mapGetters(["basketItemCount"]),
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    },
    ...mapActions(["logout"]),
  },
};
</script>
