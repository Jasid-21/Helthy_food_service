<template>
  <div class="master-container">
    <NavbarVue />
    <SecondHero title="About us" />
    <section class="about-description">
      <!--<img class="wave-img" src="../assets/wave-haikei.svg" alt="Wave background">-->
      <div class="info-container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas id dicta consequatur corrupti animi numquam, facilis laborum illo dolorum minus esse, ea qui obcaecati, cum suscipit minima sunt architecto?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima suscipit, pariatur possimus vero illo molestiae ipsum neque nostrum aut cum qui, fuga nihil rem, provident repellendus odio. Rem, iusto at!
        </p>
      </div>
    </section>
    <PlansSection />
    <ContactSection />
    <FooterSection :waved="true" />
  </div>
</template>

<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
import SecondHero from '@/components/SecondHero.vue';
import PlansSection from '@/components/PlansSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<style scoped lang="scss">
.about-description {
  background-color: $primary;
  padding-top: 5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 1rem;

  .info-container {
    p {
      text-align: center;
      font-size: 1.125rem;
    }
  }

  .wave-img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
