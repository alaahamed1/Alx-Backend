<template>
  <div class="w-[80%] m-auto py-20">
    <p class="text-4xl font-semibold text-center text-yellow-500 my-7">Product List</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-14">
      <li v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="getImageUrl(product.image)" alt="Product Image" class="w-full h-40 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">{{ product.name }}</h2>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <p class="text-lg font-semibold text-indigo-600">${{ product.price }}</p>
          <button class="cursor-pointer" @click="addToBasket(product)" >Add To Basket</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        console.log('API Response:', response);
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    getImageUrl(imagePath) {
  return imagePath ? `http://localhost:8000/storage/${imagePath}` : 'default_image.jpg';
},
    ...mapActions(['addToBasket'])
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}
</style>