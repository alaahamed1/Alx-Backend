<template>
  <section class="relative bg-white py-20">
    <!-- Decorative Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-10"></div>

    <div class="container mx-auto max-w-4xl px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <h2 class="text-4xl font-extrabold text-mainColor mb-4">Transforming Desert Lands with Solar Energy</h2>
        <p class="text-lg text-gray-600">Empowering arid landscapes with sustainable and innovative solar solutions.</p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Feature 1 -->
        <div class="group bg-gradient-to-r from-yellow-300 to-yellow-500 p-1 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl">
          <div class="bg-white p-6 rounded-lg transform transition duration-500 group-hover:scale-105">
            <div class="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-yellow-500 text-white rounded-full shadow-md">
              <!-- Icon -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-3 text-center">Sustainable Energy</h3>
            <p class="text-gray-600 text-center">
              Harnessing solar energy to generate clean, renewable power for communities around the world.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="group bg-gradient-to-r from-yellow-300 to-yellow-500 p-1 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl">
          <div class="bg-white p-6 rounded-lg transform transition duration-500 group-hover:scale-105">
            <div class="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-yellow-500 text-white rounded-full shadow-md">
              <!-- Icon -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-3 text-center">Desert Agriculture</h3>
            <p class="text-gray-600 text-center">
              Transforming barren deserts into fertile <br>----<br> landscapes with solar-powered irrigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TransformSection',
};
</script>

<style scoped>
/* Additional styles for fine-tuning */
</style>
