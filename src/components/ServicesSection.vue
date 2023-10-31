<template>
  <section class="offers-section" id="services_section">
    <h2 class="offers-title">What we offer?</h2>
    <ul class="services-list">
      <OfferItem v-for="(s, idx) of services" :key="idx" :title="s.title"
        :description="s.description" :img-url="s.imgUrl" :reverse="s.reverse" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import json from '@/json/services.json';
import OfferItem from './OfferItem.vue';
import Service from '@/types/Service.type';

const services: Service[] = json.services;
</script>

<style scoped lang="scss">
.offers-section {
  background-color: $secondary;
  .offers-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .services-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
