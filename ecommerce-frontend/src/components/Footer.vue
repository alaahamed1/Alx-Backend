<template>
    <footer  class="bg-mainColor  px-8 mx-auto">
      <div class="w-full border-y border-[#DDDDDD]">
        <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div
            class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
              <a href="#">
                <h1 class="text-4xl cursor-pointer font-bold text-[#fee674]" >Power</h1>
              </a>
          </div>

          <div
            class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
          <ul class="space-y-4 flex flex-col text-[#BCDBF1]">
              <li  url="#" >Help Center</li>
              <li  url="#" >Contact Us</li>
            </ul>
          </div>

          <div
            class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]">
          <ul class="space-y-4 flex flex-col text-[#BCDBF1]">
              <li url="#" >Products</li>
              <li url="#" >About Us</li>
            </ul>
          </div>

          
          <div
            class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#8a9c96]"
          >
            <h5 class="font-medium text-white focus:outline-none focus:shadow-outline">Newsletter</h5>
            <p class="text-sm text-[#fee674] focus:outline-none focus:shadow-outline">
              Never miss anything crypto <br /> when you're on the go
            </p>
            <div class="flex items-center space-x-2">
              <input
                type="text"
                class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#8a9c96] placeholder-[#888]"
                placeholder="Enter your email"
              />
              <button
                class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300 bg-[#0c66ee]"
              >
              &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 sm:py-4 text-center text-sm text-[#57A6DD]">
        &copy; Copyright 2024 Power All rights reserved
      </div>
    </footer>
  </template>

<script>
export default {
  name: 'Footer',
}
</script>