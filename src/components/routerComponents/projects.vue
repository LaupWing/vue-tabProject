<template lang="html">
  <div class="projects">
    <h2>Projects</h2>
    <div class="projects-container">

    <project-list :projects="projects" :color="color"></project-list>
    <i @click="addNewProject" v-show="!addNew" class="far fa-plus-square"></i>
    <create-project v-show="addNew" v-on:hide-add="hideAdd" v-on:add-project="addProject" v-bind:color="color"></create-project>
  </div>
  </div>
</template>

<script>
import ProjectList from './projects_Components/Projects-list.vue'
import CreateProject from './projects_Components/Create-Project.vue'
export default {
  name: 'Projects',
  props: ['color'],
  components:{
    ProjectList,
    CreateProject
  },
  data(){
    return{
      projects:[
        {
        projectname: "Project A",
        tasks:[
          {
            value:"A",
            done: false
          },
          {
            value:"B",
            done: false
          },
          {
            value:"C",
            done: true
          }]
        },
        {
        projectname: "Project B",
        tasks:[
          {
            value:"A1",
            done: false
          },
          {
            value:"B1",
            done: true
          },
          {
            value:"C1",
            done: false
          }]
        },
      ],
      addNew: false,
    }
  },
  methods:{
    addProject(project){
      this.projects.push(project)
    },
    addNewProject(){
      this.addNew = true;
    },
    hideAdd(){
      this.addNew = false;
    }
  }
}
</script>

<style lang="css" scoped>
.projects{
  text-align: center;
}
.fa-plus-square{
  margin-top: 20px;
  font-size: 50px;
  text-align: center;
  color: rgba(0,0,0,0.4);
  transition: .25s;
  cursor: pointer;
}
.fa-plus-square:hover{
  color: black;
}
.projects-container{
  /* background: yellow; */
  max-height: 55vh;
  overflow: auto;
  overflow-x: hidden;
}
</style>
