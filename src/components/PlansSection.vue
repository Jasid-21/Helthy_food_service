<template>
  <section class="plans-section" id="pricing_section">
    <h2 class="plans-title">Plans & Pricing</h2>
    <ul class="plans-container">
      <PlanItem v-for="(p, idx) of plans" :plan="p" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import PlanItem from './PlanItem.vue';
import json from '@/json/plans.json';
import Plan from '@/types/Plan.type';

const plans: Plan[] = json.plans;
</script>

<style scoped lang="scss">
.plans-section {
  background-color: $secondary;
  .plans-title {
    text-align: center;
  }

  .plans-container {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-rows: auto auto auto;
    row-gap: 1rem;
  }
}

@media (min-width: $lg) {
  .plans-section {
    .plans-container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      row-gap: 0;
      column-gap: 1rem;
    }
  }
}
</style>
