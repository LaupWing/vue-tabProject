<template lang="html">
  <div class="container" :style="{border: color + ' solid 2px', background: color}">
  <header :style="{background: color}">
    <h3>
      Project-Title
    </h3>
    <input v-model="projecttitle" type="text" name="" value="">
    <button type="button" name="button">Add Project</button>
  </header>
  <div class="taskList">
    <p class="taskContent" v-for="task in tasks">{{task}}</p>
  </div>
  <div class="addTask">
    <input class="inputTask" v-model="value" type="text" name="" value="">
    <button @click="addTask" type="button" name="button">Add Task</button>
  </div>
</div>

</template>

<script>
export default {
  props:['color'],
  data() {
    return {
      projecttitle: '',
      value: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.value.length > 0) {
        this.tasks.push(this.value)
        console.log(this.tasks)
        this.value = ""
      }
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
  margin-bottom: 20px;
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
</style>
