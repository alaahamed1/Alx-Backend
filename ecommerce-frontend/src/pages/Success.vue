<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <div class="mb-6">
          <svg class="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m0 0a9 9 0 11-6.32 2.906A9 9 0 0112 3v0z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Order Successful</h2>
        <p class="text-gray-600 mb-8">Thank you for your order! Your order has been successfully placed. You will receive a confirmation email shortly.</p>
        <router-link to="/" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Go to Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Success"
  };
  </script>
  