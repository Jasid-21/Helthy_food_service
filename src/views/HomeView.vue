<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <TestimoniesSection />
    <PlansSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import ContactSection from '@/components/ContactSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import PlansSection from '@/components/PlansSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TestimoniesSection from '@/components/TestimoniesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>
