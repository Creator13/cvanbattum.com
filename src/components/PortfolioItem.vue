<template>
  <div class="card">
    <router-link :to="{name: 'project-view', params: {projectSlug: projectObject.slug}}">
      <div class="card-overlay">
        <img class="card-img" :src="projectObject.thumbnailUri" :alt="projectObject.slug"/></div>
      <div class="card-text fadeIn-bottom">
        <h3>{{ projectObject.name }}</h3>
        <p v-if="projectObject.shortDescription">{{projectObject.shortDescription}}</p>
      </div>
    </router-link>
  </div>
</template>s

<script lang="ts">
import Vue from 'vue'
import {Project} from "@/types/project";

export default Vue.extend({
  name: 'PortfolioItem',
  props: {
    projectObject: {
      type: Object as () => Project,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
@import "./../css/animations";
@import "./../css/colors";
@import "./../css/fonts.css";

img {
  width: 100%;
}

.card {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.card {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.card .card-overlay::after {
  content: '';
  background: rgba($color-accent-secondary, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: $animate;
}

.card:hover .card-overlay::after {
  opacity: 1;
}

.card-img {
  width: 100%;
  display: block;
}

.card-text {
  position: absolute;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5em;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: $animate;
}

.card:hover .card-text {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.card-text h3 {
  color: $color-background;
  font-family: "Adelle", sans-serif;
  font-size: 1.3em;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.card-text p {
  color: $color-background;
  line-height: 1.5em;
}

.fadeIn-bottom {
  top: 20%;
}
</style>