<template>
  <section class="hero-section" id="hero_section">
    <img :src="require('../assets/images/service_imgs/' + imgUrl)" alt="Hero Image" v-if="imgUrl" />
    <img src="../assets/images/hero_img.jpg" alt="Hero Image" v-else />
    <h2 class="hero-title">{{ title }}</h2>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  imgUrl: { type: String, default: null }
});
</script>

<style scoped lang="scss">
.hero-section {
  background-color: $primary;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  * {
    align-self: center;
    margin: 0;
    color: $l_accent;
  }

  img {
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;

    position: absolute;
    object-fit: cover;
    z-index: 0;

    filter:brightness(40%);
  }

  .hero-title {
    font-size: 3rem;
    z-index: 1;
  }

  .hero-desc {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-style: italic;
    z-index: 1;
  }
}
</style>