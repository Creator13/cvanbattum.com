<template>
  <div>
    <router-link :to="{name: 'project-view', params: {
      projectName: projectObject.name, projectSlug: projectObject.slug, project: projectObject}
    }">
      {{ projectObject.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PortfolioItem',
  props: ['projectObject']
})
</script>

<style scoped lang="scss">

</style>