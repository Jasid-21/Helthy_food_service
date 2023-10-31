<template>
  <router-view/>
</template>

<style lang="scss">
$logo_w: 100px;
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins';
  font-weight: 400;
}

section {
  padding: var(--y_pad) var(--x_pad);
}

h1, h2, h3, h4, h5 {
  color: $d_accent2;
  font-family: 'Poppins';
  font-weight: 700;
}

p, span, a {
  color: $d_accent2;
}

a:hover {
  text-shadow: 0 0 3px $d_accent2;
  cursor: pointer;
}

h1 {font-size: 4.210rem; /* 67.36px */}

h2 {font-size: 3.158rem; /* 50.56px */}

h3 {font-size: 2.369rem; /* 37.92px */}

h4 {font-size: 1.777rem; /* 28.48px */}

h5 {font-size: 1.333rem; /* 21.28px */}

small {font-size: 0.750rem; /* 12px */}

button {
  background-color: $d_accent2;
  color: $primary_lighter;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  max-width: 300px;
  height: 30px;
  margin-top: 0.5rem;

  border: none;
  border-radius: 20px;
  text-align: center;

  transition-property: background-color;
  transition-duration: 150ms;
}

button:hover {
  background-color: transparent;
  border: 2px solid $d_accent2;
  color: $d_accent2;
}
</style>
