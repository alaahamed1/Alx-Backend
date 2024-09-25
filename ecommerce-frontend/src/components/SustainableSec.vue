<template>
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto max-w-5xl px-4">
        <!-- Section Header -->
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-mainColor mb-4">Sustainable Impact of Solar Energy Projects</h2>
          <p class="text-gray-600 mb-8">See how our solar energy projects are making a difference in the world.</p>
        </div>
  
        <!-- Impact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-500">
            <div class="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-green-500 text-white rounded-full">
              <!-- Icon -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">Carbon Footprint Reduction</h3>
            <p class="text-gray-600 text-center">
              Our projects reduce CO2 emissions by harnessing solar energy, contributing to a cleaner and healthier planet.
            </p>
          </div>
  
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-500">
            <div class="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-blue-500 text-white rounded-full">
              <!-- Icon -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m1 6h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">Water Conservation</h3>
            <p class="text-gray-600 text-center">
              By powering irrigation systems with solar energy, we help conserve water resources in arid regions.
            </p>
          </div>
  
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-500">
            <div class="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-yellow-500 text-white rounded-full">
              <!-- Icon -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">Economic Growth</h3>
            <p class="text-gray-600 text-center">
              Solar energy projects stimulate local economies by creating jobs and reducing energy costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SustainableSec',
  };
  </script>
  