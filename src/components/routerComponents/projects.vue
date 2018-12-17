<template lang="html">
  <div class="projects">
    <h2 @click="test">Projects</h2>
    <project-list :projects="projects" :color="color"></project-list>
    <i class="far fa-plus-square"></i>
  </div>
</template>

<script>
import ProjectList from './projects_Components/Projects-list.vue'
export default {
  name: 'Projects',
  props: ['color'],
  components:{
    ProjectList,
  },
  data(){
    return{
      projects:[
        {
        projectname: "Project A",
        tasks:["A", "B", "C"]
        },
        {
        projectname: "Project B",
        tasks:["A1", "B1", "C1"]
        },
      ]
    }
  },
  methods:{
    test(){
      console.log(this.projects)
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
</style>
