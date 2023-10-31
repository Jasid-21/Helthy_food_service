<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo">
        &nbsp;&nbsp;
        <router-link to="/">Foodhealth</router-link>
      </div>
      <ul class="links-container">
        <li class="link-item"><router-link to="/about">About</router-link></li>
        <li class="link-item dropdown-control" @mouseenter="show_dropdown" @mouseleave="hide_dropdown">
          <span href="#services_section">Services</span>
          <Transition name="fade">
            <div class="dropdown_options" v-if="dropdown_active" @mouseleave="hide_dropdown">
              <ul id="nav_dropdown">
                <li class="dropdown_option" v-for="(s, idx) of services" :key="idx">
                  <router-link :to="'/services/' + s.title">{{ s.title }}</router-link>
                </li>
              </ul>
            </div>
          </Transition>
        </li>
        <li class="link-item"><a href="#pricing_section">Pricing</a></li>
        <li class="link-item"><a href="#contact_section">Contact</a></li>
      </ul>
      <div class="btns-container">
        <button class="burger-btn" id="burger-btn" @click="switch_mode">
          <div class="btn-line"></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        </button>
      </div>
    </nav>
    <Sidenav @toggle_sidenav="switch_mode" :active="active_class" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidenav from './Sidenav.vue';
import Service from '@/types/Service.type';
import json from '@/json/services.json';
import { useRouter } from 'vue-router';

const router = useRouter();
const services: Service[] = json.services;
const active_class = ref<boolean>(false);
const dropdown_active = ref<boolean>(false);

const toLogin = () => {
  router.push('/login');
}

const switch_mode = () => {
  active_class.value = !active_class.value;
}

const hide_dropdown = () => {
  dropdown_active.value = false;
}

const show_dropdown = () => {
  dropdown_active.value = true;
}
</script>

<style scoped lang="scss">
header {
  background-color: rgba($color: $secondary, $alpha: 0.7);
  padding: 1rem var(--x_pad);
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
  box-shadow: 0 2px 8px $secondary_shadow;

  span:hover {
    text-shadow: 0 0 3px $d_accent2;
    cursor: pointer;
  }

  nav {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container {
      height: 100% !important;
      display: flex;
      align-items: center;

      img {
        max-height: 100% !important;
      }

      a {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        text-decoration: none;
        display: none;
      }
    }

    .links-container {
      list-style: none;
      margin: 0;
      padding: 0;

      display: none;

      .link-item {
        font-weight: 600;
        margin-left: 1.5rem;
        position: relative;

        a {
          text-decoration: none;
        }

        .dropdown_options {
          width: 136px;
          position: absolute;
          left: 50%;
          top: 100%;
          translate: -50% 0;
          padding-top: 1rem;

          border-radius: 0 0 10px 10px;
          overflow: hidden;

          ul {
            width: 100%;
            font-weight: 400;
            color: $d_accent2;
            background-color: $op_primary;
            list-style: none;
            margin: 0;
            padding: 1rem;

            li {
              padding: 0.5rem 1rem;
              border-radius: 8px;
            }

            li:last-child {
              margin-bottom: 0;
            }

            li:hover {
              background-color: $primary;
              cursor: pointer;
            }
          }
        }

        .fade-enter-from,
        .fade-leave-to {
          opacity: 0;
        }

        .fade-enter-to,
        .fade-leave-from {
          opacity: 1;
        }

        .fade-enter-active,
        .fade-leve-active {
          transition: opacity 180ms ease;
        }
      }
    }

    .btns-container {
      width: 36px;

      button {
        margin: 0;
      }

      .burger-btn {
        padding: 0.25rem 0;
        background-color: transparent;
        border: none;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .btn-line {
          width: 100%;
          height: 0.25rem;
          background-color: $d_accent2;
          border-radius: 10px;
        }
      }
    }
  }
}

@media (min-width: $ml) {
  header {
    nav {
      .links-container {
        display: flex;
        column-gap: 3rem;
      }

      .btns-container {
        display: none;
      }
    }

    .toggle-menu {
      display: none;
    }
  }
}

@media (min-width: $lg) {
  header {
    nav {
      .logo-container {
        a {
          display: block;
        }
      }
    }
  }
}
</style>
