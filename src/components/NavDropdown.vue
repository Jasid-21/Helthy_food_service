<template>
  <li class="link-item dropdown-control" @click="toggletransition">
    <a>
      <fai icon="fa-brands fa-servicestack" />&nbsp; Services
    </a>
    <transition name="slide">
      <div class="dropdown_options" v-if="transition_toggle">
        <ul>
          <li class="dropdown_option" v-for="(s, idx) of services" :key="idx">
            <router-link :to="'/services/' + s.title">{{ s.title }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Service from '@/types/Service.type';
import json from '@/json/services.json';

const services: Service[] = json.services;
const transition_toggle = ref<boolean>(false);

const toggletransition = () => {
  transition_toggle.value = !transition_toggle.value;
}
</script>

<style scoped lang="scss">
$option_h: 30px;  //* Here the dropdown items height.
$option_count: 4; //* Here the number of options.
.dropdown_options {
  background-color: $primary_lighter;
  border-radius: 6px;
  padding: 0.5rem;
  overflow-y: hidden;

  ul {
    font-size: 14px;
    list-style: none;
    padding: 0;

    .dropdown_option {
      height: $option_h;
      pointer-events: all;
      padding: 0.5rem;
      margin-bottom: 0.625rem;
      border-radius: 6px;
    }

    .dropdown_option:last-child {
      margin-bottom: 0;
    }

    .dropdown_option:hover {
      background-color: $primary;
    }
  }
}

.slide-enter-from,
.slide-leave-to {
  height: 0;
}

.slide-enter-to,
.slide-leave-from {
  height: calc($option_h*($option_count + 1) + 1rem);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 180ms ease;
}

.dropdown_options.hidden {
  height: 0;
  padding: 0;
}

.link-item:hover {
  background-color: $secondary;
}
</style>