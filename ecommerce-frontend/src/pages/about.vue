<template>
  <div class="bg-gray-100 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-4xl font-semibold text-center text-yellow-500 my-7">About Us</p>
        <p class="text-lg text-gray-600">
          We are committed to revitalizing deserts through the innovative use of solar energy, transforming barren landscapes into thriving ecosystems.
        </p>
      </div>
      
      <!-- Image and Idea Description -->
      <div class="mb-12 text-center">
        <img class="w-full h-64 object-cover rounded-lg mx-auto" src="../assets/img/about.jpg" alt="Saving Deserts with Solar Energy">
        <p class="mt-6 text-lg text-gray-700">
          Our idea focuses on utilizing solar energy to restore and sustain desert environments. By harnessing the power of the sun, we aim to bring life back to these areas, promoting sustainable development and combating climate change.
        </p>
      </div>

      <!-- Mission Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p class="text-lg text-gray-600">
          To innovate and implement solar energy solutions that rehabilitate desert areas, fostering biodiversity, and supporting sustainable communities.
        </p>
      </div>

      <!-- Vision Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p class="text-lg text-gray-600">
          A future where deserts are transformed into vibrant ecosystems, utilizing renewable energy to support life and growth.
        </p>
      </div>

      <!-- Objectives Section -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Objectives</h2>
        <ul  v-for="obj in objs" :key="obj.id" class="list-disc pl-5 text-lg text-gray-600">
          <li class="mb-2">{{ obj.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'About',
  data() {
    return {
      objs: [],
    };
  },
  created() {
    this.fetchobjs();
  },
  methods: {
    async fetchobjs() {
      try {
        const response = await axios.get("http://localhost:8000/api/about");
        console.log('API Response:', response);
        this.objs = response.data;
      } catch (error) {
        console.error("Error fetching objs:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
