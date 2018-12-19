<template lang="html">
  <div class="container" :style="{border: color + ' solid 2px', background: color}">
  <header v-show="editTitle" :style="{background: color}">
    <h3>
      Project-Title
    </h3>
    <input v-model="projecttitle" type="text" name="" value="">
    <button @click="addProjectTitle" type="button" name="button">Add Project</button>
  </header>

  <header v-show="!editTitle" :style="{background: color}">
    <h3>
      {{projecttitle}}
    </h3>
    <button @click="changeTitle" type="button" name="button">Change Title</button>
  </header>

  <div v-show="doneTitle" class="taskContainer">
    <div class="taskList">
      <p class="taskContent" v-for="(task, index) in tasks"><span>
        {{index}}
      </span> {{task.value}}</p>
    </div>
    <div class="addTask">
      <input class="inputTask" v-model="value" type="text" name="" value="">
      <button @click="addTask" type="button" name="button">Add Task</button>
    </div>
  </div>
  <div class="buttons">
    <button @click="hideAdd" class="cancel" type="button" name="button">Cancel</button>
    <button @click="addProject" class="confirm" type="button" name="button">Confirm</button>
  </div>
</div>

</template>

<script>
export default {
  props:['color'],
  data() {
    return {
      projecttitle: '',
      doneTitle: false,
      editTitle: true,
      value: '',
      tasks: [],
    }
  },
  methods: {
    addTask() {
      if (this.value.length > 0) {
        const task = {
          value:this.value,
          done:false
        }
        console.log(task)
        this.tasks.push(task)
        console.log(this.tasks)
        this.value = ""
      }
    },
    addProjectTitle(){
      this.doneTitle = true
      this.editTitle = false
    },
    changeTitle(){
      this.editTitle = true
    },
    hideAdd(){
      this.$emit('hide-add')
    },
    addProject(){
      const project = {
        projectname: this.projecttitle,
        tasks: this.tasks
      }
      this.$emit('add-project', project)
      this.projecttitle = ""
      this.value= ""
      this.tasks=[]
      this.doneTitle= false
      this.editTitle= true
      this.hideAdd()
    }
  }
}
</script>

<style lang="css" scoped>
header{
  padding: 10px;
  color: white;
  text-align: left;
  display: flex;
  align-items: center;
}
header input{
  width: 60%;
}
span{
  font-weight: 600;
}
.addTask{
  padding: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
}
input{
  height: 31px;
  outline: none;
  border: black solid 1px;
  border-right: none;
  margin: 0;
}
input.inputTask{
  width: 80%;
}
button{
  margin: 0;
}
h3{
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
}
.container{
  margin: 20px 10px;
  padding: 10px;
}
.taskList{
  margin: 0 5px;
}
.taskContent{
  border-bottom: rgba(0,0,0,.3) solid 1px;
  text-align: left;
  padding: 10px;
  margin: 0;
  background: white;
}
.buttons{
  margin: 10px;
}
.buttons button{
  background: rgba(0,0,0,.2);
  border-radius: 20px;
}
.cancel:hover{
  background: #F53240;
  border-color: rgba(0,0,0,.1);
}
.confirm:hover{
  background: #8FC33A;
  border-color: rgba(0,0,0,.1);
}
</style>
