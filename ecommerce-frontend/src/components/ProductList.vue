<template>
  <div class="w-[80%] m-auto py-20">
    <p class="text-4xl font-semibold text-center text-yellow-500 my-7">Product List</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-14">
      <li v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg transition duration-500 hover:shadow-2xl overflow-hidden flex flex-col">
        <img :src="getImageUrl(product.image)" alt="Product Image" class="w-full h-30 object-cover">
        <div class="p-4 flex-grow hover:bg-lightYellow">
          <h2 class="text-base font-bold text-textColor mb-2">{{ product.name }}</h2>
          <p class="text-gray-500 text-sm">{{ product.description }}</p>
        </div>
        <div class="flex justify-between items-center px-6 py-3 border-t border-gray-200 mt-auto">
          <p class="text-textColor font-semibold text-base">${{ product.price }}</p>
          <button @click="addToBasket(product)" class="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold py-2 px-4 rounded-md">Add to Cart</button>
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