<template>
  <div class="w-full">
    <section id="Home" class="w-full">
      <section>
        <div
          class="absolute top-[20%] left-[12%] w-3/5 z-20 col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
        >
          <span
            data-aos="fade-right"
            data-aos-once="true"
            class="text- text-gradient font-semibold uppercase text-textColor"
            >Sign Up Today</span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2rem] text-mainColor sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Transforming Desert Lands with Solar Energy<br />
            <span
              class="bg-gradient-to-r from-[#0c66ee] to-green-400 bg-clip-text text-transparent"
              >Make It Green!</span
            ><br />
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="paragraph hidden sm:block text-textColor"
          >
            Innovative solutions to revitalize arid regions and harness the
            power of the sun for a greener world.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <button
              class="max-w-full rounded-2xl px-6 py-4 bg-gradient-to-r from-[#0c66ee] to-green-400 border border-[#0c66ee] text-white"
            >
              <router-link to="/ProductList" class="text-white no-underline">
                Get Started
              </router-link>
            </button>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6">
          <div class="w-full h-dvh relative">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('../assets/img/hero-image.jpg')"
              class="h-dvh w-full bg-cover"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('../assets/img/ellipse-1.png')"
          class="absolute bottom-10 xl:bottom-16 left-4 xl:left-2/3 w-6 animate-ping"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('../assets/img/ellipse-2.png')"
          class="absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6 animate-ping"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('../assets/img/ellipse-3.png')"
          class="absolute bottom-56 right-24 w-6 animate-ping"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('../assets/img/star.png')"
          class="absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8 animate-spin"
        />
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
