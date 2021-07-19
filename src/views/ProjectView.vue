<template>
  <div class="project-view">
    <header class="splash-container">
      <div class="splash-image" :style="{backgroundImage: `url(../${project.splash})` }"></div>
      <router-link to="/projects" class="breadcrumb-link button">
        <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
        Projects
      </router-link>
      <div class="project-title">
        <h1>{{ project.name }}</h1>
      </div>
    </header>
    <div class="markdown" v-html="renderedContent"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Project} from "@/types/project";
import {loadProject} from "@/model/portfolioModel";
import md from "@/model/markdownRenderer";

export default Vue.extend({
  name: 'ProjectView',
  props: {
    projectSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    renderedContent(): string {
      return md.render(this.project.content);
    },
    project(): Project {
      return loadProject(this.projectSlug);
    }
  }
})
</script>

<style scoped lang="scss">
@import "../css/components";

.project-view {
  text-align: left;
}

.splash-container {
  position: relative;

  .breadcrumb-link {
    position: absolute;
    top: 1.5em;
  }
}

.project-title {
  position: absolute;
  bottom: 3em;
  background-color: #274B59;
  padding: .75em 10%;

  h1 {
    margin: 0;
    font-family: 'Adelle', sans-serif;
    color: #f2f2f2;
    font-size: 3em;
    font-weight: 500;
    text-transform: uppercase
  }
}

.splash-image {
  height: 450px;
  width: 90%;
  display: block;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  border-radius: 8px
}

</style>

<style lang="scss">
// Only unscoped styles are compatible with markdown-injected elements
@import "../css/markdown";

$inner-margin: 40px;

.markdown {
  margin: auto $inner-margin;

  h1, h2 {
    margin-left: -$inner-margin;
    margin-right: -$inner-margin;
  }
}

.intro {
  font-size: 1.5em;
  line-height: 1.5em;
  width: 90%;
  text-align: justify;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1em;

  p {
    margin: 0;
  }
}
</style>