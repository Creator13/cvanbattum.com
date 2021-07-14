<template>
  <div id="app">
    <header>
      <h1>Casper van Battum</h1>
    </header>
    <div class="page-container">
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/photos">Photography</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <router-view id="router-view"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss">
@import "./css/normalize.css";
@import "./css/fonts.css";
@import "./css/colors.scss";

html {
  background-color: $color-background;
}

a {
  color: $color-text-light;
}

a:visited {
  color: $color-text-light;
}

a:hover {
  color: $color-accent-main;
}

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text-light;
  width: 55%;
  margin: 0 auto;
}

header h1 {
  font-family: "Adelle", sans-serif;
  font-weight: 300;
  font-size: 3em;
  color: $color-text-dark;
}

.page-container {
  display: flex;
}

nav {
  flex-basis: 150px;
  overflow: hidden;
  text-align: left;
  margin-right: 20px;
  border-right: 1px dotted black;
}

nav a {
  font-family: "Adelle", sans-serif;
  font-weight: 700;
  text-decoration: none;
  display: block;
  padding: .5em;
  margin: .25em 10px .25em 0;
}

nav a.router-link-exact-active {
  color: $color-accent-secondary;
}

nav a.router-link-exact-active:hover {
  color: $color-accent-main;
}

#router-view {
  flex-grow: 8;
}
</style>
