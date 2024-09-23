<template>
  <div class="w-[70%] mx-auto py-24 min-h-screen">
    <h2 class="text-2xl font-bold mb-8">Basket</h2>

    <div
      v-if="basketItems.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="item in basketItems"
        :key="item.id"
        class="flex p-6 border rounded-lg transition duration-500 hover:shadow-2xl shadow-md">
        <!-- <img :src="item.image" alt="item.name" class="w-24 h-24 object-cover mr-4" /> -->
        <div class="flex flex-col justify-between flex-grow">
          <h3 class="font-semibold text-textColor text-base">
            {{ item.name }}
          </h3>
          <p class="text-gray-500 text-sm">{{ item.description }}</p>
          <div class="flex items-center justify-between mt-4">
            <div>
              <label for="quantity" class="text-sm mr-2">Qty:</label>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                class="w-10 p-1 border rounded"
              />
            </div>
            <p class="font-bold text-base text-textColor">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
            <button @click="removeItem(item.id)" class="text-red-500">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-lg text-gray-500">Your basket is empty!</p>
    </div>

    <div v-if="basketItems.length > 0" class="mt-12 text-right">
      <h3 class="text-2xl font-semibold">
        Total: ${{ totalPrice.toFixed(2) }}
      </h3>
      <button
        @click="checkout"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Basket",
  computed: {
    ...mapGetters(["basketItems"]),
    totalPrice() {
      return this.basketItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  mounted() {
    this.basketItems.forEach((item) => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });
  },
  methods: {
    removeItem(id) {
      // Dispatch action to remove item from basket
      this.$store.dispatch("removeFromBasket", id);
    },
    async checkout() {
      try {
        const token = localStorage.getItem("auth_token");

        // Log the token for debugging
        console.log('Token:', token);

        if (!token) {
          throw new Error("No authentication token found");
        }

        const basketData = {
          items: this.basketItems.map(item => ({
            id: item.id,
            quantity: item.quantity
          })),
          totalPrice: this.totalPrice
        };

        // Log the basketData for debugging
        console.log('basketData:', basketData);

        const response = await axios.post(
          "http://localhost:8000/api/checkout",
          basketData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.message);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Check if the token is valid and not expired.");
        } else {
          console.error("Checkout failed:", error);
        }
      }
    },
  },
};
</script>