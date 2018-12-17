<template lang="html">
  <div class="container">
    <project-item :color="color" v-for="project in projects" :project="project"></project-item>
  </div>
</template>

<script>
import ProjectItem from './Project-item'

export default {
  props:['projects', 'color'],
  components:{
    ProjectItem,
  },
  methods:{
  }
}
</script>

<style lang="css" scoped>
</style>
