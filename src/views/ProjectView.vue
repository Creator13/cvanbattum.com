<template>
  <div class="project-view">
    <header class="project-breadcrumbs">
      <router-link to="/projects" class="breadcrumb-link button"><font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/> Back to projects</router-link>
    </header>
    <div class="markdown" v-html="renderedDescription"></div>
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
@import "../css/components";

.project-view {
  text-align: left;
}
</style>

<style lang="scss">
@import "../css/markdown";
</style>