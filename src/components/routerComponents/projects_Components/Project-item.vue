<template lang="html">
  <div class="project-item">

    <!-- Stil needs some cleaning here -->
    <header v-if="!edit" :class="{roundedBorders : show === true}" :style="{background: color}">
      <div class="upperheader">
        <i @click="removeProject(project)" class="fas fa-trash"></i>
        <h3>
          {{project.projectname}}
        </h3>
        <div class="buttons">
          <i @click="toggleEdit" v-if="show" class="fas fa-edit enable"></i>
          <i v-if="!show" class="fas fa-edit disable"></i>
          <i v-bind:class="['far fa-arrow-alt-circle-down', (show === false) ? 'rotate' : '']" @click="showTasks"></i>
        </div>
      </div>
      <div v-bind:class="['lowerheader', (show === false) ? 'hidden' : '']">
        <div class="progressBar">
          <div class="progress">
          </div>
        </div>
      </div>
    </header>

    <header v-if="edit" :class="{roundedBorders : show === true}" :style="{background: color}">
      <!-- <i @click="removeProject(project)" class="fas fa-trash"></i> -->
      <h3>
        <input type="text" name="" v-model="project.projectname">
      </h3>
        <i @click="editProject" class="fas fa-check-square"></i>
    </header>

    <div v-if="!edit" class="tasks-container">
    <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
      <div v-for="(task, index) in project.tasks" v-bind:class="['task', (task.done === true) ? 'completed' : '']">
        <p :style="{color: color}" class="indexTask">
          {{index}}
        </p>
        <p class="taskContent">
          {{task.value}}
        </p>
        <i @click="completeTask(task)" class="fas fa-check"></i>
      </div>

    </div>
    </div>

    <div v-if="edit" class="tasks-container">
      <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
        <div class="task" v-for="(task, index) in project.tasks">
          <p :style="{color: color}" class="indexTask">
            {{index}}
          </p>
          <p class="taskContent">
            <input type="text" v-model="task.value">
          </p>
        </div>
      </div>
      <div class="addTaskContainer">
        <input v-model="newTask" type="text" name="" value="">
        <button @click="addTask" class="addTask" type="button" name="button">Add New Task</button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: ['project', 'color'],
  data() {
    return {
      show: false,
      edit: false,
      newTask: ""
    }
  },
  methods: {
    showTasks() {
      this.show = !this.show
    },
    removeProject(project) {
      this.$emit('delete-project', project)
    },
    toggleEdit() {
      this.edit = !this.edit
    },
    editProject() {
      console.log(this.project)
      this.toggleEdit()
    },
    progression(){
      const progress = this.$el.querySelector('.progress')
      const max = this.project.tasks.length
      console.log("go")
      let done=0;
      this.project.tasks.forEach(function(task){
        if(task.done===true){
          done++
        }
      })
      let sum = this.calculatePercentage(max,done)
      progress.style.width = `${sum}%`
    },
    calculatePercentage(max, done){
      let sum = (done/max)*100
      return sum
    },
    completeTask(task){
      const taskIndex = this.project.tasks.indexOf(task);
      this.project.tasks[taskIndex].done = true;
      this.$emit('complete-task', task)
      this.progression()
    },
    test(task){
      console.log(task)
    },
    addTask(){
      if(this.newTask.length >0){
        console.log(this.project.tasks)
        this.project.tasks.push(
          {
          value:this.newTask,
          done:false
          })
        this.newTask = ""
      }else{
        console.log("ne")
      }
    }
  },
  mounted(){
    this.progression()
  }
}
</script>

<style lang="css" scoped>
.disable{
  opacity: 0;
  cursor: default!important;
}
.project-item{
  text-align: left;
}
.removeHeight{
  background: orange;
}
input{
  background: rgba(255,255,255,.6);
  border: none;
  padding: 5px 10px;
  transition: .25s;
  outline: none;
  width: 400px;
}
.tasks.hide{
  /* Door max height te gebruiken kan er wel een transition plaatsgevonden worden */
  /* Grappig want ik probeerde het eerst met tranform een dropdown transitie te maken maar dat er waren wat bugs */
  /* en toen kwam ik erachter dat je maxheight moest gebruiken */
  /* Maar door beide te gebruiken ziet het er best sick uit nog! */
  transform: translate(0,-100%);
  max-height: 0;
}
.roundedBorders{
  border-radius: 10px 10px 0 0;
}
.rotate{
  transform: rotate(0)!important;
}
header{
  margin: 0;
  margin-top: 20px;
  padding: 15px;
  color: white;
  transition: all .25s;
  position: relative;
  /* display: flex; */
}
.upperheader{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lowerheader{
  max-height: 50px;
  transition: 1s;
  overflow: hidden;
}
.hidden{
  max-height: 0;
}
.buttons{
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
}

.addTaskContainer{
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addTaskContainer input{
  /* background: orange; */
  border: rgba(0,0,0,.35) solid 1px;
  border-right: none;
  height: 31px;
}
.addTask{
  /* margin: 10px auto; */
  /* display: block; */
  border-radius:0 5px 5px 0;
  border-color: rgba(0,0,0,.2)
}
.addTask:hover{
  background: rgba(0,0,0,.5)
}
.fa-arrow-alt-circle-down, .fa-edit, .fa-check-square{
  font-size: 25px;
  transition: .25s;
  cursor: pointer;
}
.fa-arrow-alt-circle-down{
  transform: rotate(180deg);
}
.fa-edit{
  font-size: 22px;
  transition: .5s;
}
.fa-trash{
  position: absolute;
  left: -30px;
  color: rgba(0,0,0,.15);
  font-size: 20px;
  transition: .25s;
  cursor: pointer;
}
.fa-check{
  position: absolute;
  right: 10px;
  color: rgba(0,0,0,.3);
  cursor: pointer;
  transition: .25s;
}
.fa-check:hover{
  color: rgba(0,0,0,1)
}
input:hover, input:focus{
  background: white;
  /* border: rgba(0,0,0,.1) solid 1px; */
}
.fa-trash:hover{
  color: red;
  opacity: .8;
}
.fa-check-square:hover{
  color: lightblue;
}
.fa-arrow-alt-circle-down:hover, .fa-edit.enable:hover{
  opacity: .6;
}
.tasks{
  overflow: hidden;
  transition: all 1s;
  /* background: orange; */
  max-height: 300px;
}
.task{
  border-bottom: solid rgba(0,0,0,.2) 1px;
  border-right: solid rgba(0,0,0,.2) 1px;
  display: flex;
  color: rgba(0,0,0,.7);
  align-items: center;
  /* background: rgba(0,0,0,.1); */
  position: relative;
}

.completed{
  background: rgba(0,0,0,.2);
  opacity: .3;
}

.tasks-container{
  overflow: hidden;
}
.indexTask{
  width: 10%;
  max-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: rgba(0,0,0,.2) solid 1px;
  border-bottom: none;
  border-top: none;
  margin: 0;
  padding: 10px;
  font-weight: 800;
}
.taskContent{
  margin: 0;
  margin-left: 20px;
}
.task:last-of-type{
  /* border: none; */
}
.progressBar{
  width: 200px;
  height: 20px;
  background: white;
  margin: auto;
}
.progress{
  background: orange;
  height: 100%;
  width: 20%;
  transition: .25s;
}
h3{
  margin: 0;
}

</style>
