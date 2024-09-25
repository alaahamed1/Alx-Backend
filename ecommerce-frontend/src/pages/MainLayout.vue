<template>
    <div>
    <Home/>
    <ChooseUs/>
    <SustainableSec/>
    <TechnologySection/>
    </div>
  </template>
  
  <script>
import Home from '../pages/Home.vue';
import Slider from '@/components/Slider.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import TechnologySection from '@/components/TechnologySection.vue';
import SustainableSec from '@/components/SustainableSec.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      Home,
      ChooseUs,
      SustainableSec,
      TechnologySection,
    }
  };
  </script>