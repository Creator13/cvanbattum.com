<template>
  <div class="overview">
    <masonry :cols="{default: 3, 1279: 2, 800: 1}" :gutter="30">
      <PortfolioItem v-for="project in projects" :key="project.name" :project-object="project" class="portfolio-item"/>
    </masonry>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioItem from "@/components/PortfolioItem.vue";
import {loadAllProjects} from "@/model/portfolioModel";
import {Project} from "@/types/project";
import VueMasonry from "vue-masonry-css";

Vue.use(VueMasonry);

export default Vue.extend({
  components: {PortfolioItem},
  computed: {
    projects(): Project[] {
      return loadAllProjects();
    }
  }
})
</script>

<style scoped lang="scss">
.portfolio-item {
  margin-bottom: 30px;
}
</style>
