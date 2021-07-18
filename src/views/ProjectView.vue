<template>
  <div class="project-view">
    <header class="project-breadcrumbs">
      <router-link to="/projects" class="breadcrumb-link">&#60; projects</router-link>
    </header>
    <div class="markdown" v-html="renderedDescription"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Project} from "@/types/project";
import {loadProject} from "@/model/portfolioModel";
import markdown_it from "markdown-it";

const md = markdown_it("default", {
  linkify: true,
  typographer: true
});

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
      console.log(md.render(this.project.description))
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

<style lang="scss">
@import "./../css/colors";
@import "./../css/fonts.css";

.markdown {
  font-size: 11pt;

  h1, h2, h3 {
    font-family: "Adelle", sans-serif;
    margin: 35px 0 15px;

    &:first-child {
      margin-top: 15px;
    }
  }

  h1, h2 {
    background-color: $color-text-light;
    color: $color-background;
    padding: 10px 10px 10px 15px;
    font-weight: normal;
  }

  h3 {
    font-weight: bold;
    font-size: 1.25em;
  }

  p, li {
    margin: 0;
  }

  p {
    margin-top: .65em;
  }

  li {
    margin: .35em 0;
  }

  blockquote {
    box-sizing: border-box;
    border-left: 3px solid $color-accent-main;
    padding: .5em 0 .5em 1em
  }

  pre, code {
    font-family: "JetBrains Mono", monospace;
  }

  pre {
    background-color: #eaeaea;
    padding: 1em 1.5em;
    border-radius: 8px;
    font-size: 0.938em;
  }

  code {

  }

  a {
    color: $color-accent-secondary;

    &:hover {
      color: $color-text-dark;
    }
  }

  // Temporary table styling
  table {
    color: #333;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
  }

  table thead th,
  table tfoot th {
    color: #777;
    background: rgba(0, 0, 0, .1);
  }

  table caption {
    padding: .5em;
  }

  table th,
  table td {
    padding: .5em;
    border: 1px solid lightgrey;
  }
}
</style>