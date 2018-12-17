<template lang="html">
  <div class="container">
    <project-item :color="color" v-on:delete-project="deleteProject" v-for="project in projects" :project="project"></project-item>
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
    deleteProject(project){
      const projectIndex = this.projects.indexOf(project);
      this.projects.splice(projectIndex, 1);
      console.log(this.projects)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
