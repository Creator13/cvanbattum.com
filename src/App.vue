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
  width: 62.5%;
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
  flex-basis: 170px;
  flex-shrink: 0;
  overflow: hidden;
  text-align: left;
  margin-right: 20px;
  border-right: 1px dotted black;
}

// Underline animation stolen from https://codepen.io/mxttsco/pen/KgodYm
$animate: all .2s cubic-bezier(1,.25,0,.75) 0s;

nav a {
  font-family: "Adelle", sans-serif;
  font-weight: 700;
  font-size: 1.125em;
  text-decoration: none;
  display: block;
  padding: .5em;
  margin: .25em 10px .25em 0;

  transition: $animate;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    margin: 5px 0 0;
    transition: $animate;
    opacity: 0;
    background-color: $color-accent-main;
  }

  &.slide-ltr {
    &:before,
    &:after {
      left: 0;
    }
  }
}

.slide-ltr:hover {;
  color: $color-accent-secondary;

  &:before,
  &:after {
    width: 80%;
    opacity: 1;
  }
}

nav a.router-link-exact-active {
  color: $color-accent-secondary;
}

nav a.router-link-exact-active:hover {
  color: $color-accent-main;

  &.slide-ltr {
    color: $color-accent-secondary;
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
  transition: $animate;
}

.fade-leave {}

.fade-leave-active {
  transition: $animate;
  opacity: 0;
}

@media screen and (max-width: 1450px){
  #app {
    width: calc(100% - 2 * 50px);
    margin: 0 50px;
  }
}
</style>
