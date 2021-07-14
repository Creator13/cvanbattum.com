<template>
  <div class="home">
    Here come dat portfolio
    <PortfolioItem v-for="project in projects" :key="project.name" :project-object="project"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioItem from "@/components/PortfolioItem.vue";
import projectFile from "@/assets/projects.json";
import {Project} from "@/types/project";

@Component({
  components: {PortfolioItem},
  computed: {
    projects(): Project[] {
      return projectFile.projects;
    }
  }
})
export default class PortfolioOverview extends Vue {}
</script>
