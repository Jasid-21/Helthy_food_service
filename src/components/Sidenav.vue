<template>
  <transition name="side">
    <div class="toggle-menu" v-if="active" id="toggle-menu">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Sidenav logo">
        <span>Foodhealth</span>
      </div>
      <ul class="links-container">
        <li class="link-item">
          <a href="#hero_section">
            <fai icon="fa-solid fa-house" />&nbsp; Home
          </a>
        </li>
        <li class="link-item">
          <a href="#">
            <fai icon="fa-solid fa-circle-info" />&nbsp; About
          </a>
        </li>
        <NavDropdown />
        <li class="link-item">
          <a href="#pricing_section">
            <fai icon="fa-solid fa-tags" />&nbsp; Pricing
          </a>
        </li>
        <li class="link-item">
          <a href="#contact_section">
            <fai icon="fa-solid fa-envelope" />&nbsp; Contact
          </a>
        </li>
      </ul>
      <div class="contact-info"></div>
      <button class="close-btn" @click="switch_mode">x</button>
    </div>  
  </transition>
</template>

<script setup lang="ts">
import NavDropdown from '@/components/NavDropdown.vue';

const props = defineProps({
  active: { type: Boolean, default: false },
});
const emits = defineEmits(['toggle_sidenav']);

const switch_mode = () => {
  emits('toggle_sidenav');
}
</script>

<style scoped lang="scss">
.toggle-menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 80vw;
  max-width: 300px;
  height: 100vh;
  background-color: $primary;
  padding: 1rem;

  .logo-container {
    height: 100px;
    border-bottom: 1px solid $secondary;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 100px;
      max-height: 100%;
    }

    span {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  .links-container {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 2rem;
    text-align: left;

    .link-item {
      font-weight: 600;
      border-radius: 6px;
      padding: 0.5rem;
      margin-bottom: 0.75rem;

      a {
        text-decoration: none;
      }
    }
  }

  .close-btn {
    width: 36px;
    border-radius: 6px;

    position: absolute;
    left: 100%;
    top: 100px;
  }
}

.side-enter-from,
.side-leave-to {
  left: -100vw;
}

.side-enter-active,
.side-leave-active {
  transition: left 180ms ease;
}
</style>
