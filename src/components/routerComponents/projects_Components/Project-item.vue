<template lang="html">
  <div class="project-item">
    <header :style="{background: color}">
      <h3 @click="showTasks">
        {{project.projectname}}
      </h3>
    </header>
    <div v-bind:class="['tasks', (show === false) ? 'hide' : '']">
      <p v-for="(task, index) in project.tasks">{{index}}, {{task}}</p>
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
  height: 0;
}
header{
  margin: 0;
  margin-top: 20px;
  padding: 15px;
  color: white;
  border-radius: 20px 20px 0 0;
}
.tasks{
  transition: 1s;
  background: orange;
  overflow: hidden;
}
h3{
  margin: 0;
}

</style>
