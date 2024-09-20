<template>
  <div class="w-[70%] mx-auto py-24 min-h-screen">
    <h2 class="text-2xl font-bold mb-8">Basket</h2>
    
    <div v-if="basketItems.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="item in basketItems" :key="item.id" class="flex p-6 border rounded-lg shadow-md">
        <img :src="item.image" alt="item.name" class="w-24 h-24 object-cover mr-4" />
        <div class="flex flex-col justify-between flex-grow">
          <h3 class="font-semibold text-base">{{ item.name }}</h3>
          <p class="text-gray-500 text-sm">{{ item.description }}</p>
          <div class="flex items-center justify-between mt-4">
            <div>
              <label for="quantity" class="text-xs mr-2">Qty:</label>
              <input type="number" v-model="item.quantity" min="1" class="w-16 p-1 border rounded" />
            </div>
            <p class="font-bold text-lg text-mainColor">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <button @click="removeItem(item.id)" class="text-red-500 mt-4">Remove</button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-lg text-gray-500">Your basket is empty!</p>
    </div>

    <div v-if="basketItems.length > 0" class="mt-12 text-right">
      <h3 class="text-2xl font-semibold">Total: ${{ totalPrice.toFixed(2) }}</h3>
      <button @click="checkout" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Basket',
  computed: {
    ...mapGetters(['basketItems']),
    totalPrice() {
      return this.basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  mounted() {
    this.basketItems.forEach(item => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });
  },
  methods: {
    removeItem(id) {
      // Dispatch action to remove item from basket
      this.$store.dispatch('removeFromBasket', id);
    },
    checkout() {
      // Proceed to checkout logic
      this.$router.push({ name: 'Checkout' });
    },
    
  }
};
</script>

<style scoped>
/* Additional styles can be added as needed */
</style>
