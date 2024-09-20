<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// Importing Navbar component
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";


export default {
  components: {
    Navbar,
    Footer,
  },
  name: "App",
};
</script>
