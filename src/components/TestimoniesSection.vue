<template>
  <section class="testimonies-section">
    <Transition name="current">
      <div class="testimony-container" v-if="current">
        <p class="author">Made by --<strong>{{ testimonies[current_i].author }}</strong>--</p>
        <p class="testimony">{{ testimonies[current_i].description }}</p>
      </div>
    </Transition>

    <Transition name="current">
      <div class="testimony-container" v-if="next">
        <p class="author">Made by --<strong>{{ testimonies[next_i].author }}</strong>--</p>
        <p class="testimony">{{ testimonies[next_i].description }}</p>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import json from '@/json/testimonies.json';
import Testimony from '@/types/Testimony.type';

const testimonies: Testimony[] = json.testimonies;
const show_current = ref<boolean>(true);
const current = ref<boolean>(true);
const next = ref<boolean>(false);
const current_i = ref<number>(0);
const next_i = ref<number>(0);

setInterval(() => {
  show_current.value = !show_current.value;
  
  if (!show_current.value) {
    if (current_i.value >= testimonies.length - 1) {
      next_i.value = 0;
    } else {
      next_i.value = current_i.value + 1;
    }
  } else {
    if (next_i.value >= testimonies.length - 1) {
      current_i.value = 0;
    } else {
      current_i.value = next_i.value + 1;
    }
  }

  current.value = show_current.value;
  next.value = !show_current.value;
}, 3000);
</script>

<style scoped lang="scss">
.testimonies-section {
  background-color: $primary;
  height: 300px;
  position: relative;

  .testimony-container {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1.25rem;
    font-style: italic;
    
    .author {
      text-align: right;
      font-style: normal;
    }
  }

  .current-enter-from,
  .current-leave-to {
    opacity: 0;
  }

  .current-enter-to,
  .current-leave-from {
    opacity: 1;
  }

  .current-enter-active,
  .current-leave-active {
    transition: opacity 500ms ease;
  }
}
</style>
