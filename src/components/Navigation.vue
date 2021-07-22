<template>
  <nav id="nav">
    <router-link to="/">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <!--        <router-link to="/photos">Photography</router-link>-->
    <!--        <router-link to="/contact">Contact</router-link>-->
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  props: ["layout"]
})
</script>

<style scoped lang="scss">

</style>