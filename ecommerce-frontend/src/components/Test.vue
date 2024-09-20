<template>
    <div class="relative bg-gray-900 h-screen">
      <!-- tsParticles -->
      <Particles id="tsparticles" :options="particlesOptions" class="absolute inset-0" />
      <div class="relative z-10 text-white text-center">
        <h1 class="text-4xl font-bold">Transforming Desert Lands with Solar Energy</h1>
        <p class="mt-4">Empowering arid landscapes with sustainable and innovative solar solutions.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { Particles } from "vue3-particles";
  
  export default {
    name: 'Test',
    components: {
      Particles,
    },
    data() {
      return {
        particlesOptions: {
          background: {
            color: {
              value: "#fff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  </style>
  