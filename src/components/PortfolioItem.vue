<template>
  <div class="card">
    <router-link :to="{name: 'project-view', params: {projectSlug: projectObject.slug}}">
      <font-awesome-icon v-if="projectObject.isFavorite" icon="crown" class="favorite-icon" title="Personal favorite"/>
      <div class="card-overlay">
        <img class="card-img" :src="projectObject.thumbnailUri" :alt="projectObject.slug"/></div>
      <div class="card-text fadeIn-bottom">
        <h3>{{ projectObject.name }} ({{ projectObject.year }})</h3>
        <h6><span>
            <template v-for="(tech, index) in projectObject.techs">
              {{ tech }}<template v-if="index < projectObject.techs.length - 1"> &bullet; </template>
            </template>
          </span></h6>
        <p v-if="projectObject.shortDescription">{{ projectObject.shortDescription }}</p>
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
@import "../css/effects";
@import "../css/colors";
@import "../css/fonts";

img {
  width: 100%;
}

a {
  padding: 0;
}

.card {
  display: block;
  //border-radius: $border-radius;
  overflow: hidden;
  box-shadow: $box-shadow;

  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;

  .favorite-icon {
    transition: $transition;
    position: absolute;
    top: 15px;
    left: 15px;
    color: $accent-main;
    z-index: 10;
    font-size: 1.2em;
  }
}

.card .card-overlay::after {
  content: '';
  background: rgba($accent-main, 1);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: $transition;
}

.card:hover {
  .favorite-icon {
    color: $text-light;
  }

  .card-overlay::after {
  opacity: 1;
}}

.card-img {
  width: 100%;
  display: block;
}

.card-text {
  color: $text-light;
  position: absolute;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5em;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: $transition;
}

.card:hover .card-text {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.card-text {
  h3 {
    font-family: "Adelle", sans-serif;
    font-size: 1.3em;
    font-weight: 700;
    letter-spacing: 0.15em;
    margin-bottom: 0.2em;
    text-transform: uppercase;
  }

  h6 {
    margin: 0;
    font-family: "Adelle", sans-serif;
    font-weight: 300;
    font-size: .85em;
  }

  p {
    line-height: 1.5em;
  }
}

.fadeIn-bottom {
  top: 20%;
}
</style>