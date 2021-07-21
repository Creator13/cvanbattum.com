<template>
  <div id="app">
    <header class="site-header">
      <h1>Casper van Battum</h1>
    </header>
    <div class="page-container horizontal-navigation">
      <nav id="nav">
        <router-link to="/">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <!--        <router-link to="/photos">Photography</router-link>-->
                <router-link to="/contact">Contact</router-link>
      </nav>
      <transition name="fade" mode="out-in">
        <router-view id="router-view"/>
      </transition>
    </div>
    <footer>
      © Casper van Battum 2021 &#x2022; <a href="https://github.com/Creator13/cvanbattum.com" target="_blank">View
      website source code</a>
    </footer>
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

body, html {
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: block;
  color: $text-light;
  margin: 0 auto;
  width: 62.5%;
}

.site-header h1 {
  font-family: "Adelle", sans-serif;
  font-weight: 300;
  font-size: 3.5em;
  color: $text-dark;
}

.vertical-navigation {
  display: flex;

  nav {
    flex-basis: 170px;
    flex-shrink: 0;
    overflow: hidden;
    text-align: left;
    margin-right: 20px;
    border-right: 1px dotted $text-dark;

    a {
      font-family: "Adelle", sans-serif;
      font-weight: 700;
      font-size: 1.125em;
      text-decoration: none;
      display: block;
      padding: .5em;
      margin: .25em 10px .25em 0;

      transition: $transition;
      position: relative;

      // Underline animation stolen from https://codepen.io/mxttsco/pen/KgodYm
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        margin: 5px 0 0;
        transition: $transition;
        opacity: 0;
        background-color: $accent-main;
      }

      &:hover {
        background: none;
        color: $accent-secondary;

        &:before,
        &:after {
          width: 80%;
          opacity: 1;
        }
      }
    }
  }

  // No longer sure what this actually changes, maybe try a different active effect...

  //nav a.router-link-exact-active {
  //  color: $accent-secondary;
  //}
  //
  //nav a.router-link-exact-active:hover {
  //  color: $accent-main;
  //
  //  &.slide-ltr {
  //    color: $accent-secondary;
  //  }
  //}
}

$duration: 100ms;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);

.horizontal-navigation {
  nav {
    display: flex;
    justify-content: center;
    border-bottom: 1px dotted $text-dark;
    margin-bottom: 30px;
    padding: 10px 0;

    a {
      display: block;
      text-align: center;
      font-family: "Adelle", sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      text-decoration: none;
      margin: 0 20px;

      position: relative;

      &:hover {
        background: none;
        color: $accent-secondary;
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        right: 0;
        height: 3px;
        background-color: $accent-main;
        z-index: -10;
      }

      &:before {
        opacity: 0;
        transform: translateY(-$distance);
        transition: transform 0s $easeOutBack, opacity 0s;
      }

      &:after {
        opacity: 0;
        transform: translateY($distance / 2);
        transition: transform $duration $easeOutBack, opacity $duration;
      }

      &:hover,
      &.router-link-exact-active {
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }

        &:before {
          transition: transform $duration $easeOutBack, opacity $duration;
        }

        &:after {
          transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
        }
      }
    }
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

footer {
  text-align: center;
  margin: 50px auto;
}

@media screen and (max-width: 1450px) {

  #app {
    width: calc(100% - 2 * 50px);
    margin: 0 50px;
  }
}

@media screen and (max-width: 600px) {
  #app {
    width: calc(100% - 2 * 25px);
    margin: 0 25px;
  }

  .site-header {
    h1 {
      text-align: center;
      font-size: 8.4vw;
    }
  }
}
</style>
