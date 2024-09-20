<template>
  <nav id="navbar" class="absolute  z-50 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <h1 class="text-4xl cursor-pointer font-bold text-mainColor">Power</h1>
      <div
        class="flex flex-col lg:flex-row items-center space-x-6 xl:space-x-8">
        <ul
          class="w-full font-semibold h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-6 space-y-8 lg:space-y-0">
          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/"
              class="text-sm text-[#666666] hover:text-gray-900"
              >Home</router-link>
          </li>

          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/ProductList"
              class="text-sm text-[#666666] hover:text-gray-900">Product List</router-link>
          </li>

          <li v-if="isLoggedIn" class="relative">
            <router-link
              to="/about"
              class="text-sm text-[#666666] hover:text-gray-900"
              >About Us</router-link
            >
          </li>
        </ul>
      </div>
      <ul class="flex space-x-4">
        <li><router-link v-if="isLoggedIn" to="/basket">Basket</router-link></li>
        <li v-if="!isLoggedIn" class="relative">
          <router-link
            to="/login"
            class="px-6 xl:px-9 py-2 mt-2 bg-inherit text-gradient font-semibold rounded-2xl text-slate-600 border border-mainColor"
            >Login</router-link>
        </li>
        <li v-if="!isLoggedIn" class="relative">
          <router-link
            to="/register"
            class="px-6 xl:px-9 py-2 mt-2 bg-gradient-to-r font-semibold rounded-2xl from-[#468ef9] to-mainColor text-white"
            >Register</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="relative">
          <a
            href="#"
            @click="logout"
            class="px-6 xl:px-9 py-2 mt-2 bg-inherit text-gradient text-mainColor font-semibold rounded-2xl border border-mainColor"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState, mapActions } from "vuex";

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
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    },
    ...mapActions(["logout"]),
  },
};
</script>
