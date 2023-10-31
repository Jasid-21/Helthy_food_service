<template>
  <footer :class="{ waved }">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo">
    </div>
    <div class="links-container">
      <h4>Important Links</h4>
      <ul>
        <li>
          <a href="#hero_section">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pricing_section">Pricing</a>
        </li>
        <li>
          <a href="#contact_section">Contact</a>
        </li>
      </ul>
    </div>
    <div class="contact-info-container">
      <h4>Contact Info</h4>
      <p class="contact-icon">
        <fai icon="fa-solid fa-phone" /> &nbsp; +1 312 3456789
      </p>

      <p class="contact-icon">
        <fai icon="fa-solid fa-location-dot" />&nbsp; Cll 45 15b-80
      </p>

      <p class="contact-icon">
        <fai icon="fa-solid fa-envelope" />&nbsp; examplemail@domain.com
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps({
  waved: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
$logo_w: 100px;
footer {
  background-color: $secondary;
  padding: var(--y_pad) var(--x_pad);

  display: grid;
  grid-template-rows: $logo_w auto auto;

  .logo-container {
    width: $logo_w;
    height: $logo_w;

    border-radius: 50%;
    overflow: hidden;

    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .links-container, .contact-info-container {
    padding: 1rem;
  }

  .links-container {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: auto auto;

      a {
        text-decoration: none;
      }
    }
  }

  .contact-info-container {
    .contact-icon {
      * { width: 1rem; }
    }
  }
}

footer.waved {
  background-image: url('../assets/wave-haikei-2.svg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: $md) {
  footer {
    grid-template-columns: 50% 50%;
    grid-template-rows: $logo_w 1fr;
    column-gap: 2rem;

    .logo-container {
      grid-row: 1/2;
      grid-column: 1/3;
    }

    .links-container {
      grid-row: 2/3;
      grid-column: 1/2;
    }

    .contact-info-container {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }
}

@media (min-width: $lg) {
  footer {
    grid-template-rows: 1fr;
    grid-template-columns: $logo_w 1fr 1fr;

    .logo-container, .links-container, .contact-info-container {
      grid-row: auto;
      grid-column: auto;
    }
  }
}
</style>
