<template>
  <section class="contact-section" id="contact_section">
    <div class="contact-info">
      <h3 class="contact-info-title">Contact Info</h3>
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
    <form class="contact-form">
      <h3 class="contact-title">Message us:</h3>
      <label for="name">Your name:</label>
      <input type="text" id="name" name="name" placeholder="Jhon Doe" class="testing">
      <br><br>
      <label for="email">Your Email:</label>
      <input type="email" name="email" id="email" placeholder="jhon@example.com">
      <br><br>
      <label for="message">Your message:</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message"></textarea>
      <br><br>
      <button type="submit">Send!</button>
    </form>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.contact-section {
  background-color: $primary;
  .contact-info {
    display: none;

    .contact-icon {
      * {
        width: 1rem !important;
      }
    }
  }
  .contact-form {
    background-color: $primary_lighter;
    border-radius: 10px;
    box-shadow: 0 0 10px $secondary;
    width: 300px;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input, textarea {
      width: 100%;
      border-radius: 6px;
      border: 1px solid $d_accent2;
    }

    .contact-title{
      text-align: center;
    }

    input {
      height: 26px;
    }

    button {
      align-self: center;
    }
  }
}

@media (min-width: $lg) {
  .contact-section {
    display: grid;
    grid-template-columns: 55% 45%;
    column-gap: 1rem;

    .contact-info {
      display: block;
    }

    .contact-form {
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
