<template>
  <div class="project-view">
    <header class="project-breadcrumbs">
      <a @click="$router.go(-1)" class="breadcrumb-link">&#60; projects</a>
    </header>
    <p>Here come dat project: {{ project.name }}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
    <p>{{project.description}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Project} from "@/types/project";

export default Vue.extend({
  name: 'ProjectView',
  props: {
    project: {
      type: Object as () => Project,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.project-view {
  text-align: left;
}
</style>