<template>
  <div id="app">
    <header>
      <h1>Casper van Battum</h1>
    </header>
    <div class="page-container">
      <nav id="nav">
        <router-link class="slide-ltr" to="/">Home</router-link>
        <router-link class="slide-ltr" to="/projects">Projects</router-link>
        <router-link class="slide-ltr" to="/photos">Photography</router-link>
        <router-link class="slide-ltr" to="/contact">Contact</router-link>
      </nav>
      <transition name="fade" mode="out-in">
        <router-view id="router-view"/>
      </transition>
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
@import "css/effects";
@import "css/colors";
@import "css/base";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-light;
  width: 62.5%;
  margin: 0 auto;
}

header h1 {
  font-family: "Adelle", sans-serif;
  font-weight: 300;
  font-size: 3.5em;
  color: $text-dark;
}

.page-container {
  display: flex;
}

nav {
  flex-basis: 170px;
  flex-shrink: 0;
  overflow: hidden;
  text-align: left;
  margin-right: 20px;
  border-right: 1px dotted black;
}

// Underline animation stolen from https://codepen.io/mxttsco/pen/KgodYm
nav a {
  font-family: "Adelle", sans-serif;
  font-weight: 700;
  font-size: 1.125em;
  text-decoration: none;
  display: block;
  padding: .5em;
  margin: .25em 10px .25em 0;

  transition: $transition;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    margin: 5px 0 0;
    transition: $transition;
    opacity: 0;
    background-color: $accent-main;
  }

  &.slide-ltr {
    &:before,
    &:after {
      left: 0;
    }
  }

  &:hover {
    background: none;
  }
}

.slide-ltr:hover {;
  color: $accent-secondary;

  &:before,
  &:after {
    width: 80%;
    opacity: 1;
  }
}

nav a.router-link-exact-active {
  color: $accent-secondary;
}

nav a.router-link-exact-active:hover {
  color: $accent-main;

  &.slide-ltr {
    color: $accent-secondary;
  }
}

#router-view {
  flex-grow: 1;
}

.breadcrumb-link {
  cursor: pointer;
  text-decoration: none;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: $transition;
  transition-duration: 100ms;
}

.fade-leave-active {
  transition: $transition;
  transition-duration: 100ms;
  opacity: 0;
}

@media screen and (max-width: 1450px) {
  #app {
    width: calc(100% - 2 * 50px);
    margin: 0 50px;
  }
}
</style>
