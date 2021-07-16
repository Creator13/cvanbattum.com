<template>
  <div class="project-view">
    <header class="project-breadcrumbs">
      <router-link to="/projects" class="breadcrumb-link">&#60; projects</router-link>
    </header>
    <p>Here come dat project: {{ project.name }}</p>
    <div v-html="renderedDescription"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MarkdownIt from "markdown-it";
import {Project} from "@/types/project";
import {loadProject} from "@/model/portfolioModel";

const md = new MarkdownIt();

export default Vue.extend({
  name: 'ProjectView',
  props: {
    projectSlug: {
      type: Object as () => string,
      required: true
    }
  },
  computed: {
    renderedDescription(): string {
      return md.render(this.project.description);
    },
    project(): Project {
      return loadProject(this.projectSlug);
    }
  }
})
</script>

<style scoped lang="scss">
.project-view {
  text-align: left;
}
</style>