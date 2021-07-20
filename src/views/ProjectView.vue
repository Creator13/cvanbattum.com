<template>
  <div class="project-view">
    <header class="splash-container">
      <div class="splash-image" :style="{backgroundImage: `url(../${project.splash})` }"></div>
      <router-link to="/projects" class="breadcrumb-link button">
        <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
        Projects
      </router-link>
      <div class="project-title">
        <h1>{{ project.name }}</h1>
        <h5>{{ project.year }} |
          <span>
            <template v-for="(tech, index) in project.techs">
              {{ tech }}<template v-if="index < project.techs.length - 1"> &bullet; </template>
            </template>
          </span>
        </h5>
      </div>
    </header>
    <div class="markdown" v-html="renderedContent"></div>
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
    renderedContent(): string {
      return md.render(this.project.content);
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

.splash-container {
  position: relative;

  .breadcrumb-link {
    position: absolute;
    top: 1.5em;
  }
}

.project-title {
  position: absolute;
  bottom: 3em;
  background-color: $text-light;
  padding: .75em 10%;

  h1, h5 {
    margin: 0;
    font-family: 'Adelle', sans-serif;
    font-weight: 500;
  }

  h1 {
    color: $background;
    font-size: 3em;
    text-transform: uppercase
  }

  h5 {
    color: mix($text-light, $background, 15);
    font-size: 1.5em;

    span {
      color: mix($text-light, $background, 35);
      font-size: .8em;
    }
  }
}

.splash-image {
  height: 450px;
  width: 90%;
  display: block;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  border-radius: 8px
}

@media screen and (max-width: 1070px) {
  .project-title {
    right: 0;
    left: 0;
    bottom: 1.5em;

    h1 {
      padding: 0;
    }
  }


}
@media screen and (max-width: 600px) {
  .splash-image {
    height: 400px;
  }
}

</style>

<style lang="scss">
// Only unscoped styles are compatible with markdown-injected elements
@import "../css/markdown";

$inner-margin: 40px;

.markdown {
  margin: auto $inner-margin;

  h1, h2 {
    margin-left: -$inner-margin;
    margin-right: -$inner-margin;
  }
}

.intro {
  font-size: 1.5em;
  line-height: 1.5em;
  width: 90%;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1em;

  p {
    margin: 0;
  }
}

@media screen and (max-width: 1070px) {
  .markdown {
    $width: .95;

    img {
      width: percentage($width);
    }

    .video-wrapper {
      width: percentage($width);
      padding-bottom: 56.2% * $width;
    }
  }
}

@media screen and (max-width: 600px) {
  $inner-margin: 10px;

  .markdown {
    margin: auto $inner-margin;

    h1, h2 {
      margin-left: -$inner-margin;
      margin-right: -$inner-margin;
    }

    .intro {
      width: 100%;
    }
  }
}
</style>