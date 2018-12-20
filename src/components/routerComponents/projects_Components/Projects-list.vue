<template lang="html">
  <div class="container">
    <project-item :color="color" v-on:delete-project="alertToggle"  v-on:edit-project="editProject" v-on:complete-task="completeTask" v-on:add-task="addTask" v-for="project in projects" :project="project"></project-item>
    <alert v-show="alert" :item="name" :color="color" :always="always" v-on:answer="answer"> </alert>
  </div>
</template>

<script>
import ProjectItem from './Project-item'
import Alert from '../../Alert'

export default {
  props:['projects', 'color'],
  components:{
    ProjectItem,
    Alert
  },
  data(){
    return {
    name: "Project",
    // Alert data propertie's
    always: false,
    alert: false,
    neverShow: false,
    item: '',}
  },
  methods:{
    deleteProject(project){
      const projectIndex = this.projects.indexOf(project);
      this.projects.splice(projectIndex, 1);
      localStorage.setItem("projects", JSON.stringify(this.projects))
    },
    completeTask(){
      console.log(this.projects)
      localStorage.setItem("projects", JSON.stringify(this.projects))
    },
    addTask(){
      localStorage.setItem("projects", JSON.stringify(this.projects))
    },
    editProject(project){
      localStorage.setItem("projects", JSON.stringify(this.projects))
    },
    alertToggle(item){
      this.name = item.projectname
      console.log(item)
      this.item = item
      if(!this.neverShow){
        this.alert = true
      }else{
        this.deleteProject(this.item)
      }
    },
    answer(answer){
      if(answer === "Yes"){
        this.deleteProject(this.item)
        this.alert = false
      }else{
        this.alert = false
      }
    },
  }
}
</script>

<style lang="css" scoped>
.container{
  margin: 0 10px;
}
</style>
