<template>
  <div class="master-container">
    <Navbar />
    <SecondHero :title="service?.title" :img-url="service?.imgUrl" />
    <section class="service-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempore reiciendis nostrum dignissimos nisi sequi veniam minus non voluptatum in cumque maxime, quis debitis nemo tenetur nulla aut, rerum enim.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo veniam maiores? Incidunt molestiae quod facere ad ullam, possimus perferendis quibusdam minima debitis architecto illum pariatur sed dolorum aspernatur excepturi!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est fuga alias velit earum qui sit. Voluptatibus quas delectus, officia in, autem sint impedit ducimus quae voluptatem facilis, natus provident?
    </section>
    <PlansSection />
    <ContactSection />
    <FooterSection :waved="true" />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/components/FooterSection.vue';
import Navbar from '@/components/Navbar.vue';
import SecondHero from '@/components/SecondHero.vue';
import { RouteParams, useRoute} from 'vue-router';
import json from '@/json/services.json';
import Service from '@/types/Service.type';
import { ref, watch } from 'vue';
import PlansSection from '@/components/PlansSection.vue';
import ContactSection from '@/components/ContactSection.vue';

const route = useRoute();
const params = ref<RouteParams>(route.params);
const service = ref<Service | undefined>();

// Here could be a fetch request pointing to an API with the information.
const fetchInfo = () => {
  const resp: Service | undefined = json.services.find((s) => s.title == params.value?.title);
  if (!resp) {
    alert("Service Not Found...");
    return;
  }

  service.value = resp;
}

fetchInfo();

watch(route, (newV, oldV) => {
  params.value = newV.params;
  fetchInfo();
});
</script>

<style scoped lang="scss">
.service-description {
  background-color: $primary;
  color: $d_accent2;
  font-size: 1.125rem;
}
</style>