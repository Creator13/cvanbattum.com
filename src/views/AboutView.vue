<template>
  <div class="home">
    <main>
      <h2>I'm a Netherlands-based programmer, game developer and photographer.</h2>
      <div class="markdown">
        <div class="link-container">
          <a href="/casper_van_battum_cv_2021.pdf" class="download-link">Download my CV</a>
        </div>
      </div>
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
@import "../css/markdown";

.home {
  text-align: center;
}

main {
  margin-top: 40px;
  margin-bottom: 40px;

  h1, h2 {
    font-family: "Adelle", sans-serif;
    font-weight: 400;
    letter-spacing: .05em;
  }

  h2 {
    font-size: 1.75em;
  }
}

.splash-image {
  border-radius: $border-radius;
  background-image: url("/portrait.jpg");
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  background-size: cover;
  background-position: center;
  text-align: center;
  vertical-align: center;
}

.link-container {
}
</style>
