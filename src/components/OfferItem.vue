<template>
  <li class="offer-item" :class="{ reverse }">
    <div class="image-container">
      <img :src="require('@/assets/images/service_imgs/' + imgUrl)" alt="Pancakes">
    </div>
    <div class="info-container">
      <h4 class="service-title">{{ title }}</h4>
      <p class="service-desc">{{ description }}</p>
      <div class="btn-container">
        <button class="redirect-btn">Go Now</button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  reverse: { type: Boolean, default: false },
  title: { tytle: String, default: '' },
  description: { type: String, default: '' },
  imgUrl: { type: String, default: '@/assets/images/image-not-found.jpg' },
});
</script>

<style scoped lang="scss">
.offer-item {
  background-color: $primary_lighter;
  max-width: 450px;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px $secondary_shadow;

  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  * {
    width: 100%;
  }

  .image-container {
    background-color: gray;
    height: 160px;

    img {
      max-height: 100%;
      object-fit: cover;
    }
  }

  .info-container {
    padding: 0.5rem;

    .btn-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

.offer-item.reverse {
  direction: rtl;
}

@media (min-width: $sm) {
  .offer-item {
    max-width: 100%;
    min-height: 200px;

    display: grid;
    grid-template-columns: 40% 60%;

    .image-container {
      height: 100%;
  
      img {
        height: 100%;
      }
    }
  
    .info-container {
      padding: 0.75rem;
      
      .service-title {
        margin: 0;
      }

      .btn-container {
        display: block;
      }
    }
  }
}

@media (min-width: $md) {
  .offer-item {
    min-height: 250px;
  }
}

@media (min-width: $lg) {
  .offer-item {
    min-height: 300px;
  }
}
</style>
