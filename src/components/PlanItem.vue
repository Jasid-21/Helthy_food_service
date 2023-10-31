<template>
  <li class="plan-item">
    <h3 class="plan-item-title">{{ plan.title }}</h3>
    <p class="price">${{ plan.price }} / month</p>
    <ul class="plan-services-container">
      <li class="plan-service">
        <p v-for="(s, idx) of plan.services" :key="idx">
          <fai icon="fa-solid fa-check" /> &nbsp;&nbsp; {{ s }}
        </p>
      </li>
    </ul>
    <div class="btn-container">
      <button>Try It Now</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Plan from '@/types/Plan.type';

const props = defineProps({
  plan: { type: Object as PropType<Plan>, required: true, }
});
</script>

<style scoped lang="scss">
.plan-item {
  background-color: $primary_lighter;
  border-radius: 10px;
  box-shadow: 0 0 10px $secondary_shadow;
  width: 100%;
  max-width: 700px;
  min-height: 400px;
  height: 100%;
  padding: 1.5rem;

  justify-self: center;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  .plan-services-container {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    p {
      * {
        width: 1rem;
        vertical-align: middle;
      }
    }
  }

  .btn-container {
    width: 100%;
    margin-top: auto;
    bottom: 0;
    margin-left: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
