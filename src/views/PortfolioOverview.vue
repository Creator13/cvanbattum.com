<template>
  <div class="overview">
    <masonry :cols="{default: 3, 1279: 2, 800: 1}" :gutter="30">
      <PortfolioItem v-for="project in projects" :key="project.name" :project-object="project" class="portfolio-item"/>
    </masonry>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PortfolioItem from "@/components/PortfolioItem.vue";
import projectFile from "@/assets/projects.json";
import {Project} from "@/types/project";
import VueMasonry from "vue-masonry-css";

Vue.use(VueMasonry);

@Component({
  components: {PortfolioItem},
  computed: {
    projects(): Project[] {
      return projectFile.projects;
    }
  }
})
export default class PortfolioOverview extends Vue {
}
</script>

<style scoped lang="scss">
//.overview {
//  float: left;
//}
//
//.portfolio-item {
//  width: 30%;
//  margin-right: calc((100% / 3 - 30%));
//}
</style>
