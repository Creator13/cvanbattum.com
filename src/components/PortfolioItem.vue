<template>
  <div>
    <router-link :to="{name: 'project-view', params: {projectSlug: projectObject.slug}}">
      <img :src="projectObject.thumb" :alt="projectObject.slug"/>
      {{ projectObject.name }}
    </router-link>
  </div>
</template>s

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PortfolioItem',
  props: ['projectObject']
})
</script>

<style scoped lang="scss">
a {
 width: 100%;
}

a img {
  width: 100%;
}
</style>