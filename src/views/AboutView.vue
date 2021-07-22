<template>
  <div class="home">
    <main>
      <h1>Welcome!</h1>
      <h2>I'm a Netherlands-based programmer, game developer and photographer</h2>
    </main>
    <div class="splash-image"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutView'
})
</script>

<style scoped lang="scss">
@import "../css/base";
@import "../css/colors";
@import "../css/effects";

.home {
  text-align: center;
}

main {
  margin-bottom: 50px;

  h1, h2 {
    font-family: "Adelle", sans-serif;
    font-weight: 400;
    letter-spacing: .05em;
  }

  h1 {
    font-size: 2.75em;
  }
}

.splash-image {
  border-radius: $border-radius;
  background-image: url("/splash2.jpg");
  width: 100%;
  height: 350px;
  line-height: 350px;
  background-size: cover;
  background-position: center;
  text-align: center;
  vertical-align: center;
}
</style>
