<template>
<div class="w-[40%] m-auto">
  <carousel :items-to-show="1">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide Image" class="w-full h-auto object-cover">
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3'
      ]
    };
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>