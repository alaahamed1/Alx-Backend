<template>
    <section class="bg-white py-16">
      <div class="container mx-auto max-w-5xl px-4">
        <!-- Section Header -->
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-mainColor mb-4">Innovative Technologies in Solar Energy</h2>
          <p class="text-gray-600 mb-8">Explore the breakthrough technologies shaping the future of solar energy.</p>
        </div>
  
        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Content Block 1 -->
          <div class="flex flex-col hover:scale-105 transform transition duration-500 justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="../assets/img/Solar Panel Technology.jpg" alt="Solar Panel Technology" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Advanced Solar Panels</h3>
            <p class="text-gray-600 text-center">
              Experience the power of next-generation solar panels with higher efficiency and durability, ensuring maximum energy output even in harsh conditions.
            </p>
          </div>
  
          <!-- Content Block 2 -->
          <div class="flex flex-col hover:scale-105 transform transition duration-500 justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="../assets/img/AdobeStock_564282775-350x233.jpeg" alt="Solar Tracking Systems" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Solar Tracking Systems</h3>
            <p class="text-gray-600 text-center">
              Utilize cutting-edge tracking systems that automatically adjust the position of solar panels to capture the most sunlight throughout the day.
            </p>
          </div>
        </div>
  
        <!-- CTA -->
        <div class="text-center mt-12">
          <button class="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">
            Discover More Technologies
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TechnologySection',
  };
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  