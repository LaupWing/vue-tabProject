<template lang="html">
  <div class="project-item">
    <header :class="{roundedBorders : show === true}" :style="{background: color}">
      <h3>
        {{project.projectname}}
      </h3>
      <i v-bind:class="['far fa-arrow-alt-circle-down', (show === false) ? 'rotate' : '']" @click="showTasks"></i>
    </header>
    <div class="tasks-container">
    <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
      <div class="task" v-for="(task, index) in project.tasks">
        <p :style="{color: color}" class="indexTask">
          {{index}}
        </p>
        <p class="taskContent">
          {{task}}
        </p>
      </div>
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
    }
  },
  methods: {
    showTasks() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="css" scoped>
.project-item{
  text-align: left;
}
.hide{
  transform: translate(0,-100%);
  height: 0;
  /* opacity: 0; */
  /* width: 0; */
}
.roundedBorders{
  border-radius: 20px 20px 0 0;
}
.rotate{
  transform: rotate(0);
}
header{
  margin: 0;
  margin-top: 20px;
  padding: 15px;
  color: white;
  transition: all .25s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
header i{
  font-size: 25px;
  transition: .25s;
  cursor: pointer;
  transform: rotate(180deg);
}
header i:hover{
  opacity: .6;
}
.tasks{
  overflow: hidden;
  transition: all 1s;
  /* background: orange; */
  /* transform: translate(0,0); */
}
.task{
  border-bottom: solid rgba(0,0,0,.2) 1px;
  display: flex;
  color: rgba(0,0,0,.7);
  align-items: center;
  background: rgba(0,0,0,.1)
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
  border: none;
}
h3{
  margin: 0;
}

</style>
